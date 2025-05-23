import { useCallback, useEffect, useRef, useState } from "react";
import assets from "../../../json/assets";
import "../../../styles/global.scss";
import PhoneVibration from "../../ui/Icons/PhoneVibration";
import MegaMenu, { locationsData } from "../../MegaMenu/MegaMenu";
import type { IFenceTypesQuery } from "../../../graphql/generatedType/FenceTypeResponseTypes";
import type { IFenceServicesSidebarQuery } from "../../../graphql/generatedType/FenceServiceTypes";
import {
  fenceServicesData,
  locationBasedFenceServicesData,
} from "../../WhyUs/WhyUs";
import { CloudfrontImg } from "../../ui/CloudfrontImg";
import { slugify } from "../../../lib/utils";
import { Button } from "../../ui/button";
import MenuIcon from "../../ui/Icons/MenuIcon";
import CustomHambargarMenu from "../CustomHambargarMenu/CustomHambargarMenu";

export const CommonListFenceType = ({
  listData,
}: {
  listData: IFenceTypesQuery;
}) => {
  return (
    <ul className="min-w-[220px] lg:min-w-auto px-6 lg:p-0  bg-white inr_wrap ">
      {listData?.allFenceTypesCategory?.edges.length &&
        listData?.allFenceTypesCategory?.edges?.map((item) => (
          <li key={item?.node?.name} className="lg:pb-4">
            <a
              className=" font-montserratmedium inline-flex w-full py-4  lg:py-0 leading-[1.5] text-xs uppercase text-[#252525] border-b border-[rgba(0,0,0,.1)] lg:border-none hover:text-primary hover:after:opacity-100 relative after:w-[0.25rem] after:h-full after:-left-6 after:top-0 after:absolute after:bg-primary after:opacity-0 after:transition-all after:duration-500 after:ease-in-out"
              href={`/fence-types/${item?.node?.slug}`}
            >
              {item?.node?.name}
            </a>
          </li>
        ))}
    </ul>
  );
};

export const CommonListTypeFenceService = ({
  listData,
}: {
  listData: IFenceServicesSidebarQuery;
}) => {
  return (
    <ul className="min-w-[220px] lg:min-w-auto px-6 lg:p-0  bg-white inr_wrap">
      {listData?.allFenceServices?.edges.length &&
        listData?.allFenceServices?.edges?.map((item) => (
          <li key={item?.node?.title} className="lg:pb-3">
            <a
              className=" font-montserratmedium inline-flex w-full py-4  lg:py-0 leading-[1.5] text-xs uppercase text-[#252525] border-b border-[rgba(0,0,0,.1)] lg:border-none hover:text-primary hover:after:opacity-100 relative after:w-[0.25rem] after:h-full after:-left-6 after:top-0 after:absolute after:bg-primary after:opacity-0 after:transition-all after:duration-500 after:ease-in-out"
              href={`/fence-services/${item?.node?.slug}`}
            >
              {item?.node?.title}
            </a>
          </li>
        ))}
    </ul>
  );
};

