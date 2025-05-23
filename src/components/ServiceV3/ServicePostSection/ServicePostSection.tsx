import React, { useEffect, useState } from "react";
import type { IServiceCityPageTypes } from "../../../graphql/generatedType/ServiceAreaDetailsTypes";
import { CloudfrontImg } from "../../ui/CloudfrontImg";
import moment from "moment";

const ServicePostSection = ({ data }: { data: IServiceCityPageTypes }) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const totalCards = data?.posts?.edges?.length || 0;
  console.log(totalCards, "totalCards");

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, totalCards));
  };

  const [isLoading, setIsLoading] = useState(true); // initially loading

  useEffect(() => {
    // Check if data is loaded
    if (data?.posts?.edges) {
      setIsLoading(false); // stop loading when data is available
    }
  }, [data]);

  return (
    <div className="min-h-[1600px]">
      <div className="py-[100px] bg-[#a49e8d] md:py-[80px]" id="service-areas">
        <div className="container_big">
          <div className="mb-[90px] text-center lg:mb-[50px] md:mb-[42px]">
            <h2 className="font-oswald font-light text-[64px] md:text-[34px] mb-[20px] text-white leading-7 post_hding">
              FENCE POSTS
            </h2>
          </div>
          <div className="grid grid-cols-12 gap-y-[16px] gap-x-[16px] lg:gap-x-[15px] post_col">
            {isLoading
              ? Array.from({
                  length: data?.posts?.edges?.length || 6,
                }).map((_, idx) => (
                  <div
                    key={idx}
                    className="col-span-4 md:col-span-6 xs:col-span-12 post_crd"
                  >
                    <div className="min-h-[600px] xl:min-h-[560px] lg:min-h-[400px] animate-pulse">
                      <div className="relative h-full">
                        <figure className="w-full h-[404px] lg:h-[264px] overflow-hidden m-0 leading-[0] bg-gray-300 rounded-md"></figure>
                        <div className="pt-[30px] lg:pt-[20px]">
                          <div className="h-[48px] lg:h-[28px] bg-gray-300 mb-[20px] rounded-md w-3/4"></div>
                          <div className="h-[20px] lg:h-[16px] bg-gray-300 rounded-md w-1/3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : data?.posts?.edges?.slice(0, visibleCount).map((item) => (
                  <div className="col-span-4 md:col-span-6 xs:col-span-12 post_crd">
                    <div className="min-h-[600px] xl:min-h-[560px] lg:min-h-[400px]">
                      <div className="relative h-full">
                        <figure className="w-full h-[404px] lg:h-[264px] overflow-hidden m-0 leading-[0]">
                          <a
                            href={`/fence-installation/${item?.node?.slug?.toLocaleLowerCase()}`}
                            className="hover:scale-105 transition-all duration-300 inline-block w-full h-full fence_install_img"
                          >
                            <CloudfrontImg
                              src={
                                item?.node?.featuredImage?.node?.mediaItemUrl
                              }
                              alt={item?.node?.featuredImage?.node?.altText}
                              className="w-full h-full object-cover"
                            />
                          </a>
                        </figure>
                        <div className="pt-[20px] lg:pt-[15px]">
                          <h3 className="leading-[1.3] font-oswald text-black  font-light text-[40px] mb-[20px] line-clamp-2 lg:!text-[28px]">
                            <a
                              href={`/fence-installation/${item?.node?.slug?.toLocaleLowerCase()}`}
                              className="hover:text-primary transition-all duration-300"
                            >
                              {item?.node?.title}
                            </a>
                          </h3>
                          <p className="uppercase text-[20px] font-sourcesans font-bold text-black  lg:text-[16px] ">
                            {moment(
                              item?.node?.featuredImage?.node?.date
                            ).format("MMMM DD, YYYY")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>

          {visibleCount < data?.posts?.edges?.length && (
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
      </div>
    </div>
  );
};

export default ServicePostSection;
