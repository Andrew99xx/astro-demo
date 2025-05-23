import React from "react";
import { slugify } from "../../lib/utils";

export const locationsData = [
  {
    headData: "States A – F",
    subHeads: [
      {
        subHead: "Alabama",
        subHeadData: [{ subHeadLink: "BIRMINGHAM" }],
      },
      {
        subHead: "Arkansas",
        subHeadData: [
          { subHeadLink: "ARKANSAS" },
          { subHeadLink: "LITTLE ROCK" },
        ],
      },
      {
        subHead: "California",
        subHeadData: [
          { subHeadLink: "INLAND EMPIRE" },
          { subHeadLink: "NORTH SAN DIEGO AREA" },
          { subHeadLink: "NORTHEAST LOS ANGELES" },
          { subHeadLink: "ORANGE COUNTY AREA" },
          { subHeadLink: "RIVERSIDE COUNTY AREA" },
          { subHeadLink: "SACRAMENTO" },
          { subHeadLink: "SAN JOSE" },
          { subHeadLink: "SAN FRANCISCO & EAST BAY" },
          { subHeadLink: "SOUTH BAY" },
          { subHeadLink: "VENTURA & SANTA CLARITA" },
          { subHeadLink: "WEST LOS ANGELES" },
        ],
      },
      {
        subHead: "Colorado",
        subHeadData: [
          { subHeadLink: "DENVER" },
          { subHeadLink: "FORT COLLINS AREA" },
        ],
      },
      {
        subHead: "Connecticut",
        subHeadData: [
          { subHeadLink: "HARTFORD" },
          { subHeadLink: "WESTERN CONNECTICUT" },
        ],
      },
      {
        subHead: "Florida",
        subHeadData: [
          { subHeadLink: "BROWARD COUNTY" },
          { subHeadLink: "CENTRAL FLORIDA" },
          { subHeadLink: "GAINESVILLE AREA" },
          { subHeadLink: "LAKE COUNTY" },
          { subHeadLink: "MIAMI" },
        ],
      },
    ],
  },
  {
    headData: "States F – I",
    subHeads: [
      {
        subHead: "Florida (Cont.)",
        subHeadData: [
          { subHeadLink: "NORTH FLORIDA" },
          { subHeadLink: "PALM BEACH AREA" },
          { subHeadLink: "PASCO AREA" },
          { subHeadLink: "PENSACOLA AREA" },
          { subHeadLink: "PINELLAS COUNTY" },
          { subHeadLink: "POLK COUNTY" },
          { subHeadLink: "SARASOTA AREA" },
          { subHeadLink: "SOUTHWEST FLORIDA" },
          { subHeadLink: "SPACE COAST" },
          { subHeadLink: "ST JOHNS AREA" },
          { subHeadLink: "TALLAHASSEE" },
          { subHeadLink: "TREASURE COAST" },
          { subHeadLink: "VOLUSIA COUNTY" },
        ],
      },
      {
        subHead: "Georgia",
        subHeadData: [
          { subHeadLink: "ATLANTA" },
          { subHeadLink: "AUGUSTA" },
          { subHeadLink: "MIDDLE GEORGIA" },
          { subHeadLink: "NORTHEAST GEORGIA" },
          { subHeadLink: "NORTHWEST GEORGIA" },
          { subHeadLink: "SAVANNAH" },
          { subHeadLink: "SOUTH ATLANTA" },
          { subHeadLink: "SOUTH GEORGIA" },
          { subHeadLink: "SOUTHWEST GEORGIA" },
        ],
      },
      {
        subHead: "Idaho",
        subHeadData: [{ subHeadLink: "TREASURE VALLEY" }],
      },
      {
        subHead: "Illinois",
        subHeadData: [{ subHeadLink: "CHICAGOLAND" }],
      },
      {
        subHead: "Indiana",
        subHeadData: [{ subHeadLink: "INDIANAPOLIS" }],
      },
    ],
  },
  {
    headData: "States K – M",
    subHeads: [
      {
        subHead: "Kansas",
        subHeadData: [{ subHeadLink: "KANSAS CITY" }],
      },
      {
        subHead: "Kentucky",
        subHeadData: [
          { subHeadLink: "GREATER LEXINGTON" },
          { subHeadLink: "GREATER LOUISVILLE" },
          { subHeadLink: "NORTHERN KENTUCKY" },
          { subHeadLink: "OWENSBORO" },
        ],
      },
      {
        subHead: "Louisiana",
        subHeadData: [{ subHeadLink: "SOUTHERN LOUISIANA" }],
      },
      {
        subHead: "Maryland",
        subHeadData: [{ subHeadLink: "BALTIMORE" }],
      },
      {
        subHead: "Massachusetts",
        subHeadData: [{ subHeadLink: "GREATER BOSTON" }],
      },
      {
        subHead: "Michigan",
        subHeadData: [
          { subHeadLink: "DETROIT" },
          { subHeadLink: "SOUTHWEST MICHIGAN" },
          { subHeadLink: "WEST MICHIGAN" },
        ],
      },
      {
        subHead: "Minnesota",
        subHeadData: [
          { subHeadLink: "MINNEAPOLIS" },
          { subHeadLink: "ST PAUL" },
        ],
      },
    ],
  },
  {
    headData: "States N – O",
    subHeads: [
      {
        subHead: "Nebraska",
        subHeadData: [{ subHeadLink: "OMAHA" }],
      },
      {
        subHead: "New Jersey",
        subHeadData: [
          { subHeadLink: "CENTRAL JERSEY" },
          { subHeadLink: "JERSEY SHORE" },
          { subHeadLink: "NORTHERN JERSEY" },
          { subHeadLink: "SOUTH JERSEY" },
        ],
      },
      {
        subHead: "New York",
        subHeadData: [
          { subHeadLink: "BUFFALO" },
          { subHeadLink: "HUDSON VALLEY" },
          { subHeadLink: "NASSAU COUNTY" },
          { subHeadLink: "ROCHESTER" },
          { subHeadLink: "SUFFOLK COUNTY" },
          { subHeadLink: "WESTERN CONNECTICUT" },
        ],
      },
      {
        subHead: "North Carolina",
        subHeadData: [
          { subHeadLink: "CHARLOTTE" },
          { subHeadLink: "FAYETTEVILLE" },
          { subHeadLink: "GREENSBORO" },
          { subHeadLink: "RALEIGH" },
          { subHeadLink: "WILMINGTON" },
        ],
      },
    ],
  },
  {
    headData: "States O – T",
    subHeads: [
      {
        subHead: "Ohio",
        subHeadData: [
          { subHeadLink: "AKRON" },
          { subHeadLink: "CINCINNATI" },
          { subHeadLink: "CLEVELAND" },
          { subHeadLink: "COLUMBUS" },
          { subHeadLink: "GREATER TOLEDO" },
          { subHeadLink: "WEST CINCINNATI" },
        ],
      },
      {
        subHead: "Oklahoma",
        subHeadData: [
          { subHeadLink: "CENTRAL OKLAHOMA" },
          { subHeadLink: "TULSA" },
        ],
      },
      {
        subHead: "Oregon",
        subHeadData: [{ subHeadLink: "PORTLAND METRO" }],
      },
      {
        subHead: "Pennsylvania",
        subHeadData: [
          { subHeadLink: "PHILADELPHIA" },
          { subHeadLink: "SOUTHERN PENNSYLVANIA" },
        ],
      },
      {
        subHead: "South Carolina",
        subHeadData: [
          { subHeadLink: "CHARLESTON" },
          { subHeadLink: "COLUMBIA" },
          { subHeadLink: "GREENVILLE" },
          { subHeadLink: "MYRTLE BEACH" },
        ],
      },
    ],
  },
  {
    headData: "States U – Z",
    subHeads: [
      {
        subHead: "Texas",
        subHeadData: [
          { subHeadLink: "AUSTIN" },
          { subHeadLink: "DALLAS-FORT WORTH" },
          { subHeadLink: "EAST TEXAS" },
          { subHeadLink: "HOUSTON" },
          { subHeadLink: "NORTH TEXAS" },
          { subHeadLink: "SOUTHEAST HOUSTON" },
          { subHeadLink: "SOUTHWEST HOUSTON" },
          { subHeadLink: "SPRING" },
          { subHeadLink: "WEST HOUSTON" },
        ],
      },
      {
        subHead: "Utah",
        subHeadData: [{ subHeadLink: "SALT LAKE" }],
      },
      {
        subHead: "Virginia",
        subHeadData: [
          { subHeadLink: "RICHMOND" },
          { subHeadLink: "NORTHERN VIRGINIA" },
        ],
      },
    ],
  },
];

const MegaMenu = () => {
  return (
    <div className=" min-w-full">
      <div className="inr_wrap bg-[#fff] grid grid-cols-6 gap-10">
        {locationsData.map((data, index) => (
          <div key={index} className="col-span-1">
            <div className=" border-b">
              <p className="megaMenuHead text-[#811918] uppercase py-2 font-medium text-[14px] pl-2">
                {data.headData}
              </p>
            </div>

            {data.subHeads.map((subData, subIndex) => (
              <div key={subIndex}>
                <p className="subHead pb-[2px] border-b text-[13px] font-semibold uppercase text-[#000] megaMenuHead pl-2">
                  {subData.subHead}
                </p>
                <ul>
                  {subData.subHeadData.map((location, locationIndex) => (
                    <li key={locationIndex} className="megaMenuHead border-b ">
                      <a
                        href={`/${slugify(location.subHeadLink.toLowerCase())}`}
                        className="text-[10px] text-[#000] p-[5px] block w-full "
                      >
                        {location.subHeadLink}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default MegaMenu;
