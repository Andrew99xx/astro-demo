import React from "react";

import assets from "../../json/assets";
import { Button } from "../ui/button";
import type {
  FenceCategoryDetails,
  ICategoryType,
  IFenceTypesSidebar,
} from "../../graphql/generatedType/FenceTypeResponseTypes";
import FenceTypeSidebar from "../FenceTypeSidebar/FenceTypeSidebar";
import ReactPlayer from "react-player";
import dayjs from "dayjs";
import { CloudfrontImg } from "../ui/CloudfrontImg";
import { quoteLink } from "../Header/Header";
import { slugify } from "../../lib/utils";
import ReactFancybox from "../ui/ReactFacncyBox";

const VinyleFence = ({
  data,
  sideBarData,
  categoryPostData,
}: {
  data: FenceCategoryDetails;
  sideBarData: IFenceTypesSidebar;
  categoryPostData: ICategoryType;
}) => {
  const commonData =
    data?.allFenceTypesCategory?.edges[0]?.node?.fenceTypesCategoryPurpose;

  const slugTitle = data?.allFenceTypesCategory?.edges[0]?.node?.name;

  const chooseCategoryUri =
    commonData?.fenceNewsChooseCategory?.edges[0]?.node?.uri;

  console.log("commonData", data);
  console.log(chooseCategoryUri, "chooseCategoryUri");

  return (
    <div>
      <div className="py-[80px]">
        <div className="container">
          <div className="flex flex-wrap  -m-5">
            <div className="w-[25%] p-5">
              <FenceTypeSidebar data={sideBarData} />
            </div>
            <div className="w-[75%] p-5">
              <h2 className="mb-[10px]">{commonData?.fenceTypesPageHeading}</h2>
              <div className="flex  mb-[20px]">
                <i className="flex-shrink-0 w-[138px]">
                  <CloudfrontImg
                    src={commonData?.fenceTypesIcon?.node?.mediaItemUrl}
                    alt={commonData?.fenceTypesIcon?.node?.altText}
                  />
                </i>
                <p className="pl-[60px] w-[calc(100% - 138px)]">
                  {commonData?.fenceTypesPageHeadingDescription}
                </p>
              </div>
              <ReactFancybox
                options={{
                  Carousel: {
                    infinite: false,
                  },
                }}
              >
                <div className="flex flex-wrap -m-2 vinylFancy_box">
                  {commonData?.fenceTypesGallery?.edges?.map((item) => (
                    <div className="w-[25%] p-2" key={item?.node?.altText}>
                      <a
                        href={item?.node?.mediaItemUrl}
                        data-fancybox="gallery"
                        className="border-[4px] border-solid borderColor-[#cccaca]  inline-block  vinyl_figure"
                      >
                        <CloudfrontImg
                          src={item?.node?.mediaItemUrl}
                          alt={item?.node?.altText}
                          className="size-full object-cover"
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </ReactFancybox>

              <div className="flex flex-wrap justify-between mt-8 mb-16 max-w-[575px]">
                <div className="w-[46%]">
                  <Button
                    variant="default"
                    className="px-[58px] text-[14.4px] min-w-auto w-full"
                  >
                    {"VIEW VINYL FENCE STYLES >"}
                  </Button>
                </div>
                <div className="w-[46%]">
                  <Button
                    variant="destructive"
                    className="px-[58px] text-[14.4px] min-w-auto w-full"
                  >
                    {"VIEW VINYL FENCING GALLERY >"}
                  </Button>
                </div>
              </div>
              <div
                className="mb-8 sup_cnt"
                dangerouslySetInnerHTML={{
                  __html: commonData?.superiorFenceInnovationsText,
                }}
              />
              <div className="pl-6">
                {commonData?.fetchTypeAdditionalContentList?.map(
                  (item, index) => (
                    <div className="flex mb-10" key={index}>
                      <i className="w-[160px] flex-shrink-0">
                        <CloudfrontImg
                          src={
                            item?.fetchTypeAdditionalContentListIcon?.node
                              ?.mediaItemUrl
                          }
                          alt={
                            item?.fetchTypeAdditionalContentListIcon?.node
                              ?.altText
                          }
                          className="size-full"
                        />
                      </i>
                      <p className="w-[calc(100% - 200px)] pl-12">
                        {item?.fetchTypeAdditionalContentListDescription}
                      </p>
                    </div>
                  )
                )}
              </div>
              <div
                className="mb-8 sup_cnt"
                dangerouslySetInnerHTML={{
                  __html: commonData?.longDescription,
                }}
              />

              <div className="max-w-[252px] mt-[30px]">
                <Button
                  variant="default"
                  className="px-[58px] text-[14.4px] min-w-auto w-full"
                  onClick={() => (window.location.href = quoteLink)}
                >
                  {"GET A FENCE QUOTE >"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[8px] bg-[#ededed]"></div>
      {commonData?.popularFenceStylesImages?.edges?.length > 0 && (
        <div className="py-[80px]">
          <div className="container">
            <h2 className="text-center mb-[30px]">
              {commonData?.popularFenceStylesHeading}
            </h2>
            <ReactFancybox
              options={{
                Carousel: {
                  infinite: false,
                },
              }}
            >
              <div className="flex flex-wrap -m-[15px]">
                {commonData?.popularFenceStylesImages?.edges?.map(
                  (item, index) => (
                    <div className="w-[33.33%] p-[15px]">
                      <div className="h-full">
                        <a
                          href={item?.node?.mediaItemUrl}
                          data-fancybox="gallery"
                          className=" w-full mb-[5px] inline-block border-[4px]  border-solid border-[#cccaca]  populer_fig"
                          key={index}
                        >
                          <CloudfrontImg
                            src={item?.node?.mediaItemUrl}
                            alt={item?.node?.altText}
                            className="size-full object-contain transition-all duration-300 ease-in-out"
                          />
                        </a>

                        <h3 className="text-[18px] font-robotobold  text-primary text-center">
                          <a
                            href="#url"
                            className="inline-block hover:text-[#252525] transition-all duration-300 ease-in-out "
                          >
                            {item?.node?.altText}
                          </a>
                        </h3>
                      </div>
                    </div>
                  )
                )}
              </div>
            </ReactFancybox>
          </div>
        </div>
      )}

      {commonData?.noaHeading && (
        <div
          style={{
            background:
              "url(https://d1qpm27e29dlmy.cloudfront.net/wp-content/uploads/2025/02/04134438/Testimonial_BG.png)",
          }}
        >
          <div className="py-[80px]">
            <div className="container">
              <div className="flex ">
                <div className="w-[153px] flex-shrink-0">
                  <CloudfrontImg
                    src={commonData?.noaIcon?.node?.mediaItemUrl}
                    alt={commonData?.noaIcon?.node?.altText}
                    width={153}
                    height={153}
                  />
                </div>
                <div className="w-[calc(100% - 153px)] pl-[40px]">
                  <h2 className="mb-[20px] text-[28px]">
                    {commonData?.noaHeading}
                  </h2>
                  <div
                    className="miami_cnt"
                    dangerouslySetInnerHTML={{
                      __html: commonData?.noaDescription,
                    }}
                  />

                  <ReactPlayer
                    url={commonData.noaDescriptionYoutubeLink}
                    width={580}
                    height={326}
                    controls={true}
                  />
                  {/* <ReactFancybox options={{ Carousel: { infinite: false } }}>
                  <a
                    data-fancybox="video-gallery"
                    href={commonData?.noaDescriptionYoutubeLink}
                    className="inline-block w-[580px] h-[326px]"
                  >
                    <CloudfrontImg
                      src=""
                      alt=""
                      className="size-full object-cover"
                    />
                  </a>
                </ReactFancybox> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {commonData?.fenceTypesWarrantyDescription && (
        <>
          <div className="w-full h-[8px] bg-primary"></div>
          <div className="py-[80px]">
            <div className="container">
              <div className="flex">
                <div className="w-[70%]">
                  <div className="p-[40px] bg-[#ededed]">
                    {/* <h2 className="text-[24px] mb-[20px]">Vinyl Fence Care</h2> */}
                    <div
                      className="vinyl_lst"
                      dangerouslySetInnerHTML={{
                        __html: commonData?.fenceTypesWarrantyDescription,
                      }}
                    />
                  </div>
                </div>
                <div className="w-[30%] pt-[40px] pl-[40px]">
                  <h2 className="text-[24px] mb-[10px]">
                    {commonData?.fenceTypesWarrantyRightSideHeading}
                  </h2>
                  <p className="mb-[20px]">
                    {commonData?.fenceTypesWarrantyRightSideDescription}
                  </p>
                  {commonData?.fenceTypesWarrantyPdfLink?.node
                    ?.mediaItemUrl && (
                    <a
                      href={
                        commonData?.fenceTypesWarrantyPdfLink?.node
                          ?.mediaItemUrl
                      }
                      className="inline-block w-[148px] h-[127px] mb-3"
                      target="_blank"
                    >
                      <CloudfrontImg
                        src={assets?.pdfImg}
                        alt="pdfImg"
                        className="size-full object-contain"
                      />
                    </a>
                  )}

                  <p className="max-w-[149px] text-center">
                    <strong>{commonData?.fenceTypesWarrantyPdfName}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="w-full h-[8px] bg-primary"></div>
      {commonData?.chooseFromFenceInstallationVideo?.edges?.length > 0 && (
        <div className="py-[80px]">
          <div className="container">
            <div className="mb-[40px]">
              <h4 className="text-center text-[12px] font-semibold">
                {commonData?.fenceVideoHeading}
              </h4>
              <h2 className="text-center">
                {commonData?.fenceVideoSubHeading}
              </h2>
            </div>
            <div className="flex flex-wrap -m-3">
              {commonData?.chooseFromFenceInstallationVideo?.edges?.map(
                (item, index) => (
                  <div className="w-[33.33%] p-3" key={index}>
                    <a
                      href={`/fence-video-tutorials/${item?.node?.slug}`}
                      // href={`${window.location.origin}/fence-video-tutorials/${item?.node?.slug}`}
                    >
                      <CloudfrontImg
                        src={
                          item?.node?.fenceVideoTutorialPagePurpose
                            ?.videoThumbImage?.node?.mediaItemUrl
                        }
                        alt={
                          item?.node?.fenceVideoTutorialPagePurpose
                            ?.videoThumbImage?.node?.altText
                        }
                      />
                    </a>

                    <div className="p-4 bg-[rgba(0,0,0,.04)] ">
                      <div className="flex items-center justify-center">
                        <p className="text-[12px] font-montserratregular">
                          {dayjs(item?.node?.date).format("MMM DD YYYY")}
                        </p>
                      </div>
                      <h3 className="mb-[10px] text-center">
                        <a
                          // href={item?.node?.slug}
                          href={`/fence-video-tutorials/${item?.node?.slug}`}
                          className="transition-all duration-300 ease-in-out hover:text-primary"
                        >
                          {item?.node?.title}
                        </a>
                      </h3>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item?.node?.excerpt,
                        }}
                        className="text-center fenceinstall_cnt"
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* {commonData?.chooseFromFenceNews?.edges?.length > 0 && (
        <div className="pb-[80px]">
          <div className="container">
            <div className="text-center mb-[40px]">
              <h4 className="text-center text-[12px] font-semibold uppercase">
                {commonData?.fenceNewsHeading}
              </h4>
              <h2 className="text-center">{commonData.fenceNewsSubHeading}</h2>
            </div>
            <div className="flex flex-wrap -m-3">
              {commonData?.chooseFromFenceNews?.edges?.map((item, index) => (
                <div className="w-[33.33%] p-3" key={index}>
                  <a
                    href={`${chooseCategoryUri
                      .split("/")
                      .filter((_, index) => index !== 1)
                      .join("/")}${item?.node?.slug}`}
                    className="block transition-all duration-300 ease-in-out overflow-hidden m-0 h-[252px]   fencenews_fig "
                  >
                    <CloudfrontImg
                      src={item?.node?.featuredImage?.node?.mediaItemUrl}
                      alt={item?.node?.featuredImage?.node?.altText}
                      className="size-full object-cover transition-all duration-300 ease-in-out"
                    />
                  </a>

                  <div className="p-4 bg-[rgba(0,0,0,.04)] ">
                    <div className="flex items-center justify-center">
                      <p className="text-[12px] font-montserratregular">
                        {dayjs(item?.node?.date).format("MMM DD YYYY")}
                      </p>
                    </div>
                    <h3 className="mb-[10px] text-center">
                      <a
                        href={`/fence-types/${slugify(slugTitle)}/${
                          item?.node?.slug
                        }`}
                        className="transition-all duration-300 ease-in-out hover:text-primary"
                      >
                        {item?.node?.title}
                      </a>
                    </h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item?.node?.excerpt,
                      }}
                      className="text-center fenceinstall_cnt"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )} */}
      {categoryPostData?.posts?.edges?.length > 0 && (
        <div className="py-[80px]">
          <div className="container">
            <div className="text-center mb-[40px]">
              <h4 className="text-center text-[12px] font-semibold uppercase">
                {commonData?.fenceNewsHeading}
              </h4>
              <h2 className="text-center">{commonData.fenceNewsSubHeading}</h2>
            </div>
            <div className="flex flex-wrap -m-3">
              {categoryPostData?.posts?.edges?.map((item, index) => (
                <div className="w-[33.33%] p-3" key={index}>
                  <a
                    href={`${chooseCategoryUri
                      .split("/")
                      .filter((_, index) => index !== 1)
                      .join("/")}${item?.node?.slug}`}
                    className="block transition-all duration-300 ease-in-out overflow-hidden m-0 h-[252px]   fencenews_fig "
                  >
                    <CloudfrontImg
                      src={item?.node?.featuredImage?.node?.mediaItemUrl}
                      alt={item?.node?.featuredImage?.node?.altText}
                      className="size-full object-cover transition-all duration-300 ease-in-out"
                    />
                  </a>

                  <div className="p-4 bg-[rgba(0,0,0,.04)] ">
                    <div className="flex items-center justify-center">
                      <p className="text-[12px] font-montserratregular">
                        {dayjs(item?.node?.date).format("MMM DD YYYY")}
                      </p>
                    </div>
                    <h3 className="mb-[10px] text-center">
                      <a
                        href={`${chooseCategoryUri
                          .split("/")
                          .filter((_, index) => index !== 1)
                          .join("/")}${item?.node?.slug}`}
                        className="transition-all duration-300 ease-in-out hover:text-primary"
                      >
                        {item?.node?.title}
                      </a>
                    </h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item?.node?.excerpt,
                      }}
                      className="text-center fenceinstall_cnt"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {commonData?.fenceEstimateBlockShortDescription && (
        <div className="py-[80px] bg-[#ededed]">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="w-[70%]">
                <h2 className="text-[24px] mb-[10px]">
                  {commonData?.fenceEstimateHeading}
                </h2>

                <p> {commonData?.fenceEstimateDescription}</p>
              </div>
              <div className="w-[30%]">
                <div className="bg-primary px-[30px] py-[22px]">
                  <h3 className="text-[26px] text-white mb-[15px]">
                    {commonData?.fenceEstimateBlockTitle}
                  </h3>
                  <p className="text-white mb-[20px]">
                    {commonData?.fenceEstimateBlockShortDescription}
                  </p>
                  <Button
                    variant="default"
                    className="px-[58px] text-[14.4px] min-w-auto w-full !bg-white !text-primary hover:!bg-black hover:!text-white"
                    onClick={() => (window.location.href = quoteLink)}
                  >
                    {"GET A FENCE QUOTE >"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VinyleFence;
