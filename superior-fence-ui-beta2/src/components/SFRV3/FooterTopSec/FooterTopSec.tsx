import React from "react";
import type { IV3ServiceLocationTypes } from "../../../graphql/generatedType/ResponseType";
import StarIcon from "../../ui/Icons/StarIcon";
import useMediaUrl from "../../../hooks/useMediaUrl";

const FooterTopSec = ({ data }: { data: IV3ServiceLocationTypes }) => {
  const { getMediaUrl } = useMediaUrl();
  return (
    <div className="py-[150px] lg:py-[100px] md:py-[80px]">
      <div className="container_big">
        <div className="max-w-[1068px] mx-auto">
          <div className="mb-[50px]">
            <div className="flex flex-wrap -m-[10px]">
              <div className="w-[65%] p-[10px] md:w-full">
                <figure className="w-full">
                  <img
                    src="/assets/images/footerTop_img.png"
                    alt="Certified Reviews Image"
                    width="605"
                    height="538"
                    className="size-full object-cover"
                  />
                </figure>
              </div>
              <div className="w-[35%] p-[10px] md:w-full">
                <div className="bg-[#707070] p-[20px] relative">
                  <img
                    src="/assets/images/badge.png"
                    alt="badge"
                    className="absolute top-0 right-[26px] w-[56px] h-[93px] "
                  />
                  <p className="text-white font-sourcesans text-[35px] font-normal max-w-[110px] sm:max-w-[150px] sm:text-[26px] leading-7 mb-[20px]">
                    {
                      data?.locationStates?.newLocationPurpose
                        ?.certifiedReviewsNumber
                    }{" "}
                    Certified Reviews
                  </p>
                  <div className="flex items-center">
                    <ul className="flex items-center space-x-2">
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
                    <p className="text-white font-roboto font-bold leading-7  pl-[10px]">
                      {
                        data?.locationStates?.newLocationPurpose
                          ?.certifiedReviewsRating
                      }
                    </p>
                  </div>
                </div>
                <div className="bg-[#A49E8D] p-[20px]">
                  <h3 className="text-[28px] font-oswald font-light text-black mb-[20px]">
                    {
                      data?.locationStates?.newLocationPurpose
                        ?.fenceInstallationResourcesHeading
                    }
                  </h3>
                  <ul className="">
                    {data?.locationStates?.newLocationPurpose?.fenceInstallationResourcesListing?.map(
                      (item) => (
                        <li className="text-[24px] text-black font-sourcesans font-regular mb-[10px] sm:text-[18px]">
                          {">"} {item?.fenceInstallationResourcesListNmae}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                data?.locationStates?.newLocationPurpose?.mapBelowDescription,
            }}
            className=" ftrtop_cnt"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterTopSec;
