import React from "react";

const FenceLocationBanner = () => {
  return (
    <div
      className=" pt-[200px] pb-[50px] text-center"
      style={{
        backgroundImage: `url(https://www.superiorfenceandrail.com/wp-content/uploads/2019/04/Topo.png) `,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className=" container">
        <h1 className=" text-[24px] mb-[16px]">
          Find a Superior Fence & Rail Fence Company Location
        </h1>
        <h2 className=" text-[18px]">
          If you are searching for fence companies near me, choose the Superior
          Fence & Rail location near you!
        </h2>
      </div>
    </div>
  );
};

export default FenceLocationBanner;
