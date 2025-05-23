import React from "react";
import type { IV3ServiceLocationTypes } from "../../../graphql/generatedType/ResponseType";
import useMediaUrl from "../../../hooks/useMediaUrl";

const FenceResource = ({ data }: { data: IV3ServiceLocationTypes }) => {
  const { getMediaUrl } = useMediaUrl();
  return (
    <div className="py-[100px] md:py-[60px]">
      <div className="container_big">
        <h2 className="text-primary text-[60px] text-center mb-[90px] font-oswald font-light md:text-[40px] lg:mb-[60px] md:mb-[40px] sm:text-[30px]">
          {data?.locationStates?.newLocationPurpose?.fenceResourcesHeading}
        </h2>
        <div className="flex flex-wrap -m-[10px]">
          {data?.locationStates?.newLocationPurpose?.fenceResourcesListing?.map(
            (item) => (
              <div className="w-1/2 md:w-full p-[10px]">
                <a
                  href="#url"
                  className="bg-[#A49E8D] h-[409px] flex items-center justify-center"
                >
                  <img
                    src={getMediaUrl(
                      item?.fenceResourcesListImage?.node?.mediaItemUrl
                    )}
                    alt={item?.fenceResourcesListImage?.node?.altText}
                    width="293"
                    height="200"
                    className="w-[293px] object-cover"
                  />
                </a>
                <h3 className="font-light font-oswald text-[53px] lg:text-[44px] md:text-[34px] sm:text-[28px] mt-[28px] md:mt-[18px]">
                  <a href="#url" className="hover:text-primary text-black">
                    {item?.fenceResourcesListHeading}
                  </a>
                </h3>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default FenceResource;
