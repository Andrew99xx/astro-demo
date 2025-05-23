import React from "react";
import assets from "../../json/assets";
import { Button } from "../ui/button";
import type { IContactUsPage } from "../../graphql/generatedType/ContactTypes";

const ContactContent = ({ data }: { data: IContactUsPage }) => {
  return (
    <div className="py-[200px]">
      <div className="container">
        <div className="flex flex-wrap -m-[10px]">
          <div className="w-[30%] px-[20px]">
            <div className="bg-[rgba(222,222,222,1)] px-[20px] py-[30px]">
              <h3 className="text-[20px] text-primary font-semibold text-center mb-[20px]">
                {
                  data?.pages.edges[0].node.contactUsPagePurpose
                    .supportServiceHeading
                }
              </h3>
              <figure className=" mb-[30px] inline-block cont_fig">
                <img src={assets.contact1} alt="contact1" />
              </figure>
              <div className="bg-primary p-[20px] ">
                <ul>
                  <li>
                    <a
                      href="/request-an-estimate"
                      className="text-white py-[16px] pr-[10px]  pl-[5px] rounded-none hover:rounded-[5px] hover:text-primary hover:bg-white transition-all duration-300 ease-in-out  border-b-[1px] border-solid border-[#ffffff73]  hover:border-transparent min-w-[171px] inline-block"
                    >
                      Request An Estimate {">"}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy-policy"
                      className="text-white py-[16px] pr-[10px]  pl-[5px] rounded-none hover:rounded-[5px] hover:text-primary hover:bg-white transition-all duration-300 ease-in-out  border-b-[1px] border-solid border-[#ffffff73]  hover:border-transparent min-w-[171px] inline-block"
                    >
                      Privacy Policy {">"}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms-condition"
                      className="text-white py-[16px] pr-[10px]  pl-[5px] rounded-none hover:rounded-[5px] hover:text-primary hover:bg-white transition-all duration-300 ease-in-out  border-b-[1px] border-solid border-[#ffffff73]   hover:border-transparent min-w-[171px] inline-block"
                    >
                      Terms of Use {">"}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#url"
                      className="text-white py-[16px] pr-[10px] pl-[5px] rounded-none hover:rounded-[5px] hover:text-primary hover:bg-white transition-all duration-300 ease-in-out  border-b-[1px] border-solid border-[#ffffff73]  hover:border-transparent min-w-[171px] inline-block"
                    >
                      DMCA Policy {">"}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-[70%] px-[20px]">
            <h2 className="mb-[10px]">
              {
                data?.pages?.edges[0]?.node?.contactUsPagePurpose
                  ?.contactUsHeading
              }
            </h2>
            <p className="mb-[30px]">
              {
                data?.pages?.edges[0]?.node?.contactUsPagePurpose
                  ?.contactUsDescription
              }
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
                  Phone *
                </label>
                <input
                  type="phone"
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
              <div className="w-full p-[8px]">
                <label className="text-[14px] text-[#999] font-medium mb-[7px] inline-block">
                  Street *
                </label>
                <input
                  type="text"
                  className="w-full border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px]"
                />
              </div>

              <div className="w-[50%] p-[8px]">
                <label className="text-[14px] text-[#999] font-medium mb-[7px] inline-block">
                  City *
                </label>
                <input
                  type="text"
                  className="w-full border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px]"
                />
              </div>
              <div className="w-[50%] p-[8px]">
                <label className="text-[14px] text-[#999] font-medium mb-[7px] inline-block">
                  State *
                </label>
                <input
                  type="text"
                  placeholder="Select State"
                  className="w-full border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px] "
                />
              </div>
              <div className="w-[50%] p-[8px]">
                <label className="text-[14px] text-[#999] font-medium mb-[7px] inline-block">
                  Zip Code *
                </label>
                <input
                  type="text"
                  className="w-full border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px]"
                />
              </div>
              <div className="w-[50%] p-[8px]">
                <label className="text-[14px] text-[#999] font-medium mb-[7px] inline-block">
                  Fence Type *
                </label>
                <input
                  type="text"
                  placeholder="Select Fence Type "
                  className="w-full border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px]"
                />
              </div>

              <div className="w-full p-[8px]">
                <label className="text-[14px] text-[#999] font-medium mb-[7px] inline-block">
                  Project Details *
                </label>
                <textarea
                  placeholder="Please give us some details about the type of fence you need"
                  className="w-full border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px] h-[132px] resize-none"
                />
              </div>
              <div className="w-full p-[8px]">
                <label className="text-[14px] text-[#999] font-medium mb-[7px] inline-block">
                  What is the first letter of the word fence? *
                </label>
                <input
                  type="text"
                  className="w-full border-[1px] border-solid border-[#ccc] rounded-[5px] p-[10px]"
                />
              </div>

              <div className="p-[8px] w-full">
                <p className="text-[14px] font-medium text-[rgb(153 153 153)]">
                  Interested in Financing Options?
                </p>
                <div className="flex ">
                  <input
                    type="checkbox"
                    name="financing_options"
                    className="mr-2"
                  />
                  <p className="text-[12px]">
                    Check here to see what you qualify for with no impact to
                    your credit.
                  </p>
                </div>
              </div>
              <div className="p-[8px] w-full">
                <p className="text-[14px] font-medium text-[rgb(153 153 153)] mb-[10px]">
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
                    By checking this box I agree to receive automated
                    promotional messages. This agreement is not a condition of
                    purchase. Messages may be recurring. Reply STOP to opt out.
                    Message & data rates apply.
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
      </div>
    </div>
  );
};

export default ContactContent;
