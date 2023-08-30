import React, { useState } from "react";

import logo from "../imgs/kicsv_logo.png";
import envelope from "../imgs/envelope-o.svg";
import phone from "../imgs/phone.svg";
import location from "../imgs/map-marker.svg";
import nipa from "../imgs/nipa_logo.png";
import mist from "../imgs/msict_logo.png";
import { Link } from "react-router-dom";

import emailjs from "@emailjs/browser";

export default function Footer() {
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
          alert("문의가 전달되었습니다.");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <footer className="bg-[#e5e8eb] font-Noto">
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12 py-8 mx-auto">
            <img src={logo} alt="KICSV LOGO" className="w-[240px]" />
          </div>

          <div className="col-span-12 md:col-span-6 bg-[#ffffff] rounded-lg mx-5 md:mr-3">
            <input
              className="rounded-lg w-full p-[11px] outline-none"
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="성함을 입력해주세요"
            />
          </div>
          <div className="col-span-12 md:col-span-6 bg-[#ffffff] rounded-lg mx-5 mt-5 md:ml-3 md:mt-0">
            <input
              className="w-full rounded-lg p-[11px] outline-none"
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="메일 주소를 입력해주세요"
            />
          </div>

          <div className="col-span-12 bg-[#ffffff] rounded-lg mx-5 mt-5">
            <textarea
              className="w-full p-[11px] rounded-lg outline-none h-[6.25rem] resize-none"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="문의사항을 입력해주세요"
            ></textarea>
          </div>
          <div className="col-span-12 py-8 mx-auto ">
            <button
              className="py-2 font-bold text-white bg-blue-700 rounded-full px-7 hover:bg-red-700"
              onClick={sendEmail}
            >
              전&nbsp;&nbsp;&nbsp;&nbsp;송
            </button>
          </div>
          <div className="w-full col-span-12 text-center">
            <div className="inline-block w-full text-center md:mr-3 md:inline">
              <img src={envelope} className="inline-block mx-2" alt="" />
              info@kicsv.org
            </div>
            <div className="inline-block w-full text-center md:mr-3 md:inline">
              <img src={phone} className="inline-block mx-2" alt="" />
              (408) 432-5085 3003
            </div>
            <div className="inline-block w-full text-center md:mr-3 md:inline">
              <img src={location} className="inline-block mx-2" alt="" />N 1st
              St. San Jose, CA 95134
            </div>
          </div>
          <div className="inline-block w-full col-span-12 my-5 text-center ">
            <Link href="https://www.nipa.kr/">
              <img
                src={nipa}
                alt=""
                className="inline-block w-[120px] mx-1 md:mx-5"
              />
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#0d6efd"
              className="inline-block mx-1 mt-[4px] md:mx-3"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#0d6efd"
              className="inline-block mx-1 mt-[4px] md:mx-3"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
            <Link href="https://www.msit.go.kr/index.do">
              <img
                src={mist}
                alt=""
                className="inline-block w-[120px] mx-1 md:mx-5"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
