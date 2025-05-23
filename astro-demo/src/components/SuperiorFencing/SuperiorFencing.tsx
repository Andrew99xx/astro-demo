import type { HomePagePurposeNew } from "../../graphql/generatedType/ResponseType";
import assets from "../../json/assets";
import { CloudfrontImg } from "../ui/CloudfrontImg";

export default function SuperiorFencing({
  data,
}: {
  data: HomePagePurposeNew;
}) {
  return (
    <div className="bg-[#ededed] py-[80px] relative">
      <div className="container">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4">
            <div className="relative">
              <CloudfrontImg
                src={data?.superiorFenceCompanyImage?.node?.mediaItemUrl}
                alt={data?.superiorFenceCompanyImage?.node?.altText}
                loading="lazy"
                className="w-[400px] h-[600px]"
              />
            </div>
          </div>
          <div className="col-span-8">
            <div>
              <h2 className="mb-[16px] leading-[1.2] text-[40px]">
                {data.superiorFenceCompanyHeading}
              </h2>
              <div
                className="fencingProducts_cnt"
                dangerouslySetInnerHTML={{
                  __html: data.superiorFenceCompanyDescription,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
