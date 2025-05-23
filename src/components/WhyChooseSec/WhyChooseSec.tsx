import React from "react";
import { Button } from "../ui/button";
import type { HomePagePurposeNew } from "../../graphql/generatedType/ResponseType";
import { slugify } from "../../lib/utils";

export default function WhyChooseSec({ data }: { data: HomePagePurposeNew }) {
  return (
    <div className="py-[100px]">
      <div className="container">
        <h2 className="text-center mb-[56px]">
          {data?.whyChooseSuperiorFenceHeading ||
            "Why choose Superior Fence & Rail to be your fence company?"}
        </h2>
        <div>
          <p className="text-center mb-[4em]">
            {data?.whyChooseSuperiorFenceDescription ||
              "At Superior Fence & Rail, we endeavor to live up to our reputation as the highest-rated fence company in the country. Our fences define boundaries, enhance lifestyle, secure what’s important, and impart peace of mind. A first class fence installation experience allows people to maximize the benefits of their fence."}
          </p>
          {data?.listingOfReasons?.map((item) => (
            <div
              className="grid grid-cols-3 gap-[50px] mb-[60px]"
              key={item?.title}
            >
              <div className="col-span-1 text-right pl-[25px]">
                <h3 className="text-[28px]">{item.title}</h3>
              </div>
              <div className="col-span-2 pr-[25px]">
                <p>{item.description}</p>
                <div className="pt-[50px]">
                  <a
                    href="/about-us/why-superior-fence-rail"
                    className="px-[50px] text-[14.4px] min-w-auto red_btn"
                  >
                    {` Learn More >`}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
