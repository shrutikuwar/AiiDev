import React from "react";

import { Button, CheckBox, Img, List, Text } from "components";

const LandingPageListintro = (props) => {
  return (
    <>
      <List className={props.className} orientation="horizontal">
        <div className="hover:border border hover:border-solid border-solid hover:border-white-A700 border-white-A700 hover:cursor-pointer flex flex-col items-start justify-start sm:ml-[0] sm:mt-0 mt-[35px] hover:mx-0 p-[27px] sm:px-5 rounded-[24px] hover:shadow-bs hover:w-full w-full">
          <Text
            className="mt-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
            size="txtInterBold24"
          >
            {props?.intro}
          </Text>
          <div className="flex flex-row gap-3.5 items-start justify-start mt-[35px] w-full">
            <Img
              className="h-[19px] w-[18px]"
              src="images/img_checkmark.svg"
              alt="checkmark"
            />
            <Text
              className="sm:flex-1 text-base text-white-A700 w-[87%] sm:w-full"
              size="txtInterRegular16WhiteA700"
            >
              {props?.uploadvideotext}
            </Text>
          </div>
          <div className="flex flex-row gap-3.5 items-start justify-start mt-[26px] w-full">
            <Img
              className="h-[19px] w-[18px]"
              src="images/img_checkmark.svg"
              alt="checkmark_One"
            />
            <Text
              className="sm:flex-1 text-base text-white-A700 w-[87%] sm:w-full"
              size="txtInterRegular16WhiteA700"
            >
              {props?.attachmentposttext}
            </Text>
          </div>
          <CheckBox
            className="font-inter leading-[normal] mt-[25px] text-base text-left text-white-A700"
            inputClassName="mr-[5px]"
            name="setyourrates"
            id="setyourrates"
            label="Set your rates"
            shape="square"
          ></CheckBox>
          <CheckBox
            className="font-inter leading-[normal] mt-[23px] text-base text-left text-white-A700"
            inputClassName="mr-[5px]"
            name="exclusivedeals"
            id="exclusivedeals"
            label="Exclusive Deals"
            shape="square"
            size="xs"
          ></CheckBox>
          <CheckBox
            className="font-inter leading-[normal] mt-5 text-base text-left text-white-A700"
            inputClassName="mr-[5px]"
            name="advancedstatist_One"
            id="advancedstatist_One"
            label="Advanced Statistics"
            shape="square"
            size="xs"
          ></CheckBox>
          <div className="flex flex-row gap-1 items-end justify-start ml-2 md:ml-[0] mt-[34px] w-auto">
            <Text
              className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700_b1 w-auto"
              size="txtInterBold25"
            >
              {props?.pricetext}
            </Text>
            <Text
              className="text-base text-white-A700_97 w-auto"
              size="txtInterRegular16WhiteA70097"
            >
              {props?.monthtext}
            </Text>
          </div>
          <Button
            className="!text-black-900_01 cursor-pointer font-bold font-inter leading-[normal] min-w-[244px] mt-[22px] text-base text-center"
            shape="round"
            color="white_A700"
            size="lg"
            variant="fill"
          >
            {props?.choosebutton}
          </Button>
        </div>
        <div className="hover:border border hover:border-solid border-solid hover:border-white-A700 border-white-A700 hover:cursor-pointer flex flex-col items-start justify-start sm:ml-[0] sm:mt-0 mt-[35px] hover:mx-0 p-[27px] sm:px-5 rounded-[24px] hover:shadow-bs hover:w-full w-full">
          <Text
            className="mt-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
            size="txtInterBold24"
          >
            {props?.base}
          </Text>
          <div className="flex flex-row gap-3.5 items-start justify-start mt-[35px] w-full">
            <Img
              className="h-[19px] w-[18px]"
              src="images/img_checkmark.svg"
              alt="checkmark"
            />
            <Text
              className="sm:flex-1 text-base text-white-A700 w-[87%] sm:w-full"
              size="txtInterRegular16WhiteA700"
            >
              {props?.uploadvideotext1}
            </Text>
          </div>
          <div className="flex flex-row gap-3.5 items-start justify-start mt-[26px] w-full">
            <Img
              className="h-[19px] w-[18px]"
              src="images/img_checkmark.svg"
              alt="checkmark_One"
            />
            <Text
              className="sm:flex-1 text-base text-white-A700 w-[87%] sm:w-full"
              size="txtInterRegular16WhiteA700"
            >
              {props?.attachmentposttext1}
            </Text>
          </div>
          <CheckBox
            className="font-inter leading-[normal] mt-[27px] text-base text-left text-white-A700"
            inputClassName="mr-[5px]"
            name="setyourrates"
            id="setyourrates2"
            label="Set your rates"
            shape="square"
          ></CheckBox>
          <CheckBox
            className="font-inter leading-[normal] mt-5 text-base text-left text-white-A700"
            inputClassName="mr-[5px]"
            name="exclusivedeals"
            id="exclusivedeals2"
            label="Exclusive Deals"
            shape="square"
            size="xs"
          ></CheckBox>
          <div className="flex flex-row gap-3.5 items-start justify-start mt-5 w-[74%] md:w-full">
            <Img
              className="h-[19px] mt-0.5 w-[18px]"
              src="images/img_ionclose.svg"
              alt="ionclose"
            />
            <Text
              className="text-base text-white-A700"
              size="txtInterRegular16WhiteA700"
            >
              {props?.advancedstatisticstext}
            </Text>
          </div>
          <div className="flex flex-row gap-1 items-end justify-start ml-2 md:ml-[0] mt-[34px] w-auto">
            <Text
              className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700_b1 w-auto"
              size="txtInterBold25"
            >
              {props?.pricetext1}
            </Text>
            <Text
              className="text-base text-white-A700_97 w-auto"
              size="txtInterRegular16WhiteA70097"
            >
              {props?.monthtext1}
            </Text>
          </div>
          <Button
            className="!text-black-900_01 cursor-pointer font-bold font-inter leading-[normal] min-w-[244px] mt-[22px] text-base text-center"
            shape="round"
            color="white_A700"
            size="lg"
            variant="fill"
          >
            {props?.choosebutton1}
          </Button>
        </div>
        <div className="hover:border border hover:border-solid border-solid hover:border-white-A700 border-white-A700 hover:cursor-pointer flex flex-col items-center justify-start mb-[35px] sm:ml-[0] hover:mx-0 p-[26px] sm:px-5 rounded-[24px] hover:shadow-bs shadow-bs hover:w-full w-full">
          <div className="flex flex-col items-start justify-start mb-1.5 w-[99%] md:w-full">
            <div className="flex flex-row items-end justify-between w-[98%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtInterBold24"
              >
                {props?.pro}
              </Text>
              <Button
                className="!text-black-900_b1 cursor-pointer font-bold font-inter leading-[normal] min-w-[72px] mt-1.5 rounded text-center text-xs"
                color="blue_500"
                size="xs"
                variant="fill"
              >
                {props?.savefortybutton}
              </Button>
            </div>
            <div className="flex flex-row gap-3.5 items-start justify-start mt-[33px] w-full">
              <Img
                className="h-[19px] w-[18px]"
                src="images/img_checkmark.svg"
                alt="checkmark"
              />
              <Text
                className="sm:flex-1 text-base text-white-A700 w-[87%] sm:w-full"
                size="txtInterRegular16WhiteA700"
              >
                {props?.uploadvideotext2}
              </Text>
            </div>
            <div className="flex flex-row gap-3.5 items-start justify-start mt-[26px] w-full">
              <Img
                className="h-[19px] w-[18px]"
                src="images/img_checkmark.svg"
                alt="checkmark_One"
              />
              <Text
                className="sm:flex-1 text-base text-white-A700 w-[87%] sm:w-full"
                size="txtInterRegular16WhiteA700"
              >
                {props?.attachmentposttext2}
              </Text>
            </div>
            <CheckBox
              className="font-inter leading-[normal] mt-[27px] text-base text-left text-white-A700"
              inputClassName="mr-[5px]"
              name="setyourrates"
              id="setyourrates3"
              label="Set your rates"
              shape="square"
            ></CheckBox>
            <CheckBox
              className="font-inter leading-[normal] mt-5 text-base text-left text-white-A700"
              inputClassName="mr-[5px]"
              name="exclusivedeals"
              id="exclusivedeals3"
              label="Exclusive Deals"
              shape="square"
              size="xs"
            ></CheckBox>
            <div className="flex flex-row gap-3.5 items-start justify-start mt-5 w-3/4 md:w-full">
              <Img
                className="h-[19px] mt-0.5 w-[18px]"
                src="images/img_ionclose_indigo_a200.svg"
                alt="ionclose"
              />
              <Text
                className="text-base text-indigo-A200"
                size="txtInterRegular16IndigoA200"
              >
                {props?.advancedstatisticstext1}
              </Text>
            </div>
            <div className="flex flex-row gap-1 items-end justify-start ml-2 md:ml-[0] mt-[34px] w-auto">
              {props?.pricetext2}
              <Text
                className="text-base text-white-A700_97 w-auto"
                size="txtInterRegular16WhiteA70097"
              >
                {props?.monthtext2}
              </Text>
            </div>
            <Button
              className="!text-black-900_01 cursor-pointer font-bold font-inter leading-[normal] min-w-[244px] mt-[22px] text-center text-xl"
              shape="round"
              color="blue_500"
              size="md"
              variant="fill"
            >
              {props?.tryonemonthbutton}
            </Button>
          </div>
        </div>
        <div className="hover:border border hover:border-solid border-solid hover:border-white-A700 border-white-A700 hover:cursor-pointer flex flex-col items-start justify-start sm:ml-[0] sm:mt-0 mt-[35px] hover:mx-0 p-6 sm:px-5 rounded-[24px] hover:shadow-bs hover:w-full w-full">
          <Text
            className="ml-1.5 md:ml-[0] mt-[7px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
            size="txtInterBold24"
          >
            {props?.enterprise}
          </Text>
          <div className="flex flex-row gap-3.5 items-start justify-start ml-1.5 md:ml-[0] mt-[33px] w-[97%] md:w-full">
            <Img
              className="h-[19px] w-[18px]"
              src="images/img_checkmark.svg"
              alt="checkmark"
            />
            <Text
              className="text-base text-white-A700 w-[87%] sm:w-full"
              size="txtInterRegular16WhiteA700"
            >
              {props?.uploadvideotext3}
            </Text>
          </div>
          <div className="flex flex-row gap-3.5 items-start justify-start ml-1.5 md:ml-[0] mt-[26px] w-[97%] md:w-full">
            <Img
              className="h-[19px] w-[18px]"
              src="images/img_checkmark.svg"
              alt="checkmark_One"
            />
            <Text
              className="text-base text-white-A700 w-[87%] sm:w-full"
              size="txtInterRegular16WhiteA700"
            >
              {props?.attachmentposttext3}
            </Text>
          </div>
          <CheckBox
            className="font-inter leading-[normal] ml-1.5 md:ml-[0] mt-[27px] text-base text-left text-white-A700"
            inputClassName="mr-[5px]"
            name="setyourrates"
            id="setyourrates4"
            label="Set your rates"
            shape="square"
          ></CheckBox>
          <CheckBox
            className="font-inter leading-[normal] ml-1.5 md:ml-[0] mt-5 text-base text-left text-white-A700"
            inputClassName="mr-[5px]"
            name="exclusivedeals"
            id="exclusivedeals4"
            label="Exclusive Deals"
            shape="square"
            size="xs"
          ></CheckBox>
          <CheckBox
            className="font-inter leading-[normal] ml-1.5 md:ml-[0] mt-5 text-base text-left text-white-A700"
            inputClassName="mr-[5px]"
            name="advancedstatist_One"
            id="advancedstatist_One2"
            label="Advanced Statistics"
            shape="square"
            size="xs"
          ></CheckBox>
          <div className="flex flex-row gap-1 items-end justify-start md:ml-[0] ml-[15px] mt-[34px] w-auto">
            <Text
              className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700_b1 w-auto"
              size="txtInterBold25"
            >
              {props?.pricetext3}
            </Text>
            <Text
              className="text-base text-white-A700_97 w-auto"
              size="txtInterRegular16WhiteA70097"
            >
              {props?.monthtext3}
            </Text>
          </div>
          <Button
            className="!text-black-900_01 cursor-pointer font-bold font-inter leading-[normal] mb-1 min-w-[244px] ml-1.5 md:ml-[0] mt-[22px] text-base text-center"
            shape="round"
            color="white_A700"
            size="lg"
            variant="fill"
          >
            {props?.choosebutton2}
          </Button>
        </div>
      </List>
    </>
  );
};

