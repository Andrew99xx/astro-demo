import dayjs from "dayjs";
import { CloudfrontImg } from "../ui/CloudfrontImg";

interface IBlogDetailsBannerNewsProps {
  categories: {
    edges: {
     node:{
      name: string;
      slug: string;
     }
    }[];
  };
  title: string;
  date: string;
  author: string;
  featuredImage?: {
    node: {
      altText?: string;
      mediaItemUrl: string;
    };
  };
}
const BlogDetailsBannerLocation = ({
  categories,
  title,
  date,
  author,
  featuredImage
}: IBlogDetailsBannerNewsProps) => {
  return (
    <div className=" relative min-h-[500px] bannerHome before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[rgba(0,0,0,.35)] before:z-20 ">
      <figure className=" absolute size-full left-0 top-0 z-10">
        <CloudfrontImg
          src={featuredImage.node.mediaItemUrl}
          alt={featuredImage.node.altText}
          className="size-full object-cover object-top"
        />
      </figure>

      <div className="pt-[200px] pb-[20px] relative z-20">
        <div className="container">
          <ul className="flex items-center flex-wrap mb-3">
            {categories.edges?.map((item, index) => (
              <li
                key={index}
                className="relative before:content-[''] before:absolute before:top-3 before:left-0 before:w-1 before:h-1 before:rounded-[50%] before:bg-[#51acfb] pl-[10px] pr-[10px]"
              >
                <a
                  href={`/${item?.node?.slug}`}
                  className="text-white text-[14px] cursor-pointer hover:text-primary  font-montserratsemibold uppercase transition-all duration-300"
                >
                  {item?.node?.name}
                </a>
              </li>
            ))}
          </ul>
          <h1 className="text-white text-left font-normal capitalize">
            {title}
          </h1>
          <div className="flex items-center">
            <p className="text-white text-[20px] font-montserratsemibold">
              {dayjs(date).format("MMM DD YYYY")} /
            </p>
            <a
              href="#url"
              className="text-white text-[20px] hover:text-primary font-montserratsemibold pl-2 transition-all duration-300"
            >
              by {author} /
            </a>
            <a
              href="#url"
              className="text-white text-[20px] hover:text-primary font-montserratsemibold pl-2"
            >
              0
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsBannerLocation;
