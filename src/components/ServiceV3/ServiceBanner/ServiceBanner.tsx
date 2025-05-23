import React, { useEffect, useState } from "react";
import StarIcon from "../../ui/Icons/StarIcon";
import type { IServiceCityPageTypes } from "../../../graphql/generatedType/ServiceAreaDetailsTypes";
import useMediaUrl from "../../../hooks/useMediaUrl";

const ServiceBanner = ({ data }: { data: IServiceCityPageTypes }) => {


  const { getMediaUrl } = useMediaUrl();
  return (
    <div className="min-h-[960px] lg:min-h-[910px]">
      <div className="relative bannerHome">
        <div className="pt-[200px] pb-[60px] relative z-20 lg:pt-[150px]">
          <img
            src={getMediaUrl(
              data?.location?.newLocationPurpose?.locationBannerBackgroundImage
                ?.node?.mediaItemUrl
            )}
            alt={
              data?.location?.newLocationPurpose?.locationBannerBackgroundImage
                ?.node?.altText
            }
            className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          />
          <div className=" container">
            <div className="min-h-[700px]">
              <div className="bg-[rgba(255,255,255,.80)] p-[30px] lg:p-[20px] max-w-[730px] lg:mx-auto ">
                <div className=" flex flex-wrap -m-[9px]">
                  <div className=" w-full md:w-full p-[9px] relative bannerlft_cnt">
                    <h1 className="font-oswald font-light text-[40px] text-black leading-[1.2em] text-left mb-[20px] md:!text-[36px] ">
                      {
                        data?.location?.newLocationPurpose
                          ?.locationBannerHeading
                      }
                    </h1>
                    <p className="text-[18px] text-black lg:text-[18px] md:!text-[16px]">
                      {
                        data?.location?.newLocationPurpose
                          ?.locationBannerDescription
                      }
                    </p>

                    <div className="bg-black py-[20px] px-[12px] flex md:flex-wrap justify-between mt-[20px] lftBlack_box">
                      <p className="text-white font-oswald text-[27px] font-light leading-6 xs:text-[20px] xs:leading-4 max-w-[200px]">
                        {
                          data?.location?.newLocationPurpose
                            ?.highestRatedHeading
                        }
                      </p>
                      <i className="-mt-[27px]">
                        <img
                          src="/assets/images/badge.png"
                          alt="badge"
                          width={62}
                          height={94}
                          className="md:w-[50px]"
                        />
                      </i>
                      <div className="text-center md:text-left sm:!mt-[18px]">
                        <span className="text-[21px] font-sourcesans font-normal text-white sm:text-[18px]">
                          22668 Certified Review
                        </span>
                        <div className="flex items-center xs:flex-wrap xs:mt-[8px]">
                          <ul className="flex items-center space-x-2 ">
                            <li>
                              <StarIcon />
                            </li>
                            <li>
                              <StarIcon />
                            </li>
                            <li>
                              <StarIcon />
                            </li>
                            <li>
                              <StarIcon />
                            </li>
                            <li>
                              <StarIcon />
                            </li>
                          </ul>
                          <p className="text-[21px] font-sourcesans font-normal text-white pl-[10px] xs:pl-0 xs:w-full xs:pt-[8px]">
                            {" "}
                            {
                              data?.location?.newLocationPurpose
                                ?.certifiedReviewsRating
                            }{" "}
                            Average Star Rating
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-[20px] sm:flex-wrap">
                      <a
                        href="#url"
                        className="bg-[#821918] hover:bg-[#689689] text-white h-[60px] sm:w-full xs:w-full sm:mb-[10px] flex items-center justify-center py-[10px] px-[20px] font-sourcesans font-bold text-[16px] w-[48%] min-w-auto uppercase md:text-[13px] sm:text-[16px]"
                      >
                        EXPLORE YOUR FINANCING OPTIONS
                      </a>
                      <a
                        href="/request-an-estimate"
                        className="bg-[#689689] hover:bg-[#821918] text-white h-[60px] sm:w-full xs:w-full flex items-center justify-center py-[10px] px-[20px] font-sourcesans font-bold text-[16px] w-[48%] min-w-auto uppercase md:text-[13px] sm:text-[16px]"
                      >
                        GET A FREE FENCE QUOTE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
