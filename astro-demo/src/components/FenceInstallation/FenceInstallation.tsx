import type { AllFenceInstallationVideo } from "../../graphql/generatedType/ResponseType";
import { CloudfrontImg } from "../ui/CloudfrontImg";
import ReactFancybox from "../ui/ReactFacncyBox";

const FenceInstallation = ({ data }: { data: AllFenceInstallationVideo }) => {
  console.log(data, "vdata");

  return (
    <div className="relative py-[80px] prepare_sec">
      <div className="relative z-10">
        <div className="container">
          <h2 className="font-normal text-center text-[40px] mb-9">
            Prepare for your fence installation
          </h2>
          <ReactFancybox
            options={{
              Carousel: {
                infinite: false,
              },
            }}
          >
            {" "}
            <div className="flex flex-wrap align-center -mx-5 -my-5 lg:-m-[12px]">
              {data?.edges.map((item, index) => (
                <div
                  className={`${
                    index === data?.edges?.length - 1 ||
                    index === data?.edges?.length - 2
                      ? "w-1/2 px-5  py-5 lg:p-[12px]"
                      : "w-[33.33%] px-5  py-5 lg:p-[12px]" 
                  } `}
                  key={item?.node.title}
                >
                  <a
                    data-fancybox="video-gallery"
                    href={
                      item?.node.fenceVideoTutorialPagePurpose
                        .fenceVideoTutorialVideoLink ??
                      "https://youtu.be/0_o2-fiPG2U?si=MZjDMgRmwf3G5GEn"
                    }
                    className="mb-8 width-full inline-block"
                  >
                    <CloudfrontImg
                      src={
                        item?.node?.fenceVideoTutorialPagePurpose
                          ?.videoThumbImage?.node?.mediaItemUrl
                      }
                      alt={
                        item?.node?.fenceVideoTutorialPagePurpose
                          ?.videoThumbImage?.node?.altText
                      }
                    />
                  </a>
                  <h3 className="text-center">{item?.node.title}</h3>
                </div>
              ))}
            </div>
          </ReactFancybox>
        </div>
      </div>
    </div>
  );
};

export default FenceInstallation;
