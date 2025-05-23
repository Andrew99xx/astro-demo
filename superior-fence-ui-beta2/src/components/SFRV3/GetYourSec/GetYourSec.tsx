import type { INewServiceLocationTypes, IV3NewLocationStateTypes } from "../../../graphql/generatedType/ResponseType";
import useMediaUrl from "../../../hooks/useMediaUrl";
import assets from "../../../json/assets";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";

const GetYourSec = ({ data }: { data: IV3NewLocationStateTypes }) => {
  const { getMediaUrl } = useMediaUrl();
  return (
    <div className="getyour_sec bg-[#a49e8d] py-[100px] md:py-[80px]">
      <div className="container_big">
        <div className="flex flex-wrap -m-[15px]">
          <div className="w-[40%] p-[15px] lg:w-1/2 md:w-full">
            <h2 className="text-right lg:text-left font-oswald text-[64px] font-light text-white leading-[1.2em] mb-[30px] get_hding lg:!text-[38px] md:!text-[36px] xs:!text-[30px]  md:[&_br]:hidden">
              {data?.newLocationPurpose?.getYourNewFenceHeading}
            </h2>
       
          </div>
          <div className="w-[60%] p-[15px] lg:w-1/2 md:w-full">
            <div className="pl-[70px] over_lft lg:pl-0 max-w-[604px]">
     

              <Accordion type="single" collapsible className="w-full getFence_accr">
                {data?.newLocationPurpose?.getYourNewFenceListing?.map(
                  (item, index) => (
                    <AccordionItem
                      value={`item-${index + 1}`}
                      className="bg-transparent mb-[50px] last:mb-0 border-b-[2px] border-b-primary"
                      key={index + 1}
                    >
                      <AccordionTrigger className="[&[data-state=open]_.addIcon]:opacity-0 [&[data-state=closed]_.minusIcon]:opacity-0 [&[data-state=open]_.minusIcon]:opacity-1  [&[data-state=open]]:bg-transparent !pt-0 pb-[20px] leading-10 !px-0 decoration-none hover:no-underline hover:bg-transparent  font-oswald !text-[44px] md:!text-[30px] !font-light text-white">
                        {item?.getYourNewFenceListHeading}
                      </AccordionTrigger>
                      <AccordionContent className="py-0 !pt-4 px-0">
                        <p className="text-[24px] font-sourcesans font-regular leading-9 text-white mb-[30px]">
                          {item?.getYourNewFenceListDescription}
                        </p>
                        <ul className="pl-[30px] md:pl-[20px] xs:pl-[10px]">
                          {item?.getYourNewFenceSublist?.map((list, index) => (
                            <li
                              className="flex items-center mb-[30px]"
                              key={index}
                            >
                              <i className="leading-none get_tick">
                                <img
                                  src={assets.ticksvg}
                                  alt=""
                                  width="30px"
                                  height="30px"
                                />
                              </i>
                              <p className="pl-[20px] text-[24px] text-white font-sourcesans leading-6 mb:text-[16px] md:pl-[10px]">
                                {list.getYourNewFenceSublistHeading}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  )
                )}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetYourSec;
