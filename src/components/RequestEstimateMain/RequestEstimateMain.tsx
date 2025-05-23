import React from "react";
import type { IRequestAnEstimateQueryResponse } from "../../graphql/generatedType/RequestEstimateTypes";

const RequestEstimateMain = ({
  data,
}: {
  data: IRequestAnEstimateQueryResponse;
}) => {
  console.log(data, "estimatedata");
  return (
    <div>
      {/* <div
        className="banner_sec py-[100px] relative"
        style={{
          backgroundImage: `url(${data.page.commonHeaderBanner.commonHeaderBannerBackground.node.mediaItemUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-[48px] font-normal text-primary text-center">
          {data?.page.commonHeaderBanner.commonHeaderBannerTitle}
        </h1>
      </div> */}
      <div className="bg-[#dddddd] pt-[300px]pb-[100px]">
        <div className="container">
          <div className="flex flex-wrap -m-[10px]">
            <div className="w-[25%] p-[10px]">
              <div className="bg-white p-[30px 20px]">
                <h2>
                  {data?.themeSettings.themeOption.financingOptionsHeading}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestEstimateMain;
