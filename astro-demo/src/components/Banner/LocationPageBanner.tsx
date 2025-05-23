import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import assets from "../../json/assets";
import NoSSR from "../NoSSR/NoSSR";
import type { ILocationState } from "../../graphql/generatedType/ResponseType";
import StarIcon from "../ui/Icons/StarIcon";
import { Button } from "../ui/button";
import { quoteLink } from "../Header/Header";

const LocationPageBanner = ({ data }: { data: ILocationState }) => {
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

  return (
    <Slider {...sliderSettings}>
      {data?.edges[0].node.locationPurpose.locationBannerSliderListing.map(
        (sliderItem) => (
          <div
            className=" bg-[rgba(255,255,255,.8)] px-[30px] py-[70px] lg:px-[20px] lg:py-[40px] border-[3px]  border-[#d0d0d0]"
            key={sliderItem?.locationBannerSliderHeading}
          >
            <h1
              className="text-primary text-left leading-[1.1] pb-[30px] lg:text-[30px] relative after:bg-primary after:absolute after:left-0 after:bottom-[15px] after:w-[60px] after:h-[2px]"
              dangerouslySetInnerHTML={{
                __html: sliderItem?.locationBannerSliderHeading,
              }}
            ></h1>
            <p className=" text-lg font-semibold text-black mb-2 max-w-[660px] inline">
              {sliderItem?.locationBannerSliderDescription}
            </p>
            {sliderItem?.locationBannerSliderRatings && (
              <ul className=" inline-flex items-center ">
                {Array.from({
                  length: sliderItem?.locationBannerSliderRatings || 0,
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
            )}
            {/* <a href="" className="flex">{`Get A Quote Today >`}</a> */}

            <div className=" mb-1">
              <a
                href={quoteLink}
                className=" text-[#00b921]  font-semibold text-lg"
              >
                
                {`Get A Quote Today >`}
              </a>
            </div>
          </div>
        )
      )}
    </Slider>
  );
};

export default LocationPageBanner;
