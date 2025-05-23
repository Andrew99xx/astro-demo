import { useCallback, useEffect, useRef, useState } from "react";
import assets from "../../json/assets";
import "../../styles/global.scss";
import PhoneVibration from "../ui/Icons/PhoneVibration";
import MegaMenu, { locationsData } from "../MegaMenu/MegaMenu";
import type { IFenceTypesQuery } from "../../graphql/generatedType/FenceTypeResponseTypes";
import type { IFenceServicesSidebarQuery } from "../../graphql/generatedType/FenceServiceTypes";
import {
  fenceServicesData,
  locationBasedFenceServicesData,
} from "../WhyUs/WhyUs";
import { CloudfrontImg } from "../ui/CloudfrontImg";
import { slugify } from "../../lib/utils";

const CommonListFenceType = ({ listData }: { listData: IFenceTypesQuery }) => {
  return (
    <ul className=" min-w-[220px] px-6 bg-white inr_wrap">
      {listData?.allFenceTypesCategory?.edges.length &&
        listData?.allFenceTypesCategory?.edges?.map((item) => (
          <li key={item?.node?.name}>
            <a
              className=" font-montserratmedium inline-flex w-full py-4 leading-[1.5] text-xs uppercase text-[#252525] border-b border-[rgba(0,0,0,.1)] hover:text-primary hover:after:opacity-100 relative after:w-[0.25rem] after:h-full after:-left-6 after:top-0 after:absolute after:bg-primary after:opacity-0 after:transition-all after:duration-500 after:ease-in-out"
              href={`/fence-types/${item?.node?.slug}`}
            >
              {item?.node?.name}
            </a>
          </li>
        ))}
    </ul>
  );
};

const CommonListTypeFenceService = ({
  listData,
}: {
  listData: IFenceServicesSidebarQuery;
}) => {
  return (
    <ul className=" min-w-[220px] px-6 bg-white inr_wrap">
      {listData?.allFenceServices?.edges.length &&
        listData?.allFenceServices?.edges?.map((item) => (
          <li key={item?.node?.title}>
            <a
              className="font-montserratmedium   inline-flex w-full py-4 leading-[1.5] text-xs uppercase text-[#252525] border-b border-[rgba(0,0,0,.1)] hover:text-primary hover:after:opacity-100 relative after:w-[0.25rem] after:h-full after:-left-6 after:top-0 after:absolute after:bg-primary after:opacity-0 after:transition-all after:duration-500 after:ease-in-out"
              href={`/fence-services/${item?.node?.slug}`}
            >
              {item?.node?.title}
            </a>
          </li>
        ))}
    </ul>
  );
};

const CommonListTypeAbout = ({
  listData,
  locationBasedSlug,
}: {
  listData: IFenceServicesSidebarQuery;
  locationBasedSlug: string;
}) => {
  return (
    <ul className=" min-w-[220px] px-6 bg-white inr_wrap">
      {listData?.allFenceServices?.edges.length &&
        listData?.allFenceServices?.edges?.map((item) => (
          <li key={item?.node?.title}>
            <a
              className="font-montserratmedium inline-flex w-full py-4 leading-[1.5] text-xs uppercase text-[#252525] border-b border-[rgba(0,0,0,.1)] hover:text-primary hover:after:opacity-100 relative after:w-[0.25rem] after:h-full after:-left-6 after:top-0 after:absolute after:bg-primary after:opacity-0 after:transition-all after:duration-500 after:ease-in-out"
              href={
                item?.node?.slug === "fence-company-reviews"
                  ? locationBasedSlug
                    ? `/${locationBasedSlug}/${item.node.slug}`
                    : `/${item.node.slug}`
                  : item?.node?.slug === "why-superior-fence-rail"
                  ? `/about-us/${item.node.slug}`
                  : locationBasedSlug
                  ? `/${locationBasedSlug}/${item.node.slug}`
                  : `/about-us/${item.node.slug}`
              }
            >
              {item?.node?.title}
            </a>
          </li>
        ))}
    </ul>
  );
};

const CommonListTypeContactUs = ({
  listData,
  locationBasedSlug,
}: {
  listData: IContactUsProps[];
  locationBasedSlug: string;
}) => {
  return (
    <ul className=" min-w-[220px] px-6 bg-white inr_wrap">
      {listData?.length &&
        listData?.map((item) => (
          <li key={item?.name}>
            <a
              className="font-montserratmedium   inline-flex w-full py-4 leading-[1.5] text-xs uppercase text-[#252525] border-b border-[rgba(0,0,0,.1)] hover:text-primary hover:after:opacity-100 relative after:w-[0.25rem] after:h-full after:-left-6 after:top-0 after:absolute after:bg-primary after:opacity-0 after:transition-all after:duration-500 after:ease-in-out"
              href={
                locationBasedSlug !== ""
                  ? `/${locationBasedSlug}/${item?.slug}`
                  : `${item?.slug}`
              }
            >
              {item?.name}
            </a>
          </li>
        ))}
    </ul>
  );
};

