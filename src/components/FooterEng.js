import React, { useState } from "react";

import icon1 from "../imgs/icon_user.png";
import icon2 from "../imgs/icon_email.png";
import icon3 from "../imgs/icon_company.png";

import emailjs from "@emailjs/browser";

function FooterEng() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const contents = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_py4k1av",
        "template_adoutoi",
        contents,
        "ktAJwzbLF-tAkp_RQ"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Your request has been sent successfully.");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

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
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
            ></textarea>
            <button
              className="absolute bottom-3 right-3 bg-white px-2 py-1 mb-1 text-[#73B4AC] rounded-lg"
              onClick={sendEmail}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterEng;
