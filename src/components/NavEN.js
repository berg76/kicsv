import React, { useState } from "react";
import "./NavEN.css";
import logo from "../imgs/kicsv_logo.png";
import arrow from "../imgs/icon-up-arrow.png";
import btn_open from "../imgs/menu_open.svg";
import btn_close from "../imgs/menu_close.svg";
import { useNavigate } from "react-router-dom";

function NavEN() {
  const [menu_toggle, setMenuToggle] = useState(true);
  const [img_url, setImgUrl] = useState(btn_open);
  const [menu_display, setMenuDisplay] = useState("none");
  const navigate = useNavigate();

  function toggle() {
    if (menu_toggle === true) {
      setImgUrl(btn_close);
      setMenuToggle(false);
      setMenuDisplay("block");
    } else {
      setImgUrl(btn_open);
      setMenuToggle(true);
      setMenuDisplay("none");
    }
  }

  return (
    <nav className="fixed top-0 w-full px-4 bg-[#020126] font-IstokWeb z-50 border-soild border-b-2 h-[68px]">
      <div className="flex items-center w-full mx-auto xl:container">
        <div className="absolute top-[16px] inline-block md:relative left-5 md:top-0">
          <img
            src={logo}
            alt=""
            className="w-[125px] cursor-pointer"
            onClick={() => {
              navigate("/en/");
            }}
          />
        </div>
        <div className="md:hidden cursor-pointer top-[16px] px-[20px] absolute  right-0 inline-block text-white w-[200px] text-right dropdown">
          <div
            className="w-[30px] h-[30px] inline-block"
            style={{
              background: `no-repeat url(${img_url})`,
            }}
            onClick={toggle}
          ></div>
          <ul
            className="absolute right-0 z-20 text-left top-[52px] dropdown-content2 w-[140px]"
            style={{
              display: `${menu_display}`,
            }}
          >
            <div className="h-[20px]"></div>
            <li>ABOUT</li>
            <li>K-DAY</li>
            <li>INVESTOR</li>
            <li>OIC</li>
            <li style={{ backgroundColor: "#73B4AC" }}>GET IN TOUCH</li>
          </ul>
        </div>
        {/* <div className="hidden relative lg:inline-block lg:ml-[30px] text-white w-[200px] text-left">
          <input type="checkbox" id="checkbox-toggle" />
          <label for="checkbox-toggle" className="text-left">
            PARTNERSHIP &nbsp;
            <div className="absolute inline-block bg-red-700">
              <img src={arrow} alt="" width="14px" height="14px" />
            </div>
          </label>
          <ul>
            <li>ACCELERATRATOR</li>
            <li>INVESTOR</li>
            <li>OIC</li>
          </ul>
        </div> */}
        {/*  */}
        <div className="hidden cursor-pointer py-[22px] px-[20px] relative md:inline-block md:ml-[30px] text-white w-[200px] text-left dropdown">
          <button className="text-left">
            PARTNERSHIP &nbsp;
            <div className="relative inline-block">
              <img src={arrow} alt="" width="14px" height="14px" />
            </div>
          </button>
          <ul className="hidden absolute z-50 text-left left-[5px] top-[52px] dropdown-content">
            <div className="h-[20px]"></div>
            <li
              onClick={() => {
                navigate("/en/accelerator");
              }}
            >
              ACCELERATOR
            </li>
            <li
              onClick={() => {
                navigate("/en/investor");
              }}
            >
              INVESTOR
            </li>
            <li
              onClick={() => {
                navigate("/en/oic");
              }}
            >
              OIC
            </li>
          </ul>
        </div>
        <div className="hidden mx-auto text-center md:inline-block grow">
          <div
            className="inline-block text-white w-[100px] cursor-pointer p-3 text-center"
            onClick={() => {
              navigate("/en/about");
            }}
          >
            ABOUT
          </div>
          <div
            className="inline-block text-white w-[100px] cursor-pointer p-3 text-center"
            onClick={() => {
              navigate("/en/kday");
            }}
          >
            K-DAY
          </div>
        </div>
        <div className="hidden md:inline-block md:ml-auto md:mr-3">
          <button
            className="px-3 py-2 mr-2 text-sm font-bold text-gray-900 transition duration-200 bg-gray-400 shrink-0 grow-0 hover:bg-gray-50 rounded-xl"
            onClick={() => {
              navigate("/main");
            }}
          >
            KR
          </button>
          <div
            className="inline-block px-3 py-2 text-sm font-bold text-white transition duration-200 bg-blue-500 rounded-xl"
            href="#"
          >
            EN
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavEN;
