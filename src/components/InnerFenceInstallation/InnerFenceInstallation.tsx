import assets from "../../json/assets";

const InnerFenceInstallation = () => {
  return (
    <div className="relative py-[80px] prepare_sec">
      <div className="relative z-10">
        <div className="container">
          <h2 className="font-normal text-center text-[40px] mb-9">
            Prepare for your fence installation
          </h2>

          <div className="flex flex-wrap align-center -mx-5 -my-5">
            <div className="w-[33.33%] px-5  py-5">
              <a
                href="https://youtu.be/0_o2-fiPG2U?si=MZjDMgRmwf3G5GEn"
                className="mb-8 width-full inline-block"
              >
                <img src={assets.prepareImg6} alt="prepareImg1" />
              </a>
              <h3 className="text-center">
                Choosing a Birmingham Fence Company
              </h3>
            </div>
            <div className="w-[33.33%] px-5 py-5">
              <a
                href="https://youtu.be/Zo1Vn5pLhWw?si=z61Jw69zpL0jUsNj"
                className="mb-8 width-full inline-block"
              >
                <img
                  src={assets.prepareImg}
                  alt="prepareImg2"
                  className="size-full object-cover"
                />
              </a>
              <h3 className="text-2xl font-normal text-center">
                Preparing for the Installation
              </h3>
            </div>
            <div className="w-[33.33%] px-5 py-5">
              <a
                href="https://youtu.be/0_o2-fiPG2U?si=MZjDMgRmwf3G5GEn"
                className="mb-8 width-full inline-block"
              >
                <img
                  src={assets.prepareImg2}
                  alt="prepareImg2"
                  className="size-full object-cover"
                />
              </a>
              <h3 className="text-2xl font-normal text-center">
                Day of the Fence Installation
              </h3>
            </div>
            <div className="w-[33.33%] px-5 py-5">
              <a
                href="https://youtu.be/0_o2-fiPG2U?si=MZjDMgRmwf3G5GEn"
                className="mb-8 width-full inline-block"
              >
                <img
                  src={assets.prepareImg4}
                  alt="prepareImg2"
                  className="size-full object-cover"
                />
              </a>
              <h3 className="text-2xl font-normal text-center">
                HOA Fence Considerations
              </h3>
            </div>
            <div className="w-[33.33%] px-5 py-5">
              <a
                href="https://youtu.be/0_o2-fiPG2U?si=MZjDMgRmwf3G5GEn"
                className="mb-8 width-full inline-block"
              >
                <img
                  src={assets.prepareImg5}
                  alt="prepareImg2"
                  className="size-full object-cover"
                />
              </a>
              <h3 className="text-2xl font-normal text-center">
                Fence Permitting
              </h3>
            </div>
            <div className="w-[33.33%] px-5 py-5">
              <a
                href="https://youtu.be/0_o2-fiPG2U?si=MZjDMgRmwf3G5GEn"
                className="mb-8 width-full inline-block"
              >
                <img
                  src={assets.prepareImg3}
                  alt="prepareImg2"
                  className="size-full object-cover"
                />
              </a>
              <h3 className="text-2xl font-normal text-center">
                Irrigation Considerations
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerFenceInstallation;
