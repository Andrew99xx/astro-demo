import type { IShowInnerCardProps } from "../../graphql/generatedType/ResponseType";

const InnerBannerCard = ({
  headerBottomBlockOneDescription,
  headerBottomBlockOneHeading,
  headerBottomBlockThreeDescription,
  headerBottomBlockThreeHeading,
  headerBottomBlockTwoHeading,
  headerBottomBlockTwoDescription,
  headerBottomBlockOneLink,
  headerBottomBlockThreeLink,
  headerBottomBlockTwoLink,
}: IShowInnerCardProps) => {
  console.log(headerBottomBlockOneLink, "headerBottomBlockOneLink");
  return (
    <div className="lg:-mt-[40px]">
      <div className="container">
        <div className=" mx-auto flex flex-wrap  -m-[15px] -mt-10 relative z-[99] lg:-m-[10px]">
          <div className="w-1/3 px-[15px] lg:p-[10px] md:w-full">
            <div className="flex justify-center  hover:shadow-lg hover:shadow-black/10 hover:transition-shadow  p-6 transition-all duration-300 cmn_card">
              <a
                href={headerBottomBlockOneLink}
                className=" transition-all w-full h-full"
              >
                <h3 className="text-[20px] lg:text-[18px] capitalize text-primary font-normal mb-2 text-center">
                  {headerBottomBlockOneHeading}
                </h3>
                <p className="text-[16px] capitalize text-primary font-montserratsemibold text-center">
                  {headerBottomBlockOneDescription}
                </p>
              </a>
            </div>
          </div>
          <div className="w-1/3 px-[15px] lg:p-[10px] md:w-full">
            <div className="flex justify-center p-6  hover:shadow-lg hover:shadow-black/10 hover:transition-shadow transition-all duration-300 cmn_card">
              <a
                href={headerBottomBlockTwoLink}
                className=" transition-all w-full h-full"
              >
                <h3 className="text-[20px] lg:text-[18px] capitalize text-primary font-normal mb-2 text-center">
                  {headerBottomBlockTwoHeading}
                </h3>
                <p className="text-[16px] capitalize text-primary font-montserratsemibold text-center">
                  {headerBottomBlockTwoDescription}
                </p>
              </a>
            </div>
          </div>
          <div className="w-1/3 px-[15px] lg:p-[10px] md:w-full">
            <div className="flex justify-center p-6  hover:shadow-lg hover:shadow-black/10 hover:transition-shadow transition-all duration-300 cmn_card">
              <a
                href={headerBottomBlockThreeLink}
                className=" transition-all w-full h-full"
              >
                <h3 className="text-[20px] lg:text-[18px] capitalize text-primary font-normal mb-2 text-center">
                  {headerBottomBlockThreeHeading}
                </h3>
                <p className="text-[16px] capitalize text-primary font-montserratsemibold text-center">
                  {headerBottomBlockThreeDescription}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerBannerCard;
