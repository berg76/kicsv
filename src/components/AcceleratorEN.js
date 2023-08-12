import React from "react";

import img_bg from "../imgs/acc_bg_text.svg";
// import img_bg2 from "../imgs/acc_bg2.png";
// import img_img from "../imgs/acc_img.png";
// import img_title from "../imgs/acc_title.svg";

import img1 from "../imgs/acc_img1.png";
import img2 from "../imgs/acc_img2.png";

import emf from "../imgs/acc_emf.svg";
import emfInfo from "../imgs/acc_emf_info.svg";

import past from "../imgs/acc_attendees.svg";

import logo1 from "../imgs/acc_participant1.png";
import logo2 from "../imgs/acc_participant2.png";
import logo3 from "../imgs/acc_participant3.png";
import logo4 from "../imgs/acc_participant4.png";
import logo5 from "../imgs/acc_participant5.png";
import logo6 from "../imgs/acc_participant6.png";
import logo7 from "../imgs/acc_participant7.png";
import logo8 from "../imgs/acc_participant8.png";
import logo9 from "../imgs/acc_participant9.png";
import logo10 from "../imgs/acc_participant10.png";
import logo11 from "../imgs/acc_participant11.png";

import pmf from "../imgs/acc_pmf.svg";

import gmf from "../imgs/acc_bg_last.svg";

function AcceleratorEN() {
  return (
    <>
      <div className="relative w-full mt-[68px]">
        <div className="relative mt-[68px] w-full pb-[80px] sm:pb-[200px] bg-acc1 bg-[length:100%_100%] z-[20]">
          <div className="relative w-full mx-auto xl:container ">
            <img
              src={img_bg}
              alt=""
              className="relative top-[25px] sm:top-[50px] mx-auto w-[90%]"
            />
            {/* <img
              src={img_img}
              alt=""
              className="hidden absolute left-[50%] top-[120%] w-[35%] z-[15]"
            /> */}
          </div>
          {/* <div className="w-full relative mx-auto xl:container h-[1000px] z-[15]"> */}
          {/* <img src={img_bg2} alt="" /> */}
          {/* </div> */}
        </div>

        {/* <div className="w-full absolute top-[1100px] px-5 hidden"> */}
        <div className="relative w-full pt-[350px] sm:pt-[400px] -mt-[350px] pb-[170px] sm:pb-[250px] bg-acc2 bg-[length:100%_100%] z-[5]">
          <div className="w-[90%] mx-auto xl:container grid grid-cols-[62%_38%]">
            <div className="grid float-left grid-cols-6">
              <div className="col-span-2 bg-[#75E3BC] rounded-3xl m-2 relative">
                <img
                  src={emf}
                  alt=""
                  className="absolute bottom-5 left-5 w-[60%]"
                />
              </div>
              <div className="col-span-4 p-2 text-center">
                <img src={img1} alt="" className="inline-block w-full" />
              </div>
              <div className="col-span-6">
                <img src={img2} alt="" className="object-cover w-full p-2" />
              </div>
              <div className="col-span-6">
                <img src={past} alt="" className="w-[30%] pl-5 pt-5" />
                <div className="grid w-full grid-cols-4 pt-8 gap-x-4 gap-y-4 lg:gap-y-16">
                  <img src={logo1} alt="" className="w-[80%] m-auto" />
                  <img src={logo2} alt="" className="w-[80%] m-auto" />
                  <img src={logo3} alt="" className="w-[80%] m-auto" />
                  <img src={logo4} alt="" className="w-[80%] m-auto" />
                  <img src={logo5} alt="" className="w-[80%] m-auto" />
                  <img src={logo6} alt="" className="w-[80%] m-auto" />
                  <img src={logo7} alt="" className="w-[80%] m-auto" />
                  <img src={logo8} alt="" className="w-[80%] m-auto" />
                  <img src={logo9} alt="" className="w-[80%] m-auto" />
                  <img src={logo10} alt="" className="w-[80%] m-auto" />
                  <img src={logo11} alt="" className="w-[80%] m-auto" />
                </div>
              </div>
            </div>
            <div className="h-[200px] inline-block float-right">
              <img src={emfInfo} alt="" className="w-full py-4 pl-4" />
            </div>
          </div>
        </div>
        <div className="relative w-full pt-[250px] -mt-[300px] sm:pt-[300px] sm:-mt-[350px] pb-[170px] sm:pb-[250px] z-[3]">
          <div className="w-[90%] px-6 mx-auto xl:container">
            <img src={pmf} alt="w-full" />
          </div>
        </div>
        <div className="relative w-full pt-[100px] sm:pt-[200px] -mt-[150px] sm:-mt-[225px] pb-[70px] sm:pb-[150px] bg-acc3 bg-[length:100%_100%] z-[10]">
          <div className="w-[90%] px-6 mx-auto xl:container">
            <img src={gmf} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AcceleratorEN;
