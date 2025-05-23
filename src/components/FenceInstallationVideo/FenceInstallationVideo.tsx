import React from "react";
import type { ILocationState } from "../../graphql/generatedType/ResponseType";
import ReactFancybox from "../ui/ReactFacncyBox";
import assets from "../../json/assets";
import { CloudfrontImg } from "../ui/CloudfrontImg";

const FenceInstallationVideo = ({ data }: { data: ILocationState }) => {
  return (
    <div className="relative py-[80px] prepare_sec ">
      <div className="relative z-10">
        <div className="container">
          <h2 className="font-normal text-center text-[40px] mb-9 md:text-[28px] xs:text-[24px]">
            {data?.edges[0]?.node?.locationPurpose?.selectYourNewFenceHeading}
          </h2>
          <ReactFancybox
            options={{
              Carousel: {
                infinite: false,
              },
            }}
          >
            <div className="flex flex-wrap align-center -mx-5 -my-5 lg:-m-[12px]">
              {data?.edges[0]?.node?.locationPurpose?.prepareForYourFenceListing?.map(
                (item, index) => (
                  <div
                    className={`${
                      data?.edges[0]?.node?.locationPurpose
                        ?.prepareForYourFenceListing?.length %
                        2 ===
                      0
                        ? " w-[33.33%] md:w-1/2 xs:w-full px-5  py-5 lg:p-[12px]"
                        : index ===
                          data?.edges[0]?.node?.locationPurpose
                            ?.prepareForYourFenceListing?.length -
                            1
                        ? "w-1/2 px-5  py-5 lg:p-[12px]"
                        : ""
                    } `}
                  >
                    <a
                      data-fancybox="video-gallery"
                      href={
                        item?.prepareForYourFenceYoutubeVideoLink ??
                        "https://youtu.be/0_o2-fiPG2U?si=MZjDMgRmwf3G5GEn"
                      }
                      className="mb-8 width-full inline-block md:mb-4"
                    >
                      <CloudfrontImg
                        src={
                          item?.prepareForYourFenceListingTitleImage?.node
                            ?.mediaItemUrl
                        }
                        alt={
                          item?.prepareForYourFenceListingTitleImage?.node
                            ?.altText
                        }
                      />
                    </a>

                    <h3 className="text-center xs:text-[20px]">
                      {item?.prepareForYourFenceListingTitle}
                    </h3>
                  </div>
                )
              )}
            </div>
          </ReactFancybox>
        </div>
      </div>
    </div>
  );
};

export default FenceInstallationVideo;
