import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import type { IFAQQueryResponse } from "../../graphql/generatedType/FaqTypes";
import CheckBoxIcon from "../ui/Icons/CheckBoxIcon";
import FenceServiceSidebar from "../FenceServiceSidebar/FenceServiceSidebar";
import { fenceServicesData } from "../WhyUs/WhyUs";
import moment from "moment";
import useMediaUrl from "../../hooks/useMediaUrl";
import { CloudfrontImg } from "../ui/CloudfrontImg";
import { quoteLink } from "../Header/Header";

const faqdata = [
  {
    title: "Is your company a member of the Better Business Bureau?",
    content: (
      <>
        <b>Yes we are.</b> We have been a member since we began business and use
        special arbitration procedures laid out by the BBB to resolve disputes.
        More importantly, we have no complaints on our record, not a small feat
        considering we sell and install thousands of jobs each year.
      </>
    ),
  },
  {
    title: "Does your company use concrete when installing a fence?",
    content: (
      <>
        <b>Yes we do.</b> We use concrete whenever we install a vinyl fence, an
        aluminum fence or a chain link fence. The only exception is with wood
        fencing – please check with your local office to determine whether
        concrete is used on all, some, or none of the wood fence posts. Other
        than this exception, we include concrete on each post that is installed.
      </>
    ),
  },
  {
    title: "Does your company have any insurance coverage?",
    content: (
      <>
        <b>Absolutely.</b> We have a 2,000,000.00 general liability policy, a
        1,000,000.00 commercial automobile policy and a 1,000,000.00 worker’s
        compensation policy. If the company you are considering hiring does not
        carry workers compensation, liability or commercial automobile
        insurance, you may want to rethink your decision to use them because you
        could end up being liable in the event that something happens on your
        property.
      </>
    ),
  },
  {
    title: "Does your company provide any warranties for your fence products?",
    content: (
      <>
        <b>Yes we do.</b> Our materials come with lengthy product warranties
        from the manufacturer and our company offers a three year workmanship
        warranty on our installation for most of our products. Our aluminum
        fencing and our vinyl fence comes with a transferable lifetime warranty.
        This means that not only is the warranty good for the original
        purchaser, but it can also be transferred to the subsequent purchaser of
        your home. To transfer the vinyl fence warranty, a registration card
        must be filled out by the transferee. Also, it is important to note that
        our vinyl fence is one of the few in the entire industry that carries a
        warranty that is not just backed by the parent company but is actually
        underwritten by a firm that guarantees the performance of the warranty
        (similar to the way a re-insurance companies guarantees the performance
        of other insurance companies).
      </>
    ),
  },
  {
    title: "What types of vinyl fences do you offer?",
    content: (
      <>
        Our company is a vinyl fence fabricator that has{" "}
        <b>the ability to fabricate over 120 different styles</b> of vinyl
        fences, gazebos and associated garden products. The most common styles
        of vinyl fence we sell are tongue and groove privacy, privacy with
        lattice accent, semi-privacy, picket and pool code fence. Call our
        office today and let us help you pick the vinyl fence that’s right for
        you!
      </>
    ),
  },
  {
    title: "What type of hardware do you use for your gates?",
    content: (
      <>
        <b>Our company uses only premium gate hardware.</b>
        For our vinyl fence, we typically install self closing adjustable
        stainless steel hinges with a stainless steel post latch. We also
        install Tru-Close Hinges and a two-sided Lok n Latch latching system,
        both of which are manufactured by D & D Technologies and are made from a
        heavy duty black plastic composite. For our aluminum fences, we use
        Tru-Close Hinges and a Z-Lok two handled lock and latching system also
        from D & D Technologies.
      </>
    ),
  },

  {
    title:
      "Do you sell 6 ft. wide vinyl fence panels or 8 ft. wide vinyl fence panels?",
    content: (
      <>
        Our company installs vinyl fence constructed in{" "}
        <b>both six ft. wide and eight ft wide panels.</b> Six ft. wide vinyl
        fence panels do not typically require reinforcement in the horizontal
        rails, while eight ft. wide panels do require reinforcement. All of our{" "}
        <a href="#" className="text-[#821302]">
          Superior Fence Products
        </a>{" "}
        vinyl fence panels that come in eight foot width are either reinforced
        with{" "}
        <a href="#" className="text-[#821302]">
          StayStraight
        </a>{" "}
        technology or aluminum inserts.
      </>
    ),
  },

  {
    title:
      "Do you sell virgin vinyl fence or does your fence have regrind vinyl in it?",
    content: (
      <>
        <b>Our vinyl fence is made from 100 percent virgin vinyl.</b>
        This is in contrast to many companies that sell a co-extruded vinyl
        profile where only the cap stock (outer wall) is virgin vinyl and the
        substrate (inner wall) is made from recycled vinyl (regrind). Worse
        still, much of the regrind material on the market is not even recycled
        fence but instead comprises recycled vinyl window and door lineal that
        are inferior in grade to vinyl fence.
      </>
    ),
  },

  {
    title: "What types of vinyl fence caps do you offer?",
    content: (
      <>
        Our standard vinyl fence caps are the pyramid flat caps. We also offer
        vinyl Gothic caps, New England caps, Ball caps and Coachman caps for an
        additional price.
      </>
    ),
  },
];

