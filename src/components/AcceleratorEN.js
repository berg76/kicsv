import React from "react";

import img_bg from "../imgs/acc_bg.png";
import img_img from "../imgs/acc_img.png";
import img_title from "../imgs/acc_title.svg";

import img1 from "../imgs/acc_img1.png";
import img2 from "../imgs/acc_img2.png";

import emf from "../imgs/acc_emf.svg";
import emfInfo from "../imgs/acc_emf_info.svg";

import past from "../imgs/acc_attendees.svg";

function AcceleratorEN() {
  return (
    <div className="relative mt-[68px] w-full">
      <div className="w-full relative mx-auto  xl:container h-[1000px] z-[15]">
        <img
          src={img_title}
          alt=""
          className="relative top-24 w-[800px] z-[15] ml-16 "
        />
        <img
          src={img_img}
          alt=""
          className="absolute left-[50%] top-[325px] w-[550px] z-[15]"
        />

        <img
          src={img_bg}
          alt=""
          className="absolute object-fill top-0 w-full h-[1000px] z-[5]"
        />

        {/*     */}
        <div className="w-full relative top-[700px] px-5">
          <div className="w-[62%]  float-left grid grid-cols-6">
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
            </div>
          </div>
          <div className="w-[38%] h-[200px] inline-block float-right">
            <img src={emfInfo} alt="" className="w-full py-4 pl-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcceleratorEN;
