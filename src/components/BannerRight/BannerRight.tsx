import React from "react";
import { CloudfrontImg } from "../ui/CloudfrontImg";
import ReactPlayer from "react-player";
import type { IServiceAreaDetailsQueryResult } from "../../graphql/generatedType/ServiceAreaDetailsTypes";
import assets from "../../json/assets";
import StarRating from "../CustomStarRatingComponent/StarRating";
import { Button } from "../ui/button";
import { quoteLink } from "../Header/Header";
import ReactFancybox from "../ui/ReactFacncyBox";

export default function BannerRight({
  serviceAreaData,
}: {
  serviceAreaData: any;
}) {
  return (
    <div className="bg-[rgba(128,19,2,0.85)] py-[15px] px-[20px] text-center">
      <h2 className="text-white text-[18px] font-medium mb-1 font-montserratmedium text-center">
        {serviceAreaData?.rightBlockHeading}
      </h2>
      <p className="text-white text-[14px] mb-5 text-center">
        <i>Watch Now!</i>
      </p>
      <ReactFancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <a
          data-fancybox="video-gallery"
          href={serviceAreaData?.howToChooseVideoLink}
          className="mb-[20px] inline-block"
        >
          <CloudfrontImg
            src={serviceAreaData?.howToChooseVideo?.node?.mediaItemUrl}
            alt={serviceAreaData?.howToChooseVideo?.node?.altText}
            loading="lazy"
            width={306}
            height={172}
          />
        </a>
      </ReactFancybox>
      <div
        className="service_howTxt"
        dangerouslySetInnerHTML={{
          __html: serviceAreaData?.howToChooseText ?? "",
        }}
      />

      <div className="bg-[rgba(142,142,142,.85)] px-[20px] pb-[18px] text-white w-full min-h-[134px]  mb-4 relative">
        <img
          className="absolute top-0 right-[26px] w-[56px] h-[93px]"
          src={assets.badge}
          alt="service_badge"
          loading="lazy"
        />
        <div className="relative top-[13px]">
          <p className="text-[20px] max-w-[100px] font-light text-left leading-7">
            {serviceAreaData?.certificateHeading}
          </p>
          <div>
            <StarRating
              rating={parseFloat(serviceAreaData?.certificateRating)}
              size="w-3 h-3"
            />
          </div>
        </div>
      </div>
      <div className="text-center">
        <a
          href={quoteLink}
          className="px-[58px] text-[14.4px] min-w-auto w-full tracking-[1px] transform transition-transform duration-300 ease-in-out hover:-translate-y-1 white_btn block"
        >
          {"GET A FREE QUOTE >"}
        </a>
      </div>
    </div>
  );
}
