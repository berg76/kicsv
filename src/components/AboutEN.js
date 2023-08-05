import React from "react";
import { useRef } from "react";
import img1 from "../imgs/about1.png";
import img2 from "../imgs/about2.png";

import leftArrow from "../imgs/left_arrow.png";
import slide0 from "../imgs/about_slide0.svg";
import emf from "../imgs/about_EMF.svg";
import pmf from "../imgs/about_PMF.svg";
import gmf from "../imgs/about_GMF.svg";

import emfPopupTitle from "../imgs/about_EMF_popup_title.svg";
import emfPopupContents from "../imgs/about_EMF_popup_contents.svg";

function AboutEN() {
  const emfInfo = useRef();

  return (
    <>
      <div className="mt-[68px] relative bg-[#E2D2F6]">
        <div className="bg-[#E2D2F6] h-[600px] relative lg:container mx-auto 2xl:h-[850px] 2xl:mx-auto">
          <div className="font-Montserrat font-semibold text-[53px] 2xl:text-[80px] left-16 relative top-[100px]">
            <div className="">Diving startup</div>
            <div className="relative top-[-15px]">success through</div>
            <div className="relative top-[-30px]">cross-cultural</div>

            <div className="w-[333px] 2xl:w-[500px] h-[12px] bg-[#FEBDF0] absolute bottom-[55px] 2xl:bottom-[65px]"></div>
            <div className="relative top-[-45px] inline-block">
              collaboration
            </div>
          </div>
          <div className="relative font-Montserrat text-[19px] 2xl:text-[25px] left-16 top-24">
            We connect Korean Startups to the US <br />
            to unleash the potential of global innovation
          </div>
          <div className="absolute top-[75px] right-16 w-[400px] h-[450px] xl:w-[650px] 2x:w-[700px] 2xl:h-[670px]">
            <img
              src={img1}
              alt=""
              className="absolute top-0 left-0 w-[300px] xl:w-[400px] 2xl:w-[500px]"
            />
            <img
              src={img2}
              alt=""
              className="absolute bottom-0 right-0 w-[300px] xl:w-[400px] 2xl:w-[500px]"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F8F6F3] w-full h-[700px]">
        <div className="relative h-full lg:container">
          <div className="w-[70%] h-full inline-block  relative">
            <img
              src={slide0}
              alt=""
              className="w-[90%] left-[5%] top-[30%] relative "
            />
            {/* EMF POPUP */}
            <div
              className="absolute h-[90%] w-[90%] left-[5%] top-[5%] bg-white rounded-2xl p-5 transition ease-in-out duration-500 opacity-0" //invisible
              ref={emfInfo}
            >
              <div className="w-[520px] h-[12px] bg-[#9EFBB2] absolute top-[23%]"></div>
              <div className="w-[320px] h-[12px] bg-[#9EFBB2] absolute top-[35%]"></div>
              <img
                src={emfPopupTitle}
                alt=""
                className="w-[80%] relative top-[20%]"
              />
              <img
                src={emfPopupContents}
                alt=""
                className="w-[90%] relative top-[30%]"
              />
              <button className="absolute px-8 py-3 rounded-full bottom-3 right-3 bg-[#C8A79D] text-white">
                LEARN MORE
              </button>
            </div>
          </div>
          <div className="w-[10%] bg-[#C8A79D] h-full relative inline-block">
            <img
              src={emf}
              alt=""
              className="w-[50%] absolute bottom-[160px] left-[25%]"
            />
            <img
              src={leftArrow}
              alt=""
              className="w-[50%] absolute bottom-[40px] left-[25%]"
              onMouseEnter={() => {
                // emfInfo.current.style.display = "block";
                // emfInfo.current.style.visibility = "visible";
                console.log("IN");
                emfInfo.current.style.opacity = 1.0;
              }}
              onMouseLeave={() => {
                // emfInfo.current.style.visibility = "hidden";
                emfInfo.current.style.opacity = 0.0;
                console.log("OUT");
              }}
            />
          </div>
          <div className="w-[10%] bg-[#A871EF] h-full relative inline-block">
            <img
              src={pmf}
              alt=""
              className="w-[50%] absolute bottom-[160px] left-[25%]"
            />
            <img
              src={leftArrow}
              alt=""
              className="w-[50%] absolute bottom-[40px] left-[25%]"
            />
          </div>
          <div className="w-[10%] bg-[#094038] h-full relative inline-block">
            <img
              src={gmf}
              alt=""
              className="w-[50%] absolute bottom-[160px] left-[25%]"
            />
            <img
              src={leftArrow}
              alt=""
              className="w-[50%] absolute bottom-[40px] left-[25%]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutEN;
