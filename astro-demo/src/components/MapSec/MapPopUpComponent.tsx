import React from "react";
import PhoneIcon from "../ui/Icons/PhoneIcon";
import MailICon from "../ui/Icons/MailICon";
import { CloudfrontImg } from "../ui/CloudfrontImg";

interface IMapPopUpProps {
  mapBlockAddress: string;
  mapBlockEmail: string;
  mapBlockHeading: string;
  mapBlockImage: {
    node: {
      altText: string;
      mediaItemUrl: string;
    };
  };
  mapBlockPhone: string;
}

const MapPopUpComponent = ({
  mapBlockAddress,
  mapBlockEmail,
  mapBlockHeading,
  mapBlockImage,
  mapBlockPhone,
}: IMapPopUpProps) => {
  return (
    <div className=" bg-primary p-8 max-w-[360px] sm:p-6">
      <figure className=" h-[215px] border-[3px] border-white mb-8 md:h-[158px] md:mb-3">
        <CloudfrontImg
          src={mapBlockImage?.node?.mediaItemUrl}
          alt={mapBlockImage?.node?.altText}
          className="size-full object-cover"
        />
      </figure>
      <h3 className=" text-lg text-white  mb-3 font-montserratmedium md:text-[16px]">
        {mapBlockHeading}
      </h3>
      <h3 className=" text-lg text-white  mb-5 max-w-[210px] font-montserratmedium md:text-[16px]">
        {mapBlockAddress}
      </h3>
      <ul>
        <li className=" mb-2 flex items-center ">
          <i className=" flex items-center justify-center pr-[.8em]">
            {<PhoneIcon />}
          </i>
          <a
            href={`tel:${mapBlockPhone}`}
            className=" text-xs !text-white hover:!text-black  font-montserratbold"
          >
            {mapBlockPhone}
          </a>
        </li>
        <li className=" flex items-center ">
          <i className=" flex items-center justify-center pr-[.8em]">
            {<MailICon />}
          </i>
          <a
            href={`mailto:${mapBlockEmail}`}
            className=" text-xs !text-white hover:!text-black font-montserratbold"
          >
            {mapBlockEmail}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MapPopUpComponent;
