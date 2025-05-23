import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import type { IFenceTypesQuery } from "../../../graphql/generatedType/FenceTypeResponseTypes";
import type { IFenceServicesSidebarQuery } from "../../../graphql/generatedType/FenceServiceTypes";
import {
  CommonListFenceType,
  CommonListTypeAbout,
  CommonListTypeContactUs,
  CommonListTypeFenceService,
  contactUsListData,
  locatioBasedContactUsListData,
} from "../Header/Header";
import {
  fenceServicesData,
  locationBasedFenceServicesData,
} from "../../WhyUs/WhyUs";
import MegaMenu, { locationsData } from "../../MegaMenu/MegaMenu";
import { slugify } from "../../../lib/utils";

const CustomHambargarMenu = ({
  fenceType,
  fenceServiceList,
  locationBasedSlug,
}: {
  fenceType: IFenceTypesQuery;
  fenceServiceList: IFenceServicesSidebarQuery;
  locationBasedSlug: string;
}) => {
  const navItems = [
    {
      name: "Locations",
      subMenu: <CommonListFenceType listData={fenceType} />,
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
  const [isLocationPage, setisLocationPage] = useState<boolean>(false);
  useEffect(() => {
    const currentPage = window.location.pathname.toLowerCase();

    locationsData.flatMap((group) =>
      group.subHeads.flatMap((state) =>
        state.subHeadData.filter((city) => {
          currentPage.includes(`/${slugify(city.subHeadLink.toLowerCase())}`) &&
            setisLocationPage(true);
        })
      )
    );
  }, []);
  return (
    <Accordion type="single" collapsible className="w-full">
      {isLocationPage
        ? locationNavItems.map((item, index) =>
            item?.subMenu ? (
              <AccordionItem
                value={`item-${index + 1}`}
                className="bg-white !border-none"
                key={index + 1}
              >
                <AccordionTrigger
                  customIcon
                  className="py-[12px] px-0 !text-[16px] decoration-none hover:no-underline font-sourcesans font-bold"
                >
                  {item.name}
                </AccordionTrigger>
                <AccordionContent className="!pt-2 !py-0 px-[20px]">
                  {item?.subMenu}
                </AccordionContent>
              </AccordionItem>
            ) : (
              <a
                href={item.url}
                className="inline-block pb-[12px] px-0 !text-[16px] decoration-none hover:no-underline font-sourcesans font-medium text-[#252525]"
              >
                {item.name}
              </a>
            )
          )
        : navItems.map((item, index: number) => (
            <AccordionItem
              value={`item-${index + 1}`}
              className="bg-white !border-none"
              key={index + 1}
            >
              <AccordionTrigger
                customIcon
                className="py-[12px] px-0 !text-[16px] decoration-none hover:no-underline  font-sourcesans font-bold"
              >
                {item.name}
              </AccordionTrigger>
              <AccordionContent className="!pt-2 !py-0 px-[20px]">
                {item?.subMenu}
              </AccordionContent>
            </AccordionItem>
          ))}
    </Accordion>
  );
};

export default CustomHambargarMenu;
