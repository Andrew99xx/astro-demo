import React from "react";

interface SvgProps extends React.SVGProps<SVGSVGElement> {}

const FacebookIcon: React.FC<SvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        d="M420 36H92a56 56 0 0 0-56 56v328a56 56 0 0 0 56 56h160.67V292.924h-36.615v-73.23h36.312V186.6c0-29.952 14.268-76.746 77.059-76.746l56.565.227v62.741h-41.078c-6.679 0-16.183 3.326-16.183 17.592v29.285h58.195l-6.68 73.23H325.9V476H420a56 56 0 0 0 56-56V92a56 56 0 0 0-56-56z"
        fill="#fff"
      />
    </svg>
  );
};

export default FacebookIcon;
