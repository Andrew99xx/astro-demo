import React from "react";
import StarIcon from "../../ui/Icons/StarIcon";
import RedStarIcon from "../../ui/Icons/RedStarIcon";

export interface Review {
  headline?: string; // The headline of the review
  rating?: number | string; // The rating of the review (e.g., 5 for 5 stars)
  content?: string; // The detailed review content
  author?: string; // The name of the review author
  ratingLeft?: boolean;
  location?: string;
}

const TestimonialCardV2 = ({
  headline,
  author,
  content,
  rating,
  ratingLeft,
  location,
}: Review) => {
  return (
    <div className="testimonial_card">
      <h3 className="mb-2 font-oswald font-light text-[49px] text-black uppercase leading-[1.3] lg:!text-[34px] md:!text-[28px] ">
        {headline}
      </h3>
      <span className="text-[29px] text-black font-sourcesans mb-[30px] block lg:text-[24px] md:text-[20px] md:mb-[20px]">
        See what our customers have to say...
      </span>
      <div className={`flex items-center justify-start space-x-7 mb-6 `}>
        {Array.from({ length: Number(rating) }).map((_, index) => (
          <i key={index} className="testimonial_rating ">
            <RedStarIcon />
          </i>
        ))}
      </div>

      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: content,
          }}
          className="testimonial_contentv2 text-[29px] text-black font-sourcesans"
        />
        <div className="text-right">
          <h4 className="mt-4 font-sourcesans text-[25px] text-[#717171] font-bold leading-5 md:text-[20px]">
            {author}
          </h4>
          <p className="font-sourcesans text-[25px] text-[#717171] font-normal">
            {location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCardV2;
