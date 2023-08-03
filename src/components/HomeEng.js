import React from "react";
import bg1 from "../imgs/landing_bg.png";
import icon1 from "../imgs/landing_icon1.png";
import icon2 from "../imgs/landing_icon2.png";
import icon3 from "../imgs/landing_icon3.png";

function HomeEng() {
  return (
    <div>
      <div className="w-full mt-[68px] relative">
        <img src={bg1} alt="" className="object-cover w-full" />
        <div className="absolute min-w-[900px] max-w-[1200px] w-[75%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white/30 backdrop-blur border-2 border-gray-300 border-opacity-40 rounded-3xl drop-shadow-xl shadow-black">
          <div className="text-white text-[140px] text-center font-OpenSans">
            BRIDGING
          </div>
          <div className="relative top-[-16px] text-center text-[36px] font-IstokWeb text-white">
            Korean Innovation to the US
          </div>
          <div className="w-3/4 py-3 mx-auto text-center font-IstokWeb bg-[#4D1EDB] text-white rounded-full text-[20px] mb-10">
            We empower Korean Startups to thrive on a global scale
          </div>
        </div>
      </div>
      <div className="w-full py-10 ">
        <div className="grid grid-cols-3 gap-4 border-gray-700 divide-x-2">
          <div className="text-center">
            <img src={icon1} alt="" className="inline-block w-1/2" />
            <div className="text-center font-Roboto">
              Startups participated in <br />
              our programs and events
            </div>
            <div className="text-center text-[#FF4D00] font-Roboto text-[52px] font-bold">
              10+
            </div>
          </div>
          <div className="text-center">
            <img src={icon2} alt="" className="inline-block w-1/2" />
            <div className="text-center font-Roboto">
              Startups secured series A or higher <br /> funding through our
              programs
            </div>
            <div className="text-center text-[#FF4D00] font-Roboto text-[52px] font-bold">
              1+
            </div>
          </div>
          <div className="text-center">
            <img src={icon3} alt="" className="inline-block w-1/2" />
            <div className="text-center font-Roboto">
              Venture Capital Firms <br /> partnered with us
            </div>
            <div className="text-center text-[#FF4D00] font-Roboto text-[52px] font-bold">
              10+
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-10 bg-[#020126] ">
        <div className="text-white font-AbhayaLibre text-center text-[72px] ">
          We help fast growing startups in <br />
          <span className="underline underline-offset-2">these industries</span>
        </div>
        <div className="grid grid-cols-3 gap-8 py-10 text-center">
          <div className="w-3/4 p-3 mx-auto text-xl text-center text-white border-2 font-AbhayaLibre hover:text-[#9747FF] hover:bg-white hover:border-[#9747ff]">
            Artificial Intelligence
          </div>
          <div className="w-3/4 p-3 mx-auto text-xl text-center text-white border-2 font-AbhayaLibre hover:text-[#9747FF] hover:bg-white hover:border-[#9747ff]">
            Metaverse
          </div>
          <div className="w-3/4 p-3 mx-auto text-xl text-center text-white border-2 font-AbhayaLibre hover:text-[#9747FF] hover:bg-white hover:border-[#9747ff]">
            Digital Health
          </div>
          <div className="w-3/4 p-3 mx-auto text-xl text-center text-white border-2 font-AbhayaLibre hover:text-[#9747FF] hover:bg-white hover:border-[#9747ff]">
            Mobility
          </div>
          <div className="w-3/4 p-3 mx-auto text-xl text-center text-white border-2 font-AbhayaLibre hover:text-[#9747FF] hover:bg-white hover:border-[#9747ff]">
            Robotics
          </div>
          <div className="w-3/4 p-3 mx-auto text-xl text-center text-white border-2 font-AbhayaLibre hover:text-[#9747FF] hover:bg-white hover:border-[#9747ff]">
            Enterprise Solution
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeEng;
