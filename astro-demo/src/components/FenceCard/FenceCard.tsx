import type { NewFenceCardProps } from "../NewFence/NewFence";
import { CloudfrontImg } from "../ui/CloudfrontImg";

export default function FenceCard({
  title,
  image,
  altText,
  slug,
}: NewFenceCardProps) {
  return (
    <div className="bg-[#d0d0d0] min-h-[316px]">
      <div className="text-center py-[16px]">
        <h3 className="uppercase text-center md:text-[18px] xs:text-[16px]">
          <a href={`/fence-types/${slug}`}>
            {title} {">"}
          </a>
        </h3>
      </div>
      <a
        href={`/fence-types/${slug}`}
        className="h-[252px] overflow-hidden block"
      >
        <CloudfrontImg
          src={image}
          alt={altText}
          fetchpriority="high"
          className=" size-full object-cover"
        />
      </a>
    </div>
  );
}
