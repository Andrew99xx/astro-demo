import moment from "moment";
import type { IAboutUsPosts } from "../../graphql/generatedType/CommonTypes";
import { CloudfrontImg } from "../ui/CloudfrontImg";

export default function NewsRecentPost2({
  postData,
}:{postData:IAboutUsPosts}) {

  console.log(postData,"postData")

  return (
    <div className="py-[60px]  border-[#821302] border-t-[8px]">
      <div className="container">
        <div className="mb-[90px] text-center">
          <p className="text-[12px] font-montserratregular font-semibold text-[#252525]">
            FENCE NEWS
          </p>
          <h2>Recent Posts</h2>
        </div>
        <div className="grid grid-cols-12 gap-8">
          {postData?.edges?.map((item, index) => (
            <div className="col-span-4" key={index}>
              <div className="relative h-full bg-[rgba(0,0,0,.04)]">
                <figure className="w-full h-[212px] overflow-hidden m-0 leading-[0]">
                  <a
                    // href="#url"
                    href={`/fence-installation/${item?.node?.slug?.toLocaleLowerCase()}`}
                    className="hover:scale-105 transition-all duration-300 inline-block"
                  >
                    <CloudfrontImg
                      src={item?.node?.featuredImage?.node?.mediaItemUrl}
                      alt={item?.node?.featuredImage?.node?.altText}
                      className="w-full object-cover"
                    />
                  </a>
                </figure>
                <div className=" p-4 text-center font-montserratregular">
                  {/* <p className="uppercase text-[12px] font-medium mb-[8px]">
                    {moment(item?.node?.featuredImage?.node?.).format(
                      "MMMM DD, YYYY"
                    )}
                  </p> */}
                  <h3 className="leading-[1.3] mb-[10px] line-clamp-2">
                    <a
                      // href="#url"
                      href={`/fence-installation/${item?.node?.slug?.toLocaleLowerCase()}`}
                      className="hover:text-[#51acfb] transition-all duration-300"
                    >
                      {item?.node?.title}
                    </a>
                  </h3>
                  <div
                    className="text-black text-[14px] line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html: item?.node?.excerpt,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
