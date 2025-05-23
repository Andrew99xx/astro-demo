import moment from "moment";
import { useEffect, useState } from "react";
import type { IFenceTypesSidebar } from "../../graphql/generatedType/FenceTypeResponseTypes";
import type {
  FenceGalleryImage,
  ICommonSideBarQueryResponse,
} from "../../graphql/generatedType/FenceTypeSubCategoryTypes";
import { slugify } from "../../lib/utils";
import FenceTypeSidebar from "../FenceTypeSidebar/FenceTypeSidebar";
import { CloudfrontImg } from "../ui/CloudfrontImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface IImageGallery extends FenceGalleryImage {}

const SubCategoryFenceType = ({
  sideBarData,
  data,
}: {
  sideBarData: IFenceTypesSidebar;
  data: ICommonSideBarQueryResponse;
}) => {
  const [allImages, setAllImages] = useState<IImageGallery[] | []>([]);

  const listing = data?.allFenceTypes?.edges?.[0];
  const listingData = listing?.node?.fenceTypePostPurpose;

  const postData =
    listingData?.fenceType === "Listing" ? data?.posts.edges : null;

  useEffect(() => {
    if (
      listing?.node?.fenceTypePostPurpose.fenceType === "Gallery" &&
      listingData?.fenceGalleryListing.length
    )
      setAllImages([
        ...listingData?.fenceGalleryListing.flatMap((_data) =>
          _data.fenceGalleryImages.nodes.map((innerData) => ({
            altText: innerData?.altText,
            mediaItemUrl: innerData?.mediaItemUrl,
          }))
        ),
      ]);
  }, [
    listingData?.fenceGalleryListing,
    listing?.node?.fenceTypePostPurpose.fenceType,
  ]);

  console.log(data, "data1");

  return (
    <div className="py-[150px]">
      <div className="container">
        <div
          className={`${
            listing?.node?.fenceTypePostPurpose.fenceType === "Gallery"
              ? "pb-0"
              : "pb-[8em]"
          }`}
        >
          <div className="flex flex-wrap  -m-5">
            <div className="w-[25%] p-5">
              <FenceTypeSidebar data={sideBarData} />
            </div>
            <div className="w-[75%] p-5">
              {listing?.node?.fenceTypePostPurpose.fenceType === "Gallery" ? (
                <Tabs defaultValue="all" className="w-full">
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>

                    {listing?.node?.fenceTypePostPurpose?.fenceGalleryListing?.map(
                      (tab) => (
                        <TabsTrigger
                          value={tab?.fenceGalleryHeading?.toLowerCase()}
                          key={tab?.fenceGalleryHeading}
                        >
                          {tab?.fenceGalleryHeading?.toUpperCase()}
                        </TabsTrigger>
                      )
                    )}
                  </TabsList>
                  <TabsContent value={"all"}>
                    <div className=" flex items-center flex-wrap -m-[5px]">
                      {allImages?.map((img: FenceGalleryImage) => (
                        <div key={img?.altText} className=" p-[5px] w-1/4">
                          <a
                            href="#url"
                            className="block transition-all duration-300 ease-in-out overflow-hidden m-0 h-[150px] border-[4px] border-[#cccaca] "
                          >
                            <CloudfrontImg
                              src={img.mediaItemUrl}
                              alt={img.altText}
                              className="size-full object-cover transition-all duration-300 ease-in-out"
                            />
                          </a>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  {listing?.node?.fenceTypePostPurpose?.fenceGalleryListing?.map(
                    (tab) => (
                      <TabsContent
                        value={tab?.fenceGalleryHeading.toLowerCase()}
                      >
                        <div className=" flex items-center flex-wrap -m-[5px]">
                          {tab?.fenceGalleryImages?.nodes?.map((img) => (
                            <div key={img?.altText} className=" p-[5px] w-1/4">
                              <a
                                href="#url"
                                className="block transition-all duration-300 ease-in-out overflow-hidden m-0 h-[150px] border-[4px] border-[#cccaca] "
                              >
                                <CloudfrontImg
                                  src={img.mediaItemUrl}
                                  alt={img.altText}
                                  className="size-full object-cover transition-all duration-300 ease-in-out"
                                />
                              </a>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                    )
                  )}
                </Tabs>
              ) : (
                <>
                  <div
                    className=" details_block"
                    dangerouslySetInnerHTML={{
                      __html: listingData?.fenceListingInfo,
                    }}
                  />

                  <div className=" mt-[4em] mb-[2em] border border-[#ccc]"></div>

                  <div className=" flex flex-wrap -m-[1em]">
                    {listingData?.fenceListingImages?.edges?.map((image) => (
                      <div
                        key={image?.node?.altText}
                        className={` p-[1em] flex items-center justify-center flex-col text-center ${
                          listingData?.fenceListingImages?.edges.length > 1
                            ? "w-1/2"
                            : "w-full"
                        }`}
                      >
                        <figure className="w-full h-full object-cover">
                          <CloudfrontImg
                            src={image?.node?.mediaItemUrl}
                            alt={image?.node?.altText}
                            className="size-full"
                          />
                        </figure>

                        <h4 className=" text-primary  text-[.9rem] mt-[2em] capitalize">
                          {image?.node?.altText}
                        </h4>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {listing?.node?.fenceTypePostPurpose.fenceType === "Listing" &&
        postData?.length > 0 && (
          <>
            <div className=" h-2 bg-primary "></div>

            <div className=" container">
              <div className="pb-[80px] pt-[4em]">
                <div className="container">
                  <div className="text-center mb-[40px]">
                    <h4 className="text-center text-[12px] font-semibold uppercase">
                      FENCE NEWS
                    </h4>
                    <h2 className="text-center text-[32px]">Recent Posts</h2>
                  </div>
                  <div className="flex flex-wrap -m-3">
                    {postData.map((item, index) => (
                      <div className="w-[33.33%] p-3" key={index}>
                        <a
                          href={`/fence-installation/${slugify(
                            item?.node?.title
                          )}`}
                          className="block transition-all duration-300 ease-in-out overflow-hidden m-0 h-[252px]   fencenews_fig "
                        >
                          <img
                            src={item.node?.featuredImage?.node?.mediaItemUrl}
                            alt={item.node?.featuredImage?.node?.altText}
                            className="size-full object-cover transition-all duration-300 ease-in-out"
                          />
                        </a>

                        <div className="p-4 bg-[rgba(0,0,0,.04)] ">
                          <div className="flex items-center justify-center">
                            <p className="text-[12px] font-montserratregular">
                              {moment(item?.node?.date).format("MMM DD YYYY")}
                            </p>
                            {/* <a href="#url">Fence Video Tutorials</a> */}
                          </div>
                          <h3 className="mb-[10px] text-center">
                            <a
                              href={`/fence-installation/${slugify(
                                item?.node?.title
                              )}`}
                              className="transition-all duration-300 ease-in-out hover:text-primary"
                            >
                              {item?.node?.title}
                            </a>
                          </h3>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item?.node?.excerpt,
                            }}
                            className="text-center fenceinstall_cnt"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
    </div>
  );
};

export default SubCategoryFenceType;
