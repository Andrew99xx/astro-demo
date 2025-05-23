import React from "react";
import type {
  IEmploymentQuery,
  ILocationBasedEmployment,
} from "../../graphql/generatedType/EmploymentTypes";
import { Button } from "../ui/button";
import FenceServiceSidebar from "../FenceServiceSidebar/FenceServiceSidebar";
import moment from "moment";
import { fenceServicesData } from "../WhyUs/WhyUs";
import { CloudfrontImg } from "../ui/CloudfrontImg";
import { slugify } from "../../lib/utils";

const LocationBasedEmploymentSec = ({
  data,
  parentSlugName,
}: {
  data: ILocationBasedEmployment;
  parentSlugName: string;
}) => {
  return (
    <div>
      <div
        className="pt-[200px] pb-[150px] z-20 banner_sec relative"
        style={{
          backgroundImage: `url(${data.pages.edges[0].node.commonHeaderBanner.commonHeaderBannerBackground.node.mediaItemUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="flex flex-wrap -m-[10px]">
            <div className="w-[65%] p-[10px]">
              <div className="bg-[rgba(255,255,255,.8)]  text-left">
                <div className="p-[30px]">
                  <h1 className="text-primary text-[60px] text-left leading-[1.1] pb-[30px] relative after:bg-primary after:absolute after:left-0 after:bottom-[15px] after:w-[60px] after:h-[2px]">
                    {
                      data.pages.edges[0].node.commonHeaderBanner
                        .commonHeaderBannerTitle
                    }
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-[35%] p-[10px]">
              <div className="bg-primary py-[35px] px-[20px]">
                <h3 className="text-white text-[22px] font-medium mb-5 ">
                  {
                    data.pages.edges[0].node.commonHeaderBanner
                      .commonHeaderBannerListingTitle
                  }
                </h3>
                <ul className="pl-[40px]">
                  {data.pages.edges[0].node.commonHeaderBanner.commonHeaderBannerListing.map(
                    (item, index) => (
                      <li className="flex justify-start w-[auto] mb-[10px]">
                        <span className=" inline-flex shrink-0 items-center justify-center text-[24px] w-[32px] h-[32px] rounded-full bg-white text-primary font-bold">
                          {index + 1}
                        </span>
                        <p className="text-white text-[16px] pl-[12px] text-left">
                          {item.listName}
                        </p>
                      </li>
                    )
                  )}
                </ul>
                <div className="text-center mt-[20px]">
                  <Button
                    variant="secondary"
                    className="px-[58px] text-[14.4px] min-w-auto w-full tracking-[1px] transform transition-transform duration-300 ease-in-out hover:-translate-y-1"
                    onClick={() =>
                      (window.location.href = "/fence-service-locations")
                    }
                  >
                    {"APPLY TODAY >"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[100px] pb-[60px]">
        <div className="container">
          <div className="flex flex-wrap  -m-5 ">
            <div className="w-[30%] p-5">
              <div className="bg-[rgba(255, 255, 255, .8)] p-[30px 20px]">
                <FenceServiceSidebar
                  data={fenceServicesData}
                  baseRoute={`${parentSlugName}`}
                  title="About Us"
                  link={`/${parentSlugName}/about`}
                />
              </div>
            </div>
            <div className="w-[70%] p-5">
              <div
                dangerouslySetInnerHTML={{
                  __html: data.pages.edges[0].node.content,
                }}
                className="employmentLft_cnt"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[8px] bg-primary"></div>

      <div className="recent_post py-[100px]">
        <div className="mb-[90px] text-center">
          <p className="text-[12px] font-montserratsemibold text-headingPrimary">
            FENCE NEWS
          </p>
          <h2>Recent Posts</h2>
        </div>
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            {data.posts.edges.map((item, index) => (
              <div className="col-span-4" key={index}>
                <div className="relative  bg-[rgba(0,0,0,.04)]">
                  <figure className="w-full overflow-hidden m-0 leading-[0]">
                    <a
                      href={`/fence-installation/${slugify(item?.node?.title)}`}
                      className="hover:scale-105 transition-all duration-300 inline-block"
                    >
                      <CloudfrontImg
                        src={item?.node?.featuredImage?.node?.mediaItemUrl}
                        alt={item?.node?.featuredImage?.node?.altText}
                        className="w-full"
                      />
                    </a>
                  </figure>
                  <div className=" p-4 text-center font-montserratregular">
                    <p className="uppercase text-[12px] font-medium mb-[8px]">
                      {moment(item?.node?.date).format("MMMM DD, YYYY")}
                    </p>
                    <ul className=" mb-2 flex flex-wrap justify-center">
                      {item?.node?.categories?.edges?.map((category) => (
                        <li key={category?.node?.name}>
                          <a
                            href={`/category/${category?.node?.slug.toLocaleLowerCase()}`}
                            className="text-[.8rem] uppercase font-medium hover:text-[#51acfb] transition-all duration-300"
                          >
                            {category?.node?.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <h3 className="leading-[1.3] mb-[10px] line-clamp-2">
                      <a
                        href={`/fence-installation/${slugify(
                          item?.node?.title
                        )}`}
                        className="hover:text-[#51acfb] transition-all duration-300"
                      >
                        {item?.node?.title}
                      </a>
                    </h3>
                    <div
                      className="text-black text-[14px] line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html: item?.node?.excerpt,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationBasedEmploymentSec;
