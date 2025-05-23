import { Button } from "../../ui/button";
import CheckBoxIcon from "../../ui/Icons/CheckBoxIcon";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import type {
  ILocationThemeSettings,
  INewServiceLocationTypes,
} from "../../../graphql/generatedType/ResponseType";

const GetFenceQuoteV2 = ({
  data,
  fromBtntext,
}: {
  data: INewServiceLocationTypes;
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

  return (
    <div className="py-[100px] md:py-[80px]" id="estimate">
      <div className="container_big">
        <div className="flex md:flex-wrap items-start space-x-8 md:space-x-0">
          <div className="max-w-[calc(100%-482px)] md:max-w-full w-full ">
            <h3 className="text-primary font-oswald text-[64px] font-light mb-[45px] frm_hding md:mb-[30px] md:text-[34px]">
              Get A Free Fence Quote Today
            </h3>
            <div className="grid grid-cols-2 w-full gap-8 md:gap-4 getFence_form">
              {/* First Name */}
              <div className="col-span-1 lg:col-span-2 inline-flex flex-col">
                <Input
                  placeholder="First Name"
                  className="w-full h-[65px] bg-[#F2F2E3] rounded-none border-transparent"
                  name="first_name"
                  required
                />
              </div>

              {/* Last Name */}
              <div className="col-span-1 lg:col-span-2 inline-flex flex-col">
                <Input
                  placeholder="Last Name"
                  className="w-full h-[65px] bg-[#F2F2E3] rounded-none border-transparent"
                  name="last_name"
                  required
                />
              </div>

              {/* Phone */}
              <div className="col-span-1 lg:col-span-2 inline-flex flex-col">
                <Input
                  placeholder="Phone"
                  className="w-full h-[65px] bg-[#F2F2E3] rounded-none border-transparent"
                  name="phone"
                  required
                />
              </div>

              {/* Email */}
              <div className="col-span-1 lg:col-span-2 inline-flex flex-col">
                <Input
                  placeholder="Email"
                  className="w-full h-[65px] bg-[#F2F2E3] rounded-none border-transparent"
                  name="email"
                  required
                />
              </div>

              {/* Street */}
              <div className="col-span-2 lg:col-span-2 inline-flex flex-col">
                <Input
                  placeholder="Street"
                  className="w-full h-[65px] bg-[#F2F2E3] rounded-none border-transparent"
                  name="street"
                  required
                />
              </div>

              {/* City */}
              <div className="col-span-1 lg:col-span-2 inline-flex flex-col">
                <Input
                  placeholder="City"
                  className="w-full h-[65px] bg-[#F2F2E3] rounded-none border-transparent"
                  name="city"
                  required
                />
              </div>

              {/* State */}
              <div className="col-span-1 lg:col-span-2 inline-flex flex-col">
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
              <div className="col-span-1 lg:col-span-2 inline-flex flex-col">
                <Input
                  placeholder="Zip Code"
                  className="w-full h-[65px] bg-[#F2F2E3] rounded-none border-transparent"
                  name="zip_code"
                  required
                />
              </div>

              {/* Fence Type */}
              <div className="col-span-1 lg:col-span-2 inline-flex flex-col">
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
              <div className="col-span-2 lg:col-span-2 inline-flex flex-col">
                <textarea
                  name="project_details"
                  placeholder="Please give us some details about the type of fence you need"
                  className="w-full h-[200px] bg-[#F2F2E3] rounded-none border-transparent"
                  required
                  minLength={4}
                />
              </div>

              {/* First letter of the word "fence" */}
              <div className="col-span-1 lg:col-span-2 inline-flex flex-col">
                <Input
                  placeholder="First letter of 'fence'"
                  className="w-full h-[65px] bg-[#F2F2E3] rounded-none border-transparent"
                  name="fence_letter"
                  required
                />
              </div>

              {/* Financing Options */}
              <div className="col-span-1 lg:col-span-2 inline-flex flex-col">
                <label
                  className="font-sourcesans font-light text-[20px] mb-1 text-primary"
                  htmlFor="financing_options"
                >
                  Interested in Financing Options?
                </label>
                <div className="flex">
                  <input
                    type="checkbox"
                    name="financing_options"
                    className="mr-2 w-[35px] h-[35px] lg:w-[20px] lg:h-[20px]"
                  />

                  <span className="text-[16px] font-sourcesans font-light text-primary">
                    Check here to see what you qualify for with no impact to
                    your credit.
                  </span>
                </div>
              </div>

              <div className="col-span-2 lg:col-span-2 inline-flex flex-col">
                <label
                  className="font-sourcesans text-[20px] font-light mb-4 text-primary "
                  htmlFor="terms_conditions"
                >
                  As a convenience to you, we would like to communicate through
                  SMS. You may receive SMS texts relating to your upcoming
                  appointment, estimate information, and installation updates.
                </label>
                <div className="flex">
                  <input
                    type="checkbox"
                    name="terms_conditions"
                    className="mr-2 w-[35px] h-[35px] lg:w-[20px] lg:h-[20px] flex-shrink-0"
                  />
                  <span className="font-sourcesans text-[16px] font-light text-primary">
                    By checking this box I agree to receive automated
                    promotional messages. This agreement is not a condition of
                    purchase. Messages may be recurring. Reply STOP to opt out.
                    Message & data rates apply. Terms of use Policy, Privacy
                    Policy
                  </span>
                </div>
              </div>
            </div>

            <Button
              variant="default"
              className="mt-12 font-robotobold !text-[20px] !rounded-none h-[84px] frmget_btn md:!text-[16px]"
            >
              {fromBtntext} {">"}
            </Button>
          </div>
          <div className="max-w-[482px] md:max-w-full w-full bg-primary py-4 px-[30px] sticky top-[104px] text-center frmRgt_cnt md:mt-[30px] md:ml-0 lg:!text-[16px] ">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  data?.locationStates?.newLocationPurpose
                    ?.fenceQuoteDescription,
              }}
              className="getFenceQuoteV2_text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default GetFenceQuoteV2;
