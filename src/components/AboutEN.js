import React from "react";
import { useRef } from "react";
import img1 from "../imgs/about1.png";
import img2 from "../imgs/about2.png";

import leftArrow from "../imgs/left_arrow.png";
import slide0 from "../imgs/about_slide0.svg";
import emf from "../imgs/about_EMF.svg";
import pmf from "../imgs/about_PMF.svg";
import gmf from "../imgs/about_GMF.svg";

import iconClose from "../imgs/icons_close.svg";
import btnLearn from "../imgs/btn_LearnMore.svg";

import emfPopupTitle from "../imgs/about_EMF_popup_title.svg";
import emfPopupContents from "../imgs/about_EMF_popup_contents.svg";

import pmfPopupTitle from "../imgs/about_PMF_popup_title.svg";
import pmfPopupContents from "../imgs/about_PMF_popup_contents.svg";

import gmfPopupTitle from "../imgs/about_GMF_popup_title.svg";
import gmfPopupContents from "../imgs/about_GMF_popup_contents.svg";

import discoveryTitle from "../imgs/about_discovery_title.svg";
import discoveryHeading from "../imgs/about_discovery_heading.svg";
import kday from "../imgs/about_discovery_kday.svg";
import kdayDetails from "../imgs/about_discovery_kday_details.svg";
import deepConnect from "../imgs/about_discovery_deepconnect.svg";
import deepConnectDetails from "../imgs/about_discovery_deepconnect_details.svg";

function AboutEN() {
  const baseInfo = useRef();
  const emfInfo = useRef();
  const pmfInfo = useRef();
  const gmfInfo = useRef();

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

        <div className="bg-[#F8F6F3] w-full h-[700px] xl:h-[1000px] relative">
          <div className="absolute right-0 bg-[#094038] w-[30%] top-0 h-full"></div>
          <div className="relative h-full mx-auto lg:container">
            <div className="w-[70%] h-full inline-block relative">
              <img
                src={slide0}
                alt=""
                className="w-[90%] left-[5%] top-[30%] relative"
                ref={baseInfo}
              />
              {/* EMF POPUP */}
              <div
                className="absolute h-[90%] w-[90%] left-[5%] top-[5%] bg-white rounded-2xl p-5 transition ease-in-out duration-500 opacity-0" //invisible
                ref={emfInfo}
              >
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
                <img
                  src={iconClose}
                  alt=""
                  className="absolute z-20 cursor-pointer top-5 right-5"
                  onClick={() => {
                    emfInfo.current.style.opacity = 0.0;
                    baseInfo.current.style.opacity = 1.0;
                  }}
                />
              </div>
              {/* PMF POPUP */}
              <div
                className="absolute h-[90%] w-[90%] left-[5%] top-[5%] bg-white rounded-2xl p-5 transition ease-in-out duration-500 opacity-0" //invisible
                ref={pmfInfo}
              >
                <img
                  src={pmfPopupTitle}
                  alt=""
                  className="w-[62%] relative top-[20%]"
                />
                <img
                  src={pmfPopupContents}
                  alt=""
                  className="w-[90%] relative top-[30%]"
                />
                <button className="absolute px-8 py-3 rounded-full bottom-3 right-3 bg-[#C8A79D] text-white">
                  LEARN MORE
                </button>
                <img
                  src={iconClose}
                  alt=""
                  className="absolute z-20 cursor-pointer top-5 right-5"
                  onClick={() => {
                    // emfInfo.current.style.visibility = "hidden";
                    pmfInfo.current.style.opacity = 0.0;
                    baseInfo.current.style.opacity = 1.0;
                  }}
                />
              </div>
              {/* GMF POPUP */}
              <div
                className="absolute h-[90%] w-[90%] left-[5%] top-[5%] bg-white rounded-2xl p-5 transition ease-in-out duration-500 opacity-0" //invisible
                ref={gmfInfo}
              >
                <img
                  src={gmfPopupTitle}
                  alt=""
                  className="w-[50%] relative top-[20%]"
                />
                <img
                  src={gmfPopupContents}
                  alt=""
                  className="w-[90%] relative top-[30%]"
                />
                <button className="absolute px-8 py-3 rounded-full bottom-3 right-3 bg-[#C8A79D] text-white">
                  LEARN MORE
                </button>
                <img
                  src={iconClose}
                  alt=""
                  className="absolute z-20 cursor-pointer top-5 right-5 "
                  onClick={() => {
                    gmfInfo.current.style.opacity = 0.0;
                    baseInfo.current.style.opacity = 1.0;
                  }}
                />
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
                className="w-[50%] absolute bottom-[40px] left-[25%] cursor-pointer"
                onClick={() => {
                  emfInfo.current.style.opacity = 1.0;
                  pmfInfo.current.style.opacity = 0.0;
                  gmfInfo.current.style.opacity = 0.0;
                  baseInfo.current.style.opacity = 0.0;
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
                onClick={() => {
                  emfInfo.current.style.opacity = 0.0;
                  pmfInfo.current.style.opacity = 1.0;
                  gmfInfo.current.style.opacity = 0.0;
                  baseInfo.current.style.opacity = 0.0;
                }}
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
                onClick={() => {
                  emfInfo.current.style.opacity = 0.0;
                  pmfInfo.current.style.opacity = 0.0;
                  gmfInfo.current.style.opacity = 1.0;
                  baseInfo.current.style.opacity = 0.0;
                }}
              />
            </div>
          </div>
        </div>

        <div className="bg-[#DEEDEB] w-full relative">
          <img src={discoveryTitle} alt="" className="pt-24 pb-16 mx-auto" />
          <img src={discoveryHeading} alt="" className="mx-auto xl:scale-125" />

          <div className="grid grid-cols-2 gap-16 pt-24 pb-24 mx-auto lg:container">
            {/* KDAY */}
            <div className="relative bg-black/10 rounded-3xl">
              <img
                src={kday}
                alt=""
                className="mt-12 mb-12 ml-8 origin-top-left lg:mb-16 lg:ml-16 lg:scale-150"
              />
              <img
                src={kdayDetails}
                alt=""
                className="w-[80%] ml-8 mb-28 lg:mb-32"
              />
              <img
                src={btnLearn}
                alt=""
                className="absolute px-5 py-3 bg-white bottom-6 right-8 rounded-3xl w-[35%] max-w-[180px]"
              />
            </div>
            {/* DEEP CONNECT */}
            <div className="relative bg-black/10 rounded-3xl">
              <img
                src={deepConnect}
                alt=""
                className="mt-12 mb-12 ml-8 origin-top-left lg:mb-16 lg:ml-16 lg:scale-150"
              />
              <img
                src={deepConnectDetails}
                alt=""
                className="w-[80%] ml-8 mb-28 lg:mb-32"
              />
              {/* <button className="font-Montserrat text-[#9747FF] text-lg absolute bottom-6 right-8 px-5 py-1 bg-white rounded-3xl">
                Learn more
              </button> */}
              <img
                src={btnLearn}
                alt=""
                className="absolute px-5 py-3 bg-white bottom-6 right-8 rounded-3xl w-[35%] max-w-[180px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutEN;
