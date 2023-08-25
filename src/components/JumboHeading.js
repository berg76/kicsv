import { Link } from "react-router-dom";
import bgImg1 from "../imgs/kicsv_main_bg1.jpg";
import bgImg2 from "../imgs/kicsv_main_bg2.jpg";
import bgImg3 from "../imgs/kicsv_main_bg3.jpg";

import pops from "../imgs/K-Day_Poster.png";

import React, { useState, useEffect } from "react";

export default function JumboHeading() {
  const [bgIdx, setBgIdx] = useState(1);
  const bgImg = [bgImg1, bgImg2, bgImg3];

  useEffect(() => {
    const interval = setInterval(() => {
      if (bgIdx < 2) {
        setBgIdx(bgIdx + 1);
      } else {
        setBgIdx(0);
      }
    }, 4000);
    return () => clearInterval(interval);
  });

  const [modal, setModal] = useState(false);
  const VISITED_BEFORE_DATE = localStorage.getItem("Visited");

  useEffect(() => {
    //console.log(VISITED_BEFORE_DATE);
    if (VISITED_BEFORE_DATE !== null) {
      setModal(false);
    } else {
      // Not Visited
      setModal(true);
    }
  }, [VISITED_BEFORE_DATE]);

  return (
    <div className="relative w-full h-[500px] md:h-[550px] overflow-hidden text-center mt-[68px] font-Noto">
      {modal && (
        <div className="fixed z-50 w-full h-full bg-[#e5e7ebbf]">
          <div className="fixed top-[100px] left-[50%] -translate-x-1/2">
            <div className="absolute right-0 w-full text-right bg-[#2E2D2D] text-white pt-3">
              <span
                className="px-3 pt-3 cursor-pointer"
                onClick={() => {
                  setModal(false);
                  localStorage.setItem("Visited", true);
                }}
              >
                X
              </span>
            </div>
            <img src={pops} alt="" className="mt-[36px]" />
          </div>
        </div>
      )}
      <div
        className={`absolute transition-opacity duration-700 ease-in w-full ${
          bgIdx === 0 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="h-[500px] md:h-[550px]"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url(${bgImg[0]})`,
          }}
        ></div>
        <div className="absolute text-center w-full h-[550px] top-0 text-white">
          <p className="pt-16 text-lg text-black md:text-xl">
            KIC 실리콘밸리에 오신걸 환영합니다
          </p>
          <p className="pt-5 text-[1.875rem] leading-relaxed text-black md:text-[3rem]">
            미국시장에서 살아남아
            <br />
            사업을 일으키고 싶은
            <br />
            기업
          </p>
        </div>
      </div>
      <div
        className={`absolute transition-opacity duration-700 ease-in w-full ${
          bgIdx === 1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="h-[500px] md:h-[550px]"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url(${bgImg[1]})`,
          }}
        ></div>
        <div className="absolute text-center w-full h-[550px] top-0 text-white">
          <p className="pt-16 text-lg text-black md:text-xl">
            KIC 실리콘밸리에 오신걸 환영합니다
          </p>
          <p className="pt-5 text-[1.875rem] leading-relaxed text-black md:text-[3rem]">
            미국시장을 통해
            <br />
            글로벌 시장에서
            <br />
            주목받고 싶은 스타트업
          </p>
        </div>
      </div>
      <div
        className={`absolute transition-opacity duration-700 ease-in w-full ${
          bgIdx === 2 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="h-[500px] md:h-[550px]"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url(${bgImg[2]})`,
          }}
        ></div>
        <div className="absolute text-center w-full h-[550px] top-0 text-white">
          <p className="pt-16 text-lg text-black md:text-xl">
            KIC 실리콘밸리에 오신걸 환영합니다
          </p>
          <p className="pt-5 text-[1.875rem] leading-relaxed text-black md:text-[3rem]">
            실리콘밸리에서
            <br />
            투자 받아 성장하고 싶은
            <br />
            스타트업
          </p>
        </div>
      </div>
      <div className="absolute w-full text-center bottom-16">
        <div className="inline-block px-4 py-2 mx-auto font-bold text-white bg-blue-700 rounded-full hover:bg-red-700">
          <Link href="/">Apply PMF</Link>
        </div>
        <div className="mt-6 text-center ">
          <button
            className={`cursor-pointer inline-block h-[12px] mx-2 rounded-lg bg-blue-600 hover:bg-blue-900 opacity-50 transition-[width] duration-300 ease-linear ${
              bgIdx === 0 ? "w-[56px]" : "w-[24px]"
            }`}
            onClick={() => setBgIdx(0)}
          ></button>
          <button
            className={`cursor-pointer inline-block h-[12px] mx-2 rounded-lg bg-blue-600 hover:bg-blue-900 opacity-50 transition-[width] duration-300 ease-linear ${
              bgIdx === 1 ? "w-[56px]" : "w-[24px]"
            }`}
            onClick={() => setBgIdx(1)}
          ></button>
          <button
            className={`cursor-pointer inline-block h-[12px] mx-2 rounded-lg bg-blue-600 hover:bg-blue-900 opacity-50 transition-[width] duration-300 ease-linear ${
              bgIdx === 2 ? "w-[56px]" : "w-[24px]"
            }`}
            onClick={() => setBgIdx(2)}
          ></button>
        </div>
      </div>
    </div>
  );
}
