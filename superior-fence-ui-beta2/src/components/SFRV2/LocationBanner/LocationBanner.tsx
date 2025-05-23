import type {
  INewServiceLocationTypes,
  IServiceLocationResponse,
} from "../../../graphql/generatedType/ResponseType";
import { CloudfrontImg } from "../../ui/CloudfrontImg";

import ReactFancybox from "../../ui/ReactFacncyBox";

import RedStarIcon from "../../ui/Icons/RedStarIcon";
import assets from "../../../json/assets";
import useMediaUrl from "../../../hooks/useMediaUrl";

const LocationBanner = ({ data }: { data: INewServiceLocationTypes }) => {
  const { getMediaUrl } = useMediaUrl();
  console.log(data, "databanner");
  console.log(
    data?.locationStates?.newLocationPurpose?.locationBannerBackgroundImage
      ?.node?.mediaItemUrl,
    "databanner"
  );

  return (
    <div className=" relative bannerHome">
      <div className="pt-[200px] pb-[50px] relative z-20 lg:pt-[150px]">
        <img
          src={getMediaUrl(
            data?.locationStates?.newLocationPurpose
              ?.locationBannerBackgroundImage?.node?.mediaItemUrl
          )}
          alt={
            data?.locationStates?.newLocationPurpose
              ?.locationBannerBackgroundImage?.node?.altText
          }
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        />
        <div className="absolute bottom-[30px] right-[30px] w-[61px] h-[61px] z-10 inline-block">
          <img
            src={assets.stickerIcon}
            alt="stickerIcon"
            width="61px"
            height="61px"
          />
        </div>
        <div className=" container">
          <div className="bg-[rgba(242,242,227,.76)] p-[30px] lg:p-[20px]">
            <div className=" flex flex-wrap -m-[9px]">
              <div className=" w-[65%] md:w-full p-[9px] relative bannerlft_cnt">
                <h1 className="font-oswald font-light text-[56px] text-primary leading-[1.2em] text-left mb-[20px] md:!text-[36px] ">
                  {
                    data?.locationStates?.newLocationPurpose
                      ?.locationBannerHeading
                  }
                </h1>
                <p className="text-[22px] text-black lg:text-[18px] md:!text-[16px]">
                  {
                    data?.locationStates?.newLocationPurpose
                      ?.locationBannerDescription
                  }
                </p>

                <div className="bg-black py-[20px] px-[12px] flex items-center justify-between mt-[20px] lftBlack_box xs:flex-wrap">
                  <div className="pr-[10px] xs:w-full xs:mb-[10px]">
                    <h3 className="text-[27px] font-bold text-white font-sourcesans mb-[4px]">
                      {
                        data?.locationStates?.newLocationPurpose
                          ?.fenceFinancingHeading
                      }
                    </h3>
                    <p className="text-[22px] text-white text-normal font-sourcesans md:!text-[16px]">
                      {
                        data?.locationStates?.newLocationPurpose
                          ?.fenceFinancingDescription
                      }
                    </p>
                  </div>
                  <a
                    href="#url"
                    className="explore_btn text-black text-[15px] font-sourcesans font-bold bg-white py-[20px] px-[20px] inline-flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-primary hover:text-white md:h-[50px] xs:h-[40px] md:p-[10px]"
                  >
                    EXPLORE YOUR OPTIONS
                  </a>
                </div>
              </div>

              <div className="w-[35%] md:w-full p-[9px]">
                <div className="bg-[rgba(242,242,227,.76)] py-[20px] px-[15px] mb-[16px]">
                  <h2 className=" text-center text-[27px] font-oswald font-light mb-[10px] text-black max-w-[270px] mx-auto bnrRgt_hding md:max-w-full">
                    {
                      data?.locationStates?.newLocationPurpose
                        ?.howToChooseSectionHeading
                    }
                  </h2>
                  <span className="text-center block font-bold text-[20px] font-sourcesans text-black mb-[20px]">
                    WATCH NOW
                  </span>
                  <ReactFancybox
                    options={{
                      Carousel: {
                        infinite: false,
                      },
                    }}
                  >
                    <a
                      data-fancybox="video-gallery"
                      href={
                        data?.locationStates?.newLocationPurpose
                          ?.howToChooseSectionVideoLink
                      }
                      className="mb-[10px] inline-block w-full"
                    >
                      <CloudfrontImg
                        src={
                          data?.locationStates?.newLocationPurpose
                            ?.howToChooseSectionVideoThumbnail?.node
                            ?.mediaItemUrl
                        }
                        alt={
                          data?.locationStates?.newLocationPurpose
                            ?.howToChooseSectionVideoThumbnail?.node?.altText
                        }
                        loading="lazy"
                        width={306}
                        height={172}
                        className="size-full"
                      />
                    </a>
                  </ReactFancybox>
                  <div className="text-center">
                    <a
                      href="/#url"
                      className="text-[15px] font-sourcesans font-bold text-black transition-all duration-300 ease-in-out hover:text-primary"
                    >
                      WATCH ALL OUR VIDEOS
                    </a>
                  </div>
                </div>
                <div className="bg-[rgba(242,242,227,.76)] py-[20px] px-[15px]">
                  <h2 className=" text-center text-[27px] font-oswald font-light mb-[5px] text-black bnrRgt_hding">
                    {
                      data?.locationStates?.newLocationPurpose
                        ?.whyChooseSectionHeading
                    }
                  </h2>
                  <span className="text-[20px] text-black text-normal text-center block because_txt">
                    {
                      data?.locationStates?.newLocationPurpose
                        ?.whyChooseSectionDescription
                    }
                  </span>

                  <div className="flex mt-[20px] bnrrgt_btmcnt md:max-w-[260px] md:mx-auto">
                    <div className="flex px-[10px] relative bnrlftBtm_cnt before:content-[''] before:absolute before:top-[50%] before:right-0 before:w-[3px] before:h-[57px] before:-translate-y-[50%] before:bg-white bnrbtmLft_col">
                      <i className="leading-none w-[56px] flex-shrink-0">
                        <img
                          src={assets.badge}
                          alt="badge"
                          width="56"
                          height="93"
                        />
                      </i>
                      <p className="text-[21px] font-bold font-sourcesans text-black pl-[10px] leading-7  ">
                        {data?.locationStates?.newLocationPurpose?.reviewsCount}{" "}
                        Certified Reviews
                      </p>
                    </div>
                    <div className="pl-[20px] bnrrgtBtm_cnt">
                      <ul className="flex items-center space-x-2 mb-[10px]">
                        <li>
                          <RedStarIcon />
                        </li>
                        <li>
                          <RedStarIcon />
                        </li>
                        <li>
                          <RedStarIcon />
                        </li>
                        <li>
                          <RedStarIcon />
                        </li>
                        <li>
                          <RedStarIcon />
                        </li>
                      </ul>
                      <p className="text-[21px] font-bold font-sourcesans text-black leading-7 ">
                        {
                          data?.locationStates?.newLocationPurpose
                            ?.reviewsStarCount
                        }{" "}
                        Average Star Rating
                      </p>
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

export default LocationBanner;
