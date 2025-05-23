import React from "react";
import FenceCard from "../FenceCard/FenceCard";
import assets from "../../json/assets";
import { listData } from "../NewsRecentPost/NewsRecentPost";
import FenceTypeSidebar from "../FenceTypeSidebar/FenceTypeSidebar";
import type {
  IAllFenceTypes,
  IFenceTypesQuery,
  IFenceTypesSidebar,
} from "../../graphql/generatedType/FenceTypeResponseTypes";
import type { AllFenceTypes } from "../../graphql/generatedType/ResponseType";

export interface NewFenceCardProps {
  image: string;
  altText: string;
  title: string;
  cardList?: any[];
  subCardList?: any[];
  listTitle?: string;
  sublistTitle?: string;
  slug?: string;
}

const NewFenceCard = [
  {
    image: `${assets?.fence1}`,
    altText: "VINYL FENCING",
    title: "VINYL FENCING",
    route: "/fence-types/vinyl-fence",
    cardList: [
      { listTitle: "Hamilton Vinyl Privacy Fence" },
      { listTitle: "Aberdeen Vinyl Privacy with Lattice" },
      { listTitle: "Melrose Vinyl Privacy with Closed Spindle" },
      { listTitle: "Livingston Vinyl Privacy with Open Spindle" },
      { listTitle: "Cumberland Vinyl Closed Classic Picket Fence" },
      { listTitle: "Irvine Vinyl Closed Classic Picket Fence" },
      { listTitle: "Kirkwall Vinyl Dogear Contemporary Picket Fence" },
      { listTitle: "Dunbar Vinyl Closed Contemporary Picket Fence" },
      { listTitle: "Privacy styles available for upgrade to PrivacyLock" },
    ],
  },
  {
    image: `${assets?.fence2}`,
    altText: "WOOD FENCING",
    title: "WOOD FENCING",
    cardList: [
      { listTitle: "Stockade Style Fence" },
      { listTitle: "Board-on-Board Fence" },
      { listTitle: "Shadow-Box Fence" },
      { listTitle: "Classic Picket Fence" },
      { listTitle: "Dog-Eared Picket Fence" },
      { listTitle: "French Gothic Picket Fence" },
      { listTitle: "Cap & Trim Custom Wood Fence" },
      { listTitle: "Field Fence (2 or 3-Rail “Post & Rail)" },
      { listTitle: "Ask about Our Lengthy Warranties!" },
    ],
  },
  {
    image: `${assets?.fence3}`,
    altText: "ALUMINUM FENCING",
    title: "ALUMINUM FENCING",
    cardList: [
      { listTitle: "Aluminum Pool Code Picket Fence (Alamo)" },
      { listTitle: "Aluminum 3-Rail Picket Fence (Flat Top)" },
      { listTitle: "Aluminum 3-Rail Pressed-Point Picket Fence" },
      { listTitle: "Aluminum Double-Picket Fence" },
      { listTitle: "Aluminum 3-Rail with Rings and/or Finials" },
      { listTitle: "Aluminum Double-Swing Estate Gates" },
      { listTitle: "Aluminum Cantilever Roll Gates" },
      { listTitle: "Ask about our Gate Operator Specials!" },
    ],
  },
  {
    image: `${assets?.fence4}`,
    altText: "STEEL FENCING",
    title: "STEEL FENCING",
    cardList: [
      { listTitle: "Steel Fence" },
      { listTitle: "Wrought Iron Fence" },
      { listTitle: "Oranmental Steel Fence" },
      { listTitle: "Steel Driveway Gates" },
      { listTitle: "Ask about Our Lengthy Warranties!" },
    ],
  },
  {
    image: `${assets?.fence5}`,
    altText: "CHAIN LINK FENCING",
    title: "CHAIN LINK FENCING",
    cardList: [
      { listTitle: "Galvanized Chain-Link Fence" },
      { listTitle: "Vinyl Coated Chain-Link Fence" },
      { listTitle: "Chain Link with Vinyl Slats" },
      { listTitle: "Security Fence (Chain-Link w/Barb-wire)" },
      { listTitle: "Steel Security Fence" },
      { listTitle: "Commercial Grade Aluminum Fence" },
      { listTitle: "Commercial Grade Steel Fence" },
      { listTitle: "Security Gates and Barrier Arms" },
      { listTitle: "Ask about our Access Control Solutions!" },
    ],
  },
  {
    image: `${assets?.fence6}`,
    altText: "CEDAR FENCING",
    title: "CEDAR FENCING",
    cardList: [
      { listTitle: "Cedar Board on Board Cap and Trim" },
      { listTitle: "Cedar Board on Board" },
      { listTitle: "Cedar Stockade" },
      { listTitle: "and many more!" },
    ],
  },
  {
    image: `${assets?.fence7}`,
    altText: "GATES & ENTRY",
    title: "GATES & ENTRY",
    cardList: [
      { listTitle: "Cantilever" },
      { listTitle: "Swing" },
      { listTitle: "Roll" },
      { listTitle: "Custom" },
    ],
  },
  {
    image: `${assets?.fence8}`,
    altText: "RAILING",
    title: "RAILING",
    cardList: [
      { listTitle: "Ornamental Aluminum Fence" },
      { listTitle: "Ornamental Steel Fence" },
      { listTitle: "Custom Aluminum Estate Gates" },
      {
        listTitle: "Decorative Metal Fence Styles:",
        subCardList: [
          { sublistTitle: "Pressed-Point Picket" },
          { sublistTitle: "Rings and Finials" },
          { sublistTitle: "Ball Caps" },
          { sublistTitle: "Gothic" },
          { sublistTitle: "Many more!" },
        ],
      },
    ],
  },
  {
    image: `${assets?.fence9}`,
    altText: "POOL FENCING",
    title: "POOL FENCING",
    cardList: [
      { listTitle: "Aluminum Picket Fence" },
      { listTitle: "Steel Picket Fence" },
      { listTitle: "Aluminum Picket Railing (Welded)" },
      { listTitle: "Steel Picket Railing (Welded)" },
      { listTitle: "Privacy Vinyl Fence" },
      { listTitle: "Privacy Wood Fence" },
    ],
  },
  {
    image: `${assets?.fence10}`,
    altText: "DOG FENCING",
    title: "DOG FENCING",
    cardList: [
      { listTitle: "Aluminum Picket Fence" },
      { listTitle: "Aluminum Puppy-Picket Fence (Double-Picket)" },
      { listTitle: "Vinyl-Coated Chain Link Fence" },
      { listTitle: "Privacy Vinyl Fence" },
      { listTitle: "Privacy Wood Fence" },
    ],
  },
  {
    image: `${assets?.fence11}`,
    altText: "REDWOOD FENCING",
    title: "REDWOOD FENCING",
    cardList: [
      { listTitle: "Redwood Fence" },
      { listTitle: "Picture Frame Board-On-Board" },
      { listTitle: "Diamond Lattice" },
      { listTitle: "Piano Key Lattice" },
      { listTitle: "Horizontal Redwood" },
      { listTitle: "Ask about Our Lengthy Warranties!" },
    ],
  },
  {
    image: `${assets?.fence12}`,
    altText: "TREX FENCING",
    title: "TREX FENCING",
    cardList: [
      { listTitle: "Seclusions Trex Fence" },
      { listTitle: "Horizons Trex Fence – Framed Horizontal" },
      { listTitle: "Saddle, Winchester Grey, and Woodland Brown" },
      { listTitle: "Environmentally-friendly Trex Fence" },
      { listTitle: "Trex Warranty" },
    ],
  },
  {
    image: `${assets?.fence15}`,
    altText: "DEER FENCING",
    title: "DEER FENCING >",
    cardList: [
      { listTitle: "Metal Hexagrid" },
      { listTitle: "Welded Wire / Mesh" },
      { listTitle: "Chain Link" },
      { listTitle: "Ask about Our Lengthy Warranties!" },
    ],
  },
];
const NewFence = ({
  sidebarData,
  fenceListdata,
  fenceData,
}: {
  sidebarData: IFenceTypesSidebar;
  fenceListdata: IAllFenceTypes;
  fenceData: IFenceTypesQuery;
}) => {
  // console.log(fenceListdata?.edges[1]?.node?.slug, "fenceListdata");
  return (
    <div className="py-[80px]">
      <div className="container">
        <div className="flex flex-wrap  -m-5">
          <div className="w-[25%] p-5">
            <FenceTypeSidebar data={sidebarData} />
          </div>
          <div className="w-[75%] p-5">
            <div
              className="fenceData_cnt"
              dangerouslySetInnerHTML={{ __html: fenceData.page?.content }}
            />

            <div className="mt-[60px]">
              {fenceListdata?.edges.map((item, index) => (
                <div
                  className="flex flex-wrap items-center -m-3 mb-[30px]"
                  key={index}
                >
                  <div className="w-1/2 p-3">
                    <FenceCard
                      image={
                        item?.node?.fenceTypesCategoryPurpose
                          ?.fenceTypesThumbnail?.node?.mediaItemUrl
                      }
                      altText={
                        item?.node?.fenceTypesCategoryPurpose
                          ?.fenceTypesThumbnail?.node?.altText
                      }
                      title={item?.node?.name}
                      slug={item?.node?.slug}
                    />
                  </div>
                  <div
                    className="w-1/2 p-3 newfence_list"
                    dangerouslySetInnerHTML={{
                      __html:
                        item?.node.fenceTypesCategoryPurpose?.fenceTypesListing,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFence;
