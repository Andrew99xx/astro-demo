import type { HomePagePurposeNew } from "../../graphql/generatedType/ResponseType";
import { Button } from "../ui/button";

const SuperiorSec = ({ data }: { data: HomePagePurposeNew }) => {
  console.log(data, "superior");

  return (
    <div className="relative suprior_sec border-solid border-[#821302] border-t-[8px] py-[80px]">
      <div className="realtive z-10">
        <div className="container">
          <h2 className="font-normal text-center text-[40px] mb-9">
            {data?.ownASuperiorFenceHeading}
          </h2>
          <p className="text-center max-w-[786px] mx-auto">
            {data?.ownASuperiorFenceDescription}
          </p>
          <div className="text-center mt-14 flex justify-center">
            <a
              href="https://fencefranchise.superiorfenceandrail.com/"
              className="min-w-[198px] h-[43px] red_btn"
            >
              {`${data?.ownASuperiorFenceButtonTitle} >`}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperiorSec;
