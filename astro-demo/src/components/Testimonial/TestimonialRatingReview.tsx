export const prerender = false;

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { Button } from "../ui/button";
import TestimonialCard from "./TestimonialCard";
import NoSSR from "../NoSSR/NoSSR";
import type { TestimonialsEdge } from "../../graphql/generatedType/ResponseType";

const TestimonialRatingReview = ({
  data,
  ratingLeft,
  textCenter,
}: {
  ratingLeft?: boolean;
  data: TestimonialsEdge;
  textCenter?: boolean;
}) => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="text-left pt-[50px]">
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
                    ratingLeft={ratingLeft}
                    textCenter={textCenter}
                  />
                </div>
              ))}
            </Slider>
          </NoSSR>
        </div>
      </div>
    </div>
  );
};

export default TestimonialRatingReview;
