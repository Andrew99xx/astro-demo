import type { INewServiceLocationTypes } from "../../../graphql/generatedType/ResponseType";
import useMediaUrl from "../../../hooks/useMediaUrl";
import assets from "../../../json/assets";
import React from "react";

const GetYourSec = ({ data }: { data: INewServiceLocationTypes }) => {
  const { getMediaUrl } = useMediaUrl();
  return (
    <div className="getyour_sec bg-[#a49e8d] py-[100px] md:py-[80px]">
      <div className="container_big">
        <div className="flex flex-wrap -m-[15px]">
          <div className="w-[40%] p-[15px] lg:w-1/2 md:w-full">
            <h2 className="text-right lg:text-left font-oswald text-[64px] font-light text-primary leading-[1.2em] mb-[30px] get_hding lg:!text-[38px] md:!text-[36px] xs:!text-[30px]  md:[&_br]:hidden">
              {data?.locationStates?.newLocationPurpose?.getYourNewFenceHeading}
            </h2>
            <div className="flex flex-wrap gap-[16px]">
              <div className="w-full relative z-10">
                <img
                  src={getMediaUrl(
                    data?.locationStates?.newLocationPurpose
                      ?.getYourNewFenceImages?.edges[0]?.node?.mediaItemUrl
                  )}
                  alt={
                    data?.locationStates?.newLocationPurpose
                      ?.getYourNewFenceImages?.edges[0]?.node?.altText
                  }
                  width="572px"
                  height="326px"
                  className="size-full object-cover"
                />
              </div>
              <div className="flex w-full gap-[16px] pl-[40px] relative before:content-[''] before:absolute before:top-[-16px] before:left-[20px]  before:bg-[rgba(128,19,2,.2)] before:w-[93%] before:h-[248px] xs:before:h-[227px] xs:before:w-[89%]">
                <div className="w-[60%] relative z-10 h-[198px]">
                  <img
                    src={getMediaUrl(
                      data?.locationStates?.newLocationPurpose
                        ?.getYourNewFenceImages?.edges[1]?.node?.mediaItemUrl
                    )}
                    alt={
                      data?.locationStates?.newLocationPurpose
                        ?.getYourNewFenceImages?.edges[1]?.node?.altText
                    }
                    width="278px"
                    height="198px"
                    className="size-full object-cover"
                  />
                </div>
                <div className="w-[40%] relative z-10">
                  <img
                    src={getMediaUrl(
                      data?.locationStates?.newLocationPurpose
                        ?.getYourNewFenceImages?.edges[2]?.node?.mediaItemUrl
                    )}
                    alt={
                      data?.locationStates?.newLocationPurpose
                        ?.getYourNewFenceImages?.edges[2]?.node?.altText
                    }
                    width="220px"
                    height="316px"
                    className="size-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[60%] p-[15px] lg:w-1/2 md:w-full">
            <div className="pl-[70px] over_lft lg:pl-0 ">
              {data?.locationStates?.newLocationPurpose?.getYourNewFenceListing?.map((item, index) => (
                  <div className="mb-[80px] md:mb-[40px] over_card" key={index}>
                    <h3 className="font-oswald text-[44px] font-light mb-[30px] lg:mb-[20px] leading-[1.2em] text-black lg:!text-[34px] md:!text-[28px] xs:!text-[24px]">
                      {item?.getYourNewFenceListHeading}
                    </h3>
                    <p className="text-[24px] font-sourcesans font-regular leading-9 text-black mb-[30px]">
                      {item?.getYourNewFenceListDescription}
                    </p>
                    <ul className="pl-[30px] md:pl-[20px] xs:pl-[10px]">
                      {item?.getYourNewFenceSublist?.map((list, index) => (
                        <li className="flex items-center mb-[30px]" key={index}>
                          <i className="leading-none get_tick">
                            <img
                              src={assets.ticksvg}
                              alt=""
                              width="30px"
                              height="30px"
                            />
                          </i>
                          <p className="pl-[20px] text-[24px] text-black font-sourcesans leading-6 mb:text-[16px] md:pl-[10px]">
                            {list.getYourNewFenceSublistHeading}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetYourSec;
