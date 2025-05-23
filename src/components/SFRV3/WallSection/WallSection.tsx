import React, { useState } from "react";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import type { IV3ServiceLocationTypes } from "../../../graphql/generatedType/ResponseType";
import useMediaUrl from "../../../hooks/useMediaUrl";

const WallSection = ({ data }: { data: IV3ServiceLocationTypes }) => {
  const { getMediaUrl } = useMediaUrl();
  //   const [overlayWidth, setOverlayWidth] = useState(false);

  //   const handleNext = () => {
  //     setOverlayWidth(true);
  //   };

  //   const handlePrev = () => {
  //     setOverlayWidth(false);
  //   };
  return (
    <div className="leading-[0] img_slider">
      <ImgComparisonSlider height={900} className="img_comparison">
        <img
          src={getMediaUrl(
            data?.locationStates?.newLocationPurpose?.viewOurPropertyImage?.node
              ?.mediaItemUrl
          )}
          alt={
            data?.locationStates?.newLocationPurpose?.viewOurPropertyImage?.node
              ?.altText
          }
          width="1920"
          height="1080"
          className="size-full object-cover  brightness-50"
          slot="first"
        />
        <img
          src={getMediaUrl(
            data?.locationStates?.newLocationPurpose?.viewOurPropertyImage?.node
              ?.mediaItemUrl
          )}
          alt={
            data?.locationStates?.newLocationPurpose?.viewOurPropertyImage?.node
              ?.altText
          }
          width="1920"
          height="1080"
          className="size-full object-cover"
          slot="second"
        />
        <svg
          slot="handle"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          viewBox="-8 -3 16 6"
        >
          <path
            stroke="#000"
            d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2"
            stroke-width="1"
            fill="#000"
            vector-effect="non-scaling-stroke"
          ></path>
        </svg>
        {/* <div slot="second" className="bg-[rgba(0,0,0,0.2)]  w-full h-full" /> */}
      </ImgComparisonSlider>
    </div>
  );
};

export default WallSection;
