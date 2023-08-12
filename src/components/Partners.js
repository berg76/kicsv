import React from "react";

import logo1 from "../imgs/kicsv_swit.png";
import logo2 from "../imgs/kicsv_bear.png";
import logo3 from "../imgs/kicsv_zconverter2.png";
import logo4 from "../imgs/kicsv_stratio_largelogo.png";
import logo5 from "../imgs/kicsv_4dreplay.png";
import logo6 from "../imgs/kicsv_3i.png";
import logo7 from "../imgs/kicsv_drimaes2.png";
import logo8 from "../imgs/kicsv_makinarocks2.png";

function Partners() {
  return (
    <div className="w-full mx-auto lg:container mt-[68px] font-Noto">
      <div className="py-24 text-4xl text-center font-Montserrat text-bold">
        KIC 실리콘밸리의 대표적 기업
      </div>
      <div className="grid grid-cols-4 gap-8">
        <img src={logo1} alt="" className="w-[50%] m-auto" />
        <img src={logo2} alt="" className="w-[50%] m-auto" />
        <img src={logo3} alt="" className="w-[50%] m-auto" />
        <img src={logo4} alt="" className="w-[50%] m-auto" />
        <img src={logo5} alt="" className="w-[50%] m-auto" />
        <img src={logo6} alt="" className="w-[50%] m-auto" />
        <img src={logo7} alt="" className="w-[50%] m-auto" />
        <img src={logo8} alt="" className="w-[50%] m-auto" />
      </div>
      <div className="w-full h-[400px]"></div>
    </div>
  );
}

export default Partners;