interface IContactUsProps {
  name: string;
  slug: string;
}

const contactUsListData: IContactUsProps[] = [
  {
    name: "REQUEST AN ESTIMATE",
    slug: "/request-an-estimate",
  },
  {
    name: "FENCE FRANCHISE INFORMATION",
    slug: "https://fencefranchise.superiorfenceandrail.com/",
  },
];
const locatioBasedContactUsListData: IContactUsProps[] = [
  {
    name: "FENCE FINANCING",
    slug: "fence-financing",
  },
  {
    name: "EMPLOYMENT",
    slug: "employment",
  },
];

const CustomNavItems = ({
  leftValue,
  parentWidth,
  fenceType,
  fenceServiceList,
  locationBasedSlug,
}: {
  leftValue: number;
  parentWidth: number;
  fenceType: IFenceTypesQuery;
  fenceServiceList: IFenceServicesSidebarQuery;
  locationBasedSlug: string;
}) => {
  const navItems = [
    {
      name: "Locations",
      subMenu: <MegaMenu />,
      url: "/fence-service-locations",
    },
    {
      name: "Fence Types",
      subMenu: <CommonListFenceType listData={fenceType} />,
      url: "/fence-types",
    },
    {
      name: "Fence Services",
      subMenu: <CommonListTypeFenceService listData={fenceServiceList} />,
      url: "/fence-services",
    },
    {
      name: "About",
      subMenu: (
        <CommonListTypeAbout
          listData={fenceServicesData}
          locationBasedSlug={locationBasedSlug}
        />
      ),
      url: locationBasedSlug ? `/${locationBasedSlug}/about-us` : "/about-us",
    },
    {
      name: "Contact Us",
      subMenu: (
        <CommonListTypeContactUs
          listData={contactUsListData}
          locationBasedSlug={locationBasedSlug}
        />
      ),
      url: locationBasedSlug
        ? `/${locationBasedSlug}/contact-us`
        : "/contact-us",
    },
  ];
  const locationNavItems = [
    {
      name: "Service Areas",
      url: `/${locationBasedSlug}/#service-areas`,
    },
    {
      name: "Fence Types",
      subMenu: <CommonListFenceType listData={fenceType} />,
      url: "/fence-types",
    },
    {
      name: "Fence Services",
      subMenu: <CommonListTypeFenceService listData={fenceServiceList} />,
      url: "/fence-services",
    },
    {
      name: "About",
      subMenu: (
        <CommonListTypeAbout
          listData={locationBasedFenceServicesData}
          locationBasedSlug={locationBasedSlug}
        />
      ),
      url: locationBasedSlug ? `/${locationBasedSlug}/about-us` : "/about-us",
    },
    {
      name: "Contact Us",
      subMenu: (
        <CommonListTypeContactUs
          listData={locatioBasedContactUsListData}
          locationBasedSlug={locationBasedSlug}
        />
      ),
      url: locationBasedSlug
        ? `/${locationBasedSlug}/contact-us`
        : "/contact-us",
    },
  ];

  const [isActive, setIsActive] = useState<number | null>(null);

  const [subParentPosition, setSubParentPosition] = useState<number | null>(
    null
  );
  const [isLocationPage, setisLocationPage] = useState<boolean>(false);
  const elementRef = useRef(null);

  const getHeaderClientPositions = () => {
    const rect = elementRef.current.getBoundingClientRect();
    if (rect) {
      setSubParentPosition(rect.left);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getHeaderClientPositions();
    }, 1000);

    window.addEventListener("resize", getHeaderClientPositions);

    const currentPage = window.location.pathname.toLowerCase();

    locationsData.flatMap((group) =>
      group.subHeads.flatMap((state) =>
        state.subHeadData.filter((city) => {
          currentPage.includes(`/${slugify(city.subHeadLink.toLowerCase())}`) &&
            setisLocationPage(true);
        })
      )
    );

    return () => {
      window.removeEventListener("resize", getHeaderClientPositions);
    };
  }, []);

  if (typeof window !== "undefined")
    return (
      <ul className="flex items-center ml-auto ">
        {isLocationPage
          ? locationNavItems.map((item, index: number) => (
              <li
                className={`flex h-[90px] items-center relative ${
                  window.location.pathname.includes(item?.url)
                    ? " after:w-[calc(100%-50px)] after:h-1 after:bg-[#9c4e42] after:left-0 after:bottom-0 after:absolute after:transition-all after:duration-500 after:ease-in-out"
                    : ""
                } `}
                key={index + 1}
                onMouseEnter={() => setIsActive(index)}
                onMouseLeave={() => setIsActive(null)}
                ref={index === 0 ? elementRef : null}
              >
                <a
                  href={item?.url}
                  className="uppercase text-[13px] font-montserratmedium text-headingPrimary"
                  key={index}
                >
                  {item?.name}
                </a>
                <div
                  style={{
                    left:
                      index === 0
                        ? `-${subParentPosition - leftValue}px`
                        : "0px",
                    minWidth: index === 0 ? `${parentWidth}px` : "auto",
                  }}
                  className={`font-montserratmedium  block absolute  top-[100%] z-20 transition-all   duration-500 ease-in-out ${
                    isActive === index
                      ? "opacity-100 pointer-events-auto translate-y-0"
                      : "opacity-0 pointer-events-none translate-y-4"
                  }`}
                >
                  {item?.subMenu}
                </div>
                {index !== navItems?.length - 1 && (
                  <span className="text-[13px] px-[23px] font-montserratregular text-headingPrimary opacity-40">
                    /
                  </span>
                )}
              </li>
            ))
          : navItems.map((item, index: number) => (
              <li
                className={`flex h-[90px] items-center relative ${
                  window.location.pathname.includes(item?.url)
                    ? " after:w-[calc(100%-50px)] after:h-1 after:bg-[#9c4e42] after:left-0 after:bottom-0 after:absolute after:transition-all after:duration-500 after:ease-in-out"
                    : ""
                } `}
                key={index + 1}
                onMouseEnter={() => setIsActive(index)}
                onMouseLeave={() => setIsActive(null)}
                ref={index === 0 ? elementRef : null}
              >
                <a
                  href={item?.url}
                  className="uppercase text-[13px] font-montserratmedium text-headingPrimary"
                  key={index}
                >
                  {item?.name}
                </a>
                <div
                  style={{
                    left:
                      index === 0
                        ? `-${subParentPosition - leftValue}px`
                        : "0px",
                    minWidth: index === 0 ? `${parentWidth}px` : "auto",
                  }}
                  className={`font-montserratmedium  block absolute  top-[100%] z-20 transition-all   duration-500 ease-in-out ${
                    isActive === index
                      ? "opacity-100 pointer-events-auto translate-y-0"
                      : "opacity-0 pointer-events-none translate-y-4"
                  }`}
                >
                  {item?.subMenu}
                </div>
                {index !== navItems?.length - 1 && (
                  <span className="text-[13px] px-[23px] font-montserratregular text-headingPrimary opacity-40">
                    /
                  </span>
                )}
              </li>
            ))}
      </ul>
    );
};

