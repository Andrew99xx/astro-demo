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
    <div className="ourfence_sliderbox">
      <a
        href={`/fence-types/${slug}`}
        className="block ourfence_sliderimg w-full h-[350px] "
      >
        <CloudfrontImg
          src={image}
          alt={altText}
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
              alt={fenceTypesIconAltText}
              width="63"
              height="54"
              className="w-[60px] lg:w-[50px] h-[50px] lg:h-[40px] "
            />
          </i>
        </div>
      </div>
    </div>
  );
}
