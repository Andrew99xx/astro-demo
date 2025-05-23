import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

interface StarRatingProps {
  rating: number;  // Rating from 0 to 5 with 0.1 precision
  size?: string;   // Optional size class for the icons
  color?: string;  // Optional color class for the filled stars
  showValue?: boolean; // Optional flag to show/hide numeric value
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  size = "w-6 h-6",
  color = "text-[#ffb300]",
  showValue = true
}) => {
  // Ensure rating is between 0 and 5
  const normalizedRating = Math.min(5, Math.max(0, rating));

  // Calculate the fill percentage for each star
  const starFills = Array(5).fill(0).map((_, index) => {
    const starPosition = index + 1;
    const fillAmount = Math.max(0, Math.min(1, normalizedRating - index));
    return fillAmount * 100;
  });

  return (
    <div className="flex items-center">
      {starFills.map((fill, index) => (
        <div key={index} className="relative mr-2 my-2">
          {/* Empty star (background) */}
          <span className={`${size} text-gray-300`}>
            <FontAwesomeIcon icon={faStarRegular} />
          </span>
          
          {/* Filled star with clip path */}
          <div 
            className={`absolute inset-0 overflow-hidden`}
            style={{ width: `${fill}%` }}
          >
            <span className={`${size} ${color}`}>
              <FontAwesomeIcon icon={faStarSolid} />
            </span>
          </div>
        </div>
      ))}
      
      {/* Optional numeric rating */}
      {showValue && (
        <span className="ml-2 text-base text-white">
          {normalizedRating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default StarRating;