import React from "react";

import { Img } from "components";

const LandingPageRow052linkedin = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-14 relative w-[36%] sm:w-full">
          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
            <div className="flex flex-row gap-7 items-center justify-between w-full">
              <div className="h-[55px] relative w-[41%]">
                <div className="bg-gradient  h-[55px] m-auto rounded-[29px] w-full"></div>
                <div className="absolute bg-gradient1  h-[55px] inset-[0] justify-center m-auto rounded-[29px] w-full"></div>
              </div>
              <div className="bg-gradient  h-[55px] rounded-[29px] w-2/5"></div>
            </div>
          </div>
          <div className="absolute flex flex-row h-max inset-[0] items-start justify-between m-auto w-[78%]">
            <Img
              className="h-6 mb-1"
              src="images/img_052linkedin.svg"
              alt="052linkedin"
            />
            <Img
              className="h-6 mt-1"
              src="images/img_096twitter.svg"
              alt="096twitter"
            />
          </div>
        </div>
        <div className="h-[55px] relative w-[15%] sm:w-full">
          <div className="bg-gradient  h-[55px] m-auto rounded-[29px] w-full"></div>
          <Img
            className="absolute bottom-[27%] h-[22px] inset-x-[0] mx-auto w-[23px]"
            src="images/img_info.svg"
            alt="info"
          />
        </div>
        <div className="h-[55px] relative w-[15%] sm:w-full">
          <div className="bg-gradient  h-[55px] m-auto rounded-[29px] w-full"></div>
          <Img
            className="absolute bottom-1/4 h-6 inset-x-[0] mx-auto"
            src="images/img_globe.svg"
            alt="globe"
          />
        </div>
        <div className="h-[55px] relative w-[15%] sm:w-full">
          <div className="bg-gradient  h-[55px] m-auto rounded-[29px] w-full"></div>
          <Img
            className="absolute bottom-1/4 h-6 inset-x-[0] mx-auto"
            src="images/img_facebook.svg"
            alt="facebook"
          />
        </div>
      </div>
    </>
  );
};

LandingPageRow052linkedin.defaultProps = {};

export default LandingPageRow052linkedin;
