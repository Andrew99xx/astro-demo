import React, { useEffect, useState } from "react";
import type { IFenceFencingLocation } from "../../graphql/generatedType/FenceFinancingTypes";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { CloudfrontImg } from "../ui/CloudfrontImg";
import TestimonialRatingReview from "../Testimonial/TestimonialRatingReview";
import NoSSR from "../NoSSR/NoSSR";
import Slider from "react-slick";
import TestimonialCard from "../Testimonial/TestimonialCard";

const FenceFinancingContent = ({ data }: { data: IFenceFencingLocation }) => {
  const [financeAmount, setFinanceAmount] = useState<number>(0);
  const [monthsFinanced, setMonthsFinanced] = useState<number>(60);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);

  const interestRate: number =
    parseFloat(
      data?.pages?.edges[0]?.node?.fenceFinancingPagePurpose.interestRate || "0"
    ) / 100;

  useEffect(() => {
    const P = financeAmount;
    const i = 9.8647 / 100 / 12;
    const n = monthsFinanced;

    const monthlyPayment =
      (P * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);

    const roundedPayment = Math.round(monthlyPayment * 100) / 100;
    setMonthlyPayment(roundedPayment);
  }, [financeAmount, monthsFinanced, interestRate]);

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="py-[100px]">
        <div className="container">
          <h2 className="text-primary font-montserratextrabold text-[40px] text-center">
            {
              data?.pages.edges[0]?.node?.fenceFinancingPagePurpose
                ?.exclusivePaymentOptionsHeading
            }
          </h2>
          <p className="text-[22px] font-medium text-center text-primary mb-[20px] ">
            <i>
              {
                data?.pages?.edges[0]?.node?.fenceFinancingPagePurpose
                  ?.exclusivePaymentOptionsSubHeading
              }
            </i>
          </p>

          <div className="flex flex-wrap -m-[15px] h-full">
            {data?.pages?.edges[0]?.node.fenceFinancingPagePurpose?.exclusivePaymentOptionsListing?.map(
              (_item, index) => (
                <div className="w-1/2 p-[15px] h-[253px]">
                  <div className="bg-[#e2e0e0] p-[20px] h-full" key={index}>
                    <h3 className="text-[32px] font-montserratsemibold text-primary">
                      {_item.exclusivePaymentOptionsListingHeading}
                    </h3>
                    <span className="text-[22px] font-robotomedium text-black inline-block mb-[20px]">
                      {_item.exclusivePaymentOptionsListingSubHeading}
                    </span>
                    <div
                      className="text-[#000] financing_smlCnt"
                      dangerouslySetInnerHTML={{
                        __html: _item.exclusivePaymentOptionsListingDescription,
                      }}
                    />
                  </div>
                </div>
              )
            )}
          </div>
          <div className="text-center mt-[30px]">
            <Button
              variant="default"
              onClick={() => (window.location.href = "#see-rates")}
            >
              {
                data?.pages?.edges[0]?.node?.fenceFinancingPagePurpose
                  ?.exclusivePaymentOptionsButtonText
              }
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-[#ededed] py-[6px]" />

      <div className="py-[80px] imageBg">
        <div className="container">
          <div className="max-w-[786px] m-auto">
            <h3 className="text-[36px] text-center mb-[15px] text-primary">
              {
                data?.pages?.edges[0]?.node?.fenceFinancingPagePurpose
                  ?.estimateMonthlyPaymentsHeading
              }
            </h3>

            <div
              className="text-center financing_calCnt"
              dangerouslySetInnerHTML={{
                __html:
                  data?.pages?.edges[0]?.node?.fenceFinancingPagePurpose
                    ?.estimateMonthlyPaymentsDescription,
              }}
            />
            {/* <p className="text-center pb-[20px] border-b-[1px] border-solid border-[#ccc]">
              {
                data?.pages?.edges[0]?.node?.fenceFinancingPagePurpose
                  ?.estimateMonthlyPaymentsDescription
              }
            </p> */}

            <form className="mt-[20px]">
              <div className="max-w-[373px] m-auto">
                <div className="flex items-center">
                  <p className="w-[220px] text-[13px] text-[#707070]">
                    Finance Amount ($)
                  </p>
                  <Input
                    className="max-w-[153px] text-[#252525]"
                    value={financeAmount}
                    type="number"
                    onChange={(e) =>
                      setFinanceAmount(parseFloat(e.target.value))
                    }
                  />
                </div>
                <div className="flex items-center my-[20px]">
                  <p className="w-[220px] text-[13px] text-[#707070]">
                    Interest Rate % (APR)
                  </p>
                  <Input
                    className="max-w-[153px] !text-[#252525] !opacity-[1] !cursor-auto bg-[#f2f2f2]"
                    type="number"
                    disabled
                    value={
                      data?.pages?.edges[0]?.node?.fenceFinancingPagePurpose
                        .interestRate
                    }
                  />
                </div>
                <div className="flex items-center ">
                  <p className="w-[220px] text-[13px] text-[#707070]">
                    Months Financed
                  </p>
                  <Input
                    className="max-w-[153px] !text-[#252525] !opacity-[1] !cursor-auto bg-[#f2f2f2]"
                    value={monthsFinanced}
                    type="number"
                    onChange={(e) =>
                      setMonthsFinanced(parseInt(e.target.value))
                    }
                  />
                </div>

                <div className="flex items-center justify-end bg-[#9E9E9E] mt-[30px]">
                  <div className="left">
                    <p className="text-white mr-[20px] font-normal text-[13px] uppercase">
                      Monthly Payment
                    </p>
                  </div>
                  <div className="rgt py-[10px] px-[15px] bg-[#00000040]">
                    <p className="text-[19px] font-bold text-white">
                      ${Number.isNaN(monthlyPayment) ? "0" : monthlyPayment}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-[30px]">
                  <Button
                    className="!uppercase font-robotobold max-w-[197px] w-full h-[43px]"
                    onClick={() => (window.location.href = "#see-rates")}
                  >
                    GET STARTED {">"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="py-[100px] bg-[#cccaca]" id="see-rates">
        <div className="container">
          <div className="text-center mb-[40px]">
            <h2>See What You Qualify For</h2>
            <p className="text-black font-montserratregular">
              Without affecting your credit score!
            </p>
          </div>
          <div className="flex flex-wrap -m-[8px] form_sec max-w-[620px] mx-[auto]">
            <div className="w-[50%] p-[8px]">
              <label className="text-[14px] text-[#797777] font-robotomedium mb-[7px] inline-block">
                First Name *
              </label>
              <input
                type="text"
                className="w-full border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px]"
              />
            </div>
            <div className="w-[50%] p-[8px]">
              <label className="text-[14px] text-[#797777] font-robotomedium mb-[7px] inline-block">
                Last Name *
              </label>
              <input
                type="text"
                className="w-full border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px]"
              />
            </div>

            <div className="w-[50%] p-[8px]">
              <label className="text-[14px] text-[#797777] font-robotomedium mb-[7px] inline-block">
                Phone *
              </label>
              <input
                type="phone"
                className="w-full border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px]"
              />
            </div>
            <div className="w-[50%] p-[8px]">
              <label className="text-[14px] text-[#797777] font-robotomedium mb-[7px] inline-block">
                Email *
              </label>
              <input
                type="email"
                className="w-full border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px]"
              />
            </div>
            <div className="w-full p-[8px]">
              <label className="text-[14px] text-[#797777] font-robotomedium  mb-[7px] inline-block">
                Street *
              </label>
              <input
                type="text"
                className="w-full border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px]"
              />
            </div>

            <div className="w-[50%] p-[8px]">
              <label className="text-[14px] text-[#797777] font-robotomedium mb-[7px] inline-block">
                City *
              </label>
              <input
                type="text"
                className="w-full border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px]"
              />
            </div>
            <div className="w-[50%] p-[8px]">
              <label className="text-[14px] text-[#797777] font-robotomedium mb-[7px] inline-block">
                State *
              </label>
              <input
                type="text"
                placeholder="Select State"
                className="w-full border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px] "
              />
            </div>
            <div className="w-[50%] p-[8px]">
              <label className="text-[14px] text-[#797777] font-robotomedium mb-[7px] inline-block">
                Zip Code *
              </label>
              <input
                type="text"
                className="w-full border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px]"
              />
            </div>
            <div className="w-[50%] p-[8px]">
              <label className="text-[14px] text-[#797777] font-robotomedium mb-[7px] inline-block">
                Fence Type *
              </label>
              <input
                type="text"
                placeholder="Select Fence Type "
                className="w-full border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px]"
              />
            </div>

            <div className="w-full p-[8px]">
              <label className="text-[14px] text-[#797777] font-robotomedium mb-[7px] inline-block">
                Project Details *
              </label>
              <textarea
                placeholder="Please give us some details about the type of fence you need"
                className="w-full border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px] h-[132px] resize-none"
              />
            </div>
            <div className="w-full p-[8px]">
              <label className="text-[14px] text-[#797777] font-robotomedium mb-[7px] inline-block">
                What is the first letter of the word fence? *
              </label>
              <input
                type="text"
                className="w-full border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px]"
              />
            </div>

            <div className="p-[8px] w-full">
              <p className="text-[14px] font-robotomedium text-[#797777]">
                Interested in Financing Options?
              </p>
              <div className="flex ">
                <input
                  type="checkbox"
                  name="financing_options"
                  className="mr-2"
                />
                <p className="text-[12px]">
                  Check here to see what you qualify for with no impact to your
                  credit.
                </p>
              </div>
            </div>
            <div className="p-[8px] w-full">
              <p className="text-[14px] font-robotomedium text-[#797777] mb-[10px]">
                As a convenience to you, we would like to communicate through
                SMS. You may receive SMS texts relating to your upcoming
                appointment, estimate information and installation updates.
              </p>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="financing_options"
                  className="mr-2"
                />
                <p className="text-[12px]">
                  By checking this box I agree to receive automated promotional
                  messages. This agreement is not a condition of purchase.
                  Messages may be recurring. Reply STOP to opt out. Message &
                  data rates apply.
                  <a href="#url" className="text-primary">
                    Terms of use Policy
                  </a>
                  ,
                  <a href="#url" className="text-primary">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
            <div className="mt-[20px] ">
              <Button variant="default">GET STARTED {">"}</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[100px] pb-[150px]">
        <div className="container">
          <h2 className="text-primary text-[60px] font-montserratsemibold mb-[30px]">
            FAQs
          </h2>

          <div className="flex flex-wrap -m-[40px]">
            <div className="w-1/2 px-[40px]">
              <Accordion type="single" collapsible className="w-full ">
                {data?.pages?.edges[0]?.node.fenceFinancingPagePurpose?.faqsListing?.map(
                  (item, index) => (
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
                          className="financingAccr_cnt"
                          dangerouslySetInnerHTML={{ __html: item.answer }}
                        />
                      </AccordionContent>
                    </AccordionItem>
                  )
                )}
              </Accordion>
            </div>
            <div className="w-1/2 px-[40px]">
              <NoSSR>
                <Slider {...settings}>
                  {data?.pages?.edges[0]?.node?.fenceFinancingPagePurpose?.chooseTestimonials?.edges?.map(
                    (item, index) => (
                      <div key={index} className="px-2">
                        <TestimonialCard
                          author={item?.node?.title}
                          content={item?.node?.content}
                          headline={
                            item?.node?.testimonialsSettings
                              ?.testimonialsHighlightText
                          }
                          rating={item?.node?.testimonialsSettings?.ratings}
                          ratingLeft
                        />
                      </div>
                    )
                  )}
                </Slider>
              </NoSSR>
              {/* <TestimonialRatingReview data={data?.allTestimonials} /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary text-white py-5">
        <div className="container">
          <div className="flex items-center">
            <div className="w-[310px] px-[20px] flex-shrink-0">
              <p className="font-robotolight ">Loans provided by:</p>
              <CloudfrontImg
                src="https://superiorfence.s3.amazonaws.com/wp-content/uploads/2025/02/12133024/enerbank-1.webp"
                width={270}
                height={69}
                alt="bankImg"
                className="w-[270px]"
              />
            </div>
            <div className="px-[40px]">
              <p className="font-robotolight ">
                It’s quick and easy to apply. Complete your home improvement
                project now instead of later! You’ll receive a credit decision
                in seconds. EnerBank will send you the loan documents for review
                and signature.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FenceFinancingContent;
