import moment from "moment";
import type {
  IV3NewPostTypes,
} from "../../../graphql/generatedType/ResponseType";
import assets from "../../../json/assets";
import { CloudfrontImg } from "../../ui/CloudfrontImg";

export const listData = [
  {
    imgPath: assets?.newsRcntPostImg1,
    datetxt: " December 16, 2024",
    title: "10 Creative Privacy Fence Ideas for Your Backyard",
    txtPara:
      "Wood fence ideas from Superior Fence & Rail can assist you in deciding what type of wood fence to have installed on your property.",
  },
  {
    imgPath: assets?.newsRcntPostImg2,
    datetxt: "June 5, 2024",
    title: "Enhancing Your Home with the Right Fence: A Guide to",
    txtPara:
      "Fences are not just functional structures; they are also essential elements of a home's overall aesthetic and functionality. Read more to understand fence purposes and the fence",
  },
  {
    imgPath: assets?.newsRcntPostImg3,
    datetxt: "May 28, 2024",
    title: "Navigating Shared Fence Lines: How to Share Fence",
    txtPara:
      "Effectively communicating with your neighbor about sharing the cost of a fence can prevent misunderstandings and foster positive relationships. Here are some strategies to help",
  },
  {
    imgPath: assets?.newsRcntPostImg4,
    datetxt: "May 22, 2024",
    title: "Birmingham Fence Company Puts Safety First with Fencin",
    txtPara:
      "A Birmingham fence company will put safety first when it comes to pool fence installation. You can count on Superior Fence & Rail.",
  },
  {
    imgPath: assets?.newsRcntPostImg5,
    datetxt: "April 5, 2024",
    title: "Choosing the Best Fence Company Near Me in",
    txtPara:
      "Looking for the best fence company near me in Alabaster, AL? Look no further than Superior Fence & Rail of Birmingham.",
  },
  {
    imgPath: assets?.newsRcntPostImg6,
    datetxt: "February 23, 2024",
    title: "Exploring Wood Fence Ideas, Including Wood Fence Gates",
    txtPara:
      "Wood fence ideas from Superior Fence & Rail can assist you in deciding what type of wood fence to have installed on your property.",
  },
  {
    imgPath: assets?.newsRcntPostImg7,
    datetxt: "February 23, 2024",
    title: "Garden Fence Ideas to Elevate Your Landscape",
    txtPara:
      "Looking for garden fence ideas? Look no further. Superior Fence & Rail has some great ideas, and can professionally install a fence for you.",
  },
  {
    imgPath: assets?.newsRcntPostImg8,
    datetxt: "February 22, 2024",
    title: "Contemporary Horizontal Fence Ideas",
    txtPara:
      "The horizontal fence has become popular, combining style with functionality. This modern approach to fencing offers clean lines and a contemporary aesthetic. It also offers a sense ",
  },
  {
    imgPath: assets?.newsRcntPostImg9,
    datetxt: "February 22, 2024",
    title: "Understanding Vinyl Fence Costs",
    txtPara:
      "Navigating vinyl fence costs and PVC fence costs and understanding the overall costs associated can be complex. Learn more.",
  },
  {
    imgPath: assets?.newsRcntPostImg10,
    datetxt: "February 22, 2024",
    title: "What Is the Best Wood for Fences?",
    txtPara:
      "Choosing the best wood for fences requires knowledge. Check out our guide to help you choose the best wood for your fence.",
  },
  {
    imgPath: assets?.newsRcntPostImg11,
    datetxt: "February 22, 2024",
    title: "Rustic Split Rail Fence Ideas",
    txtPara:
      "If you're looking for inspiration, here are our favorite rustic split rail fence ideas at Superior Fence & Rail.",
  },
  {
    imgPath: assets?.newsRcntPostImg11,
    datetxt: "February 22, 2024",
    title: "Farm Fence Ideas for Rustic Charm",
    txtPara:
      "Don't let your farm's fencing be an afterthought. Enhance its security and aesthetic appeal with one of these farm fence ideas that embodies rustic charm and durability.",
  },
  {
    imgPath: assets?.newsRcntPostImg13,
    datetxt: "February 21, 2024",
    title: "Navigating Chain Link Fence Costs",
    txtPara:
      "Understanding the intricacies of chain link fence cost is essential for any property owner considering new fencing.",
  },
  {
    imgPath: assets?.newsRcntPostImg14,
    datetxt: "February 20, 2024",
    title: "Creative Privacy Fence Ideas for Your Outdoor Sanctuary",
    txtPara:
      "Superior Fence & Rail is here to inspire you with innovative privacy fence ideas based on our customer experiences.",
  },
  {
    imgPath: assets?.newsRcntPostImg15,
    datetxt: "February 19, 2024",
    title: "Inspiring Wooden Fence Ideas for Your Yard",
    txtPara:
      "Exploring various wooden fence ideas can help you find the perfect fit for your needs. Let Superior Fence & Rail help you choose.",
  },
  {
    imgPath: assets?.newsRcntPostImg16,
    datetxt: "February 16, 2024",
    title: "What Is a Box Wire Fence?",
    txtPara:
      "Unlike traditional wood and wire fences, which have their charm, box wire fences offer a contemporary solution",
  },
  {
    imgPath: assets?.newsRcntPostImg17,
    datetxt: "February 16, 2024",
    title: "Innovative Fence Designs for Every Space",
    txtPara:
      "Fence designs define our outdoor living spaces, secure our most cherished possessions, and provide a significant sense of privacy and peace of mind.",
  },
  {
    imgPath: assets?.newsRcntPostImg18,
    datetxt: "February 16, 2024",
    title: "Unique Wire Fence Ideas for Your Landscape",
    txtPara:
      "At Superior Fence & Rail, we have a curated selection of innovative wire fence ideas designed to inspire your next landscaping project.",
  },
];

