import React, { useState, useEffect } from "react";

import icon1 from "../imgs/landing_icon1.png";
import icon2 from "../imgs/landing_icon2.png";
import icon3 from "../imgs/landing_icon3.png";

// import landingHead from "../imgs/EnLandingHead.svg";
// import landingSub from "../imgs/EnLandingSubHead.svg";
// import landingImg from "../imgs/EnLandingImg.svg";
// import landingImgEx from "../imgs/EnLandingImg_ex.svg";
import landingTop from "../imgs/EnLandingTop.svg";

import img1 from "../imgs/EnLandingContentsImg1.png";
import img2 from "../imgs/EnLandingContentsImg2.png";

import title1 from "../imgs/EnLandingContentsTitle1.svg";
import title2 from "../imgs/EnLandingContentsTitle2.svg";
import content1 from "../imgs/EnLandingContents1.svg";
import content2 from "../imgs/EnLandingContents2.svg";

function HomeEng() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);

  const [timer1, setTimer1] = useState();
  const [timer2, setTimer2] = useState();
  const [timer3, setTimer3] = useState();

  useEffect(() => {
    const interval1 = setInterval(() => {
      setNum1((p) => p + 1);
      return () => clearInterval(interval1);
    }, 30);
    const interval2 = setInterval(() => {
      setNum2((p) => p + 1);
      return () => clearInterval(interval2);
    }, 250);
    const interval3 = setInterval(() => {
      setNum3((p) => p + 1);
      return () => clearInterval(interval3);
    }, 60);
    setTimer1(interval1);
    setTimer2(interval2);
    setTimer3(interval3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (num1 >= 80) {
      setNum1(80);
      clearInterval(timer1);
    }
    if (num2 >= 12) {
      setNum2(12);
      clearInterval(timer2);
    }
    if (num3 >= 40) {
      setNum3(40);
      clearInterval(timer3);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num1, num2, num3]);

  return (
    <div>
      <div className="bg-[#FFDCCD] w-full mt-[68px] py-12">
        <div className="w-full relative bg-[#FFDCCD] xl:container mx-auto">
          {/* <img
            src={landingHead}
            alt=""
            className="pl-16 pt-[72px] pb-[40px] w-[45%] "
          />
          <img src={landingSub} alt="" className="pt-8 pb-16 pl-16 w-[60%]" />
          <img
            src={landingImg}
            alt=""
            className="absolute top-5 w-[45%] left-[50%] xl:hidden"
          />
          <img
            src={landingImgEx}
            alt=""
            className="hidden xl:inline-block absolute -top-28 scale-[0.9] right-2 "
          />*/}

          <img
            src={landingTop}
            alt=""
            className="relative w-full left-1 mt-[-55px]"
          />
        </div>
      </div>
      <div className="w-full py-10 ">
        <div className="grid grid-cols-3 gap-4 mx-auto border-gray-700 divide-x-2 lg:container">
          <div className="text-center">
            <img
              src={icon1}
              alt=""
              className="inline-block w-1/2 max-w-[200px]"
            />
            <div className="text-center font-Roboto">
              Startups participated in <br />
              our programs and events
            </div>
            <div className="text-center text-[#FF4D00] font-Roboto text-[52px] font-bold">
              {num1}+
            </div>
          </div>
          <div className="text-center">
            <img
              src={icon2}
              alt=""
              className="inline-block w-1/2 max-w-[200px]"
            />
            <div className="text-center font-Roboto">
              Startups secured series A or higher <br /> funding through our
              programs
            </div>
            <div className="text-center text-[#FF4D00] font-Roboto text-[52px] font-bold">
              {num2}+
            </div>
          </div>
          <div className="text-center">
            <img
              src={icon3}
              alt=""
              className="inline-block w-1/2 max-w-[200px]"
            />
            <div className="text-center font-Roboto">
              Venture Capital Firms <br /> partnered with us
            </div>
            <div className="text-center text-[#FF4D00] font-Roboto text-[52px] font-bold">
              {num3}+
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1 */}
      <div className="bg-[#73A4B4] w-full ">
        <div className="grid grid-cols-2 mx-auto xl:container place-items-center">
          <img
            src={img1}
            alt=""
            className="object-cover w-full xl:w-[90%] xl:h-[90%] xl:rounded-3xl"
          />
          <div className="w-full h-full">
            <div className="w-full pl-5 sm:pl-[7%] pt-[10%] 2xl:pt-[8%] xl:pt-[10%]">
              <img src={title1} alt="" className="w-[65%] py-[10%]" />
              <img src={content1} alt="" className="w-[85%]" />
            </div>
          </div>
        </div>
      </div>
      {/* SECTION 2 */}
      <div className="bg-[#F3EBD5] w-full">
        <div className="grid grid-cols-2 mx-auto xl:container place-items-center">
          <div className="w-full h-full">
            <div className="w-full pl-5 sm:pl-[7%] pt-[12%] 2xl:pt-[10%] xl:pt-[10%]">
              <img src={title2} alt="" className="w-[65%] py-[10%]" />
              <img src={content2} alt="" className="w-[85%]" />
            </div>
          </div>

          <img
            src={img2}
            alt=""
            className="object-cover w-full xl:w-[90%] xl:h-[90%] xl:rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeEng;
