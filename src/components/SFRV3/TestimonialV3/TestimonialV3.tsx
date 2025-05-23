export const prerender = false;

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import type { IV3TestimonialTypes, TestimonialsEdge } from "../../../graphql/generatedType/ResponseType";
import NoSSR from "../../NoSSR/NoSSR";
import TestimonialCardV3 from "./TestimonialCardV3";
import useMediaUrl from "../../../hooks/useMediaUrl";

const TestimonialV3 = ({
  data,
  locationSlug,
}: {
  data: IV3TestimonialTypes;
  locationSlug: string;
}) => {
  var settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log(data, "data");
  const { getMediaUrl } = useMediaUrl();
  return (
    <div className="bg-primary ">
      <div className="text-center py-[100px] md:py-[80px] xs:py-[60px]">
        <div className="container_big">

            <NoSSR>
              <Slider {...settings} className="testimonial_sliderV3">
                {data?.edges?.map((item, index) => (
                  <div key={index} className="px-2">
                    <TestimonialCardV3
                      author={item?.node?.title}
                      content={item?.node?.content}
                      headline={
                        item?.node?.testimonialsSettings
                          ?.testimonialsHighlightText
                      }
                      rating={item?.node?.testimonialsSettings?.ratings}
                      location={
                        item?.node?.testimonialsSettings?.testimonialsLocation
                      }
                      testimonialAlt={item?.node?.featuredImage?.node?.altText}
                      testimonialImg={getMediaUrl(item?.node?.featuredImage?.node?.mediaItemUrl)}
                    />
                  </div>
                ))}
              </Slider>
            </NoSSR>
        
          {/* <div className="flex justify-center">
            <a
              className="mt-10 bg-black text-white font-sourcesans font-bold text-[27px] py-[10px] px-[30px] transition-all duration-300 ease-in-out hover:bg-primary read_btn md:!text-[16px] md:mt-[20px] xs:px-[10px]"
              href={
                locationSlug !== ""
                  ? `/${locationSlug}/fence-company-reviews`
                  : `/fence-company-reviews`
              }
            >
              READ ALL OUR CUSTOMER TESTIMONALS
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TestimonialV3;
