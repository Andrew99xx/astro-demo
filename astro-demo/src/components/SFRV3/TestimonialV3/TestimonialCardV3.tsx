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
  testimonialAlt:string;
  testimonialImg:string;
}

const TestimonialCardV3 = ({
  headline,
  author,
  content,
  rating,
  location,
  testimonialImg,
  testimonialAlt
}: Review) => {
  return (
    <div className="flex flex-wrap">
      <figure className="w-[416px] md:w-full md:h-[300px]">
        <img src={testimonialImg} alt={testimonialAlt} width={416} height={700}  className="size-full object-cover"/>
      </figure>
      <div className="testimonial_card w-[calc(100%-416px)] pl-[80px] md:pl-0 md:pt-[20px] text-left md:w-full">
        <h3 className="mb-2 font-oswald font-light text-[60px] text-white uppercase leading-[1.3] lg:!text-[34px] md:!text-[28px] ">
          {headline}
        </h3>
        <span className="text-[29px] text-white font-sourcesans mb-[30px] block lg:text-[24px] md:text-[20px] md:mb-[20px]">
          See what our customers have to say...
        </span>
        <div className={`flex items-center justify-start space-x-7 mt-[50px] md:mt-[30px] mb-[50px] md:mb-[20px]`}>
          {Array.from({ length: Number(rating) }).map((_, index) => (
            <i key={index} className="testimonial_rating ">
              <StarIcon />
            </i>
          ))}
        </div>

  
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
            className="testimonial_contentv2 text-[22px] text-white font-sourcesans mb-[30px] md:mb-[20px]"
          />
          <div className="text-left">
            <h4 className="mt-4 font-sourcesans text-[22px] text-white font-bold leading-5 md:text-[20px]">
              {author}
            </h4>
            <p className="font-sourcesans text-[22px] text-white font-normal">
              {location}
            </p>
       
        </div>
      </div>
    </div>
  );
};

export default TestimonialCardV3;
