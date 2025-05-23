import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import assets from "../../../json/assets";
import type { IServiceCityPageTypes } from "../../../graphql/generatedType/ServiceAreaDetailsTypes";

const ServiceGetYourSec = ({ data }: { data: IServiceCityPageTypes }) => {
  return (
    <>
      <Accordion type="single" collapsible className="w-full getFence_accr">
        {data?.location?.newLocationPurpose?.getYourNewFenceListing.map(
          (item, index) => (
            <AccordionItem
              value={`item-${index + 1}`}
              className="bg-transparent mb-[50px] last:mb-0 border-b-[2px] border-b-primary"
              key={index + 1}
            >
              <AccordionTrigger className="[&[data-state=open]_.addIcon]:opacity-0 [&[data-state=closed]_.minusIcon]:opacity-0 [&[data-state=open]_.minusIcon]:opacity-1  [&[data-state=open]]:bg-transparent !pt-0 pb-[20px] leading-10 !px-0 decoration-none hover:no-underline hover:bg-transparent  font-oswald !text-[44px] lg:!text-[36px] md:!text-[30px] !font-light text-white ">
                {item?.getYourNewFenceListHeading}
              </AccordionTrigger>
              <AccordionContent className="py-0 !pt-4 px-0">
                <p className="text-[24px] font-sourcesans font-regular leading-9 text-white mb-[30px] md:text-[18px]">
                  {item?.getYourNewFenceListDescription}
                </p>
                <ul className="pl-[30px] md:pl-[20px] xs:pl-[10px]">
                  {item?.getYourNewFenceSublist?.map((list, index) => (
                    <li className="flex items-center mb-[30px]" key={index}>
                      <i className="leading-none get_tick flex-shrink-0">
                        <img
                          src={assets.ticksvg}
                          alt=""
                          width="30px"
                          height="30px"
                          className="md:w-[20px] md:h-[20px]"
                        />
                      </i>
                      <p className="pl-[20px] text-[24px] text-white font-sourcesans leading-6 mb:text-[16px] md:pl-[10px] md:text-[18px]">
                        {list?.getYourNewFenceSublistHeading}
                      </p>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          )
        )}
      </Accordion>
    </>
  );
};

export default ServiceGetYourSec;
