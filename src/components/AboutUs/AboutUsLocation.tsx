import React from "react";

import FenceServiceSidebar from "../FenceServiceSidebar/FenceServiceSidebar";
import { fenceServicesData } from "../WhyUs/WhyUs";

import type { ILocationDetailsAboutUs } from "../../graphql/generatedType/LocationDetailsTypes";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { Button } from "../ui/button";
import NoSSR from "../NoSSR/NoSSR";
import TestimonialCard from "../Testimonial/TestimonialCard";
import moment from "moment";
import { CloudfrontImg } from "../ui/CloudfrontImg";
import { slugify } from "../../lib/utils";

const AboutUsLocation = ({
  data,
  parentSlugName,
}: {
  data: ILocationDetailsAboutUs;
  parentSlugName?: string;
}) => {
  const pagedata = data?.pages?.edges[0]?.node;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="pt-[130px] pb-[64px]">
        <div className="container">
          <div className="flex flex-wrap -m-5">
            <div className="w-[25%] p-5">
              <FenceServiceSidebar
                data={fenceServicesData}
                baseRoute={`${parentSlugName}`}
                title="About Us"
              />
            </div>
            <div className="w-[75%] p-5">
              <div
                className=" mb-[2rem] abt_content"
                dangerouslySetInnerHTML={{
                  __html: pagedata?.aboutUsPagePurpose?.aboutUsIntroContent,
                }}
              ></div>
              <Button
                className=" mb-[2rem]"
                onClick={() => (window.location.href = "/fence-types")}
              >
                {pagedata.aboutUsPagePurpose?.aboutUsIntroButtonText}
              </Button>

              <div className=" flex flex-wrap -mx-[20px]">
                <div className="  w-[310px] px-[20px]">
                  <div className=" bg-[rgba(204,202,202,1)] p-[20px] h-[250px]">
                    <h3 className=" text-[1.3rem] text-headingPrimary mb-[15px]">
                      {pagedata?.aboutUsPagePurpose?.missionHeading}:{" "}
                    </h3>
                    <p>{pagedata?.aboutUsPagePurpose?.missionDescription}</p>
                  </div>
                </div>

                <div className="  w-[calc(100%-310px)] px-[20px]">
                  <div className=" bg-[rgba(204,202,202,1)] p-[20px] h-[250px]">
                    <h3 className=" text-[1.3rem] text-headingPrimary mb-[15px]">
                      {pagedata?.aboutUsPagePurpose?.valuesHeading}:{" "}
                    </h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: pagedata?.aboutUsPagePurpose?.valuesDescription,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ededed] py-[100px]">
        <div className="container">
          <div className="text-center max-w-[800px] mx-[auto]">
            <h2 className="mb-[20px]">
              {
                data?.pages?.edges[0]?.node?.aboutUsPagePurpose
                  ?.whyChooseSuperiorHeading
              }
            </h2>
            <p>
              {
                data?.pages?.edges[0]?.node?.aboutUsPagePurpose
                  ?.whyChooseSuperiorDescription
              }
            </p>
            <div className="text-center mt-[30px]">
              <Button
                variant="default"
                className="font-robotobold"
                onClick={() =>
                  (window.location.href = "/about-us/why-superior-fence-rail/")
                }
              >
                {
                  data?.pages?.edges[0]?.node?.aboutUsPagePurpose
                    ?.whyChooseSuperiorButtonText
                }{" "}
                {">"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary py-[100px]">
        <div className="container">
          <div className="flex flex-wrap -m-[20px]">
            <div className="w-[50%] px-[20px]">
              <figure className="border-[4px] border-solid border-[#cccaca]">
                <CloudfrontImg
                  src={
                    data?.pages.edges[0]?.node.aboutUsPagePurpose?.faqsImage
                      .node.mediaItemUrl
                  }
                  alt={
                    data?.pages.edges[0].node.aboutUsPagePurpose.faqsImage.node
                      .altText
                  }
                />
              </figure>
            </div>
            <div className="w-[50%] px-[20px]">
              <h2 className="text-white mb-[40px]">
                {data?.pages?.edges[0]?.node?.aboutUsPagePurpose?.faqsHeading}
              </h2>

              <Accordion type="single" collapsible className="w-full">
                {data?.pages.edges[0]?.node.aboutUsPagePurpose?.faqsListing?.map(
                  (item, index) => (
                    <AccordionItem
                      value={`item-${index + 1}`}
                      className="bg-white mb-1"
                      key={index + 1}
                    >
                      <AccordionTrigger className="[&[data-state=open]_.addIcon]:opacity-0 [&[data-state=closed]_.minusIcon]:opacity-0 [&[data-state=open]_.minusIcon]:opacity-1  [&[data-state=open]]:bg-[#D0D0D0]  py-[22px] px-[24px] decoration-none hover:no-underline hover:bg-[#D0D0D0] font-montserratsemibold">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="py-4 !pt-4 px-[24px]">
                        <div
                          className="abtAccr_cnt"
                          dangerouslySetInnerHTML={{
                            __html: item.answer,
                          }}
                        ></div>
                      </AccordionContent>
                    </AccordionItem>
                  )
                )}
              </Accordion>

              <div className="mt-[50px]">
                <Button
                  variant="destructive"
                  className="!text-[#252525] font-robotobold hover:!bg-[#252525] hover:!text-white"
                >
                  {
                    data?.pages?.edges[0]?.node?.aboutUsPagePurpose
                      ?.faqsButtonText
                  }
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[8px] bg-[#ededed]"></div>

      <div className="py-[100px]">
        <div className="container">
          <div className="max-w-[900px] mx-[auto] text-center">
            <h2 className="mb-[30px]">
              {
                data?.pages?.edges[0].node.aboutUsPagePurpose
                  ?.workForSuperiorFenceHeading
              }
            </h2>
            <p className="mb-[40px]">
              {
                data?.pages?.edges[0]?.node?.aboutUsPagePurpose
                  ?.workForSuperiorFenceDescription
              }
            </p>

            <Button
              variant="default"
              className="font-robotobold"
              onClick={() =>
                (window.location.href = `/${parentSlugName}/employment`)
              }
            >
              {
                data?.pages?.edges[0]?.node?.aboutUsPagePurpose
                  ?.workForSuperiorFenceButtonText
              }
            </Button>
          </div>
        </div>
      </div>

      <div
        className=""
        style={{
          background:
            "url(https://www.superiorfenceandrail.com/wp-content/uploads/2019/04/Testimonial_BG.png)",
        }}
      >
        <div className="text-center py-[50px]">
          <h2 className="mb-8">Testimonials</h2>
          <div className="max-w-[1024px] min-h-48 mx-auto mb-8">
            <NoSSR>
              <Slider {...settings}>
                {data?.allTestimonials.edges?.map((item, index) => (
                  <div key={index} className="px-2">
                    <TestimonialCard
                      author={item?.node?.title}
                      content={item?.node?.content}
                      headline={
                        item?.node?.testimonialsSettings
                          ?.testimonialsHighlightText
                      }
                      rating={item?.node?.testimonialsSettings?.ratings}
                    />
                  </div>
                ))}
              </Slider>
            </NoSSR>
          </div>
          <div className="flex justify-center">
            <Button
              variant="default"
              className="mt-10"
              onClick={() =>
                (window.location.href = `/${parentSlugName}/fence-company-reviews/`)
              }
            >
              See all our testimonials
            </Button>
          </div>
        </div>
      </div>
      <div className="py-[4px] bg-primary"></div>
      <div className="py-[100px] suprior_sec">
        <div className="container">
          <div className="max-w-[800px] mx-[auto] text-center">
            <h2 className="mb-[30px]">
              {
                data?.pages?.edges[0]?.node?.aboutUsPagePurpose
                  ?.ownASuperiorFenceHeading
              }
            </h2>
            <p className="mb-[30px]">
              {
                data?.pages?.edges[0]?.node?.aboutUsPagePurpose
                  ?.ownASuperiorFenceDescription
              }
            </p>
            <Button
              variant="default"
              className="font-robotobold"
              onClick={() =>
                (window.location.href =
                  "https://fencefranchise.superiorfenceandrail.com/")
              }
            >
              {
                data?.pages?.edges[0]?.node?.aboutUsPagePurpose
                  ?.ownASuperiorFenceButtonText
              }{" "}
              {">"}
            </Button>
          </div>
        </div>
      </div>
      <div className="py-[4px] bg-primary"></div>

      <div className="py-[90px]">
        <div className="container">
          <div className="mb-[90px] text-center">
            <p className="text-[12px] font-montserratsemibold  text-[#252525]">
              FENCE NEWS
            </p>
            <h2>Recent Posts</h2>
          </div>
          <div className="grid grid-cols-12 gap-8">
            {data?.posts?.edges?.map((item, index) => (
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
                    {/* <p className="uppercase text-[12px] font-medium mb-[8px]">
                      {moment(item?.node?.date).format("MMMM DD, YYYY")}
                    </p> */}
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

export default AboutUsLocation;