export const quoteLink = "/request-an-estimate";

const Header = ({
  headerLogo,
  fenceType,
  fenceServiceList,
  locationBasedSlug,
}: {
  headerLogo: string;
  fenceType: IFenceTypesQuery;
  fenceServiceList: IFenceServicesSidebarQuery;
  locationBasedSlug?: string;
}) => {
  const [mainHeadPosition, setMainHeadPosition] = useState({
    left: null,
    width: null,
  });

  const elementRef = useRef(null);
  const [scroll, setScroll] = useState(false);

  const detectScroll = useCallback(() => {
    setScroll(window.scrollY > 450);
  }, []);

  const getHeaderClientPositions = () => {
    const rect = elementRef.current.getBoundingClientRect();
    if (rect) {
      setMainHeadPosition({
        left: rect.left,
        width: rect.width,
      });
    }
  };

  useEffect(() => {
    getHeaderClientPositions();
    window.addEventListener("resize", getHeaderClientPositions);
    return () => {
      window.removeEventListener("resize", getHeaderClientPositions);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", detectScroll);
    return () => {
      window.removeEventListener("scroll", detectScroll);
    };
  }, []);
  return (
    <div
      className={`w-full ${
        scroll ? "fixed" : "absolute"
      }  top-0 left-[50%] translate-x-[-50%] bg-transparent z-[1002] main_head`}
    >
      <div className="container">
        <div
          className=" shadow-[0_0_10px_0_rgba(0,0,0,0.5)]  bg-white relative "
          ref={elementRef}
        >
          <div className="bg-[#0000001a] px-10 pb-[8px] pt-[12px] gap-2 text-end ">
            <a
              href="tel:2054313160"
              className="inline-flex items-center hover:text-primary text-[12px] font-montserratregular text-headingPrimary"
            >
              <i className=" flex items-center justify-center mr-2">
                <PhoneVibration IconColor="currentcolor" />
              </i>{" "}
              Call (205) 431-3160 today for a quality built fence!
            </a>
          </div>
          <div className="px-10 flex items-center justify-between">
            <a className="py-[10px]" href="/">
              <CloudfrontImg
                src={headerLogo ?? assets?.logo}
                alt="Superior Fence & Rail,Inc."
                width={215}
                height={70}
              />
            </a>
            <CustomNavItems
              leftValue={mainHeadPosition?.left}
              parentWidth={mainHeadPosition?.width}
              fenceType={fenceType}
              fenceServiceList={fenceServiceList}
              locationBasedSlug={locationBasedSlug}
            />

            <div className="relative overflow-hidden ml-[25px]">
              <a
                href={quoteLink}
                className="text-[#fff] h-[50px] w-[179px] text-[12px] shineEffect font-montserratextrabold uppercase font-extrabold bg-[#00b921] tracking-[1px] border border-solid border-[#707070] flex items-center justify-center"
              >
                Get Free Quote!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
