import React from "react";
// import img1 from "../imgs/KDAY_D_Health.png";
// import img2 from "../imgs/KDAY_AI.png";
// import img3 from "../imgs/KDAY_META.png";
// import img4 from "../imgs/KDAY_SaaS.png";

import kday1 from "../imgs/KDAY_Head.svg";
// import kday1 from "../imgs/KDAY_Head_qr.svg";
// import qrcode from "../imgs/qrcode.png";

import kday21 from "../imgs/KDAY_Head2.svg";
import kday22 from "../imgs/KDAY_Contents2.svg";

import kday31 from "../imgs/KDAY_KEY1.svg";
import kday32 from "../imgs/KDAY_KEY2.png";
import kday33 from "../imgs/KDAY_KEY3.svg";

import kday41 from "../imgs/KDAY_Vertical1.svg";
import kday42 from "../imgs/KDAY_Vertical2.svg";
import kday43 from "../imgs/KDAY_Vertical3.png";
import kday44 from "../imgs/KDAY_Vertical4.svg";
import kday45 from "../imgs/KDAY_Vertical5.svg";
import kday46 from "../imgs/KDAY_Vertical6.png";
import kday47 from "../imgs/KDAY_Vertical7.png";
import kday48 from "../imgs/KDAY_Vertical8.svg";
import kday49 from "../imgs/KDAY_Vertical9.svg";
import kday410 from "../imgs/KDAY_Vertical10.png";

import pLogo1 from "../imgs/P01_Apple.png";
import pLogo2 from "../imgs/P02_Eleutherai2.png";
import pLogo3 from "../imgs/P03_OpenAI2.png";
import pLogo4 from "../imgs/P04_GoogleCloud.png";
import pLogo5 from "../imgs/P05_Meta2.png";
import pLogo6 from "../imgs/P06_Stripe2.png";
import pLogo7 from "../imgs/P07_Github2.png";
import pLogo8 from "../imgs/P08_Roblox.png";
import pLogo9 from "../imgs/P09_Sendbird.png";
import pLogo10 from "../imgs/P10_Opensource2.png";
import pLogo11 from "../imgs/P11_Softbank.png";
import pLogo12 from "../imgs/P12_Atlassian.png";
import pLogo13 from "../imgs/P13_Contextual_ai.png";
import pLogo14 from "../imgs/P14_zendesk.png";

function Kday() {
  const pLogos = [
    pLogo1,
    pLogo2,
    pLogo3,
    pLogo4,
    pLogo5,
    pLogo6,
    pLogo7,
    pLogo8,
    pLogo9,
    pLogo10,
    pLogo11,
    pLogo12,
    pLogo13,
    pLogo14,
  ];
  return (
    <div className="w-full">
      {/* SECTION 1 */}
      <div className="bg-[#CADAE4] pt-[40px] pb-[20px] lg:pt-[90px] lg:pb-[40px] mt-[68px] relative">
        <div className="mx-auto lg:container">
          <img src={kday1} alt="" className="w-[80%] mx-auto" />
        </div>
      </div>
      {/* SECTION 2 - An Extraordinary Opportunity */}
      <div className="bg-[#DEEDEB] ">
        <div className="mx-auto lg:container">
          <img
            src={kday21}
            alt=""
            className="w-[80%] mx-auto py-[52px] lg:py-[90px]"
          />
          <img
            src={kday22}
            alt=""
            className="w-[80%] mx-auto pb-[52px] lg:pb-[90px]"
          />
        </div>
      </div>
      {/* SECTION 3 - Keynote  */}
      <div className="bg-[#F3EBD5] ">
        <div className="mx-auto lg:container">
          <img
            src={kday31}
            alt=""
            className="w-[57%] mx-auto py-[52px] lg:py-[90px]"
          />
          <div className="grid grid-cols-12 pb-24">
            <div className="col-span-4 place-self-center">
              <img src={kday32} alt="" className="w-[65%] " />
            </div>
            <div className="col-span-8">
              <img src={kday33} alt="" className="ml-0" />
            </div>
          </div>
        </div>
      </div>
      {/* SECTION 3 - Industry Forums Empowering  */}
      <div className="w-full ">
        <div className="mx-auto bg-white lg:container">
          <img
            src={kday41}
            alt=""
            className="w-[80%] mx-auto py-[52px] lg:py-[90px]"
          />
          <img
            src={kday42}
            alt=""
            className="w-[80%] mx-auto pb-[52px] lg:pb-[90px]"
          />
          {/* Digital Health */}
          <div className="grid grid-cols-2">
            <img src={kday43} alt="" className="w-full" />
            <img src={kday44} alt="" className="pl-8 pt-[15%]" />
            <img src={kday45} alt="" className="pl-8 pt-[15%]" />
            <img src={kday46} alt="" className="w-full" />
            <img src={kday47} alt="" className="w-full" />
            <img src={kday48} alt="" className="pl-8 pt-[15%]" />
            <img src={kday49} alt="" className="pl-8 pt-[15%]" />
            <img src={kday410} alt="" className="w-full" />
          </div>
        </div>

        <div className="h-[2rem] md:h-[10rem]"></div>
      </div>

      {/* SECTION 4 - Be a part of K-Day */}
      <div className="bg-[#020126] w-full">
        <div className="px-8 lg:container lg:mx-auto lg:px-[2rem] py-8 lg:py-[6rem] ">
          <div className="text-left text-[#94EEE3] text-[24px] md:text-[5rem] lg:mt-[3rem] font-AbhayaLibre">
            Be a part of K-Day
          </div>
          <div className="hidden md:block text-left text-[16px] text-white font-Almarai lg:text-4xl font-light">
            Network with industry professionals, connect with representatives
            from top tech giants across all fields, and explore exciting
            opportunities with Korean entrepreneurs.
          </div>
          <div className="md:hidden text-left text-[16px] text-white font-Almarai font-light leading-tight">
            Network with industry professionals, connect with representatives
            from top tech giants, and explore opportunities with Korean
            entrepreneurs.
          </div>

          {/* LOGO */}
          <div className="h-[2rem] md:h-[4rem]"></div>
          <div className="grid grid-cols-4 gap-y-14 gap-x-4 place-items-center">
            {pLogos.map((logo) => {
              return (
                <img
                  className="inline-block w-[75%] hover:scale-[1.25] md:hover:scale-[1.4] transition-transform object-cover"
                  src={logo}
                  alt=""
                  key={logo}
                />
              );
            })}
          </div>
        </div>
        <div className="h-[2rem] md:h-[10rem]"></div>
      </div>
    </div>
  );
}

export default Kday;
