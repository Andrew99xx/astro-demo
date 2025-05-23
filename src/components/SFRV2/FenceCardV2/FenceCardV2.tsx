import assets from "../../../json/assets";
import type { NewFenceCardProps } from "../../NewFence/NewFence";
import { CloudfrontImg } from "../../ui/CloudfrontImg";

interface IFenceCardV2 {
  image: string;
  altText: string;
  title: string;
  fenceTypesIcon: string;
  fenceTypesIconAltText?: string;
  slug?: string;
  description?: string;
}
export default function FenceCardV2({
  title,
  image,
  altText,
  slug,
  fenceTypesIcon,
  fenceTypesIconAltText,
  description,
}: IFenceCardV2) {
  return (
    <div className="flex items-center px-[20px] ourfence_sliderbox xs:flex-col">
      <a
        href={`/fence-types/${slug}`}
        className="block ourfence_sliderimg max-w-[435px] h-[350px] pl-[15px] pb-[15px] xs:pl-[8px] xs:pb-[8px] relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-[95%] before:h-[50%] before:bg-[rgba(130,26,25,.2)] before:z-[-1] basis-1/2"
      >
        <CloudfrontImg
          src={image}
          alt={altText}
          fetchpriority="high"
          className="size-full object-cover"
        />
      </a>
      <div className="pl-[20px] basis-1/2 xs:mt-[20px] xs:pl-0">
        <span className="text-[20px] text-[#6D6E71] font-light font-sourcesans block mb-[20px] xs:mb-[8px]">
          OUR FENCES
        </span>
        <div className="flex items-center mb-[30px] xs:mb-[15px]">
          <h3 className="font-oswald font-light text-[38px] text-[#231F20] pr-[15px] uppercase">
            {title}
          </h3>
          <i className="leading-none ">
            <img
              src={fenceTypesIcon}
              alt={fenceTypesIconAltText}
              width="80"
              height="80"
              className="lg:w-[60px] lg:h-[50px]"
            />
          </i>
        </div>
        <p className="text-[22px] text-black font-sourcesans font-normal leading-8 lg:text-[16px]">
          {description ||
            "Our vinyl fencing comes equipped with StayStrong rails, SolarShield technology, and other features you won’t find elsewhere."}
        </p>
      </div>
    </div>
  );
}
