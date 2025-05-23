import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import { Button } from "../ui/button";
import type { IFenceServicesSidebarQuery } from "../../graphql/generatedType/FenceServiceTypes";
import { quoteLink } from "../Header/Header";

const FenceServiceSidebar = ({
  data,
  baseRoute,
  title,
  link,
}: {
  data: IFenceServicesSidebarQuery;
  baseRoute: string;
  title: string;
  link?: string;
}) => {
  const commondata = data?.allFenceServices?.edges;

  console.log(commondata, "commondata");
  return (
    <div className="bg-primary px-3 py-7">
      <h3 className="text-white text-[26px] font-medium mb-6">
        {link ? <a href={link}>{title}</a> : title}
      </h3>
      {commondata.map((item, index) => (
        <div className=" bg-white p-[20px] mb-[5px]">
          <a
            href={
              item.node.slug === "why-superior-fence-rail" ||
              item.node.slug === "faqs"
                ? `/about-us/${item.node.slug}`
                : `/${baseRoute}/${item.node.slug}`
            }
            key={index}
            className="text-[14px] inline-block  bg-white  text-black font-robotomedium"
          >
            {item.node.title} {">"}
          </a>
        </div>
      ))}
      <div className=" mt-[30px]">
        <Button
          variant="secondary"
          className="px-[58px] text-[14.4px] min-w-auto w-full hover:-translate-y-2 font-robotomedium"
          onClick={() => (window.location.href = quoteLink)}
        >
          {"GET A FREE QUOTE  >"}
        </Button>
      </div>
    </div>
  );
};

export default FenceServiceSidebar;
