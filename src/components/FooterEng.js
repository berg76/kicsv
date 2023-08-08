import React from "react";

import icon1 from "../imgs/icon_user.png";
import icon2 from "../imgs/icon_email.png";
import icon3 from "../imgs/icon_company.png";

function FooterEng() {
  return (
    <div className="w-full bg-gradient-to-b from-[#B2E4DE] to-[#064D43b3] pb-16">
      <div className="relative w-[95%] top-8 mx-auto py-5  bg-white/30 border-2 border-gray-300 backdrop-blur border-opacity-40 rounded-xl drop-shadow-xl shadow-black">
        <div className="text-white text-[32px] text-center font-Montserrat font-bold">
          Contact Us
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="relative m-5">
            <input
              className="rounded-full w-full p-[11px] outline-none font-Montserrat text-light bg-transparent placeholder:text-white text-white border-2 border-white pl-14"
              type="text"
              name="name"
              placeholder="Username"
            />
            <img
              src={icon1}
              alt=""
              className="absolute top-2 left-3 w-[34px]"
            />
          </div>
          <div className="relative m-5">
            <input
              className="rounded-full w-full p-[11px] outline-none font-Montserrat text-light bg-transparent placeholder:text-white text-white border-2 border-white pl-14"
              type="text"
              name="company"
              placeholder="Institution | Company "
            />
            <img
              src={icon3}
              alt=""
              className="absolute top-2 left-3 w-[34px]"
            />
          </div>
          <div className="relative m-5">
            <input
              className="rounded-full w-full p-[11px] outline-none font-Montserrat text-light bg-transparent placeholder:text-white text-white border-2 border-white pl-14"
              type="text"
              name="email"
              placeholder="Email"
            />
            <img
              src={icon2}
              alt=""
              className="absolute top-2 left-3 w-[34px]"
            />
          </div>
          <div className="relative col-span-3 mx-5">
            <textarea
              className="w-full p-[11px] rounded-2xl outline-none h-[6.25rem] resize-none font-Montserrat bg-transparent placeholder:text-white text-white border-2 border-white"
              name="message"
              placeholder="Message"
            ></textarea>
            <button className="absolute bottom-3 right-3 bg-white px-2 py-1 mb-1 text-[#73B4AC] rounded-lg">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterEng;
