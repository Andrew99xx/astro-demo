import type { CommonSettingsQueryData } from "../../../graphql/generatedType/ResponseType";
import assets from "../../../json/assets";
import FacebookIcon from "../../../ui/Icons/facebookIcon";
import LinkedinIcon from "../../../ui/Icons/LinkedinIcon";
import TwitterIcon from "../../../ui/Icons/TwitterIcon";
import YoutubeIcon from "../../../ui/Icons/YoutubeIcon";
import { quoteLink } from "../../Header/Header";
import { CloudfrontImg } from "../../ui/CloudfrontImg";

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
      <div className="bg-[#231F20] py-[60px]">
        <div className="container">
          <div className="grid grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-4">
              <div className="flex justify-center h-full">
                <a href="/" className="flex justify-center">
                  <CloudfrontImg
                    src={assets.footer_logo}
                    alt={
                      data?.themeSettings?.themeOption?.footerLogo.node.altText
                    }
                    loading="lazy"
                    className="w-[265px] h-[60px]"
                  />
                </a>
              </div>
            </div>
            <div className="col-span-1  md:col-span-4">
              <ul className="flex flex-wrap max-w-[180px] md:max-w-[270px] md:mx-auto md:justify-center">
                {data?.themeSettings?.themeOption?.awards?.edges?.map(
                  (_data, index) => (
                    <li
                      className="w-[50%] md:w-[25%] p-[10px] md:p-1"
                      key={index}
                    >
                      <CloudfrontImg
                        src={_data.node?.mediaItemUrl}
                        alt={_data.node?.altText}
                        width={77}
                        height={64}
                        loading="lazy"
                      />
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="col-span-1  md:col-span-2 xs:col-span-4">
              <ul className="pr-[20px]">
                {data?.themeSettings?.themeOption?.footerMenuOne?.map(
                  (item, index) => (
                    <li className="mb-[2px] " key={index}>
                      <a
                        href={item?.footerMenuOneLink}
                        className="py-[8px] px-[6px] text-[18px] font-sourcesans rounded-[4px] w-full block  text-white hover:text-[#821302] hover:bg-white"
                      >
                        {item?.footerMenuOneName}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="col-span-1  md:col-span-2 xs:col-span-4">
              <ul className="pr-[20px]">
                {data?.themeSettings?.themeOption?.footerMenuTwo?.map(
                  (item, index) => (
                    <li className="mb-[2px] " key={index}>
                      <a
                        href={item?.footerMenuTwoLink}
                        className="py-[8px] px-[6px] text-[18px] font-sourcesans rounded-[4px] w-full block  text-white hover:text-[#821302] hover:bg-white"
                      >
                        {item?.footerMenuTwoName}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* <div className="col-span-2">
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
            </div> */}
          </div>
          {/* <div className="mt-[4px]">
            <a
              href="/"
              className="text-[14px] rounded-[4px] w-full block text-white hover:opacity-70"
            >
              Learn why internet quotes for fence installation worry home owners
            </a>
          </div> */}
          {/* <div className="mt-[12px]">
            <p className="text-[#c5c5c5] text-[14px] leading-[1.2]">
              {data?.themeSettings?.themeOption?.footerBottomText}
            </p>
          </div> */}
        </div>
      </div>
      <div className="bg-[#231F20] py-[24px]">
        <div className="container">
          <p className="text-white font-sourcesans text-[18px] md:text-center md:text-[16px]">
            <a
              href="/"
              className="text-white font-sourcesans transition-all duration-300 ease-in-out hover:text-primary"
            >
              {" "}
              Superior Fence and Rail. Inc
            </a>
            , 2025 © All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
