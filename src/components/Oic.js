import React, { useRef } from "react";
import bg from "../imgs/oic_bg.svg";
import bg2 from "../imgs/oic_bg2.svg";
import btn_open from "../imgs/btn_arrow_down.svg";
import btn_close from "../imgs/btn_close.svg";

import part1 from "../imgs/oic_part1.svg";
import logo11 from "../imgs/part11.png";
import logo12 from "../imgs/part12.png";
import logo13 from "../imgs/part13.png";
import logo14 from "../imgs/part14.png";
import logo15 from "../imgs/part15.png";
import logo16 from "../imgs/part16.png";
import logo17 from "../imgs/part17.png";

import part2 from "../imgs/oic_part2.svg";
import logo21 from "../imgs/part21.png";
import logo22 from "../imgs/part22.png";
import logo23 from "../imgs/part23.png";
import logo24 from "../imgs/part24.png";
import logo25 from "../imgs/part25.png";

import part3 from "../imgs/oic_part3.svg";
import logo31 from "../imgs/part31.png";
import logo32 from "../imgs/part32.png";
import logo33 from "../imgs/part33.png";
import logo34 from "../imgs/part34.png";
import logo35 from "../imgs/part35.png";

import part4 from "../imgs/oic_part4.svg";
import logo41 from "../imgs/part41.png";
import logo42 from "../imgs/part42.png";
import logo43 from "../imgs/part43.png";
import logo44 from "../imgs/part44.png";
import logo45 from "../imgs/part45.png";

import part5 from "../imgs/oic_part5.svg";
import logo51 from "../imgs/part51.png";
import logo52 from "../imgs/part52.png";
import logo53 from "../imgs/part53.png";
import logo54 from "../imgs/part54.png";

