import React from "react";
import type { IServiceAreaDetailsQueryResult } from "../../graphql/generatedType/ServiceAreaDetailsTypes";
import assets from "../../json/assets";
import StarRating from "../CustomStarRatingComponent/StarRating";
import { Button } from "../ui/button";
import Testimonial from "../Testimonial/Testimonial";
import GetFenceQuote from "../GetAFenceQuoteToday/GetFenceQuote";
import NewsRecentPost from "../NewsRecentPost/NewsRecentPost";
import moment from "moment";
import CustomSingleMapSec from "../CustomFindMap/SingleMap";
import { CloudfrontImg } from "../ui/CloudfrontImg";
import { quoteLink } from "../Header/Header";

const ServiceAreaDetails = ({
  data,
}: {
  data: IServiceAreaDetailsQueryResult;
}) => {
  console.log(data, "data");
  const serviceAreaData = data.allLocation?.edges[0]?.node?.serviceAreaPurpose;

  return (
    <div>
      <div
        className="pt-[200px] pb-[150px] z-20 banner_sec relative"
        style={{
          backgroundImage: `url(${serviceAreaData.headerBannerImage.node.mediaItemUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="flex flex-wrap -m-[10px]">
            <div className="w-[70%] p-[10px]">
              <div className="bg-[rgba(255,255,255,.8)]  text-left">
                <div className="p-[30px]">
                  <h1 className="text-primary text-[40px] font-medium !text-left leading-[1.4]">
                    {serviceAreaData.headerBannerTitle}
                  </h1>
                  <a
                    href="#url"
                    className="text-primary text-[40px] hover:text-secondary transition-all duration-300 ease-in-out"
                  >
                    {serviceAreaData.mapAreaPhone}
                  </a>
                  <p className="font-normal text-[28px] font-montserratregular leading-[1.3] mb-[10px]">
                    {serviceAreaData.headerBannerSubHeading}
                  </p>
                  <p className="mb-[20px]">
                    {serviceAreaData.headerBannerDescription}
                  </p>
                </div>
                <div className="bg-[rgba(128,19,2,0.85)] p-[20px] flex items-center flex-wrap justify-between">
                  <div
                    className="service_fenceTxt"
                    dangerouslySetInnerHTML={{
                      __html: serviceAreaData.financingAvailableText,
                    }}
                  />
                  <div className="relative overflow-hidden ml-[25px] rounded-[10px]">
                    <a
                      href="#url"
                      className="text-[#fff] h-[43px] w-[179px] text-[10px] shineEffect  !capitalize rounded-[10px] font-extrabold bg-[#00b921] tracking-[1px] border border-solid border-[#707070] flex items-center justify-center"
                    >
                      SEE FINANCING OPTIONS {">"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[30%] p-[10px]">
              <div className="bg-[rgba(128,19,2,0.85)] py-[35px] px-[20px] text-center">
                <h3 className="text-white text-[18px] font-medium mb-5 text-center">
                  {serviceAreaData.rightBlockHeading}
                </h3>
                <p className="text-white text-[14px] mb-5 text-center">
                  <i>Watch Now!</i>
                </p>
                <a
                  href={serviceAreaData.howToChooseVideoLink}
                  className="mb-[20px] inline-block"
                >
                  <CloudfrontImg
                    src={serviceAreaData.howToChooseVideo.node.mediaItemUrl}
                    alt={serviceAreaData.howToChooseVideo?.node?.mediaItemUrl}
                    width={306}
                    height={172}
                    loading="lazy"
                  />
                </a>
                <div
                  className="service_howTxt"
                  dangerouslySetInnerHTML={{
                    __html: serviceAreaData.howToChooseText,
                  }}
                />
                <a
                  className="bg-[#707070] px-[25px] pb-[18px] flex text-white w-[270px] min-h-[134px] mx-auto mb-10 relative"
                  target="_blank"
                  href="https://birdeye.com/superior-fence-rail-152044990161311"
                >
                  <img
                    className="absolute top-0 right-[26px]"
                    src={assets.badge}
                  />
                  <div className="relative top-[13px]">
                    <p className="text-[28px] font-light leading-8">20762</p>
                    <p className="text-[28px] max-w-[140px] font-light leading-7">
                      Certified Reviews
                    </p>
                    <div className="mb-2">
                      <StarRating rating={4.8} size="w-3 h-3" />
                    </div>
                  </div>
                </a>
                <div className="text-center mt-[20px]">
                  <Button
                    variant="secondary"
                    className="px-[58px] text-[14.4px] min-w-auto w-full tracking-[1px] transform transition-transform duration-300 ease-in-out hover:-translate-y-1"
                    onClick={() => (window.location.href = quoteLink)}
                  >
                    {"GET A FREE QUOTE >"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="getYour_sec mt-[-60px] z-30 relative">
        <div className="container">
          <div className="bg-[rgba(232,229,229,1)] p-[30px] mx-w-[1100px] m-[0 auto] mb-[100px] getYour_box">
            <h2 className="text-center text-[32px] mb-[30px]">
              {serviceAreaData.getYourNewFenceHeading}
            </h2>
            <div className="flex">
              {serviceAreaData.getYourNewFenceListing.map((item, index) => (
                <div key={index} className="px-[50px] getYour_card">
                  <h3 className="text-primary text-[18px] font-bold mb-[20px] text-center">
                    {item.getYourNewFenceListingName}
                  </h3>
                  <p className="text-[16px] text-[#707070] text-center">
                    {item.getYourNewFenceListingDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Testimonial data={data?.allTestimonials as any} locationSlug={""} />
      <div className="exprience_sec py-[100px]">
        <div className="container">
          <div className="flex flex-wrap -m-[5px] ">
            {serviceAreaData.infoBlocks.map((item, index) => (
              <div className="p-[5px] w-[33.33%] text-center" key={index}>
                <div className="exprience_card py-[30px] px-[20px]">
                  <h3 className="text-primary font-bold text-[20px] mb-[10px]">
                    {item.infoBlocksHeading}
                  </h3>
                  <p className="text-[16px] text-[#303030] font-montserrat">
                    {item.infoBlocksDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <GetFenceQuote fenceData={undefined} fromBtntext="GET STARTED" />

      <div className="bg-primary py-[100px]">
        <div className="container">
          <div className="flex ">
            {serviceAreaData.moreThanYouExpectList.map((item, indeex) => (
              <div className="px-[40px] morethan_card">
                <h3 className="text-white text-center text-[20px] font-semibold mb-[10px] ">
                  {item.moreThanYouExpectListHeading}
                </h3>
                <p className="text-white text-center">
                  {item.moreThanYouExpectDescription}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="recent_post py-[100px]">
        <div className="mb-[90px] text-center">
          <p className="text-[12px] font-montserrat font-semibold text-[#252525]">
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
                      href={`/sw-houston/${item?.node?.slug?.toLocaleLowerCase()}`}
                      className="hover:scale-105 transition-all duration-300 inline-block"
                    >
                      <img
                        src={item?.node?.featuredImage?.node?.mediaItemUrl}
                        alt={item?.node?.featuredImage?.node?.altText}
                        className="w-full"
                      />
                    </a>
                  </figure>
                  <div className=" p-4 text-center font-montserrat">
                    <p className="uppercase text-[12px] font-medium mb-[8px]">
                      {moment(item?.node?.date).format("MMMM DD, YYYY")}
                    </p>
                    <h3 className="leading-[1.3] mb-[10px] line-clamp-2">
                      <a
                        href={`/sw-houston/${item?.node?.slug?.toLocaleLowerCase()}`}
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

      <div className="bg-primary py-[60px]">
        <div className="container">
          <div className="flex items-center justify-center">
            <div className="w-[50%] text-center">
              <Button
                variant="destructive"
                className="!text-[#252525] hover:!text-white hover:bg-[#252525] min-w-[197px]"
              >
                LEARN MORE {">"}
              </Button>
            </div>
            <div className="nearRgt_txt w-[50%]">
              <h2 className="text-white text-[32px] mb-[10px]">
                {serviceAreaData.opportunityNearMeHeading}
              </h2>
              <p className="text-white">
                {serviceAreaData.opportunityNearMeDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      <CustomSingleMapSec
        locationLat={serviceAreaData.locationLat}
        locationLong={serviceAreaData.locationLong}
        mapAreaAddress={serviceAreaData.mapAreaAddress}
        mapAreaEmail={serviceAreaData.mapAreaEmail}
        mapAreaHeading={serviceAreaData.mapAreaHeading}
        mapAreaImage={serviceAreaData.mapAreaImage}
        mapAreaPhone={serviceAreaData.mapAreaPhone}
      />
      <div className="company_sec py-[100px]">
        <div className="container">
          <div className="flex -m-[10px]">
            <div className="w-[70%] p-[10px]">
              {data.allServiceAreas.edges.map((item, index) => (
                <div
                  className="company_cnt"
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html:
                      item.node.serviceAreaPurpose.aboutFenceCompanyDescription,
                  }}
                />
              ))}
            </div>
            <div className="w-[30%] p-[10px]">
              <div className="bg-[rgba(222, 222, 222, 1)]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaDetails;
