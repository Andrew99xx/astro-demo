import React from "react";
import type { IEmploymentQuery } from "../../graphql/generatedType/EmploymentTypes";
import { Button } from "../ui/button";
import FenceServiceSidebar from "../FenceServiceSidebar/FenceServiceSidebar";
import moment from "moment";
import { fenceServicesData } from "../WhyUs/WhyUs";
import useMediaUrl from "../../hooks/useMediaUrl";
import CompanyContent from "../CompanyContent/CompanyContent";
import { CloudfrontImg } from "../ui/CloudfrontImg";

const EmploymentSec = ({ data }: { data: IEmploymentQuery }) => {
  console.log(data, "des");
  const { getMediaUrl } = useMediaUrl();

  return (
    <div>
      <div
        className="pt-[200px] pb-[150px] z-20 banner_sec relative"
        style={{
          backgroundImage: `url(${getMediaUrl(
            data.page.commonHeaderBanner.commonHeaderBannerBackground.node
              .mediaItemUrl
          )})`,
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
                    {data.page.commonHeaderBanner.commonHeaderBannerTitle}
                  </h1>
                  <p>
                    {data.page.commonHeaderBanner.commonHeaderBannerDescription}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[35%] p-[10px]">
              <div className="bg-primary py-[35px] px-[20px]">
                <h3 className="text-white text-[22px] font-medium mb-5 ">
                  {data.page.commonHeaderBanner.commonHeaderBannerListingTitle}
                </h3>
                <ul className="pl-[40px]">
                  {data.page.commonHeaderBanner.commonHeaderBannerListing.map(
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
                    onClick={() => (window.location.href = "#applytoday")}
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
                  baseRoute={"about-us"}
                  title="About Us"
                />
              </div>
            </div>
            <div className="w-[70%] p-5">
              <CompanyContent
                data={data.page.content}
                className="employmentLft_cnt"
              />
              <div className="py-[30px]" id="applytoday">
                <h2 className="font-normal text-[36px] mb-[10px] text-primary">
                  Apply Today
                </h2>
                <p className="text-[17px] text-primary font-montserratregular mb-[20px]">
                  Take your career to the next level with Superior Fence & Rail
                </p>
                <div className="flex flex-wrap -m-[8px] form_sec">
                  <div className="w-[50%] p-[8px]">
                    <label className="text-[14px] text-[#999] font-medium mb-[7px] inline-block">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px]"
                    />
                  </div>
                  <div className="w-[50%] p-[8px]">
                    <label className="text-[14px] text-[#999] font-medium mb-[7px] inline-block">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="w-full border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px]"
                    />
                  </div>
                  <div className="w-[50%] p-[8px]">
                    <label className="text-[14px] text-[#999] font-medium mb-[7px] inline-block">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px]"
                    />
                  </div>
                  <div className="w-[50%] p-[8px]">
                    <label className="text-[14px] text-[#999] font-medium mb-[7px] inline-block">
                      Phone *
                    </label>
                    <input
                      type="phone"
                      className="w-full border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px]"
                    />
                  </div>
                  <div className="w-[50%] p-[8px]">
                    <label className="text-[14px] text-[#999] font-medium mb-[7px] inline-block">
                      Select a Position *
                    </label>
                    <input
                      type="text"
                      placeholder="Select a Position"
                      className="w-full border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px]"
                    />
                    <p className="text-[12px] text-[#666666]">
                      The position you're applying for.
                    </p>
                  </div>
                  <div className="w-[50%] p-[8px]">
                    <label className="text-[14px] text-[#999] font-medium mb-[7px] inline-block">
                      Select an Office *
                    </label>
                    <input
                      type="text"
                      placeholder="Select an Office"
                      className="w-full border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px]"
                    />
                  </div>
                  <div className="w-full p-[8px]">
                    <label className="text-[14px] text-[#999] font-medium mb-[7px] inline-block">
                      Introduction *
                    </label>
                    <textarea className="w-full border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px] h-[132px] resize-none" />
                    <p className="text-[12px] text-[#666666]">
                      Please tell us about yourself.
                    </p>
                  </div>
                  <div className="mt-[20px]">
                    <Button variant="default">SEND MESSAGE</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[8px] bg-[#821302]"></div>

      <div className="recent_post py-[100px]">
        <div className="mb-[90px] text-center">
          <p className="text-[12px] font-montserratsemibold text-[#252525]">
            FENCE NEWS
          </p>
          <h2>Recent Posts</h2>
        </div>
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            {data.posts.edges.map((item, index) => (
              <div className="col-span-4" key={index}>
                <div className="relative h-full bg-[rgba(0,0,0,.04)]">
                  <figure className="w-full overflow-hidden m-0 leading-[0]">
                    <a
                      href={`/fence-installation/${item?.node?.slug?.toLocaleLowerCase()}`}
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
                    <h3 className="leading-[1.3] mb-[10px] line-clamp-2">
                      <a
                        href={`/fence-installation/${item?.node?.slug?.toLocaleLowerCase()}`}
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

export default EmploymentSec;