export default function NewsRecentPostV3({
  postData,
}: {
  postData: IV3NewPostTypes;
}) {
  return (
    <div className="py-[100px] bg-[#a49e8d] md:py-[80px]" id="service-areas">
      <div className="container_big">
        <div className="mb-[90px] text-center lg:mb-[50px] md:mb-[42px]">
          <h2 className="font-oswald font-light text-[64px] md:text-[34px] mb-[20px] text-white leading-7 post_hding">
            FENCE POSTS
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-y-[16px] gap-x-[16px] lg:gap-x-[15px] post_col">
          {postData.edges.map((item, index) => (
            <div
              className="col-span-4 md:col-span-6 xs:col-span-12 post_crd"
              key={index}
            >
              <div className="relative h-full">
                <figure className="w-full h-[404px] lg:h-[264px] overflow-hidden m-0 leading-[0]">
                  <a
                    href={`/fence-installation/${item?.node?.slug?.toLocaleLowerCase()}`}
                    className="hover:scale-105 transition-all duration-300 inline-block w-full h-full"
                  >
                    <CloudfrontImg
                      src={item?.node?.featuredImage?.node?.mediaItemUrl}
                      alt={item?.node?.featuredImage?.node?.altText}
                      className="w-full h-full object-cover"
                    />
                  </a>
                </figure>
                <div className="pt-[30px] lg:pt-[20px]">
                  <h3 className="leading-[1.3] font-oswald text-black  font-light text-[48px] mb-[20px] line-clamp-2 lg:!text-[28px]">
                    <a
                      href={`/fence-installation/${item?.node?.slug?.toLocaleLowerCase()}`}
                      className="hover:text-primary transition-all duration-300"
                    >
                      {item?.node?.title}
                    </a>
                  </h3>
                  <p className="uppercase text-[20px] font-sourcesans font-bold text-black mb-[8px] lg:text-[16px]">
                    {moment(item?.node?.featuredImage?.node?.date).format(
                      "MMMM DD, YYYY"
                    )}
                  </p>

                  {/* <div
                    className="text-black font-sourcesans font-regular text-[24px] line-clamp-3 mb-8" 
                    dangerouslySetInnerHTML={{
                      __html: item?.node?.excerpt
                        ? item.node.excerpt
                        : item?.node?.content,
                    }}
                  /> */}
                </div>
                
                {/* <a
                  href={`/fence-installation/${item?.node?.slug?.toLocaleLowerCase()}`}
                  className="inline-flex items-center justify-center font-robotobold !text-[20px] !rounded-none h-[84px] lg:h-[40px] min-w-[224px] xs:min-w-auto xs:w-full md:!text-[16px] bg-primary text-white hover:bg-black transition-all duration-300 ease-in-out p-3"
                >
                  Read More {">"}
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
