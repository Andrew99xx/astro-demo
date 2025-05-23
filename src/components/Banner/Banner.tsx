import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import assets from "../../json/assets";
import NoSSR from "../NoSSR/NoSSR";
import type { PageResponse } from "../../graphql/generatedType/ResponseType";
import StarIcon from "../ui/Icons/StarIcon";
import { Button } from "../ui/button";
import useMediaUrl from "../../hooks/useMediaUrl";
import { CloudfrontImg } from "../ui/CloudfrontImg";
import { quoteLink } from "../Header/Header";

interface BannerProps {
  isMapSection?: boolean;
  isFindSection?: boolean;
}
const Banner = ({
  data,
  isMapSection,
  isFindSection,
}: BannerProps & { data: PageResponse }) => {
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0px",
    adaptiveHeight: true,
    fade: true,
    autoPlay: true,
    autoPlaySpeed: 1500,
  };
  const { getMediaUrl } = useMediaUrl();

  console.log(data, "databanner");

  return (
    <div className=" relative bannerHome">
      {/* <figure className=" absolute size-full left-0 top-0 z-10">
        <img
          src={data?.homePagePurposeNew?.headerBannerImage?.node?.mediaItemUrl}
          alt={data?.homePagePurposeNew?.headerBannerImage?.node?.altText}
          className=" size-full object-cover"
          fetchPriority="high"
          loading="eager"
        />
      </figure> */}

      <div
        className="pt-[200px] pb-[50px] relative z-20"
        style={{
          backgroundImage: `url(${getMediaUrl(
            data?.homePagePurposeNew?.headerBannerImage?.node?.mediaItemUrl
          )})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className=" container">
          <div className=" flex flex-wrap -m-[9px]">
            <div className=" w-[67%] p-[9px] relative">
              <NoSSR>
                <Slider {...sliderSettings}>
                  {data?.homePagePurposeNew?.sliderContentListing?.map(
                    (sliderItem) => (
                      <div
                        className=" bg-[rgba(255,255,255,.8)] px-[30px] py-[70px] border-[3px]  border-[#d0d0d0]"
                        key={sliderItem?.sliderContentHeading}
                      >
                        <h1
                          className="text-primary text-left leading-[1.1] pb-[30px] relative after:bg-primary after:absolute after:left-0 after:bottom-[15px] after:w-[60px] after:h-[2px]"
                          dangerouslySetInnerHTML={{
                            __html: sliderItem?.sliderContentHeading,
                          }}
                        ></h1>
                        <p className=" text-lg font-semibold text-black mb-2 max-w-[660px]">
                          {sliderItem?.sliderContentDescription}
                        </p>
                        <ul className=" flex items-center ">
                          {Array.from({
                            length: sliderItem?.sliderContentRatings || 0,
                          }).map((_, index) => (
                            <li key={index + 1} className=" mr-[2px]">
                              <img
                                src={assets?.star_rating}
                                alt="star_rating"
                                className=" w-[20px]"
                              />
                            </li>
                          ))}
                        </ul>

                        <div className=" mb-1">
                          <a
                            href={quoteLink}
                            className=" text-[#00b921]  font-robotobold text-lg"
                          >
                            {sliderItem?.getAQuoteText}
                            {">"}
                          </a>
                        </div>
                      </div>
                    )
                  )}
                </Slider>
              </NoSSR>
            </div>
            <div className=" w-[33%] p-[9px]">
              {isMapSection ? (
                <div className=" bg-[rgba(130,19,2,1.0)] px-4 pt-4 pb-[22px] min-h-[300px]">
                  <a
                    href={
                      data?.homePagePurposeNew?.mapLink?.edges?.node?.link ??
                      "/fence-service-locations"
                    }
                    className=" size-full block border-[2px] border-white"
                  >
                    <CloudfrontImg
                      src={
                        data?.homePagePurposeNew?.mapIcon?.node?.mediaItemUrl
                      }
                      fetchpriority="high"
                      alt={data?.homePagePurposeNew?.mapIcon?.node?.altText}
                    />
                  </a>
                </div>
              ) : (
                <div className=" bg-[rgba(130,19,2,.8)] px-[30px] pt-4 pb-[22px] ">
                  <h3 className="text-white text-center text-[26px] font-medium mb-5">
                    Why Choose Superior Fence & Rail?
                  </h3>
                  <p className="text-white text-center text-[16px] font-normal mb-[10px]">
                    <i>…because we are the highest rated!</i>
                  </p>

                  <div className="bg-[#707070] p-[20px] max-w-[300px] mx-auto relative">
                    <img
                      src={assets?.badge}
                      alt="badge"
                      className="absolute top-0 right-[26px] w-[56px] h-[93px] "
                    />
                    <span className="text-[28px] font-normal text-white leading-6">
                      19053
                    </span>
                    <p className="text-[28px] font-normal text-white leading-6">
                      Certified <br /> Reviews
                    </p>
                    <div className="flex items-center space-x-2">
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
                      <p className="text-white">4.8</p>
                    </div>
                  </div>
                  <div className="text-center mt-[30px]">
                    <Button
                      variant="secondary"
                      className="px-[58px] text-[14.4px] min-w-auto w-full"
                      onClick={() => (window.location.href = quoteLink)}
                    >
                      {"GET A FENCE QUOTE >"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
          {isFindSection && (
            // <div className="flex flex-wrap pt-[100px] -m-[15px]">
            //   {data?.homePagePurposeNew?.bottomBlocks?.map((_eachItem) => (
            //     <div className="w-1/3 px-[15px]" key={_eachItem?.title}>
            //       <div className="flex items-center justify-center h-[118px] hover:translate-y-[-10px] transition-all duration-300 cmn_card">
            //         <a
            //           href={_eachItem?.link?.edges?.node?.link ?? "/"}
            //           className=" text-[#821302] text-[21px] font-medium uppercase transition-all"
            //         >
            //           {_eachItem?.title}
            //         </a>
            //       </div>
            //     </div>
            //   ))}
            // </div>
            <div className="flex flex-wrap pt-[100px] -m-[15px]">
              <div className="w-1/3 px-[15px]">
                <div className="flex items-center justify-center h-[118px] hover:translate-y-[-10px] transition-all duration-300 cmn_card">
                  <a
                    href="/fence-service-locations"
                    className=" text-[#821302] text-[21px] font-robotomedium  uppercase transition-all"
                  >
                    FIND A LOCATION {">"}
                  </a>
                </div>
              </div>
              <div className="w-1/3 px-[15px]">
                <div className="flex items-center justify-center h-[118px] hover:translate-y-[-10px] transition-all duration-300 cmn_card">
                  <a
                    href="/fence-types"
                    className=" text-[#821302] text-[21px] font-robotomedium  uppercase transition-all"
                  >
                    CHOOSE A FENCE TYPE {">"}
                  </a>
                </div>
              </div>
              <div className="w-1/3 px-[15px]">
                <div className="flex items-center justify-center h-[118px] hover:translate-y-[-10px] transition-all duration-300 cmn_card">
                  <a
                    href={quoteLink}
                    className=" text-[#821302] text-[21px] font-robotomedium uppercase transition-all"
                  >
                    GET A FREE QUOTE {">"}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="p-2 bg-[#821302] relative z-20" />
    </div>
  );
};

export default Banner;
