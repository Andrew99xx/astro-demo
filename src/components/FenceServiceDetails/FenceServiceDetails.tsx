import React from "react";
import assets from "../../json/assets";
import { Button } from "../ui/button";
import FenceServiceSidebar from "../FenceServiceSidebar/FenceServiceSidebar";
import type {
  IFenceServicesQueryData,
  IFenceServicesSidebarQuery,
} from "../../graphql/generatedType/FenceServiceTypes";
import { CloudfrontImg } from "../ui/CloudfrontImg";
import { quoteLink } from "../Header/Header";

const FenceServiceDetails = ({
  sidebarData,
  fenceServiceDetailsData,
}: {
  sidebarData: IFenceServicesSidebarQuery;
  fenceServiceDetailsData: IFenceServicesQueryData;
}) => {
  const postData = fenceServiceDetailsData?.allFenceServices?.edges[0]?.node;
  const videoData = fenceServiceDetailsData?.allFenceInstallationVideo?.edges;

  console.log(fenceServiceDetailsData, "postdata");

  return (
    <div>
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
            <div className="w-[75%] p-5">
              {postData?.template?.templateName ===
                "Service Type Gallery Commercial" && (
                <div className="one_type">
                  <h2 className="text-primary font-black text-[40px] mb-[10px]">
                    {
                      postData?.fenceServicesCommercial
                        ?.commercialServicesGalleryHeading
                    }
                  </h2>
                  <p className="mb-[30px]">
                    {
                      postData?.fenceServicesCommercial
                        ?.commercialServicesGalleryDescription
                    }
                  </p>
                  <div className="flex flex-wrap -m-2">
                    {postData?.fenceServicesCommercial?.commercialServicesGalleryImages?.edges?.map(
                      (img) => (
                        <div className="w-[20%] p-2" key={img?.node?.altText}>
                          <a className="border-[4px] border-solid borderColor-[#cccaca] inline-block vinyl_figure h-[128px]">
                            <CloudfrontImg
                              src={img?.node?.mediaItemUrl}
                              alt={img?.node?.altText}
                              className="size-full object-cover"
                            />
                          </a>
                        </div>
                      )
                    )}
                  </div>
                  <div className="mt-[25px] mb-[40px]">
                    <Button
                      variant="destructive"
                      className="px-[58px] text-[14.4px] min-w-auto w-full !text-[#252525] max-w-[388px] hover:!text-white "
                    >
                      {
                        postData?.fenceServicesCommercial
                          ?.commercialServicesGalleryButtonText
                      }
                    </Button>
                  </div>
                  <div className="bg-primary py-[30px] px-[20px] mb-[50px]">
                    <h2 className="text-white text-[32px] font-extrabold font-montserratbold">
                      {postData?.fenceServicesCommercial?.whyChooseHeading?.toUpperCase()}
                    </h2>
                  </div>
                  <div className="grid grid-cols-2 gap-x-8">
                    {postData?.fenceServicesCommercial?.whyChooseSuperiorFenceListing?.map(
                      (item, index) => (
                        <div key={index} className="mb-[12px]">
                          <h3 className="text-primary text-[24px] mb-[10px] font-bold font-montserratbold">
                            {item?.whyChooseSuperiorFenceListingTitle}
                          </h3>
                          <p>
                            {item?.whyChooseSuperiorFenceListingDescription}
                          </p>
                        </div>
                      )
                    )}
                  </div>

                  <div className="mt-[25px] mb-[40px]">
                    <Button
                      variant="default"
                      className="px-[58px] text-[14.4px] min-w-auto w-full  max-w-[388px]"
                    >
                      {postData?.fenceServicesCommercial?.whyChooseCopy}
                    </Button>
                  </div>
                </div>
              )}
              {postData?.template?.templateName ===
                "Service Type Gallery Metal" && (
                <div className="two_type">
                  <h2 className="text-primary font-black text-[40px] mb-[10px]">
                    {
                      postData?.fenceServicesMetalFabrication
                        ?.metalFabricationGalleryHeading
                    }
                  </h2>
                  <p className="mb-[30px]">
                    {
                      postData?.fenceServicesMetalFabrication
                        ?.metalFabricationGalleryDescription
                    }
                  </p>
                  <div className="flex flex-wrap -m-2">
                    {postData?.fenceServicesMetalFabrication?.metalFabricationGalleryImages?.edges?.map(
                      (img) => (
                        <div className="w-[20%] p-2" key={img?.node?.altText}>
                          <a className="border-[4px] border-solid borderColor-[#cccaca] inline-block vinyl_figure h-[128px]">
                            <CloudfrontImg
                              src={img?.node?.mediaItemUrl}
                              alt={img?.node?.altText}
                              className="size-full object-cover"
                            />
                          </a>
                        </div>
                      )
                    )}
                  </div>
                  <div className="mt-[25px] mb-[40px]">
                    <Button
                      variant="destructive"
                      className="px-[58px] text-[14.4px] min-w-auto w-full !text-[#252525] max-w-[388px] hover:!text-white "
                    >
                      {
                        postData?.fenceServicesMetalFabrication
                          ?.metalFabricationGalleryButtonText
                      }
                    </Button>
                  </div>
                  <div className="flex flex-wrap -mx-[20px]">
                    <div className=" px-[20px] w-1/2 ">
                      <h3 className="text-primary font-extrabold text-[2.5em] mb-[10px]">
                        {postData?.fenceServicesMetalFabrication?.metalHeading}
                      </h3>
                      <div
                        className="metal_block"
                        dangerouslySetInnerHTML={{
                          __html:
                            postData?.fenceServicesMetalFabrication
                              ?.metalDescription,
                        }}
                      />
                    </div>
                    <div className="px-[20px] w-1/2">
                      <h3 className="text-primary font-extrabold text-[2.5em] mb-[10px]">
                        {
                          postData?.fenceServicesMetalFabrication
                            ?.powderCoatingHeading
                        }
                      </h3>
                      <div
                        className="metal_block"
                        dangerouslySetInnerHTML={{
                          __html:
                            postData?.fenceServicesMetalFabrication
                              ?.powderCoatingDescription,
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
              {postData?.template?.templateName === "Service Type Video" && (
                <div className="three_type">
                  {videoData?.map((video, index) => (
                    <div
                      className={`flex flex-wrap ${
                        index === 0
                          ? "pb-[32px]"
                          : index === videoData.length - 1
                          ? "pt-[32px] border-none"
                          : "py-[32px]"
                      } border-b border-solid border-[#ccc]`}
                    >
                      <div className="w-[50%] leading-0">
                        <a
                          href={`/fence-video-tutorials/${video?.node?.slug}`}
                          className="inline-block"
                        >
                          <CloudfrontImg
                            src={
                              video?.node?.fenceVideoTutorialPagePurpose
                                ?.videoThumbImage?.node?.mediaItemUrl
                            }
                            alt={
                              video?.node?.fenceVideoTutorialPagePurpose
                                ?.videoThumbImage?.node?.altText
                            }
                            className="size-full object-cover"
                          />
                        </a>
                      </div>
                      <div className="w-[50%] pl-[40px]">
                        <h3 className="text-primary font-normal mb-[20px] text-[26px]">
                          {video?.node?.title}
                        </h3>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: video?.node?.content,
                          }}
                          className="mb-[14px] videoTutorialData"
                        ></div>
                        <Button
                          variant="default"
                          className="px-[58px] !text-[12px] min-w-auto w-full max-w-[130px]  rounded-none"
                          onClick={() =>
                            (window.location.href = ` /fence-video-tutorials/${video.node.slug}`)
                          }
                        >
                          {"LEARN MORE >"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {postData?.template?.templateName === "Default" && (
                <div className="four_type">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: postData?.content,
                    }}
                  ></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[8px] bg-[#821302]"></div>

      {postData?.template?.templateName ===
      "Service Type Gallery Commercial" ? (
        <div className="py-[60px] bg-[#ededed]">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="w-[70%]">
                <h2 className="text-primary text-normal text-[32px] mb-[10px] max-w-[629px]">
                  {
                    postData?.fenceServicesCommercial
                      ?.commercialFenceEstimatesLeftHeading
                  }
                </h2>
                <p>
                  {
                    postData?.fenceServicesCommercial
                      ?.commercialFenceEstimatesLeftDescription
                  }
                </p>
              </div>
              <div className="w-[30%]">
                <div className="bg-primary px-[20px] pb-[40px] py-[35px]">
                  <h3 className="text-white text-[26px] mb-[15px]">
                    {
                      postData?.fenceServicesCommercial
                        ?.commercialFenceEstimatesRightHeading
                    }
                  </h3>
                  <p className="text-white mb-[30px]">
                    {
                      postData?.fenceServicesCommercial
                        ?.commercialFenceEstimatesRightDescription
                    }
                  </p>
                  <Button
                    variant="destructive"
                    className="px-[58px] text-[14.4px] min-w-auto w-full hover:!bg-black"
                  >
                    {
                      postData?.fenceServicesCommercial
                        ?.commercialFenceEstimatesRightButtonText
                    }
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : postData?.template?.templateName === "Service Type Gallery Metal" ? (
        <>
          <div className="py-[60px] bg-[#ededed]">
            <div className="container">
              <h2 className=" text-[2.5rem] leading-[1.2] text-center text-headingPrimary mb-[1em]">
                {postData?.fenceServicesMetalFabrication?.ourProcessHeading}
              </h2>
              <div className=" flex flex-wrap -mx-[10px]">
                {postData?.fenceServicesMetalFabrication?.ourProcessListing?.map(
                  (_data, index) => (
                    <div
                      key={_data?.ourProcessListingHeading}
                      className=" w-[20%] px-[10px] fabrication_block"
                    >
                      <i
                        className={`
                          flex size-[112px] justify-center items-center rounded-full border-[3px] border-primary mx-auto mb-[1em] relative 
                      
                      after:bg-primary after:-left-[calc((112px/2)+13px)] after:top-1/2 after:-translate-y-1/2 after:absolute after:w-[calc((112px/2)+13px)] after:h-[3px]
                      ${index === 0 ? " after:hidden" : ""}


                      before:bg-primary before:-right-[calc((112px/2)+13px)] before:top-1/2 before:-translate-y-1/2 before:absolute before:w-[calc((112px/2)+13px)] before:h-[3px] ${
                        index ===
                        postData?.fenceServicesMetalFabrication
                          ?.ourProcessListing.length -
                          1
                          ? " before:hidden"
                          : ""
                      }
                          `}
                      >
                        <CloudfrontImg
                          src={_data?.ourProcessListingIcon?.node?.mediaItemUrl}
                          alt="icon"
                          className=" max-w-[65px]"
                        />
                      </i>
                      <h3 className=" text-[1.3rem] font-medium text-headingPrimary text-center pb-[1em]">
                        {_data?.ourProcessListingHeading}
                      </h3>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: _data?.ourProcessListingDescription,
                        }}
                      ></div>
                    </div>
                  )
                )}
              </div>
              <div className=" flex justify-center mt-[50px]">
                <Button>
                  {
                    postData?.fenceServicesMetalFabrication
                      ?.metalFabricationGalleryButtonText
                  }
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full h-[8px] bg-[#821302]"></div>
          <div className=" py-[64px]">
            <div className="container">
              <div className="flex flex-wrap -m-[20px]">
                <div className=" w-[70%] p-[20px]">
                  <h2 className=" text-primary mb-[1.5rem] font-montserratregular">
                    {
                      postData?.fenceServicesMetalFabrication
                        ?.whyChooseUsHeading
                    }
                  </h2>

                  <div className=" flex flex-wrap -m-[20px]">
                    {postData?.fenceServicesMetalFabrication?.whyChooseUsListing?.map(
                      (list) => (
                        <div
                          key={list.whyChooseUsListingTitle}
                          className=" w-1/3  p-[20px]"
                        >
                          <h3 className=" font-bold text-[20px] text-primary mb-6">
                            {list?.whyChooseUsListingTitle}
                          </h3>
                          <p>{list?.whyChooseUsListingDescription}</p>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className=" w-[30%] p-[20px]">
                  <div className=" bg-primary p-[30px]">
                    <h3 className=" text-[26px] text-white font-medium mb-3">
                      Get An Estimate
                    </h3>
                    <p className=" text-white mb-[2em]">
                      If you need custom metal fabrication and powder coating
                      for your fencing and gate needs, don’t hesitate to contact
                      us. Fill out our form today to request a free estimate!
                    </p>

                    <Button
                      variant="secondary"
                      className="px-[58px] text-[14.4px] min-w-auto w-full tracking-[1px] transform transition-transform duration-300 ease-in-out hover:-translate-y-1"
                      onClick={() => (window.location.href = quoteLink)}
                    >
                      {`GET A FREE ESTIMATE >`}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
  0;
};

export default FenceServiceDetails;
