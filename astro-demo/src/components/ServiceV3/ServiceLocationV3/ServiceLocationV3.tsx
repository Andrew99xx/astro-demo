import React, { useEffect, useState } from "react";
import ServiceFenceCardV3 from "../ServiceFenceCardV3/ServiceFenceCardV3";
import type { IServiceCityPageTypes } from "../../../graphql/generatedType/ServiceAreaDetailsTypes";
import useMediaUrl from "../../../hooks/useMediaUrl";

const ServiceLocationV3 = ({ data }: { data: IServiceCityPageTypes }) => {
  const { getMediaUrl } = useMediaUrl();
  const [visibleCount, setVisibleCount] = useState(6);
  const totalCards = data?.allFenceTypesCategory?.edges?.length || 0;
  console.log(totalCards, "totalCards");

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, totalCards));
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data?.allFenceTypesCategory?.edges) {
      setIsLoading(false);
    }
  }, [data]);
  return (
    <div>
      <div className="pt-[50px] lg:pt-[40px]">
        <div className="container_big">
          <div className="flex items-center flex-wrap -m-[15px] lg:-m-[8px]">

            {data?.allFenceTypesCategory?.edges?.length > 0 && isLoading
              ? Array.from({
                  length: data?.allFenceTypesCategory?.edges?.length || 6,
                }).map((_, idx) => (
                  <div
                    key={idx}
                    className="w-[33.33%] md:w-[50%] sm:w-full p-[15px] lg:p-[8px]"
                  >
                    <div className="min-h-[400px] xl:min-h-[350px] lg:min-h-[340px] animate-pulse">
                      <div className="ourfence_sliderbox">
                        <div className="block ourfence_sliderimg w-full h-[350px] bg-gray-300 rounded">
                          {/* Image skeleton */}
                        </div>
                        <div className="basis-1/2 xs:mt-0 xs:pl-0">
                          <div className="flex items-center justify-end xs:mb-[15px] bg-[#689689] p-[5px]">
                            <div className="h-[40px] w-[200px] lg:w-[150px] bg-gray-200 rounded mr-[15px]"></div>
                            <div className="w-[60px] lg:w-[50px] h-[50px] lg:h-[40px] bg-gray-200 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : data?.allFenceTypesCategory?.edges
                  ?.slice(0, visibleCount)
                  ?.map((item, index) => (
                    <div
                      key={index}
                      className="w-[33.33%] md:w-[50%] sm:w-full p-[15px] lg:p-[8px]"
                    >
                      <ServiceFenceCardV3
                        image={getMediaUrl(
                          item?.node?.fenceTypesCategoryPurpose
                            ?.fenceTypesThumbnail?.node?.mediaItemUrl
                        )}
                        imageAltTxt={
                          item?.node?.fenceTypesCategoryPurpose
                            ?.fenceTypesThumbnail?.node?.altText
                        }
                        fenceTypesIcon={getMediaUrl(
                          item?.node?.fenceTypesCategoryPurpose?.fenceTypesIcon
                            ?.node?.mediaItemUrl
                        )}
                        fenceTypesIconAltTxt={
                          item?.node?.fenceTypesCategoryPurpose?.fenceTypesIcon
                            ?.node?.altText
                        }
                        title={
                          item?.node?.fenceTypesCategoryPurpose
                            ?.fenceTypesDisplayName
                        }
                        fenceTypesUrl={item?.node?.slug}
                      />
                    </div>
                  ))}
          </div>
        </div>
      </div>
      {visibleCount < data?.allFenceTypesCategory?.edges?.length && (
        <div className="text-center mt-[50px] sm:mt-[30px]">
          <button
            onClick={handleViewMore}
            className="uppercase text-primary text-[42px] lg:text-[30px] font-sourcesans font-regular transition-all duration-300 ease-in-out hover:text-[#689689] sm:text-[20px]"
          >
            {">"} View More
          </button>
        </div>
      )}
    </div>
  );
};

export default ServiceLocationV3;