function Oic() {
  const btn1 = useRef();
  const btn2 = useRef();
  const btn3 = useRef();
  const btn4 = useRef();
  const btn5 = useRef();

  return (
    <div>
      <div className="relative mt-[68px] ">
        <div className="absolute w-[30%] bg-[#F8F6F3] h-full z-[5]"></div>
        <div className="relative z-[20]">
          <img src={bg} alt="" className="mx-auto" />
        </div>
        <div className="absolute w-[30%] right-0 top-0 bg-[#C8A79D] h-full z-[5]"></div>
      </div>
      <div className="relative">
        <div className="absolute hidden 2xl:inline-block w-[19.3%] bg-[#EFF5F0] h-full z-[5]"></div>
        <div className="relative z-[20]">
          <img src={bg2} alt="" className="mx-auto" />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-8 mx-auto mt-32 xl:container">
        {/* AI */}
        <div className="relative">
          <div className="relative mb-8">
            <img src={part1} alt="" className="w-full" />
            <img
              src={btn_open}
              alt=""
              className="relative mx-auto cursor-pointer bottom-16"
              onClick={() => {
                // btn1.current.style.opacity = 1.0;
                btn1.current.style.display = "inline-block";
              }}
            />
          </div>
          {/* <div
            className="bg-[#F8F8F8] p-3 w-full rounded-3xl mb-32 opacity-0 ease-in-out duration-300"
            ref={btn1}
          > */}
          <div
            className="bg-[#F8F8F8] p-3 w-full rounded-3xl mb-32 hidden"
            ref={btn1}
          >
            <div className="relative w-full text-right">
              <img
                src={btn_close}
                alt=""
                className="inline-block m-3 mt-3 mb-12"
                onClick={() => {
                  // btn1.current.style.opacity = 0.0;
                  btn1.current.style.display = "none";
                }}
              />
            </div>
            <img src={logo11} alt="" className="w-[75%] mx-auto py-3" />
            <img src={logo12} alt="" className="w-[45%] mx-auto py-3" />
            <img src={logo13} alt="" className="w-[75%] mx-auto py-3" />
            <img src={logo14} alt="" className="w-[65%] mx-auto py-3" />
            <img src={logo15} alt="" className="w-[75%] mx-auto py-3" />
            <img src={logo16} alt="" className="w-[70%] mx-auto py-3" />
            <img src={logo17} alt="" className="w-[75%] mx-auto py-3" />
          </div>
        </div>
        {/* SaaS */}
        <div className="relative">
          <div className="relative mb-8">
            <img src={part2} alt="" className="w-full" />
            <img
              src={btn_open}
              alt=""
              className="relative mx-auto bottom-16"
              onClick={() => {
                // btn2.current.style.opacity = 1.0;
                btn2.current.style.display = "inline-block";
              }}
            />
          </div>

          {/* <div
            className="bg-[#F8F8F8] p-3 w-full rounded-3xl mb-32 opacity-0 ease-in-out duration-300"
            ref={btn2}
          > */}
          <div
            className="bg-[#F8F8F8] p-3 w-full rounded-3xl mb-32 hidden"
            ref={btn2}
          >
            <div className="relative w-full text-right">
              <img
                src={btn_close}
                alt=""
                className="inline-block m-3 mt-3 mb-12"
                onClick={() => {
                  // btn2.current.style.opacity = 0.0;
                  btn2.current.style.display = "none";
                }}
              />
            </div>
            <img src={logo21} alt="" className="w-[65%] mx-auto py-3" />
            <img src={logo22} alt="" className="w-[55%] mx-auto py-3" />
            <img src={logo23} alt="" className="w-[65%] mx-auto py-3" />
            <img src={logo24} alt="" className="w-[55%] mx-auto py-3" />
            <img src={logo25} alt="" className="w-[65%] mx-auto py-3" />
          </div>
        </div>

        {/* Digital Health */}
        <div className="relative">
          <div className="relative mb-8">
            <img src={part3} alt="" className="w-full" />
            <img
              src={btn_open}
              alt=""
              className="relative mx-auto bottom-16"
              onClick={() => {
                // btn3.current.style.opacity = 1.0;
                btn3.current.style.display = "inline-block";
              }}
            />
          </div>

          {/* <div
            className="bg-[#F8F8F8] p-3 w-full rounded-3xl mb-32 opacity-0 ease-in-out duration-300"
            ref={btn3}
          > */}
          <div
            className="bg-[#F8F8F8] p-3 w-full rounded-3xl mb-32 hidden"
            ref={btn3}
          >
            <div className="relative w-full text-right">
              <img
                src={btn_close}
                alt=""
                className="inline-block m-3 mt-3 mb-12"
                onClick={() => {
                  // btn3.current.style.opacity = 0.0;
                  btn3.current.style.display = "none";
                }}
              />
            </div>
            <img src={logo31} alt="" className="w-[55%] mx-auto py-3" />
            <img src={logo32} alt="" className="w-[65%] mx-auto py-3" />
            <img src={logo33} alt="" className="w-[55%] mx-auto py-3" />
            <img src={logo34} alt="" className="w-[75%] mx-auto py-3" />
            <img src={logo35} alt="" className="w-[65%] mx-auto py-3" />
          </div>
        </div>

        {/* Metaverse */}
        <div className="relative">
          <div className="relative mb-8">
            <img src={part4} alt="" className="w-full" />
            <img
              src={btn_open}
              alt=""
              className="relative mx-auto bottom-16"
              onClick={() => {
                // btn4.current.style.opacity = 1.0;
                btn4.current.style.display = "inline-block";
              }}
            />
          </div>
          {/* <div
            className="bg-[#F8F8F8] p-3 w-full rounded-3xl mb-32 opacity-0 ease-in-out duration-300"
            ref={btn4}
          > */}
          <div
            className="bg-[#F8F8F8] p-3 w-full rounded-3xl mb-32 hidden"
            ref={btn4}
          >
            <div className="relative w-full text-right">
              <img
                src={btn_close}
                alt=""
                className="inline-block m-3 mt-3 mb-12"
                onClick={() => {
                  // btn4.current.style.opacity = 0.0;
                  btn4.current.style.display = "none";
                }}
              />
            </div>
            <img src={logo41} alt="" className="w-[65%] mx-auto py-3" />
            <img src={logo42} alt="" className="w-[65%] mx-auto py-3" />
            <img src={logo43} alt="" className="w-[65%] mx-auto py-3" />
            <img src={logo44} alt="" className="w-[65%] mx-auto py-3" />
            <img src={logo45} alt="" className="w-[65%] mx-auto py-3" />
          </div>
        </div>

        {/* Robotics */}
        <div className="relative">
          <div className="relative mb-8">
            <img src={part5} alt="" className="w-full" />
            <img
              src={btn_open}
              alt=""
              className="relative mx-auto bottom-16"
              onClick={() => {
                // btn5.current.style.opacity = 1.0;
                btn5.current.style.display = "inline-block";
              }}
            />
          </div>
          {/* <div
            className="bg-[#F8F8F8] p-3 w-full rounded-3xl mb-32 opacity-0 ease-in-out duration-300"
            ref={btn5}
          > */}
          <div
            className="bg-[#F8F8F8] p-3 w-full rounded-3xl mb-32 hidden"
            ref={btn5}
          >
            <div className="relative w-full text-right">
              <img
                src={btn_close}
                alt=""
                className="inline-block m-3 mt-3 mb-12"
                onClick={() => {
                  // btn5.current.style.opacity = 0.0;
                  btn5.current.style.display = "none";
                }}
              />
            </div>
            <img src={logo51} alt="" className="w-[45%] mx-auto py-3" />
            <img src={logo52} alt="" className="w-[65%] mx-auto py-3" />
            <img src={logo53} alt="" className="w-[65%] mx-auto py-3" />
            <img src={logo54} alt="" className="w-[45%] mx-auto py-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Oic;
