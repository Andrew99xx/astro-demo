import type {
  AllFenceTypes,
  IShowInnerCardProps,
} from "../../graphql/generatedType/ResponseType";
import FenceCard from "../FenceCard/FenceCard";
import InnerBannerCard from "../InnerBanner/InnerBannerCard";
import { Button } from "../ui/button";

export default function SelectYourFenceSec({
  showInnerCard,
  data,
  headerBottomBlockOneDescription,
  headerBottomBlockOneHeading,
  headerBottomBlockThreeDescription,
  headerBottomBlockThreeHeading,
  headerBottomBlockTwoHeading,
  headerBottomBlockTwoDescription,
  noBtn,
  headerBottomBlockOneLink,
  headerBottomBlockTwoLink,
  headerBottomBlockThreeLink,
}: {
  showInnerCard?: boolean;
  data: AllFenceTypes;
  headerBottomBlockOneDescription?: string;
  headerBottomBlockOneHeading?: string;
  headerBottomBlockThreeDescription?: string;
  headerBottomBlockThreeHeading?: string;
  headerBottomBlockTwoHeading?: string;
  headerBottomBlockTwoDescription?: string;
  noBtn?: boolean;
  headerBottomBlockOneLink?: string;
  headerBottomBlockTwoLink?: string;
  headerBottomBlockThreeLink?: string;
}) {
  console.log(
    data?.edges[0].node?.fenceTypesCategoryPurpose?.fenceTypesThumbnail?.node
      ?.mediaItemUrl,
    "datadatadatadatadata"
  );
  return (
    <div className="pb-[4em] fenceSecBg">
      {showInnerCard && (
        <InnerBannerCard
          headerBottomBlockOneDescription={headerBottomBlockOneDescription}
          headerBottomBlockOneHeading={headerBottomBlockOneHeading}
          headerBottomBlockThreeDescription={headerBottomBlockThreeDescription}
          headerBottomBlockThreeHeading={headerBottomBlockThreeHeading}
          headerBottomBlockTwoHeading={headerBottomBlockTwoHeading}
          headerBottomBlockTwoDescription={headerBottomBlockTwoDescription}
          headerBottomBlockOneLink={headerBottomBlockOneLink}
          headerBottomBlockTwoLink={headerBottomBlockTwoLink}
          headerBottomBlockThreeLink={headerBottomBlockThreeLink}
        />
      )}
      <div className="pt-[60px]">
        <div className="container">
          <h2 className="text-center  mb-[4rem] md:text-[28px]">Select your new fence</h2>
          <div className="grid grid-cols-3 gap-[30px] lg:gap-[12px] md:grid-cols-2 xs:grid-cols-1">
            {data?.edges?.map((item) => (
              <FenceCard
                image={
                  item?.node?.fenceTypesCategoryPurpose?.fenceTypesThumbnail
                    ?.node?.mediaItemUrl
                }
                altText={
                  item?.node?.fenceTypesCategoryPurpose?.fenceTypesThumbnail
                    ?.node?.altText
                }
                title={
                  item?.node?.fenceTypesCategoryPurpose.fenceTypesDisplayName ||
                  item?.node?.name
                }
                slug={item?.node?.slug}
              />
            ))}
          </div>
          {!noBtn && (
            <div className="flex justify-center mt-[5em]">
              <a
                className="px-[58px] text-[14.4px] red_btn"
                href="/fence-types"
              >
                {"VIEW MORE FENCE TYPES >"}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
