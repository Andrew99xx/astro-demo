import React from 'react';
import Slider from "react-slick";
import StarRating from "../../components/CustomStarRatingComponent/StarRating";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TestimonialItem {
  header: string;
  rating: number;
  desc: string;
  clientName: string;
  address: string;
}

interface TestimonialSliderProps {
  testimonials: TestimonialItem[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    adaptiveHeight: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.87, 0.03, 0.41, 0.9)"
  };

  return (
    <div className="testimonial-slider relative mt-12">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="outline-none">
            <div className="bg-white/80 px-8 py-16 border-3 border-neutral-300 rounded-lg shadow-md">
              <h3 className="text-xl font-normal mb-4">"{testimonial.header}"</h3>
              
              <div className="mb-4">
                <StarRating 
                  rating={testimonial.rating} 
                  size="w-5 h-5"
                  color="text-yellow-400"
                />
              </div>
              
              <p className="text-base font-normal text-[#707070] mb-6">
                {testimonial.desc}
              </p>
              
              <div className="mt-6">
                <p className="text-sm font-bold text-[#252525]">{testimonial.clientName}</p>
                <p className="text-[#7a7a7a] text-sm font-normal">{testimonial.address}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;