import React from "react";
import type { ICommonPagesQuery } from "../../graphql/generatedType/cmsTypes";

const Privacy = ({ data }: { data: ICommonPagesQuery }) => {
  return (
    <div className=" pt-[150px] pb-[80px]">
      <div className="container">
        <h1 className=" text-left text-black text-[40px] pb-[.48em] mb-[1em] font-medium  relative after:w-[1.5em] after:h-[2px] after:bg-black after:absolute after:left-0 after:bottom-0">
          {data?.page?.title}
        </h1>
        <div
          className="cms_data"
          dangerouslySetInnerHTML={{
            __html: data?.page?.content,
          }}
        />
      </div>
    </div>
  );
};

export default Privacy;
