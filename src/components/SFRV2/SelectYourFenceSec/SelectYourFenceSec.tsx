import { useState } from "react";
import type {
  INewAllFenceTypesCategory,
  IV3ServiceLocationTypes,
} from "../../../graphql/generatedType/ResponseType";

import FenceCardV3 from "../../SFRV3/FenceCardV3/FenceCardV3";

export default function SelectYourFenceSec({
  data,
}: {
  data: IV3ServiceLocationTypes;
}) {
  const [visibleCount, setVisibleCount] = useState(6);
  const totalCards = data?.allFenceTypesCategory?.edges?.length || 0;

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, totalCards));
  };

  // var fenceTypesSlider = {
  //   arrows: true,
  //   dots: false,
  //   infinite: true,
  //   // autoplay: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <div className="pb-[150px] fenceSecBg lg:pb-[90px] bg-[#a49e8d]">
      {/* {showInnerCard && (
        <InnerBannerCard
          headerBottomBlockOneDescription={headerBottomBlockOneDescription}
          headerBottomBlockOneHeading={headerBottomBlockOneHeading}
          headerBottomBlockThreeDescription={headerBottomBlockThreeDescription}
          headerBottomBlockThreeHeading={headerBottomBlockThreeHeading}
          headerBottomBlockTwoHeading={headerBottomBlockTwoHeading}
          headerBottomBlockTwoDescription={headerBottomBlockTwoDescription}
          headerBottomBlockOneLink={headerBottomBlockOneLink}
          headerBottomBlockTwoLink={headerBottomBlockTwoLink}
          headerBottomBlockThreeLink={headerBottomBlockThreeLink}
        />
      )} */}

      <div className="flex md:flex-wrap">
        <div className="bg-primary h-[300px] w-[50%] pr-[40px] relative z-[100] -mt-[30px] yrExp_lftcol lg:h-[230px] md:w-full md:pr-0 md:h-[200px] sm:h-[150px] lg:flex lg:items-center lg:justify-end md:justify-center">
          <div className="text-right flex items-center justify-end md:justify-center">
            <span className="font-oswald text-[204px] font-semibold text-white yrExp_txt lg:text-[120px] sm:text-[80px] xs:text-[60px] md:pr-[10px] ">
              {
                data?.locationStates?.newLocationPurpose
                  ?.totalYearExperienceNumber
              }
            </span>
            <p className="text-[39px] font-oswald font-light text-white year_txt [writing-mode:sideways-lr] md:[writing-mode:horizontal-tb] max-h-[150px] text-left leading-[1.2] lg:text-[32px]">
              Years Experience
            </p>
          </div>
        </div>
        <div className="w-[50%] pl-[140px] yrExp_rgtcol lg:pr-[12px] md:w-full md:pl-[12px] md:mt-[20px]">
          <div className="max-w-[600px] lg:max-w-auto ">
            {data?.locationStates?.newLocationPurpose?.totalYearExperienceList?.map(
              (item, index) => (
                <div className="mb-[30px] lg:mb-[20px]" key={index}>
                  <div className="border-b-[2px] border-solid border-primary mb-[20px]">
                    <p className="text-[22px] font-sourcesans font-normal text-white lg:text-[20px]">
                      <span className="text-[50px] font-oswald font-light pr-[20px] lg:text-[40px] sm:text-[30px] xs:text-[28px]">
                        {item?.totalYearExperienceListCount}
                      </span>
                      {item?.totalYearExperienceListHeading}
                    </p>
                  </div>
                  <p className="text-[22px] font-sourcesans font-normal text-white lg:text-[20px]">
                    {item?.totalYearExperienceListDescription}
                  </p>
                </div>
              )
            )}
         
          </div>
        </div>
      </div>
      <div className="lg:text-center lg:mt-[50px]">
        <div className="container_big">
          <h3 className="font-sourcesans text-[30px] font-normal text-white md:text-[20px]">
            OUR FENCE CATALOG
          </h3>
          <h4 className="text-[#821918] text-[40px] font-oswald font-light leading-[1.3] sm:text-[30px] more_txt">
            More Fence Types <br /> Than Anyone Else!
          </h4>
        </div>
      </div>
      <div className="pt-[50px] lg:pt-[40px]">
        <div className="container_big">
          <div className="flex items-center flex-wrap -m-[15px] md:-m-[10px]">
            {data?.allFenceTypesCategory?.edges?.slice(0, visibleCount).map((item, index) => (
              <div
                className="w-[33.33%] md:w-[50%] sm:w-full p-[15px] md:p-[10px]"
                key={index}
              >
                <FenceCardV3
                  image={
                    item?.node?.fenceTypesCategoryPurpose?.fenceTypesThumbnail
                      ?.node?.mediaItemUrl
                  }
                  altText={
                    item?.node?.fenceTypesCategoryPurpose?.fenceTypesThumbnail
                      ?.node?.altText
                  }
                  title={
                    item?.node?.fenceTypesCategoryPurpose
                      .fenceTypesDisplayName || item?.node?.name
                  }
                  fenceTypesIcon={
                    item?.node?.fenceTypesCategoryPurpose?.fenceTypesIcon?.node
                      ?.mediaItemUrl
                  }
                  fenceTypesIconAltText={
                    item?.node?.fenceTypesCategoryPurpose?.fenceTypesIcon?.node
                      ?.altText
                  }
                  description={item?.node?.description}
                  slug={item?.node?.slug}
                />
              </div>
            ))}
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
      </div>
    </div>
  );
}
