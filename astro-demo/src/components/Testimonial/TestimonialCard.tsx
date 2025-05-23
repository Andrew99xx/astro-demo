import React from "react";
import StarIcon from "../ui/Icons/StarIcon";

export interface Review {
  headline?: string; // The headline of the review
  rating?: number | string; // The rating of the review (e.g., 5 for 5 stars)
  content?: string; // The detailed review content
  author?: string; // The name of the review author
  ratingLeft?: boolean;
  textCenter?: boolean; // Optional flag to center the review content
  location?: string;
}

const TestimonialCard = ({
  headline,
  author,
  content,
  rating,
  ratingLeft,
  textCenter,
  location,
}: Review) => {
  return (
    <div
      className={`bg-white rounded-lg px-2 py-4 ${
        textCenter ? "text-center" : ""
      }`}
    >
      <h3 className="mb-3 xs:text-[20px]">"{headline}"</h3>
      <div
        className={`flex items-center ${
          ratingLeft ? " justify-start" : "justify-center"
        } space-x-2 mb-4 `}
      >
        {Array.from({ length: Number(rating) }).map((_, index) => (
          <i key={index}>
            <StarIcon />
          </i>
        ))}
      </div>

      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: content,
          }}
          className="testimonial_content"
        />

        <h4 className="mt-6 font-montserratsemibold text-[16px]">{author}</h4>
        <p className="text-center font-montserratlight text-[14px]">
          {location}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
