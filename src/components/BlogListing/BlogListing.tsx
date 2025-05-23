import { Calendar, FileIcon, UserIcon } from "lucide-react";
import moment from "moment";
import { useState } from "react";
import type { IBlogListing } from "../../graphql/generatedType/BlogListing.Types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import { CloudfrontImg } from "../ui/CloudfrontImg";

const BlogListing = ({ blogData, title="Fence News" }: { blogData: IBlogListing ,title?:string}) => {
  console.log(blogData, "blogData");

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogData?.posts?.edges?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );


  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(blogData?.posts?.edges?.length / postsPerPage);

  return (
    <div className="pt-[160px] pb-[80px]">
      <div className="container">
        <h1 className="text-left text-[48px] font-normal text-headingPrimary mb-5 font-montserratregular">
        {  title}
        </h1>
        {currentPosts?.map((blog, index) => (
          <Accordion
            type="single"
            collapsible
            defaultValue={`item-${index +1}`}
            className="w-full"
            key={index}
          >
            <AccordionItem
              value={`item-${index + 1}`}
              className="shadow-[1px_1px_3px_rgba(176,178,181,.34)] bg-[#dbdbdb] mb-[20px] border border-[#ddd]"
            >
              <AccordionTrigger className="py-[15px] px-[15px] bg-white text-primary hover:text-headingPrimary">
                <a
                  className="text-inherit font-bold font-montserratsemibold text-[24px] leading-[1.5]"
                  href={`/fence-installation/${blog?.node?.slug}`}
                >
                  {blog?.node?.title}
                </a>
              </AccordionTrigger>
              <AccordionContent className="!p-[10px]">
                <div>
                  <figure
                    className="w-[320px] h-[240px] mr-[20px] mb-[20px]"
                    style={{
                      float: "left",
                    }}
                  >
                    <CloudfrontImg
                      className="size-full object-cover"
                      src={blog?.node?.featuredImage?.node?.mediaItemUrl}
                      alt={blog?.node?.featuredImage?.node?.altText}
                    />
                  </figure>
                  <div
                    className="mb-6 mt-2 leading-[1.3] text-[18px] text-[#252525] overflow-hidden text-ellipsis whitespace-normal"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                    dangerouslySetInnerHTML={{ __html: blog?.node?.content }}
                  ></div>
             
                  <Button
                    onClick={() =>
                      (window.location.href = `/fence-installation/${blog?.node?.slug}`)
                    }
                  >{`Read More >`}</Button>

                  <ul className="flex flex-wrap gap-[1px] mt-6">
                    <li className="flex items-center w-auto mr-2 text-[13px]">
                      <i className="inline-flex items-center justify-center size-[16px] mr-1">
                        <UserIcon />
                      </i>
                      {blog?.node?.author?.node?.firstName}
                      {blog?.node?.author?.node?.lastName}
                    </li>
                    <li className="flex items-center w-auto mr-2 text-[13px]">
                      <i className="inline-flex items-center justify-center size-[16px] mr-1">
                        <Calendar />
                      </i>
                      {moment(blog?.node?.date).format("MMMM D, YYYY")}
                    </li>
                    <li className="flex items-center w-auto mr-2 text-[13px]">
                      <i className="inline-flex items-center justify-center size-[16px] mr-1">
                        <FileIcon />
                      </i>
                      <a
                        href={`/fence-installation/${blog?.node?.categories?.edges[0]?.node?.slug}`}
                        className="text-[13px] text-[#821302] hover:text-[rgba(51,51,51,0.4)]"
                      >
                        {blog?.node?.categories?.edges[0]?.node?.name}
                      </a>
                    </li>
                    {blog?.node?.tags?.nodes?.map((tag) => (
                      <li
                        className="flex items-center w-auto mr-1"
                        key={tag.name}
                      >
                        <a
                          href={`/fence-installation/${tag.name}`}
                          className="text-[13px] text-[#821302] hover:text-[rgba(51,51,51,0.4)]"
                        >
                          {tag.name},
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center mt-[20px]">
                    <a
                      href="https://www.facebook.com/superiorfenceandrailofnorthflorida/"
                      className="mr-[8px] hover:[opacity:0.8]"
                    >
                      <img
                        src="/assets/images/facebook.png"
                        alt="facebook"
                        style={{ width: "32px", height: "auto" }}
                      />
                    </a>
                    <a
                      href="https://x.com/SuperiorFence"
                      className="mr-[8px]  hover:[opacity:0.8]"
                    >
                      <img
                        src="/assets/images/twitter.png"
                        alt="twitter"
                        style={{ width: "32px", height: "auto" }}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/superior-fence-and-rail/"
                      className=" hover:[opacity:0.8]"
                    >
                      <img
                        src="/assets/images/linkedin.png"
                        alt="linkedin"
                        style={{ width: "32px", height: "auto" }}
                      />
                    </a>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}

        <div className="flex items-center gap-1">
          {currentPage > 1 && (
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              className="!p-1 h-[35px] size-[35px] rounded-none min-w-0 bg-transparent border-[#ddd] border !text-[#8e8e8e] hover:!text-white"
            >
              &lt;
            </Button>
          )}
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`!p-1 h-[35px] bg-transparent size-[35px]  text-[13px] border-[#ddd] border   rounded-none min-w-0  hover:!text-white ${
                currentPage === index + 1
                  ? "!bg-[#821302] !text-white"
                  : "!text-[#8e8e8e]"
              }`}
            >
              {index + 1}
            </Button>
          ))}
          {currentPage < totalPages && (
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              className="!p-1 h-[35px] size-[35px] rounded-none min-w-0 bg-transparent border-[#ddd] border !text-[#8e8e8e] hover:!text-white"
            >
              &gt;
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogListing;
