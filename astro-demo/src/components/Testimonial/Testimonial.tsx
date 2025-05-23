export const prerender = false;

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { Button } from "../ui/button";
import TestimonialCard from "./TestimonialCard";
import NoSSR from "../NoSSR/NoSSR";
import type { TestimonialsEdge } from "../../graphql/generatedType/ResponseType";

const Testimonial = ({
  data,
  locationSlug,
}: {
  data: TestimonialsEdge;
  locationSlug: string;
}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  console.log(data, "data");

  return (
    <>
      <div className="bg-primary p-[4px]" />
      <div
        style={{
          background:
            "url(https://d1qpm27e29dlmy.cloudfront.net/wp-content/uploads/2025/02/04134438/Testimonial_BG.png)",
        }}
      >
        <div className="text-center py-[50px]">
          <h2 className="mb-8 md:text-[28px] xs:text-[24px]">Testimonials</h2>
          <div className="max-w-[1024px] min-h-48 mx-auto mb-8">
            <NoSSR>
              <Slider {...settings}>
                {data?.edges?.map((item, index) => (
                  <div key={index} className="px-2">
                    <TestimonialCard
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
          </div>
          <div className="flex justify-center">
            <a
              className="mt-10 red_btn"
              href={
                locationSlug !== ""
                  ? `/${locationSlug}/fence-company-reviews`
                  : `/fence-company-reviews`
              }
            >
              {"See all our testimonials >"}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
