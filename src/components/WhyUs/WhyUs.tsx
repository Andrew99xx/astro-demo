import React from "react";
import type { IWhyUsQuery } from "../../graphql/generatedType/cmsTypes";
import moment from "moment";
import FenceServiceSidebar from "../FenceServiceSidebar/FenceServiceSidebar";
import type { IFenceServicesSidebarQuery } from "../../graphql/generatedType/FenceServiceTypes";
import { CloudfrontImg } from "../ui/CloudfrontImg";

export const fenceServicesData: IFenceServicesSidebarQuery = {
  allFenceServices: {
    edges: [
      {
        node: {
          title: "Why Us",
          slug: "why-superior-fence-rail",
          seo: undefined,
        },
      },
      {
        node: {
          title: "Ratings & Reviews",
          slug: "fence-company-reviews",
          seo: undefined,
        },
      },
      {
        node: {
          title: "FAQs",
          slug: "faqs",
          seo: undefined,
        },
      },
      {
        node: {
          title: "Employment",
          slug: "employment",
          seo: undefined,
        },
      },
      {
        node: {
          title: "Fence News",
          slug: "fence-news",
          seo: undefined,
        },
      },
    ],
  },
};
export const locationBasedFenceServicesData: IFenceServicesSidebarQuery = {
  allFenceServices: {
    edges: [
      {
        node: {
          title: "Why Us",
          slug: "why-superior-fence-rail",
          seo: undefined,
        },
      },
      {
        node: {
          title: "Ratings & Reviews",
          slug: "fence-company-reviews",
          seo: undefined,
        },
      },

      {
        node: {
          title: "Fence News",
          slug: "fence-news",
          seo: undefined,
        },
      },
    ],
  },
};

const WhyUsSec = ({ data }: { data: IWhyUsQuery }) => {
  const commonData = data?.page?.whyUs?.whyUsBlocks;
  const postData = data?.posts?.edges;

  return (
    <div className="py-[150px]">
      <div className="container">
        <div className="flex flex-wrap  -m-5">
          <div className="w-[25%] p-5">
            <FenceServiceSidebar
              data={fenceServicesData}
              baseRoute={"about-us"}
              title="Fence Services"
            />
          </div>
          <div className="w-[75%] p-5">
            {commonData?.map((eachItem, index) => (
              <div key={index + 1}>
                <div>
                  <h2 className=" mb-2 text-[1.8rem] font-normal">
                    {eachItem?.whyUsBlocksHeading}
                  </h2>
                  <p className=" text-[1.1rem] text-[#707070] font-normal font-montserratregular">
                    {eachItem?.whyUsBlocksDescription}
                  </p>
                  <div className=" mt-[2em]">
                    {eachItem?.whyUsBlocksListing?.map((eachInnerData) => (
                      <div
                        className=" flex flex-wrap -mx-6 pb-[2em]"
                        key={eachInnerData?.whyUsBlocksListingHeading}
                      >
                        <div className=" w-1/4 px-6">
                          <figure>
                            <CloudfrontImg
                              src={
                                eachInnerData?.whyUsBlocksListingIcon?.node
                                  ?.mediaItemUrl
                              }
                              alt={
                                eachInnerData?.whyUsBlocksListingIcon?.node
                                  ?.altText
                              }
                            />
                          </figure>
                        </div>
                        <div className=" w-3/4 px-6">
                          <h3 className=" font-bold text-[#707070] text-base mb-[1em] font-robotobold">
                            {eachInnerData?.whyUsBlocksListingHeading}
                          </h3>
                          <div
                            className=" why_us_block"
                            dangerouslySetInnerHTML={{
                              __html:
                                eachInnerData?.whyUsBlocksListingDescription,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pb-[100px] border-b-[10px]  border-primary" />
      <div className=" pt-[100px]">
        <div className="container">
          <div className="text-center mb-[40px]">
            <h4 className="text-center text-[12px] font-semibold uppercase">
              FENCE NEWS
            </h4>
            <h2 className="text-center">Recent Posts</h2>
          </div>
          <div className="flex flex-wrap -m-3">
            {postData.map((item, index) => (
              <div className="w-[33.33%] p-3" key={index}>
                <a
                  href="#url"
                  className="block transition-all duration-300 ease-in-out overflow-hidden m-0 h-[252px]   fencenews_fig "
                >
                  <CloudfrontImg
                    src={item.node?.featuredImage?.node?.mediaItemUrl}
                    alt={item.node?.featuredImage?.node?.altText}
                    className="size-full object-cover transition-all duration-500 ease-in-out"
                  />
                </a>

                <div className="p-4 bg-[rgba(0,0,0,.04)] ">
                  <div className="flex items-center justify-center">
                    <p className="text-[12px] font-montserratregular">
                      {moment(item?.node?.date).format("MMM DD YYYY")}
                    </p>
                    {/* <a href="#url">Fence Video Tutorials</a> */}
                  </div>
                  <h3 className="mb-[10px] text-center">
                    <a
                      // href={item?.node?.slug}
                      href="#url"
                      className="transition-all duration-500 ease-in-out hover:text-primary"
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
    </div>
  );
};

export default WhyUsSec;