LandingPageListintro.defaultProps = {
  intro: "Intro",
  uploadvideotext: "Upload Video up to 720p Resolution",
  attachmentposttext: "Attachment & Post Scheduling",
  pricetext: "$123",
  monthtext: "/month",
  choosebutton: "Choose",
  base: "Base",
  uploadvideotext1: (
    <>
      Upload Video with HD
      <br />
      Resolution
    </>
  ),
  attachmentposttext1: "Attachment & Post Scheduling",
  advancedstatisticstext: "Advanced Statistics",
  pricetext1: "$123",
  monthtext1: "/month",
  choosebutton1: "Choose",
  pro: "Pro",
  savefortybutton: "Save $40",
  uploadvideotext2: (
    <>
      Upload Video with HD
      <br />
      Resolution
    </>
  ),
  attachmentposttext2: "Attachment & Post Scheduling",
  advancedstatisticstext1: "Advanced Statistics",
  pricetext2: (
    <Text
      className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700_b1 w-auto"
      size="txtInterBold25"
    >
      <span className="text-white-A700 font-inter text-left text-[17px] font-normal">
        $
      </span>
      <span className="text-white-A700 font-inter text-left font-bold">
        123
      </span>
    </Text>
  ),
  monthtext2: "/month",
  tryonemonthbutton: "Try 1 month",
  enterprise: "Enterprise",
  uploadvideotext3: (
    <>
      Upload Video with 4K
      <br />
      Resolution
    </>
  ),
  attachmentposttext3: "Attachment & Post Scheduling",
  pricetext3: "$123",
  monthtext3: "/month",
  choosebutton2: "Choose",
};

export default LandingPageListintro;
