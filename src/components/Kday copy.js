import React from "react";
import img1 from "../imgs/KDAY_D_Health.png";
import img2 from "../imgs/KDAY_AI.png";
import img3 from "../imgs/KDAY_META.png";
import img4 from "../imgs/KDAY_SaaS.png";

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
      <div className="bg-[#020126] pt-[170px] pb-[90px] font-AbhayaLibre grid grid-cols-12">
        <div className="col-span-12 text-center text-white xl:pr-10 xl:text-right xl:col-span-5 ">
          <div className="text-[6rem] sm:text-[10rem] xl:text-[10rem] text-[#94EEE3]">
            K-Day :
          </div>
          <div
            className="relative  font-AbhayaLibre
                      top-[-2rem] xl:top-[-4.5rem] 
                      text-[2rem] xl:text-[1.9rem] 
                      xl:right-[9.7rem]"
          >
            2023 September 14 - 15<sup>th</sup>{" "}
          </div>
        </div>
        <div className="text-white text-center text-[1.5rem] md:text-[2rem] lg:text-[3rem] pt-[4px] md:pt-[32px] xl:pt-[56px] 2xl:pt-[42px] xl:text-left xl:text-[3.2rem] 2xl:text-[4rem] xl:pl-[8px] col-span-12 xl:col-span-7 font-AbhayaLibre">
          {/* <div>Silicon Valley’s premier</div>
          <div className="relative top-[-0.5rem] md:top-[-1rem]">
            Korean American startup festival
          </div> */}
          <div>Discover the Korean Startups</div>
          <div className="relative top-[-0.5rem] md:top-[-1rem]">
            Shaping the Future
          </div>
        </div>
      </div>
      {/* SECTION 2 - An Extraordinary Opportunity */}
      <div className="bg-[#DEEDEB] w-full">
        <div className="mx-auto lg:container">
          <div className="font-AbhayaLibre font-bold text-[24px] md:text-[5rem] text-center md:pt-[12rem] md:py-[6rem] py-[3rem] leading-none">
            An Extraordinary Opportunity
          </div>
          <div className="hidden md:block font-Almarai font-light px-8 md:text-[2rem] break-keep pb-[3rem] md:pb-[10rem] text-center">
            for startups to formulate ground breaking ideas and connect with
            potential partners and investors. In collaboration with Bay Area
            K-Group, Korean Investment Corporation, K-Day brings together a
            powerhouse of industry leaders and investors from around the globe
          </div>
          <div className="md:hidden font-Almarai px-8 text-[14px] break-keep pb-[3rem] text-center">
            for startups to formulate ground breaking ideas and connect with
            potential partners and investors from all around the globe
          </div>
        </div>
      </div>
      {/* SECTION 3 - Industry Forums Empowering  */}
      <div className="bg-[#73A4B4] w-full">
        <div className="font-AbhayaLibre font-bold text-white text-[24px] md:text-[5rem] text-center md:pt-[12rem] md:py-[6rem] py-[3rem] leading-none">
          Industry Forums Empowering <br className="lg:hidden" />
          Startups in Key Verticals
        </div>
        <div className="hidden md:block lg:container lg:mx-auto font-Almarai text-center text-[1.25rem] md:text-[2rem] text-white font-light pb-0 md:pb-[1rem] leading-normal px-[1rem] md:px-[3rem]">
          providing startups with industry specific discussions, coaching, and
          networking opportunities
        </div>
        {/* IMG + TEXT - 1 */}
        <div className="w-full p-5">
          <div className="lg:container lg:mx-auto grid grid-cols-12 place-items-center py-6 md:py-[3rem] lg:px-[2rem]">
            <div className="col-span-4 p-2 md:p-8">
              <img src={img1} alt="" className="object-cover" />
            </div>
            <div className="col-span-8 px-[1rem] md:px-[2rem] xl:px-[3rem]">
              <div className="font-AbhayaLibre text-left  md:pt-0 text-[1.5rem] md:text-[3rem] xl:text-[4rem] text-white xl:pb-[2rem] pb-[0.5rem]">
                Digital Health
              </div>
              <div className="hidden md:block font-Almarai text-left text-[1.5rem] xl:text-[2.125rem] text-white font-light leading-7 lg:leading-9 lg:pr-[24px]">
                innovation is transforming the healthcare landscape, helping
                providers make better decisions and reducing costs.
              </div>
              <div className="md:hidden font-Almarai text-left text-[16px] text-white font-light leading-tight">
                is making healthcare more accessible and reliable for all
              </div>
            </div>
          </div>
        </div>
        {/* TEXT + IMG - 2 */}
        <div className="w-full p-5">
          <div className="lg:container lg:mx-auto grid grid-cols-12 place-items-center py-6 md:py-[3rem] lg:px-[2rem]">
            <div className="col-span-8 px-[1rem] md:px-[2rem] xl:px-[3rem]">
              <div className="font-AbhayaLibre text-left  md:pt-0 text-[1.5rem] md:text-[3rem] xl:text-[4rem] text-white xl:pb-[2rem] pb-[0.5rem]">
                AI
              </div>
              <div className="hidden md:block font-Almarai text-left text-[1.5rem] xl:text-[2.125rem] text-white font-light leading-7 lg:leading-9 lg:pr-[24px]">
                is shaping our future, automating complex tasks and driving
                advancements in all industries, making it a powerful tool that
                can transform the way we live and work.
              </div>
              <div className="md:hidden font-Almarai text-left text-[16px] text-white font-light leading-tight">
                is changing our technological interaction, transcending physical
                limitations
              </div>
            </div>
            <div className="col-span-4 p-2 md:p-8">
              <img src={img2} alt="" className="object-cover" />
            </div>
          </div>
        </div>
        {/* IMG + TEXT - 3 */}
        <div className="w-full p-5">
          <div className="lg:container lg:mx-auto grid grid-cols-12 place-items-center py-6 md:py-[3rem] lg:px-[2rem]">
            <div className="col-span-4 p-2 md:p-8">
              <img src={img3} alt="" className="object-cover" />
            </div>
            <div className="col-span-8 px-[1rem] md:px-[2rem] xl:px-[3rem]">
              <div className="font-AbhayaLibre text-left  md:pt-0 text-[1.5rem] md:text-[3rem] xl:text-[4rem] text-white xl:pb-[2rem] pb-[0.5rem]">
                Metaverse
              </div>
              <div className="hidden md:block font-Almarai text-left text-[1.5rem] xl:text-[2.125rem] text-white font-light leading-7 lg:leading-9 lg:pr-[24px]">
                is reshaping our technological interaction, offering immersive
                and interactive experiences that transcend physical limitations,
                enabling individuals to explore new dimensions of life.
              </div>
              <div className="md:hidden font-Almarai text-left text-[16px] text-white font-light leading-tight">
                is changing our technological interaction, transcending physical
                limitations
              </div>
            </div>
          </div>
        </div>
        {/* TEXT + IMG - 4 */}
        <div className="w-full p-5">
          <div className="lg:container lg:mx-auto grid grid-cols-12 place-items-center py-6 md:py-[3rem] lg:px-[2rem]">
            <div className="col-span-8 px-[1rem] md:px-[2rem] xl:px-[3rem]">
              <div className="font-AbhayaLibre text-left  md:pt-0 text-[1.5rem] md:text-[3rem] xl:text-[4rem] text-white xl:pb-[2rem] pb-[0.5rem]">
                Enterprise Solution (SaaS)
              </div>
              <div className="hidden md:block font-Almarai text-left text-[1.5rem] xl:text-[2.125rem] text-white font-light leading-7 lg:leading-9 lg:pr-[24px]">
                is gaining popularity in the business world, offering innovative
                solutions and driving efficiency in the corporate landscape.
              </div>
              <div className="md:hidden font-Almarai text-left text-[16px] text-white font-light leading-tight">
                is revolutionizing businesses, driving efficiency in the
                corporate landscape.
              </div>
            </div>
            <div className="col-span-4 p-2 md:p-8">
              <img src={img4} alt="" className="object-cover" />
            </div>
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
