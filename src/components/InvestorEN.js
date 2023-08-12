import React from "react";
import img1 from "../imgs/invest_img1.png";
import img2 from "../imgs/invest_img2.png";
import img3 from "../imgs/invest_img3.png";
import img_bg from "../imgs/invest_bg.png";

import title1 from "../imgs/invest_title1.svg";
import content1 from "../imgs/invest_content1.svg";
import title2 from "../imgs/invest_title2.svg";
import content2 from "../imgs/invest_content2.svg";

function InvestorEN() {
  return (
    <div className="mt-[68px] h-[600px] 2xl:h-[750px] relative w-full">
      {/* HEADING */}
      <img
        src={img_bg}
        alt=""
        className="absolute top-0 object-cover w-full h-[600px] 2xl:h-[750px]"
      />
      <div className="h-[600px] relative w-full xl:container mx-auto 2xl:h-[750px]">
        <div className="font-Montserrat font-semibold text-[53px] 2xl:text-[80px] left-16 relative top-[100px]">
          <div className="">Explore Events</div>
          <div className="relative top-[-15px]">Showcasing</div>
          <div className="w-[420px] -left-[10px] 2xl:w-[640px] h-[30px] 2xl:h-[35px] bg-[#FEBDF0] absolute bottom-[120px] 2xl:bottom-[170px]"></div>
          <div className="relative top-[-30px]">High-Potential</div>
          <div className="relative top-[-45px] inline-block">Startups</div>
        </div>
        <div className="relative font-Montserrat text-[19px] 2xl:text-[25px] left-16 top-24">
          Our events give investors and startups <br /> a platform to network
          and connect
        </div>
        <img
          src={img1}
          alt=""
          className="absolute bottom-0 right-16 h-[500px] md:h-[450px] 2xl:h-[650px]"
        />
      </div>

      {/* SECTION 1 */}
      <div className="bg-[#DEEDEB] w-full ">
        <div className="grid grid-cols-2 mx-auto xl:container place-items-center">
          <img
            src={img2}
            alt=""
            className="object-cover w-full xl:w-[90%] xl:h-[90%] xl:rounded-3xl"
          />
          <div className="w-full h-full">
            <div className="w-full pl-5 sm:pl-[7%] pt-[10%] 2xl:pt-[8%] xl:pt-[10%]">
              <img src={title1} alt="" className="w-[65%] pb-[7%]" />
              <img src={content1} alt="" className="w-[85%]" />
            </div>
          </div>
        </div>
      </div>
      {/* SECTION 2 */}
      <div className="bg-[#DEEDEB] w-full">
        <div className="grid grid-cols-2 mx-auto xl:container place-items-center">
          <div className="w-full h-full">
            <div className="w-full pl-5 sm:pl-[7%] pt-[12%] 2xl:pt-[10%] xl:pt-[10%]">
              <img src={title2} alt="" className="w-[65%] pb-[8%]" />
              <img src={content2} alt="" className="w-[85%]" />
            </div>
          </div>

          <img
            src={img3}
            alt=""
            className="object-cover w-full xl:w-[90%] xl:h-[90%] xl:rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default InvestorEN;

// <div className="container grid grid-cols-2 place-items-center">
//   <div className="bg-[#F8F6F3] w-full h-full">
//     <div className="w-full pl-5 sm:pl-[7%] pt-[10%]">
//       <img src={title2} alt="" className="w-[65%] pb-[10%]" />
//       <img src={content2} alt="" className="w-[85%]" />
//     </div>
//   </div>
//   <img src={img3} alt="" className="object-cover w-full" />
// </div>;

/* <div className="font-Montserrat 2xl:text-[50px] text-[50px] 2xl:p-8 py-2 px-8  mt-8 font-semibold leading-tight ">
            Build Lasting <br />
            Partnerships
          </div>
          <div className="font-Montserrat text-[19px] 2xl:text-[25px] p-8 leading-normal">
            Deep Connect offers and exclusive platform where investors have the
            opportunity to select and engage with startups that align with their
            interests and goals. Co-hosted with KIVC (Korea Venture Investment-
            Corporation), this collaborative event creates a dynamic environment
            for fostering deep connections between startups and investors
          </div> */
