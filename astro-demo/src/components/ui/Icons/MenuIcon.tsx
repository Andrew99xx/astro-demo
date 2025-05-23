import React from "react";
import type { IIconProps } from "../../../interfaces/IconProps";


interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const MenuIcon: React.FC<SvgProps & IIconProps> = ({
  IconColor,
  IconWidth,
  IconHeight,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={IconWidth || "40"}
      height={IconHeight || "40"}
      viewBox="0 0 384 384"
      {...props}
    >
      <g>
        <path
          d="M368 154.668H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zM368 32H16C7.168 32 0 24.832 0 16S7.168 0 16 0h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zM368 277.332H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0"
          fill={IconColor || "#252525"}
          opacity="1"
        ></path>
      </g>
    </svg>
  );
};

export default MenuIcon;
