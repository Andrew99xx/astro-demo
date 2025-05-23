export const prerender = false;

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { Button } from "../ui/button";
import TestimonialCard from "./TestimonialCard";
import NoSSR from "../NoSSR/NoSSR";
import type { AllTestimonials } from "../../graphql/generatedType/ResponseType";
import type {
  AboutAllTestimonials,
  IAboutUsQueryResult,
} from "../../graphql/generatedType/CommonTypes";

const Testimonial2 = ({
  data,
  locationSlug,
}: {
  data: AboutAllTestimonials;
  locationSlug: string;
}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log(data, "data");

  return (
    <div
      style={{
        background:
          "url(https://d1qpm27e29dlmy.cloudfront.net/wp-content/uploads/2025/02/04134438/Testimonial_BG.png)",
      }}
    >
      <div className="text-center py-[50px]">
        <h2 className="mb-8">Testimonials</h2>
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
          <Button
            variant="default"
            className="mt-10"
            onClick={() => {
              if (locationSlug !== "") {
                window.location.href = `/${locationSlug}/fence-company-reviews`;
              } else {
                window.location.href = `/fence-company-reviews`;
              }
            }}
          >
            {"See all our testimonials >"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial2;
