import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../imgs/kicsv_logo_bk.png";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 z-20 w-full bg-white">
      <nav className="container flex items-center px-4 mx-auto place-content-between h-[68px]">
        <Link href="/">
          <img src={logo} className="w-[125px] ml-5" alt="" />
        </Link>

        <ul className="hidden lg:visible list-none lg:flex items-center text-center w-[600px] place-content-between">
          <li
            className="p-2 rounded-lg hover:bg-gray-300"
            onClick={() => {
              navigate("/");
            }}
          >
            HOME
          </li>
          <li
            className="p-2 rounded-lg hover:bg-gray-300"
            onClick={() => {
              navigate("/intro/");
            }}
          >
            KICSV소개
          </li>
          <li
            className="p-2 rounded-lg hover:bg-gray-300"
            onClick={() => {
              navigate("/service/");
            }}
          >
            서비스
          </li>
          <li className="p-2 rounded-lg hover:bg-gray-300">프로그램</li>
          <li className="p-2 rounded-lg hover:bg-gray-300">파트너</li>
          <li className="p-2 rounded-lg hover:bg-gray-300">출장안내</li>
        </ul>
        <div className="flex items-center justify-end w-[160px]">
          {/* <button className="inline-block text-[#f8fafc] bg-[#1e293b] rounded-lg p-2 text-bold">
            KR
          </button>
          <button
            className="inline-block text-[#2563eb] rounded-lg p-2 text-bold"
            onClick={() => {
              navigate("/en/");
            }}
          >
            EN
          </button> */}

          <div className="inline-block px-3 py-2 mr-2 text-sm font-bold text-white transition duration-200 bg-blue-500 shrink-0 grow-0 rounded-xl">
            KR
          </div>
          <button
            className="px-3 py-2 text-sm font-bold text-gray-900 transition duration-200 bg-gray-400 hover:bg-gray-200 rounded-xl"
            onClick={() => {
              navigate("/en/");
            }}
          >
            EN
          </button>
        </div>
      </nav>
    </div>
  );
}
