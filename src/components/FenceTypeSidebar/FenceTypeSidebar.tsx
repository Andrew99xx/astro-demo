import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import { Button } from "../ui/button";
import type { IFenceTypesSidebar } from "../../graphql/generatedType/FenceTypeResponseTypes";
import { quoteLink } from "../Header/Header";

const FenceTypeSidebar = ({ data }: { data: IFenceTypesSidebar }) => {
  const commondata = data?.allFenceTypesCategory?.edges;

  return (
    <div className="bg-primary px-3 py-7">
      <h3 className="text-white text-[26px] font-medium mb-6">Fence Types</h3>
      <Accordion type="single" collapsible className="w-full">
        {commondata.map((item, index) => (
          <AccordionItem
            value={`item-${index + 1}`}
            className="bg-white mb-1"
            key={index + 1}
          >
            <AccordionTrigger className="[&[data-state=open]_.addIcon]:opacity-0 [&[data-state=closed]_.minusIcon]:opacity-0 [&[data-state=open]_.minusIcon]:opacity-1  [&[data-state=open]]:bg-[#D0D0D0]  py-[22px] px-[24px] decoration-none hover:no-underline hover:bg-[#D0D0D0] font-montserratsemibold ">
              {item.node.name}
            </AccordionTrigger>
            <AccordionContent className="py-4 !pt-4 px-[24px]">
              <ul>
                {item.node.fenceTypes.edges.map((itemInner, index) => (
                  <li
                    key={index}
                    className=" py-[13px] border-b border-solid border-[rgba(72, 69, 69, 0.3)]"
                  >
                    <a
                      href={`/fence-types/${item?.node?.slug}/${itemInner?.node?.slug}`}
                      className="text-[16px] hover:text-primary transition-all duration-300"
                    >
                      {itemInner.node.title}
                    </a>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className=" mt-[30px]">
        <Button
          variant="secondary"
          className="px-[58px] text-[14.4px] min-w-auto w-full font-robotomedium"
          onClick={() => (window.location.href = quoteLink)}
        >
          {"GET A FREE QUOTE >"}
        </Button>
      </div>
    </div>
  );
};

export default FenceTypeSidebar;
