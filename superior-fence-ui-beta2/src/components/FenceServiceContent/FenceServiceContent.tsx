import React from "react";
import type { IFenceServicesSidebarQuery } from "../../graphql/generatedType/FenceServiceTypes";
import FenceTypeSidebar from "../FenceTypeSidebar/FenceTypeSidebar";
import FenceServiceSidebar from "../FenceServiceSidebar/FenceServiceSidebar";
import type { ICommonPagesQuery } from "../../graphql/generatedType/cmsTypes";

const FenceServiceContent = ({
  sidebarData,
  fenceServiceData,
}: {
  fenceServiceData: ICommonPagesQuery;
  sidebarData: IFenceServicesSidebarQuery;
}) => {
  return (
    <>
      <div className="py-[80px]">
        <div className="container">
          <div className="flex flex-wrap -m-5">
            <div className="w-[25%] p-5">
              <FenceServiceSidebar
                data={sidebarData}
                baseRoute="fence-services"
                title="Fence Services"
              />
            </div>
            <div className="w-[75%] p-5 ">
              <div
                className="fenceServiceData_content"
                dangerouslySetInnerHTML={{
                  __html: fenceServiceData?.page?.content,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[8px] bg-[#821302]"></div>
    </>
  );
};

export default FenceServiceContent;
