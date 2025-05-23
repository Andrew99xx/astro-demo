export const prerender = false;

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import type { TestimonialsEdge } from "../../../graphql/generatedType/ResponseType";
import NoSSR from "../../NoSSR/NoSSR";
import assets from "../../../json/assets";
import TestimonialCardV2 from "./TestimonialCardV2";

const TestimonialV2 = ({
  data,
  locationSlug,
}: {
  data: TestimonialsEdge;
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

  return (
    <>
      <div className="bg-primary p-[8px]" />
      <div
        style={{
          backgroundImage: `url(${assets.testimonialBack})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="text-center py-[100px] md:py-[80px] xs:py-[60px]">
          <div className="container_big">
            <div className="bg-[rgba(255,255,255,.61)] p-[30px]  text-left max-w-[860px] lg:mx-auto md:px-[20px]">
              <h2 className="text-[20px] text-[#6D6E71] mb-[30px] font-sourcesans font-light leading-5 pl-[40px] md:pl-[30px] xs:pl-[20px]">
                Testimonial
              </h2>
              <NoSSR>
                <Slider {...settings} className="testimonial_slider">
                  {data?.edges?.map((item, index) => (
                    <div key={index} className="px-2">
                      <TestimonialCardV2
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
                      />
                    </div>
                  ))}
                </Slider>
              </NoSSR>
              <div className="flex justify-center">
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
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </>
  );
};

export default TestimonialV2;