export const CommonListTypeAbout = ({
  listData,
  locationBasedSlug,
}: {
  listData: IFenceServicesSidebarQuery;
  locationBasedSlug: string;
}) => {
  return (
    <ul className="min-w-[220px] lg:min-w-auto px-6 lg:p-0  bg-white inr_wrap ">
      {listData?.allFenceServices?.edges.length &&
        listData?.allFenceServices?.edges?.map((item) => (
          <li key={item?.node?.title} className="lg:pb-3">
            <a
              className=" font-montserratmedium inline-flex w-full py-4  lg:py-0 leading-[1.5] text-xs uppercase text-[#252525] border-b border-[rgba(0,0,0,.1)] lg:border-none hover:text-primary hover:after:opacity-100 relative after:w-[0.25rem] after:h-full after:-left-6 after:top-0 after:absolute after:bg-primary after:opacity-0 after:transition-all after:duration-500 after:ease-in-out"
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

export const CommonListTypeContactUs = ({
  listData,
  locationBasedSlug,
}: {
  listData: IContactUsProps[];
  locationBasedSlug: string;
}) => {
  return (
    <ul className="min-w-[220px] lg:min-w-auto px-6 lg:p-0  bg-white inr_wrap ">
      {listData?.length &&
        listData?.map((item) => (
          <li key={item?.name} className="lg:pb-3">
            <a
              className=" font-montserratmedium inline-flex w-full py-4  lg:py-0 leading-[1.5] text-xs uppercase text-[#252525] border-b border-[rgba(0,0,0,.1)] lg:border-none hover:text-primary hover:after:opacity-100 relative after:w-[0.25rem] after:h-full after:-left-6 after:top-0 after:absolute after:bg-primary after:opacity-0 after:transition-all after:duration-500 after:ease-in-out"
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

export interface IContactUsProps {
  name: string;
  slug: string;
}

export const contactUsListData: IContactUsProps[] = [
  {
    name: "REQUEST AN ESTIMATE",
    slug: "request-an-estimate",
  },
  {
    name: "FENCE FRANCHISE INFORMATION",
    slug: "https://fencefranchise.superiorfenceandrail.com/",
  },
];
export const locatioBasedContactUsListData: IContactUsProps[] = [
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
      <ul className="flex items-center -mx-[18px] ">
        {isLocationPage
          ? locationNavItems.map((item, index: number) => (
              <li
                className={`flex h-[90px] items-center relative  px-[18px] main_navManu ${
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
                  className="uppercase text-[15px] font-sourcesans text-[#808285] font-bold"
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
              </li>
            ))
          : navItems.map((item, index: number) => (
              <li
                className={`flex h-[90px] items-center relative  px-[18px] ${
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
                  className="uppercase text-[13px] font-sourcesans text-[#808285] font-bold"
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

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenuButton = () => {
    setMenuOpen((prev) => {
      const newState = !prev;
      if (newState) {
        document.body.classList.add("menu_open");
      } else {
        document.body.classList.remove("menu_open");
      }
      return newState;
    });
  };
  useEffect(() => {
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, []);
  return (
    <div
      className={`w-full ${
        scroll ? "fixed  shadow-[0_0_10px_0_rgba(0,0,0,0.5)]" : "absolute"
      }  top-0 left-[50%] translate-x-[-50%] bg-transparent z-[1002] main_head`}
    >
      <div className="bg-white relative" ref={elementRef}>
        <div className="bg-primary py-3 lg:py-2 " />

        <div className="pr-10 flex items-center pl-[300px] main_nav lg:px-[15px] lg:pb-[17px] lg:pt-[15px]">
          <div className="bg-[#F2F2E3] py-[30px] px-[40px] absolute top-0 left-0 w-auto h-full flex items-center justify-center header_logo">
            <a className="max-w-[208px]" href="/">
              <CloudfrontImg
                src={assets?.logoV2}
                alt="Superior Fence & Rail,Inc."
                width={208}
                height={46}
              />
            </a>
          </div>

          <div className="flex items-center mx-auto lg:hidden">
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
                className="text-primary h-[50px] w-[179px] text-[15px]  font-sourcesans uppercase  font-bold bg-transparent tracking-[1px] border-[2px] border-solid border-primary flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-primary hover:text-white"
              >
                Get Free Quote!
              </a>
            </div>
          </div>
          <div className="flex items-center header_tel lg:hidden ">
            <i className="leading-0">
              <img
                src={assets.mobilev2}
                alt="mobilev2"
                width="50px"
                height="60px"
              />
            </i>
            <a href="tel:7048624941" className="headerTel_icon">
              <img
                src={assets.mobilev2}
                alt="mobilev2"
                width="50px"
                height="60px"
              />
            </a>
            <div className="pl-[10px]">
              <p className="text-[16px] text-[#424142] font-sourcesans">
                For a quality-built fence, <br /> call{" "}
                <a
                  href="tel:7048624941"
                  className="text-[#424142] font-bold font-sourcesans transition-all duration-300 ease-in-out hover:text-primary"
                >
                  (704) 862-4941
                </a>{" "}
                today!
              </p>
            </div>
          </div>
          <Button
            className="!p-0 bg-transparent w-[33px] h-[28px] hidden relative lg:block hover:bg-transparent ml-auto menu_btn leading-none"
            onClick={toggleMenuButton}
          >
            {/* <MenuIcon /> */}
            <span className={menuOpen ? "stick open" : "stick"}></span>
          </Button>

          <div
            className={`hamburger_menu bg-white   ${
              menuOpen ? "active" : ""
            }`}
          >
            <div className="px-[20px] py-[30px]">

            <div className="text-center mb-[30px]">
              <a className="max-w-[180px] mx-auto inline-block" href="/">
                <CloudfrontImg
                  src={assets?.logoV2}
                  alt="Superior Fence & Rail,Inc."
                  width={208}
                  height={46}
                />
              </a>
            </div>
            <CustomHambargarMenu
              fenceType={fenceType}
              fenceServiceList={fenceServiceList}
              locationBasedSlug={locationBasedSlug}
            />
            <div className="flex justify-center mt-[20px]">
              <a
                href={quoteLink}
                className="text-primary h-[50px] w-[179px] text-[15px]  font-sourcesans uppercase  font-bold bg-transparent tracking-[1px] border-[2px] border-solid border-primary flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-primary hover:text-white"
              >
                Get Free Quote!
              </a>
            </div>
            </div>
            <div className="flex flex-wrap justify-center items-center flex-col py-[20px] bg-[rgba(0,0,0,.1)]">
              <i className="leading-0">
                <img
                  src={assets.mobilev2}
                  alt="mobilev2"
                  width="40px"
                  height="50px"
                />
              </i>
              <div className="pt-[10px]">
                <p className="text-[16px] text-[#424142] font-sourcesans">
                  For a quality-built fence, <br /> call{" "}
                  <a
                    href="tel:7048624941"
                    className="text-[#424142] font-bold font-sourcesans transition-all duration-300 ease-in-out hover:text-primary"
                  >
                    (704) 862-4941
                  </a>{" "}
                  today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          menuOpen ? "active overLayWrap_mainBodyBg" : "overLayWrap_mainBodyBg"
        }
        onClick={toggleMenuButton}
      />
    </div>
  );
};

export default Header;
