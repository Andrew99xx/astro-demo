import { useState } from "react";
import { Button } from "../ui/button";
import CheckBoxIcon from "../ui/Icons/CheckBoxIcon";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import type { ILocationThemeSettings } from "../../graphql/generatedType/ResponseType";

const GetFenceQuote = ({
  fenceData,
  fromBtntext,
}: {
  fenceData?: ILocationThemeSettings;
  fromBtntext?: string;
}) => {
  const benefits = [
    "Get an Instant Decision",
    "Prequalify With No Impact to Your Credit",
    "Financing Packages Up to $75,000",
  ];

  const serviceFeatures = [
    "Top Rated Customer Service",
    "Professional Team",
    "Licensed, Bonded & Insured",
    "Industry Best Warranty",
    "Superior Fence Quality",
    "Superior Fence Selection",
  ];

  // const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="bg-colorefeded py-10" id="estimate">
      <div className="container">
        <div className="flex  items-start space-x-4 md:space-x-0 md:flex-wrap md:flex-col-reverse">
          <div className="max-w-[266px] w-full bg-white py-4 px-[20px] sticky md:static top-0 md:max-w-full md:mt-[30px]">
            <h2 className="text-[28px] leading-9 !mb-4 text-color707070 font-medium xs:text-[20px]">
              {fenceData?.themeOption?.financingOptionsHeading}
            </h2>

            <ul className="space-y-2 pb-7 border-b border-b-[#ccc] mb-2">
              {fenceData?.themeOption?.financingOptionsListing.map(
                (benefit, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-3 !mb-[1em]  text-primary hover:text-black"
                  >
                    <i className=" inline-flex items-center justify-center size-[22px]">
                      <CheckBoxIcon />
                    </i>
                    <p className="text-[13px] font-montserratregular text-black">
                      {benefit?.financingOptionsListingTitle}
                    </p>
                  </li>
                )
              )}
            </ul>

            <h2 className="text-[28px] leading-9 !mb-4 text-color707070 font-medium xs:text-[20px]">
              {fenceData?.themeOption?.whatToExpectHeading}
            </h2>

            <ul className="space-y-2 pb-3">
              {fenceData?.themeOption?.whatToExpectListing.map(
                (benefit, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-3 !mb-[1em]  text-primary hover:text-black"
                  >
                    <i className=" inline-flex items-center justify-center size-[22px]">
                      <CheckBoxIcon />
                    </i>
                    <p className="text-[13px] font-montserratregular font-normal text-black">
                      {benefit?.whatToExpectListingTitle}
                    </p>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="max-w-[calc(100%-266px)] w-full md:max-w-full ">
            <h3 className="text-primary text-[32px] font-montserratsemibold mb-0.5 md:text-[28px] xs:text-[24px] ">
              Get A Fence Quote Today
            </h3>

            <p className="font-roboto font-medium mb-4">
              Fill in the form to request a free quote and we’ll be in touch
              shortly.
            </p>

            <div className="grid grid-cols-2 w-full gap-4">
              {/* First Name */}
              <div className="col-span-1 md:col-span-2 inline-flex flex-col">
                <label
                  className="font-robotobold text-sm mb-1 text-[#444444] opacity-[0.6]"
                  htmlFor="first_name"
                >
                  First Name<span className="text-[#B94A48]">*</span>
                </label>
                <Input
                  placeholder="First Name"
                  className="rounded-md w-full"
                  name="first_name"
                  required
                />
              </div>

              {/* Last Name */}
              <div className="col-span-1 md:col-span-2 inline-flex flex-col">
                <label
                  className="font-robotobold text-sm mb-1 text-[#444444] opacity-[0.6]"
                  htmlFor="last_name"
                >
                  Last Name<span className="text-[#B94A48]">*</span>
                </label>
                <Input
                  placeholder="Last Name"
                  className="rounded-md w-full"
                  name="last_name"
                  required
                />
              </div>

              {/* Phone */}
              <div className="col-span-1 md:col-span-2 inline-flex flex-col">
                <label
                  className="font-robotobold text-sm mb-1 text-[#444444] opacity-[0.6]"
                  htmlFor="phone"
                >
                  Phone<span className="text-[#B94A48]">*</span>
                </label>
                <Input
                  placeholder="Phone"
                  className="rounded-md w-full"
                  name="phone"
                  required
                />
              </div>

              {/* Email */}
              <div className="col-span-1 md:col-span-2 inline-flex flex-col">
                <label
                  className="font-robotobold text-sm mb-1 text-[#444444] opacity-[0.6]"
                  htmlFor="email"
                >
                  Email<span className="text-[#B94A48]">*</span>
                </label>
                <Input
                  placeholder="Email"
                  className="rounded-md w-full"
                  name="email"
                  required
                />
              </div>

              {/* Street */}
              <div className="col-span-2 md:col-span-2 inline-flex flex-col">
                <label
                  className="font-robotobold text-sm mb-1 text-[#444444] opacity-[0.6]"
                  htmlFor="street"
                >
                  Street<span className="text-[#B94A48]">*</span>
                </label>
                <Input
                  placeholder="Street"
                  className="rounded-md w-full"
                  name="street"
                  required
                />
              </div>

              {/* City */}
              <div className="col-span-1 md:col-span-2 inline-flex flex-col">
                <label
                  className="font-robotobold text-sm mb-1 text-[#444444] opacity-[0.6]"
                  htmlFor="city"
                >
                  City<span className="text-[#B94A48]">*</span>
                </label>
                <Input
                  placeholder="City"
                  className="rounded-md w-full"
                  name="city"
                  required
                />
              </div>

              {/* State */}
              <div className="col-span-1 md:col-span-2 inline-flex flex-col">
                <label
                  className="font-robotobold text-sm mb-1 text-[#444444] opacity-[0.6]"
                  htmlFor="state"
                >
                  State<span className="text-[#B94A48]">*</span>
                </label>
                <Select
                // value={selectedOption}
                // onValueChange={setSelectedOption}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a Region</SelectLabel>
                      <SelectItem value="england">England</SelectItem>
                      <SelectItem value="scotland">Scotland</SelectItem>
                      <SelectItem value="wales">Wales</SelectItem>
                      <SelectItem value="northern-ireland">
                        Northern Ireland
                      </SelectItem>
                      <SelectSeparator />
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Zip Code */}
              <div className="col-span-1 md:col-span-2 inline-flex flex-col">
                <label
                  className="font-robotobold text-sm mb-1 text-[#444444] opacity-[0.6]"
                  htmlFor="zip_code"
                >
                  Zip Code<span className="text-[#B94A48]">*</span>
                </label>
                <Input
                  placeholder="Zip Code"
                  className="rounded-md w-full"
                  name="zip_code"
                  required
                />
              </div>

              {/* Fence Type */}
              <div className="col-span-1 md:col-span-2 inline-flex flex-col">
                <label
                  className="font-robotobold text-sm mb-1 text-[#444444] opacity-[0.6]"
                  htmlFor="fence_type"
                >
                  Fence Type<span className="text-[#B94A48]">*</span>
                </label>
                <Select
                // value={selectedOption}
                // onValueChange={setSelectedOption}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Fence Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Choose a Type</SelectLabel>
                      <SelectItem value="wood">Wood</SelectItem>
                      <SelectItem value="chain-link">Chain Link</SelectItem>
                      <SelectItem value="vinyl">Vinyl</SelectItem>
                      <SelectItem value="aluminum">Aluminum</SelectItem>
                      <SelectSeparator />
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Project Details */}
              <div className="col-span-2 md:col-span-2 inline-flex flex-col">
                <label
                  className="font-robotobold text-sm mb-1 text-[#444444] opacity-[0.6]"
                  htmlFor="project_details"
                >
                  Project Details
                </label>
                <textarea
                  name="project_details"
                  placeholder="Please give us some details about the type of fence you need"
                  className="rounded-md w-full p-3"
                  required
                  minLength={4}
                />
              </div>

              {/* First letter of the word "fence" */}
              <div className="col-span-2 md:col-span-2 inline-flex flex-col">
                <label
                  className="font-robotobold text-sm mb-1 text-[#444444] opacity-[0.6]"
                  htmlFor="fence_letter"
                >
                  What is the first letter of the word "fence"?
                </label>
                <Input
                  placeholder="First letter of 'fence'"
                  className="rounded-md w-full"
                  name="fence_letter"
                  required
                />
              </div>

              {/* Financing Options */}
              <div className="col-span-2 md:col-span-2 inline-flex flex-col">
                <label
                  className="font-robotobold text-sm mb-1 text-[#444444] opacity-[0.6]"
                  htmlFor="financing_options"
                >
                  Interested in Financing Options?
                </label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="financing_options"
                    className="mr-2"
                  />
                  <span className="text-[13px]">
                    Check here to see what you qualify for with no impact to
                    your credit.
                  </span>
                </div>
              </div>

              <div className="col-span-2 md:col-span-2 inline-flex flex-col">
                <label
                  className="font-robotobold text-sm mb-1 text-[#444444] opacity-[0.6]"
                  htmlFor="terms_conditions"
                >
                  As a convenience to you, we would like to communicate through
                  SMS. You may receive SMS texts relating to your upcoming
                  appointment, estimate information, and installation updates.
                </label>
                <div className="">
                  <input
                    type="checkbox"
                    name="terms_conditions"
                    className="mr-2"
                  />
                  <span className="text-[13px]">
                    By checking this box I agree to receive automated
                    promotional messages. This agreement is not a condition of
                    purchase. Messages may be recurring. Reply STOP to opt out.
                  </span>
                </div>
              </div>
            </div>

            <Button variant="default" className="mt-11 font-robotobold">
              {fromBtntext} {">"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GetFenceQuote;
