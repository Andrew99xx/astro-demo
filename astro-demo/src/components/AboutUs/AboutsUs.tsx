import React from "react";
import assets from "../../json/assets";
import { Button } from "../ui/button";
import FenceServiceSidebar from "../FenceServiceSidebar/FenceServiceSidebar";
import { fenceServicesData } from "../WhyUs/WhyUs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import type { IAboutUsPagePurpose } from "../../graphql/generatedType/CommonTypes";
import { CloudfrontImg } from "../ui/CloudfrontImg";

const faqdata = [
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
];


const AboutsUs = ({ data }: { data: IAboutUsPagePurpose }) => {
  const paragraphs =
    data.aboutUsIntroContent.match(/<p[^>]*>(.*?)<\/p>/g) || [];
  const firstParagraph = paragraphs[0] || "";
  const remainingParagraphs = paragraphs.slice(1).join(" ");

  return (
    <div>
      <div className="pt-[130px] pb-[64px]">
        <div className="container">
          <div className="flex flex-wrap  -m-5 ">
            <div className="w-[25%] p-5">
              <FenceServiceSidebar
                data={fenceServicesData}
                baseRoute={"about-us"}
                title="Fence Services"
              />
            </div>
            <div className="w-[75%] p-5">
              <div className="grid grid-cols-4 gap-7 mb-8">
                {data?.aboutUsIntroImages?.edges.map((item, index) => (
                  <div
                    className="w-[195px] h-[195px]  border-4 border-[#cccaca]"
                    key={index + 1}
                  >
                    <CloudfrontImg
                      src={item.node.mediaItemUrl}
                      alt={item.node.altText}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: firstParagraph }}
                className="text-[#707070] text-[19.2px] highlineHgt mb-5 font-robotoregular"
              ></div>

              <div className="flex flex-wrap -mx-5 mb-8">
                <div className="w-1/3 px-5">
                  <div className="bg-[rgba(204,202,202,1)] p-[20px]">
                    <h3 className="text-xl mb-4 text-[#252525]">
                      {data?.missionHeading}:
                    </h3>
                    <p>{data?.missionDescription}</p>
                  </div>
                </div>
                <div className="w-2/3 px-5">
                  <div className="bg-[rgba(204,202,202,1)] p-[20px]">
                    <h3 className="text-xl mb-4 text-[#252525]">
                      {data?.valuesHeading}:
                    </h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data?.valuesDescription,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div
                className="aboutUsIntroContent mb-10"
                dangerouslySetInnerHTML={{
                  __html: remainingParagraphs.replace(
                    /Best Places to Work/g,
                    `<a target="_blank" href="https://www.benzinga.com/pressreleases/19/04/r13566334/fence-company-franchise-earns-both-local-and-national-recognition" class="text-primary hover:text-inherit">Best places to work</a>`
                  ),
                }}
              />

              <div className="relative">
                <Button
                  variant="default"
                  onClick={() => (window.location.href = "/fence-types/")}
                >
                  {data?.aboutUsIntroButtonText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[150px] pb-[60px] bg-[#ededed]">
        <div className="container">
          <div className="relative text-center">
            <div className="mx-auto max-w-[820px]">
              <h2 className="mb-6">{data?.whyChooseSuperiorHeading}</h2>
              <h3 className="mb-4 text-[28px]">
                {data?.whyChooseSuperiorSubHeading}
              </h3>
              <p className="mb-[120px]">{data?.whyChooseSuperiorDescription}</p>
              <div className="flex justify-center">
                <Button
                  variant="default"
                  onClick={() =>
                    (window.location.href =
                      "/about-us/why-superior-fence-rail/")
                  }
                >
                  {data?.whyChooseSuperiorButtonText} &gt;
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[130px] bg-[#821302]">
        <div className="container">
          <div className="grid grid-cols-2 gap-20">
            <div className="relative">
              <div className="border-4 border-[#cccaca]">
                <CloudfrontImg
                  src={data?.faqsImage?.node?.mediaItemUrl}
                  alt={data?.faqsImage?.node?.altText}
                />
              </div>
            </div>
            <div className="relative">
              <h2 className="text-white mb-8">{data?.faqsHeading}</h2>
              <div className="relative mb-[60px]">
                <Accordion type="single" collapsible className="w-full">
                  {data?.faqsListing?.map((item, index) => (
                    <AccordionItem
                      value={`item-${index + 1}`}
                      className="bg-white mb-1"
                      key={index + 1}
                    >
                      <AccordionTrigger className="[&[data-state=open]_.addIcon]:opacity-0 [&[data-state=closed]_.minusIcon]:opacity-0 [&[data-state=open]_.minusIcon]:opacity-1  [&[data-state=open]]:bg-[#D0D0D0]  py-[22px] px-[24px] decoration-none hover:no-underline hover:bg-[#D0D0D0]  font-montserratsemibold">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="py-4 !pt-4 px-[24px]">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.answer,
                          }}
                          className="abtFaq_cnt"
                        />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div className="relative">
                <Button
                  variant="secondary"
                  className="translate-y-0 hover:translate-y-[-5px] transition duration-300 ease-in-out font-robotomedium !text-[#252525]"
                  onClick={() => (window.location.href = "/about-us/faqs")}
                >
                  {data?.faqsButtonText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative py-[120px]   border-[#ededed] border-t-[16px] border-b-[16px]">
        <div className="container">
          <div className="max-w-[580px] mx-auto text-center">
            <h2 className="mb-4">{data?.workForSuperiorFenceHeading}</h2>
            <h4 className="font-montserratsemibold mb-12 ">
              {data?.workForSuperiorFenceSubHeading}
            </h4>
            <p className="mb-4">{data?.workForSuperiorFenceDescription}</p>

            <div className="flex justify-center">
              <Button
                variant="default"
                onClick={() => (window.location.href = "/about-us/employment")}
              >
                {data?.workForSuperiorFenceButtonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutsUs;
