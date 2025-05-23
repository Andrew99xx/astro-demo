import type { CommonSettingsQueryData } from "../../graphql/generatedType/ResponseType";
import assets from "../../json/assets";
import FacebookIcon from "../../ui/Icons/facebookIcon";
import LinkedinIcon from "../../ui/Icons/LinkedinIcon";
import TwitterIcon from "../../ui/Icons/TwitterIcon";
import YoutubeIcon from "../../ui/Icons/YoutubeIcon";
import { quoteLink } from "../Header/Header";
import { CloudfrontImg } from "../ui/CloudfrontImg";

export default function Footer({ data }: { data: CommonSettingsQueryData }) {
  // console.log(data?.themeSettings?.themeOption, "data2");

  const SocialMediaIcons: React.FC<{ platform: string }> = ({ platform }) => {
    switch (platform) {
      case "facebook":
        return <FacebookIcon />;
      case "twitter":
        return <TwitterIcon />;
      case "linkedin":
        return <LinkedinIcon />;
      case "youtube":
        return <YoutubeIcon />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="bg-[#821302] py-[30px]">
        <div className="container">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-2">
              <ul className="pr-[20px]">
             
             
                <li className="mb-[2px] border-solid border-b-[1px] border-[rgba(255,255,255,0.3)]">
                  <a
                    href="#url"
                    className="py-[8px] px-[6px] text-[14px] rounded-[4px] w-full block text-white hover:text-[#821302] hover:bg-white"
                  >
                    Locations
                  </a>
                </li>
                <li className="mb-[2px]">
                  <a
                    href="/fence-types"
                    className="py-[8px] px-[6px] text-[14px] rounded-[4px] w-full block text-white hover:text-[#821302] hover:bg-white"
                  >
                    Fence Types
                  </a>
                </li>
                <li className="mb-[2px]">
                  <a
                    href="/fence-services"
                    className="py-[8px] px-[6px] text-[14px] rounded-[4px] w-full block text-white hover:text-[#821302] hover:bg-white"
                  >
                    Fence Services
                  </a>
                </li>
                <li className="mb-[2px]">
                  <a
                    href={quoteLink}
                    className="py-[8px] px-[6px] text-[14px] rounded-[4px] w-full block text-white hover:text-[#821302] hover:bg-white"
                  >
                    Get A Fence Quote
                  </a>
                </li>
                <li className="mb-[2px] border-solid border-b-[1px] border-[rgba(255,255,255,0.3)]">
                  <a
                    href="/privacy-policy"
                    className="py-[8px] px-[6px] text-[14px] rounded-[4px] w-full block text-white hover:text-[#821302] hover:bg-white"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2">
              <ul className="pr-[20px]">
                <li className="mb-[2px] border-solid border-b-[1px] border-[rgba(255,255,255,0.3)]">
                  <a
                    href="/about-us/employment"
                    className="py-[8px] px-[6px] text-[14px] rounded-[4px] block text-white hover:text-[#821302] hover:bg-white"
                  >
                    Employment
                  </a>
                </li>
                <li className="mb-[2px]">
                  <a
                    href="/fence-company-reviews/"
                    className="py-[8px] px-[6px] text-[14px] rounded-[4px] w-full block text-white hover:text-[#821302] hover:bg-white"
                  >
                    Rating and Reviews
                  </a>
                </li>
                <li className="mb-[2px]">
                  <a
                    href="/about-us/why-superior-fence-rail/"
                    className="py-[8px] px-[6px] text-[14px] rounded-[4px] w-full block text-white hover:text-[#821302] hover:bg-white"
                  >
                    Why Us
                  </a>
                </li>
                <li className="mb-[2px]">
                  <a
                    href="/fence-services/fence-financing/"
                    className="py-[8px] px-[6px] text-[14px] rounded-[4px] w-full block text-white hover:text-[#821302] hover:bg-white"
                  >
                    Fence Financing
                  </a>
                </li>
                <li className="mb-[2px] border-solid border-b-[1px] border-[rgba(255,255,255,0.3)]">
                  <a
                    href="https://fencefranchise.superiorfenceandrail.com/"
                    className="py-[8px] px-[6px] text-[14px] rounded-[4px] w-full block text-white hover:text-[#821302] hover:bg-white"
                  >
                    Franchises
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-4">
              <div className="flex justify-center items-center h-full">
                <a href="/" className="flex justify-center items-center">
                  <CloudfrontImg
                    src={
                      data?.themeSettings?.themeOption?.footerLogo.node
                        .mediaItemUrl
                    }
                    alt={
                      data?.themeSettings?.themeOption?.footerLogo.node.altText
                    }
                    loading="lazy"
                    className="w-[265px] h-[86px]"
                  />
                </a>
              </div>
            </div>
            <div className="col-span-2">
              <ul className="flex flex-wrap">
                {data?.themeSettings?.themeOption?.awards?.edges?.map(
                  (_data, index) => (
                    <li className="w-[50%] p-[10px]" key={index}>
                      <CloudfrontImg
                        src={_data.node?.mediaItemUrl}
                        alt={_data.node?.altText}
                        width={50}
                        height={42}
                        loading="lazy"
                      />
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="col-span-2">
              <ul className="flex items-center justify-between">
                {data?.themeSettings?.themeOption?.socialMediaListing?.map(
                  (_item) => (
                    <li key={_item.socialMediaName} className="leading-[0]">
                      <a
                        href={_item.socialMediaLink}
                        className="inline-block hover:scale-105 transition-all"
                        target="_blank"
                      >
                        <SocialMediaIcons
                          platform={_item?.socialMediaName.toLowerCase()}
                        />
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="mt-[4px]">
            <a
              href="/"
              className="text-[14px] rounded-[4px] w-full block text-white hover:opacity-70"
            >
              Learn why internet quotes for fence installation worry home owners
            </a>
          </div>
          <div className="mt-[12px]">
            <p className="text-[#c5c5c5] text-[14px] leading-[1.2]">
              {data?.themeSettings?.themeOption?.footerBottomText}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#252525] py-[24px]">
        <div className="container">
          <p className="text-white text-sm">
            Superior Fence and Rail. Inc, 2025 © All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
