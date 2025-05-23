import React from "react";
import { CloudfrontImg } from "../../ui/CloudfrontImg";
interface IServiceLocationcard {
  title: string;
  image: string;
  fenceTypesIcon: string;
  fenceTypesIconAltTxt: string;
  imageAltTxt: string;
  fenceTypesUrl:string;
}
const ServiceFenceCardV3 = ({
  fenceTypesIcon,
  image,
  title,
  fenceTypesIconAltTxt,
  imageAltTxt,
  fenceTypesUrl
}: IServiceLocationcard) => {
  return (
    <div className="min-h-[400px] xl:min-h-[350px] lg:min-h-[340px]">
      <div className="ourfence_sliderbox ">
        <a href={`/fence-types/${fenceTypesUrl}`} className="block ourfence_sliderimg w-full h-[350px]">
          <CloudfrontImg
            src={image}
            alt={imageAltTxt}
            width={487}
            height={350}
            fetchpriority="high"
            className="size-full object-cover"
          />
        </a>
        <div className="basis-1/2 xs:mt-0 xs:pl-0">
          <div className="flex items-center justify-end xs:mb-[15px] bg-[#689689]  p-[5px]">
            <h3 className="font-oswald font-light text-[38px] lg:!text-[24px] text-white pr-[15px] uppercase">
              {title}
            </h3>
            <i className="leading-none ">
              <img
                src={fenceTypesIcon}
                alt={fenceTypesIconAltTxt}
                width="63"
                height="54"
                className="w-[60px] lg:w-[50px] h-[50px] lg:h-[40px] "
              />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFenceCardV3;
