import { useRef, useState } from "react";
import type { ICommonHeaderBanner } from "../../graphql/generatedType/FenceTypeResponseTypes";
import assets from "../../json/assets";
import { cn } from "../../lib/utils";
import StarRating from "../CustomStarRatingComponent/StarRating";
import { Button } from "../ui/button";
import CheckBoxIcon from "../ui/Icons/CheckBoxIcon";
import SoundIcon from "../ui/Icons/SoundIcon";
import { CloudfrontImg, CloudfrontVideo } from "../ui/CloudfrontImg";
import { quoteLink } from "../Header/Header";

const InnerBanner = ({
  data,
  commonTitle,
  isCertificate = false,
  bannerType = "Listing",
  bannerBtnTxt = "GET A FREE QUOTE >",
  headingClassName,
  children,
  noRightPart,
  aboutUsHeadingMapImage,
  aboutUsHeadingMapImageAlt,
  requestEstimateBanner,
  bannerImage,
  rightLink,
}: {
  data?: ICommonHeaderBanner;
  commonTitle?: string;
  isCertificate?: boolean;
  bannerType?: "Listing" | "Gallery";
  bannerBtnTxt?: string;
  headingClassName?: string;
  children?: React.ReactNode;
  noRightPart?: boolean;
  aboutUsHeadingMapImage?: string;
  aboutUsHeadingMapImageAlt?: string;
  requestEstimateBanner?: boolean;
  bannerImage?: string;
  rightLink?: string;
}) => {
  console.log(data, "fence data");

  const [sound, setSound] = useState(true);
  const videoRef = useRef(null);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setSound(!sound);
    }
  };

  console.log(sound, "sound");
  console.log(aboutUsHeadingMapImage, "aboutUsHeadingMapImage");

  return (
    <div
      className={`${
        data?.commonHeaderBannerVideo ? "videoBanner" : ""
      } relative bannerHome overflow-hidden`}
    >
      <figure className=" absolute size-full left-0 top-0 z-10">
        {(data?.commonHeaderBannerBackground || bannerImage) && (
          <CloudfrontImg
            src={
              data?.commonHeaderBannerBackground?.node?.mediaItemUrl ||
              bannerImage
            }
            alt={data?.commonHeaderBannerBackground?.node?.altText}
            className="size-full object-cover"
          />
        )}
        {data?.commonHeaderBannerVideo && (
          <CloudfrontVideo
            ref={videoRef}
            src={data?.commonHeaderBannerVideo?.node?.mediaItemUrl}
            alt={data?.commonHeaderBannerVideo?.node?.altText}
            autoPlay
            loop
            muted={sound}
            className=" size-full object-cover object-top"
          />
        )}
      </figure>
      <div
        className={`${data?.commonHeaderBannerVideo ? "pb-0" : "pb-[150px]"} ${
          requestEstimateBanner ? "!pb-6 !pt-[150px]" : ""
        } pt-[200px]  relative z-20 mt-auto`}
      >
        <div className=" container">
          <div className=" flex flex-wrap -m-[9px]">
            <div
              className={`${
                requestEstimateBanner ? "w-full" : " w-[67%]"
              } p-[9px] relative`}
            >
              <div
                className={`${
                  data?.commonHeaderBannerVideo || requestEstimateBanner
                    ? ""
                    : "bg-[rgba(255,255,255,.8)]"
                }   py-[40px] px-[30px]`}
              >
                <h1
                  className={cn(
                    ` ${
                      data?.commonHeaderBannerVideo
                        ? "text-white !text-[48px]"
                        : "text-primary"
                    } ${
                      requestEstimateBanner
                        ? "!font-montserratregular !font-normal !text-center  !text-[48px] after:!hidden"
                        : ""
                    } text-[60px] capitalize text-left leading-[1.1] pb-[30px] relative after:bg-primary after:absolute after:left-0 after:bottom-[15px] after:w-[60px] after:h-[2px]`,
                    headingClassName
                  )}
                >
                  {commonTitle}
                </h1>
                {/* <p className="text-[16px] font-robotoregular">
                  {data?.commonHeaderBannerDescription}
                </p> */}
                {children}
                {data?.commonHeaderBannerVideo && (
                  <div className="inline-flex flex-col w-auto gap-4">
                    <Button
                      variant="default"
                      className="px-[18px] mt-6 !text-[11px] h-[40px]  min-w-auto tracking-[1px] transform transition-transform duration-300 ease-in-out hover:-translate-y-1"
                      onClick={() => (window.location.href = quoteLink)}
                    >
                      {"GET A NEW Fence >"}
                    </Button>
                    <Button
                      className="h-auto !p-0 !text-primary min-w-0 !bg-transparent font-montserratbold font-bold !text-[12px] normal-case hover:!text-white svgBtn"
                      onClick={toggleSound}
                    >
                      <SoundIcon />
                      Click for sound
                    </Button>
                  </div>
                )}
              </div>
            </div>
            {!noRightPart && (
              <div className=" w-[33%] p-[9px]">
                {isCertificate ? (
                  <div className="bg-[#cccaca] py-[35px] px-[30px]">
                    <h3 className="text-primary text-[22px] font-medium mb-5">
                      Why Choose Superior Fence & Rail, Inc.
                    </h3>
                    <a
                      className="bg-[#707070] px-[25px] pb-[18px] flex text-white w-[270px] min-h-[134px] mx-auto mb-10 relative"
                      target="_blank"
                      href="https://birdeye.com/superior-fence-rail-152044990161311"
                    >
                      <img
                        className="absolute top-0 right-[26px]"
                        src={assets.badge}
                      />
                      <div className="relative top-[13px]">
                        <p className="text-[28px] font-light leading-8">
                          20762
                        </p>
                        <p className="text-[28px] max-w-[140px] font-light leading-7">
                          Certified Reviews
                        </p>
                        <div className="mb-2">
                          <StarRating rating={4.8} size="w-3 h-3" />
                        </div>
                      </div>
                    </a>
                    <div className="text-center mt-[20px]">
                      <Button
                        variant="secondary"
                        className="px-[58px] text-[14.4px] min-w-auto w-full tracking-[1px] transform transition-transform duration-300 ease-in-out hover:-translate-y-1"
                        onClick={() => (window.location.href = quoteLink)}
                      >
                        {"GET A FREE QUOTE >"}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className=" bg-primary py-[35px] px-[30px] ">
                    {bannerType === "Listing" ? (
                      <>
                        <h3 className="text-white text-[22px] font-medium mb-5">
                          {data?.commonHeaderBannerListingTitle}
                        </h3>

                        <ul className=" flex flex-wrap">
                          {data?.commonHeaderBannerListing?.map((item) => (
                            <li key={item?.listName} className=" w-1/2">
                              <div className="flex items-start text-[.85rem] text-white mb-3 max-w-[147px] font-montserratregular">
                                <i className="text-[#cccaca] inline-flex items-center justify-center pr-4 innerbnr_icon">
                                  <CheckBoxIcon />
                                </i>
                                {item?.listName}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <figure>
                        <a
                          href="/fence-service-locations"
                          className="block h-full"
                        >
                          <CloudfrontImg
                            src="https://superiorfence.s3.amazonaws.com/wp-content/uploads/2025/02/06072957/HomeMap8b-2.webp"
                            alt="fence company locations"
                            style={{ border: "2px solid white" }}
                          />
                        </a>
                      </figure>
                    )}

                    <div className="text-center mt-[20px]">
                      <Button
                        variant="secondary"
                        className="px-[58px] text-[14.4px] min-w-auto w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-1"
                        onClick={() =>
                          (window.location.href = rightLink || quoteLink)
                        }
                      >
                        {bannerType === "Listing"
                          ? bannerBtnTxt
                          : "FIND YOUR LOCATION >"}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={`${
          requestEstimateBanner ? "p-1" : "p-2"
        } bg-[#821302] relative z-20`}
      />
    </div>
  );
};

export default InnerBanner;
