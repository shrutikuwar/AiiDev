import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Line,
  List,
  RatingBar,
  Switch,
  Text,
} from "components";
import LandingPageListintro from "components/LandingPageListintro";
import LandingPageRow052linkedin from "components/LandingPageRow052linkedin";

const LandingPagePage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-inter gap-3 items-end justify-start mx-auto w-full">
        <div className="flex flex-col items-start md:px-5 w-full">
          <div className="overflow-x-auto w-full">
            <div className="sm:h-[1499px] h-[2004px] md:h-[2263px] overflow-auto relative w-full">
              <div className="absolute md:h-[1096px] sm:h-[1499px] h-[2004px] inset-y-[0] my-auto right-[0] w-[83%] md:w-full">
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-[1301px] inset-x-[0] items-center justify-start mx-auto p-[22px] sm:px-5 top-[0] w-full"
                  style={{ backgroundImage: "url('images/img_group15.png')" }}
                >
                  <div className="flex flex-col md:gap-10 gap-[421px] items-center justify-start mb-[168px] w-[92%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                        <Img
                          className="md:flex-1 h-[52px] sm:h-auto mb-0.5 object-cover w-[7%] md:w-full"
                          src="images/img_logo2removebgpreview.png"
                          alt="logo2removebgpr"
                        />
                        <div className="flex md:flex-1 flex-col font-actor items-center justify-start md:ml-[0] ml-[340px] md:mt-0 mt-[15px] w-[7%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Text
                              className="text-lg text-white-A700"
                              size="txtActorRegular18"
                            >
                              Categories
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col font-actor items-center justify-start md:ml-[0] ml-[50px] md:mt-0 mt-[15px]">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtActorRegular18"
                          >
                            Pricing
                          </Text>
                        </div>
                        <div className="flex flex-col font-actor items-center justify-start md:ml-[0] ml-[50px] md:mt-0 mt-3.5">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtActorRegular18"
                          >
                            Product
                          </Text>
                        </div>
                        <div className="flex flex-col font-actor items-center justify-start ml-8 md:ml-[0] md:mt-0 mt-[15px]">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtActorRegular18"
                          >
                            Login/Signin
                          </Text>
                        </div>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[200px] md:ml-[0] ml-[223px] md:mt-0 mt-2.5 rounded-[22px]"
                          leftIcon={
                            <Img
                              className="h-6 mr-2"
                              src="images/img_settings.svg"
                              alt="settings"
                            />
                          }
                          color="blue_500"
                          size="sm"
                          variant="fill"
                        >
                          <div className="font-medium leading-[normal] text-base text-left">
                            Start a Project
                          </div>
                        </Button>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-[118px] w-[37%] md:w-full">
                        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                          <div className="h-[123px] md:h-[75px] relative w-full">
                            <Text
                              className="absolute inset-x-[0] mx-auto sm:text-[40px] md:text-[46px] text-[50px] text-white-A700 top-[14%] w-max"
                              size="txtMichroma50"
                            >
                              Aii DEV
                            </Text>
                            <Text
                              className="absolute right-[20%] rotate-[-44deg] md:text-5xl text-6xl text-white-A700 top-[0]"
                              size="txtMetamorphous60"
                            >
                              .
                            </Text>
                            <Text
                              className="absolute bottom-[0] inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 w-max"
                              size="txtActorRegular30"
                            >
                              Titanium. So strong. So light. So Pro.
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[54px] items-start justify-center w-[56%] md:w-full">
                            <Img
                              className="h-[18px]"
                              src="images/img_learnmore.svg"
                              alt="learnmore"
                            />
                            <Img
                              className="h-6 mt-0.5"
                              src="images/img_settings_blue_500.svg"
                              alt="settings_One"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-100 flex flex-row font-actor sm:gap-10 items-center justify-between mt-[60px] sm:pl-5 pl-[21px] rounded-[23px] w-1/2 md:w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-gray-700 text-lg"
                            size="txtActorRegular18Gray700"
                          >
                            Website development..
                          </Text>
                        </div>
                        <div className="h-[47px] relative w-[16%]">
                          <div className="absolute border-2 border-solid border-white-A700 h-4 inset-y-[0] left-[37%] my-auto rounded-lg w-[17px]"></div>
                          <Line className="absolute bg-white-A700 bottom-[30%] h-0.5 right-[37%] rotate-[135deg] w-2" />
                          <Img
                            className="absolute h-[47px] inset-[0] justify-center m-auto"
                            src="images/img_rewind.svg"
                            alt="rewind"
                          />
                        </div>
                      </div>
                      <LandingPageRow052linkedin className="flex sm:flex-col flex-row gap-7 items-center justify-center mt-10 w-[32%] md:w-full" />
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="capitalize leading-[125.00%] sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700 tracking-[0.25px] w-full"
                        size="txtInterMedium50"
                      >
                        Our services made for you?
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-start mx-auto p-[46px] md:px-10 sm:px-5 top-[35%] w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[86%] md:w-full">
                    <Img
                      className="h-[42px] sm:h-auto object-cover w-[15%] md:w-full"
                      src="images/img_image3.png"
                      alt="imageThree"
                    />
                    <Img
                      className="h-[76px] sm:h-auto md:ml-[0] ml-[98px] object-cover w-[15%] md:w-full"
                      src="images/img_image8.png"
                      alt="imageEight"
                    />
                    <Img
                      className="h-11 sm:h-auto md:ml-[0] ml-[98px] object-cover w-[13%] md:w-full"
                      src="images/img_image4.png"
                      alt="imageFour"
                    />
                    <Img
                      className="h-11 sm:h-auto md:ml-[0] ml-[98px] object-cover w-[12%] md:w-full"
                      src="images/img_image5.png"
                      alt="imageFive"
                    />
                    <Img
                      className="h-11 sm:h-auto md:ml-[0] ml-[98px] object-cover w-[13%] md:w-full"
                      src="images/img_image7.png"
                      alt="imageSeven"
                    />
                  </div>
                </div>
                <div
                  className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[791px] inset-x-[0] items-center justify-end mx-auto p-[59px] md:px-10 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group17.png')" }}
                >
                  <div className="flex flex-col items-center justify-start mt-[367px] w-[35%] md:w-full">
                    <div className="flex flex-row items-start justify-center w-[38%] md:w-full">
                      <Img
                        className="h-[3px] mt-[5px]"
                        src="images/img_arrow2.svg"
                        alt="arrowTwo"
                      />
                      <div className="bg-gray-500 h-[5px] ml-[22px] rounded-sm w-[5px]"></div>
                      <div className="bg-gray-500 h-[5px] ml-1.5 rounded-sm w-[5px]"></div>
                      <div className="bg-gray-500 h-[5px] ml-[5px] rounded-sm w-[5px]"></div>
                      <div className="bg-blue-500 h-2 ml-[3px] rounded-[50%] w-2"></div>
                      <div className="bg-gray-500 h-[5px] ml-[3px] rounded-sm w-[5px]"></div>
                      <div className="bg-gray-500 h-[5px] ml-[5px] rounded-sm w-[5px]"></div>
                      <Img
                        className="h-[3px] ml-[15px] mt-[5px]"
                        src="images/img_arrow1.svg"
                        alt="arrowOne"
                      />
                    </div>
                    <div className="bg-white-A700 h-2 mt-[138px] w-[23%]"></div>
                    <Text
                      className="mt-[23px] sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700 uppercase"
                      size="txtInterMedium50"
                    >
                      SELECTED WORKS
                    </Text>
                    <Text
                      className="leading-[150.00%] mt-[13px] text-center text-lg text-white-A700 w-3/4 sm:w-full"
                      size="txtPlusJakartaSansSemiBold18"
                    >
                      Take a look of some of my projects I have done.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[20%] flex flex-col items-center justify-start right-[0] w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between shadow-bs1 w-full">
                  <div className="bg-gray-900 border border-gray-600 border-solid flex md:flex-1 flex-col items-center justify-center md:mt-0 my-9 p-[22px] sm:px-5 rounded-[20px] shadow-bs2 w-[19%] md:w-full">
                    <Text
                      className="mt-[131px] text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.72px]"
                      size="txtInterBold24"
                    >
                      website development
                    </Text>
                    <Text
                      className="leading-[30.00px] mt-[18px] text-base text-center text-white-A700_99 tracking-[-0.32px] w-full"
                      size="txtInterMedium16"
                    >
                      The process of managing a task through its life cycle. It
                      involves planning, testing, tracking.
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-center mb-[23px] mt-7 w-[31%] md:w-full">
                      <a href="javascript:" className="text-base text-blue-500">
                        <Text size="txtInterSemiBold16">Read More</Text>
                      </a>
                      <Img
                        className="h-2"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                    </div>
                  </div>
                  <div className="bg-gray-900 border border-gray-600 border-solid flex md:flex-1 flex-col items-center justify-center mb-3 md:mt-0 mt-7 p-6 sm:px-5 rounded-[20px] shadow-bs2 w-[18%] md:w-full">
                    <Img
                      className="h-11 mt-[59px] rounded-[50%] w-[47px]"
                      src="images/img_close.svg"
                      alt="close"
                    />
                    <Text
                      className="mt-6 text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.72px]"
                      size="txtInterBold24"
                    >
                      website development
                    </Text>
                    <Text
                      className="leading-[30.00px] mt-2 text-base text-center text-white-A700_99 tracking-[-0.32px] w-[95%] sm:w-full"
                      size="txtInterMedium16"
                    >
                      The process of managing a task through its life cycle. It
                      involves planning, testing, tracking.
                    </Text>
                    <div className="flex flex-row gap-3 items-end justify-center mb-8 mt-[42px] w-[35%] md:w-full">
                      <a href="javascript:" className="text-base text-blue-500">
                        <Text size="txtInterSemiBold16">Read More</Text>
                      </a>
                      <Img
                        className="h-[9px] my-[5px]"
                        src="images/img_arrowright.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                  <div className="bg-gray-900 border border-gray-600 border-solid flex md:flex-1 flex-col items-center justify-start p-5 rounded-[20px] shadow-bs2 w-1/5 md:w-full">
                    <Button
                      className="flex items-center justify-center mt-[67px] rounded-[25px] w-[58px]"
                      color="blue_500"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_settings.svg"
                        alt="settings_Two"
                      />
                    </Button>
                    <Text
                      className="mt-4 sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700 tracking-[-0.84px]"
                      size="txtInterBold28"
                    >
                      Hosting
                    </Text>
                    <Text
                      className="leading-[30.00px] mt-[17px] text-base text-center text-white-A700_99 tracking-[-0.32px] w-[98%] sm:w-full"
                      size="txtInterMedium16"
                    >
                      The technology by which a process or procedure is
                      performed with minimal human assistance.
                    </Text>
                    <div className="flex flex-row items-end justify-center mb-[86px] w-[28%] md:w-full">
                      <a href="javascript:" className="text-base text-blue-500">
                        <Text size="txtInterSemiBold16">Read More</Text>
                      </a>
                      <Img
                        className="h-2.5 ml-1 mt-[9px]"
                        src="images/img_arrowright.svg"
                        alt="arrowright_One"
                      />
                    </div>
                  </div>
                  <div className="bg-gray-900 border border-gray-600_01 border-solid flex md:flex-1 flex-col items-center justify-center mb-[17px] md:mt-0 mt-[23px] p-2.5 rounded-[20px] shadow-bs2 w-[18%] md:w-full">
                    <Img
                      className="h-11 mt-[78px] rounded-[50%] w-[47px]"
                      src="images/img_close.svg"
                      alt="close_One"
                    />
                    <Text
                      className="mt-6 text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.72px]"
                      size="txtInterBold24"
                    >
                      Domain
                    </Text>
                    <Text
                      className="leading-[30.00px] mt-[22px] text-base text-center text-white-A700_99 tracking-[-0.32px] w-[99%] sm:w-full"
                      size="txtInterMedium16"
                    >
                      Creating plan to spend your money, This spending planer is
                      called a budgeting tool for business.
                    </Text>
                    <div className="flex flex-row gap-[7px] items-center justify-center mb-11 mt-[33px] w-[31%] md:w-full">
                      <a href="javascript:" className="text-base text-blue-500">
                        <Text size="txtInterSemiBold16">Read More</Text>
                      </a>
                      <Img
                        className="h-[9px]"
                        src="images/img_arrowright.svg"
                        alt="arrowright_Two"
                      />
                    </div>
                  </div>
                  <div className="bg-gray-900 border border-gray-600_01 border-solid flex md:flex-1 flex-col items-center justify-center md:mt-0 my-9 p-[22px] sm:px-5 rounded-[20px] shadow-bs2 w-[19%] md:w-full">
                    <Text
                      className="mt-[131px] text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.72px]"
                      size="txtInterBold24"
                    >
                      Domain
                    </Text>
                    <Text
                      className="leading-[30.00px] mt-[18px] text-base text-center text-white-A700_99 tracking-[-0.32px] w-full"
                      size="txtInterMedium16"
                    >
                      Creating plan to spend your money, This spending planer is
                      called a budgeting tool for business.
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-center mb-[23px] mt-7 w-[31%] md:w-full">
                      <a href="javascript:" className="text-base text-blue-500">
                        <Text size="txtInterSemiBold16">Read More</Text>
                      </a>
                      <Img
                        className="h-2"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft_One"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center pl-[316px] md:px-5 w-full">
          <div className="h-[4572px] md:h-[4644px] sm:h-[4677px] relative w-full">
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
              <div className="flex flex-col md:gap-10 gap-[231px] items-center justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[2356px] items-center justify-start p-[100px] md:px-10 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group14.png')" }}
                >
                  <div className="flex flex-col gap-[50px] items-start justify-start mb-32 mt-[583px] w-[97%] md:w-full">
                    <div className="border border-solid border-white-A700 flex md:flex-col flex-row font-plusjakartasans md:gap-10 items-center justify-between md:pl-10 sm:pl-5 pl-[50px] w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-lg text-white-A700"
                          size="txtPlusJakartaSansSemiBold18"
                        >
                          NFTme - WordPress Development
                        </Text>
                        <Text
                          className="mt-[23px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                          size="txtPlusJakartaSansRomanBold32"
                        >
                          NFT web development
                        </Text>
                        <Text
                          className="leading-[125.00%] mt-2.5 text-base text-black-900_01 w-full"
                          size="txtPlusJakartaSansRegular16"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit ut aliquam, purus sit amet luctus venenatis,
                          lectus magna fringilla urna, porttitor
                        </Text>
                        <div className="flex flex-row gap-[9px] items-center justify-start mt-10 w-[49%] md:w-full">
                          <Text
                            className="text-lg text-white-A700 tracking-[1.80px]"
                            size="txtPlusJakartaSansRomanBold18"
                          >
                            KNOW MORE
                          </Text>
                          <Button
                            className="flex h-[35px] items-center justify-center rounded-[17px] w-[35px]"
                            color="white_A700"
                            size="sm"
                            variant="fill"
                          >
                            <Img
                              className="h-[11px]"
                              src="images/img_arrowleft_light_green_50.svg"
                              alt="arrowleft_Two"
                            />
                          </Button>
                        </div>
                      </div>
                      <Img
                        className="h-[650px] md:h-auto object-cover"
                        src="images/img_unsplashd2w1ljioq.png"
                        alt="unsplashd2w1lji"
                      />
                    </div>
                    <div className="border border-solid border-white-A700 flex md:flex-col flex-row font-plusjakartasans gap-[50px] items-center justify-start md:pr-10 sm:pr-5 pr-[108px] w-full">
                      <Img
                        className="md:flex-1 h-[650px] sm:h-auto object-cover w-[59%] md:w-full"
                        src="images/img_unsplashd2w1ljioq_650x638.png"
                        alt="unsplashd2w1lji_One"
                      />
                      <div className="flex md:flex-1 flex-col items-start justify-start w-[37%] md:w-full">
                        <Text
                          className="text-lg text-white-A700"
                          size="txtPlusJakartaSansSemiBold18"
                        >
                          Dentos - Webflow Development
                        </Text>
                        <Text
                          className="mt-[23px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                          size="txtPlusJakartaSansRomanMedium32"
                        >
                          Dentist Web Development
                        </Text>
                        <Text
                          className="leading-[125.00%] mt-2.5 text-base text-black-900_01 w-[91%] sm:w-full"
                          size="txtPlusJakartaSansRegular16"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit ut aliquam, purus sit amet luctus venenatis,
                          lectus magna fringilla urna, porttitor
                        </Text>
                        <div className="flex flex-row gap-[9px] items-center justify-start mt-10 w-[44%] md:w-full">
                          <Text
                            className="text-lg text-white-A700 tracking-[1.80px]"
                            size="txtPlusJakartaSansRomanBold18"
                          >
                            KNOW MORE
                          </Text>
                          <Button
                            className="flex h-[35px] items-center justify-center rounded-[17px] w-[35px]"
                            color="white_A700"
                            size="sm"
                            variant="fill"
                          >
                            <Img
                              className="h-[11px]"
                              src="images/img_arrowleft_light_green_50.svg"
                              alt="arrowleft_Three"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[200px] md:ml-[0] ml-[552px] rounded-[22px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-2"
                          src="images/img_settings.svg"
                          alt="settings"
                        />
                      }
                      color="blue_500"
                      size="sm"
                      variant="fill"
                    >
                      <div className="font-inter font-medium leading-[normal] text-base text-left">
                        Browse all
                      </div>
                    </Button>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[1301px] items-center justify-end p-[120px] md:px-10 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_group16.png')" }}
                >
                  <div className="flex flex-col items-center justify-start mb-[155px] mt-[396px] w-full">
                    <Img
                      className="h-2"
                      src="images/img_computer.svg"
                      alt="computer"
                    />
                    <div className="h-[61px] md:h-[76px] mt-[15px] relative w-[62%] md:w-full">
                      <Text
                        className="m-auto sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700 tracking-[-1.50px]"
                        size="txtInterMedium50"
                      >
                        What people are saying about us
                      </Text>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700 tracking-[-1.50px] w-max"
                        size="txtInterMedium50"
                      >
                        What people are saying about us
                      </Text>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[58px] shadow-bs3 w-full"
                      orientation="horizontal"
                    >
                      <div className="bg-gray-900_01 border border-gray-500_01 border-solid flex flex-1 flex-col items-start justify-center p-[38px] sm:px-5 rounded-[20px] shadow-bs2 w-full">
                        <div className="flex flex-col items-start justify-start my-3.5 w-[89%] md:w-full">
                          <div className="flex flex-row items-center justify-start w-[36%] md:w-full">
                            <RatingBar
                              className="flex justify-between w-24"
                              value={5}
                              starCount={5}
                              activeColor="#fca311"
                              size={16}
                            ></RatingBar>
                          </div>
                          <Text
                            className="leading-[28.00px] mt-[33px] text-lg text-white-A700_a2 w-full"
                            size="txtInterMedium18"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit ut aliquam, purus sit amet luctus venenatis,
                            lectus magna
                          </Text>
                          <div className="flex flex-row gap-5 items-end justify-start mt-[53px] w-[64%] md:w-full">
                            <Img
                              className="h-12 md:h-auto rounded-[50%] w-12"
                              src="images/img_image.png"
                              alt="image"
                            />
                            <div className="flex flex-col items-center justify-start mt-[5px]">
                              <Text
                                className="text-base text-white-A700"
                                size="txtInterBold16"
                              >
                                Kartik Bansal
                              </Text>
                              <Text
                                className="mt-1 text-sm text-white-A700_99"
                                size="txtInterRegular14"
                              >
                                Kota, Rajasthan
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-900_01 border border-gray-700_01 border-solid flex flex-1 flex-col items-start justify-center p-[38px] sm:px-5 rounded-[20px] shadow-bs2 w-full">
                        <div className="flex flex-col items-start justify-start my-3.5 w-[89%] md:w-full">
                          <div className="flex flex-row items-center justify-start w-[36%] md:w-full">
                            <RatingBar
                              className="flex justify-between w-24"
                              value={5}
                              starCount={5}
                              activeColor="#fca311"
                              size={16}
                            ></RatingBar>
                          </div>
                          <Text
                            className="leading-[28.00px] mt-[33px] text-lg text-white-A700_a2 w-full"
                            size="txtInterMedium18"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit ut aliquam, purus sit amet luctus venenatis,
                            lectus magna
                          </Text>
                          <div className="flex flex-row gap-5 items-end justify-start mt-[53px] w-3/5 md:w-full">
                            <Img
                              className="h-12 md:h-auto rounded-[50%] w-12"
                              src="images/img_image_48x48.png"
                              alt="image"
                            />
                            <div className="flex flex-col items-start justify-start mt-[5px]">
                              <Text
                                className="text-base text-white-A700"
                                size="txtInterBold16"
                              >
                                Anil Dvivedi
                              </Text>
                              <Text
                                className="mt-[3px] text-sm text-white-A700_99"
                                size="txtInterRegular14"
                              >
                                New Delhi
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-900_01 border border-gray-600 border-solid flex flex-1 flex-col items-start justify-center p-[38px] sm:px-5 rounded-[20px] shadow-bs2 w-full">
                        <div className="flex flex-col items-start justify-start my-3.5 w-[89%] md:w-full">
                          <div className="flex flex-row items-center justify-start w-[36%] md:w-full">
                            <RatingBar
                              className="flex justify-between w-24"
                              value={5}
                              starCount={5}
                              activeColor="#fca311"
                              size={16}
                            ></RatingBar>
                          </div>
                          <Text
                            className="leading-[28.00px] mt-[33px] text-lg text-white-A700_a2 w-full"
                            size="txtInterMedium18"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit ut aliquam, purus sit amet luctus venenatis,
                            lectus magna
                          </Text>
                          <div className="flex flex-row gap-5 items-end justify-start mt-[53px] w-[69%] md:w-full">
                            <Img
                              className="h-12 md:h-auto rounded-[50%] w-12"
                              src="images/img_image_1.png"
                              alt="image"
                            />
                            <div className="flex flex-col items-start justify-start mt-[7px]">
                              <Text
                                className="text-base text-white-A700"
                                size="txtInterBold16"
                              >
                                Srijan Sirasikar
                              </Text>
                              <Text
                                className="mt-0.5 text-sm text-white-A700_99"
                                size="txtInterRegular14"
                              >
                                Bhadrak
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute border border-solid border-white-A700 flex md:flex-col flex-row font-plusjakartasans gap-[50px] inset-x-[0] items-center justify-start mx-auto md:pr-10 sm:pr-5 pr-[146px] top-[0] w-[84%]">
              <Img
                className="h-[650px] sm:h-auto object-cover w-[61%] md:w-full"
                src="images/img_unsplashd2w1ljioq_1.png"
                alt="unsplashd2w1lji_Two"
              />
              <div className="flex flex-col items-start justify-start w-[35%] md:w-full">
                <Text
                  className="text-lg text-white-A700"
                  size="txtPlusJakartaSansSemiBold18"
                >
                  SportX - Website design
                </Text>
                <Text
                  className="mt-[23px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtPlusJakartaSansRomanBold32"
                >
                  Sports Website Design
                </Text>
                <Text
                  className="leading-[125.00%] mt-2.5 text-base text-black-900_01 w-full"
                  size="txtPlusJakartaSansRegular16"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor
                </Text>
                <div className="flex flex-row gap-[9px] items-center justify-start mt-10 w-[49%] md:w-full">
                  <Text
                    className="text-lg text-white-A700 tracking-[1.80px]"
                    size="txtPlusJakartaSansRomanBold18"
                  >
                    KNOW MORE
                  </Text>
                  <Button
                    className="flex h-[35px] items-center justify-center rounded-[17px] w-[35px]"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-[11px]"
                      src="images/img_arrowleft_light_green_50.svg"
                      alt="arrowleft_Four"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <footer className="absolute bg-white-A700 bottom-[0] flex font-inter inset-x-[0] items-center justify-center mx-auto w-full">
              <div className="flex flex-col items-center justify-center mt-[73px] w-full">
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="bg-black-900_01 h-2 w-[7%]"></div>
                  <div className="flex flex-col items-center justify-start mt-2.5">
                    <Text
                      className="leading-[67.00px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900_01 text-center"
                      size="txtInterMedium50Black90001"
                    >
                      <>
                        We are here to help
                        <br />
                        you grow your business
                      </>
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[200px] mt-[22px] rounded-[22px]"
                    leftIcon={
                      <Img
                        className="h-6 mr-2"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
                    }
                    color="blue_500"
                    size="sm"
                    variant="fill"
                  >
                    <div className="font-medium leading-[normal] text-base text-left">
                      Get Started
                    </div>
                  </Button>
                  <ul className="flex flex-col items-start justify-start mt-[84px] w-full common-column-list">
                    <li>
                      <a href="javascript:">
                        <Line className="bg-black-900_7e h-px" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <ul className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[122px] mt-[55px] md:w-full common-column-list">
                          <li>
                            <a
                              href="javascript:"
                              className="text-black-900_01 text-xl uppercase"
                            >
                              <Text size="txtInterBold20">AII DEV</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="md:ml-[0] ml-[424px] text-black-900_01 text-justify text-xl tracking-[-0.40px]"
                            >
                              <Text size="txtInterSemiBold20">Product</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="ml-36 md:ml-[0] text-black-900_01 text-justify text-xl tracking-[-0.40px]"
                            >
                              <Text size="txtInterSemiBold20">Company</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="md:ml-[0] ml-[97px] text-black-900_01 text-justify text-xl tracking-[-0.40px]"
                            >
                              <Text size="txtInterSemiBold20">Resources</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="md:ml-[0] ml-[106px] text-black-900_01 text-justify text-xl tracking-[-0.40px]"
                            >
                              <Text size="txtInterSemiBold20">Follow Us</Text>
                            </a>
                          </li>
                        </ul>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[122px] mt-[15px]">
                          <Text
                            className="leading-[150.00%] text-black-900_a2 text-lg tracking-[-0.36px]"
                            size="txtInterRegular18"
                          >
                            <>
                              Data visualization, and <br />
                              expense management <br />
                              for your business.
                            </>
                          </Text>
                          <ul className="flex flex-col gap-[27px] items-center justify-start md:mt-0 mt-[19px] md:w-full common-column-list">
                            <li>
                              <a href="javascript:">
                                <ul className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:w-full common-column-list">
                                  <li>
                                    <a
                                      href="javascript:"
                                      className="text-base text-black-900_a2 text-justify tracking-[-0.32px]"
                                    >
                                      <Text size="txtInterRegular16">
                                        Digital Invoice
                                      </Text>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:"
                                      className="md:ml-[0] ml-[118px] text-base text-black-900_a2 text-justify tracking-[-0.32px]"
                                    >
                                      <Text size="txtInterRegular16">
                                        About Us
                                      </Text>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:"
                                      className="md:ml-[0] ml-[119px] text-base text-black-900_a2 text-justify tracking-[-0.32px]"
                                    >
                                      <Text size="txtInterRegular16">Blog</Text>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:"
                                      className="md:ml-[0] ml-[172px] text-base text-black-900_a2 text-justify tracking-[-0.32px]"
                                    >
                                      <Text size="txtInterRegular16">
                                        LinkedIn
                                      </Text>
                                    </a>
                                  </li>
                                </ul>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:">
                                <ul className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:w-full common-column-list">
                                  <li>
                                    <a
                                      href="javascript:"
                                      className="text-base text-black-900_a2 text-justify tracking-[-0.32px]"
                                    >
                                      <Text size="txtInterRegular16">
                                        Insights
                                      </Text>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:"
                                      className="md:ml-[0] ml-[162px] text-base text-black-900_a2 text-justify tracking-[-0.32px]"
                                    >
                                      <Text size="txtInterRegular16">
                                        Newsletters
                                      </Text>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:"
                                      className="md:ml-[0] ml-[99px] text-base text-black-900_a2 text-justify tracking-[-0.32px]"
                                    >
                                      <Text size="txtInterRegular16">
                                        Pricing
                                      </Text>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:"
                                      className="md:ml-[0] ml-[155px] text-base text-black-900_a2 text-justify tracking-[-0.32px]"
                                    >
                                      <Text size="txtInterRegular16">
                                        Twitter
                                      </Text>
                                    </a>
                                  </li>
                                </ul>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:">
                                <ul className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:w-full common-column-list">
                                  <li>
                                    <a
                                      href="javascript:"
                                      className="text-base text-black-900_a2 text-justify tracking-[-0.32px]"
                                    >
                                      <Text size="txtInterRegular16">
                                        Reimbursements
                                      </Text>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:"
                                      className="ml-24 md:ml-[0] text-base text-black-900_a2 text-justify tracking-[-0.32px]"
                                    >
                                      <Text size="txtInterRegular16">
                                        Our Partners
                                      </Text>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:"
                                      className="md:ml-[0] ml-[94px] text-base text-black-900_a2 text-justify tracking-[-0.32px]"
                                    >
                                      <Text size="txtInterRegular16">FAQ</Text>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:"
                                      className="md:ml-[0] ml-[175px] text-base text-black-900_a2 text-justify tracking-[-0.32px]"
                                    >
                                      <Text size="txtInterRegular16">
                                        Instagram
                                      </Text>
                                    </a>
                                  </li>
                                </ul>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:">
                                <ul className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:w-full common-column-list">
                                  <li>
                                    <a
                                      href="javascript:"
                                      className="text-base text-black-900_a2 text-justify tracking-[-0.32px]"
                                    >
                                      <Text size="txtInterRegular16">
                                        Virtual Assistant
                                      </Text>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:"
                                      className="md:ml-[0] ml-[100px] text-base text-black-900_a2 text-justify tracking-[-0.32px]"
                                    >
                                      <Text size="txtInterRegular16">
                                        Career
                                      </Text>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:"
                                      className="md:ml-[0] ml-[137px] text-base text-black-900_a2 text-justify tracking-[-0.32px]"
                                    >
                                      <Text size="txtInterRegular16">
                                        Events
                                      </Text>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:"
                                      className="md:ml-[0] ml-[155px] text-base text-black-900_a2 text-justify tracking-[-0.32px]"
                                    >
                                      <Text size="txtInterRegular16">
                                        Facebook
                                      </Text>
                                    </a>
                                  </li>
                                </ul>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <ul className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[619px] mt-[27px] md:w-full common-column-list">
                          <li>
                            <a
                              href="javascript:"
                              className="text-base text-black-900_a2 text-justify tracking-[-0.32px]"
                            >
                              <Text size="txtInterRegular16">
                                Artificial Intelligence
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="md:ml-[0] ml-[72px] text-base text-black-900_a2 text-justify tracking-[-0.32px]"
                            >
                              <Text size="txtInterRegular16">Contact Us</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="md:ml-[0] ml-[105px] text-base text-black-900_a2 text-justify tracking-[-0.32px]"
                            >
                              <Text size="txtInterRegular16">
                                Ebook & Guide
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="md:ml-[0] ml-[98px] text-base text-black-900_a2 text-justify tracking-[-0.32px]"
                            >
                              <Text size="txtInterRegular16">YouTube</Text>
                            </a>
                          </li>
                        </ul>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <Line className="bg-black-900_7e h-px mt-[55px]" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="bg-black-900_02 h-[97px]"></div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
            <div className="absolute bottom-[34%] flex flex-col font-inter gap-[57px] inset-x-[0] items-center justify-start mx-auto w-[91%]">
              <div className="md:h-[121px] h-[199px] relative w-[62%] md:w-full">
                <Text
                  className="absolute inset-x-[0] mx-auto sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700_b1 top-[12%]"
                  size="txtInterMedium50WhiteA700b1"
                >
                  <>
                    Start for free and upgrade to
                    <br />
                    unlock more features
                  </>
                </Text>
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[44%]">
                  <div className="flex flex-col md:gap-10 gap-[146px] justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[130px] text-center text-light_blue-800_b1 text-xl"
                      size="txtInterBold20Lightblue800b1"
                    >
                      Site pricing
                    </Text>
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="mt-[3px] text-right text-white-A700_b1 text-xl"
                        size="txtInterBold20WhiteA700b1"
                      >
                        Bill Monthly
                      </Text>
                      <Switch
                        onColor="#ffffff"
                        offColor="#ffffff"
                        onHandleColor="#edbb01"
                        offHandleColor="#edbb01"
                        value={false}
                        className=""
                      />
                      <Text
                        className="mt-[3px] text-white-A700_b1 text-xl"
                        size="txtInterRegular20"
                      >
                        Bill Annualy
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <LandingPageListintro
                  className="sm:flex-col flex-row gap-9 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                  pricetext2={
                    <Text className="font-bold sm:text-[21px] md:text-[23px] text-[25px] text-white-A700_b1 w-auto">
                      <span className="text-white-A700 font-inter text-left text-[17px] font-normal">
                        $
                      </span>
                      <span className="text-white-A700 font-inter text-left">
                        123
                      </span>
                    </Text>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPagePage;