const FAQs = ({ data }: { data: IFAQQueryResponse }) => {
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
                </div>
              </div>
            </div>
            <div className="w-[35%] p-[10px]">
              <div className="bg-primary py-[35px] px-[20px]">
                <h3 className="text-white text-[22px] font-medium mb-5 ">
                  {data.page.commonHeaderBanner.commonHeaderBannerListingTitle}
                </h3>
                <ul className=" flex flex-wrap">
                  {data?.page?.commonHeaderBanner?.commonHeaderBannerListing.map(
                    (item) => (
                      <li key={item?.listName} className=" w-1/2">
                        <div
                          className=" flex items-start text-[.85rem] text-white mb-3 max-w-[147px] font-montserratregular
                      "
                        >
                          <i className="text-[#cccaca] inline-flex items-center justify-center pr-4">
                            <CheckBoxIcon />
                          </i>
                          {item?.listName}
                        </div>
                      </li>
                    )
                  )}
                </ul>
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

      <div className="py-[100px]">
        <div className="container">
          <div className="flex flex-wrap  -m-5 ">
            <div className="w-[25%] p-5">
              {" "}
              <FenceServiceSidebar
                data={fenceServicesData}
                baseRoute={"about-us"}
                title="About Us"
              />
            </div>
            <div className="w-[75%] p-5">
              <Accordion type="single" collapsible className="w-full ">
                {data?.page.faqsPagePurpose.faqsListing.map((item, index) => (
                  <AccordionItem
                    value={`item-${index + 1}`}
                    className="bg-white mb-1 shadow-[0_4px_5px_0_rgba(0,0,0,.1)]"
                    key={index + 1}
                  >
                    <AccordionTrigger className="[&[data-state=open]_.addIcon]:opacity-0 [&[data-state=closed]_.minusIcon]:opacity-0 [&[data-state=open]_.minusIcon]:opacity-1  [&[data-state=open]]:bg-[#D0D0D0]  py-[22px] px-[24px] decoration-none hover:no-underline hover:bg-[#D0D0D0] font-montserratsemibold">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="py-4 !pt-4 px-[24px]">
                      <div
                        className="text-base accr_faqtxt"
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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
                <div className="relative h-full bg-[rgba(0,0,0,.04)]">
                  <figure className="w-full overflow-hidden m-0 leading-[0]">
                    <a
                      href={`/sw-houston/${item?.node?.slug?.toLocaleLowerCase()}`}
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
    </div>
  );
};

export default FAQs;
