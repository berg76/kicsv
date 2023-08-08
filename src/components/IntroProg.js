import React from "react";
import icon1 from "../imgs/Intro_crown.png";
import icon2 from "../imgs/Intro_organization.png";
import icon3 from "../imgs/manual.png";
import icon4 from "../imgs/stock-market.png";

import ceo1 from "../imgs/ceo_makinarocks.png";
import ceo2 from "../imgs/ceo_bearrobotics.jpg";
import ceo3 from "../imgs/ceo_startrio.jpg";

export default function IntroPro() {
  return (
    <>
      <div className="w-full pt-24 pb-12 lg:container lg:mx-auto">
        <div className="text-[1.875rem] text-black md:text-[3rem] text-center ">
          KIC 실리콘밸리 프로그램
        </div>
        <span className="block w-[75%] mx-auto py-12 text-xl text-center break-keep">
          KIC 실리콘밸리는 미국에 최초로 진출하고자 하는 기업들과 미국에서
          본격적으로 시장을 공략하고자 하는 기업에게 실질적인 도움이 되는 다양한
          프로그램과 멤버십 제도를 제공하고 있습니다.
        </span>
        {/* 카본 */}
        <div className="w-[80%] mx-auto">
          <div className="rounded bg-[#f8f9fa] grid place-items-center grid-cols-12 p-8">
            <div className="col-span-12 p-3 md:col-span-4">
              <img width={176} height={176} alt="" src={icon1} />
            </div>
            <div className="col-span-12 p-3 md:col-span-7">
              <div className="inline-block text-3xl">
                카본 멤버십
                <br className="inline sm:hidden" />
                (Carbon Membership)
              </div>
              <p className="inline-block pt-3 break-keep">
                글로벌 선도 기업으로 성장할 잠재력을 보유한 국내 우수 강소
                기업을 대상으로 미국 사업 진출, 미국 현지 사업 역량 강화 및 미국
                현지 네트워크 구축을 지원하는 멤버십 프로그램입니다.
              </p>
            </div>
          </div>
          <div className="bg-gray-300 w-[100%] h-[2px]"></div>
          {/* EMP */}
          <div className="rounded bg-[#f8f9fa] grid place-items-center grid-cols-12 p-8">
            <div className="md:col-span-1"></div>
            <div className="order-3 col-span-12 p-3 md:order-2 md:col-span-7">
              <div className="inline-block text-3xl">
                실리콘밸리형 기업가 프로그램
                <br className="inline xl:hidden" />
                (Entrepreneur Market-Fit Program)
              </div>
              <p className="inline-block pt-3 break-keep">
                회사의 단계와 상관없이, 미국에서 법인을 설립/운영하고 투자 및
                성장을 위한 실리콘밸리형 선진 기업 경영의 기본 틀과 전략 그리고
                인사이트를 분야별 최고 전문들로 구성하여 만든 프로그램입니다.
              </p>
            </div>
            <div className="order-2 col-span-12 p-3 md:order-3 md:col-span-4">
              <img width={176} height={176} alt="" src={icon2} />
            </div>
          </div>
          <div className="bg-gray-300 w-[100%] h-[2px]"></div>
          {/* PMP */}
          <div className="rounded bg-[#f8f9fa] grid place-items-center grid-cols-12 p-8">
            <div className="col-span-12 p-3 md:col-span-4">
              <img width={176} height={176} alt="" src={icon3} />
            </div>
            <div className="col-span-12 p-3 md:col-span-8">
              <div className="inline-block text-3xl">
                실리콘밸리형 제품/서비스 적합성 검증 프로그램
                <br className="inline lg:inline 2xl:hidden" />
                (Product Market-Fit Program)
              </div>
              <p className="inline-block pt-3 break-keep">
                자사의 제품과 서비스의 미국 내 잠재 고객을 찾을 수 있도록 시장
                리서치부터 제품의 현지화를 위해 다양한 형태의 방법과 툴, 사례,
                실질적인 네트워킹을 지원하여 POC까지 도달하는 프로그램입니다.
                AI, 디지털 헬스, 메타버스, 기업용 솔루션, 모빌리티/로보틱스등
                버터컬별로 운영합니다.
              </p>
            </div>
          </div>
          <div className="bg-gray-300 w-[100%] h-[2px]"></div>
          {/* GMP */}
          <div className="rounded bg-[#f8f9fa] grid place-items-center grid-cols-12 p-8">
            <div className="md:col-span-1"></div>
            <div className="order-3 col-span-12 p-3 md:order-2 md:col-span-7">
              <div className="inline-block text-3xl">
                실리콘밸리형 고속 성장 프로그램
                <br className="inline xl:hidden" />
                (Goto Market Program)
              </div>
              <p className="inline-block pt-3 break-keep">
                미국 시장에서 고객층을 찾은 후에 시장 검증을 한 기업들은 다음
                단계로 전속력으로 핵심 고객군을 공략하여 고속 성장을 해야
                합니다. 이때 팀, 서비스 그리고 세일즈 등 모든 분야가 성장을
                동시에 해야 하기 때문에 적절한 성장에 필요한 팀 전략, 투자 전략
                등을 제공하는 프로그램입니다.
              </p>
            </div>
            <div className="order-2 col-span-12 p-3 md:order-3 md:col-span-4">
              <img width={176} height={176} alt="" src={icon4} />
            </div>
          </div>
        </div>
      </div>
      {/* 사례 */}
      <div className=" mt-12 pt-12 pb-12 bg-[#f8f9fa] w-full">
        <div className="text-[1.875rem] text-black md:text-[3rem] text-center pb-8">
          KIC 실리콘밸리의 대표적 기업
        </div>
        <div className="grid grid-cols-3 w-[80%] mx-auto p-8 gap-8">
          <div className="p-8 text-center bg-white rounded-3xl drop-shadow-lg">
            <div className="text-2xl">MAKINAROCKS</div>
            <div className="text-lg">이재혁 대표</div>
            <img
              src={ceo1}
              alt=""
              className="w-[130px] h-[130px] object-cover rounded-3xl mt-6 inline-block"
            />
            <div className="h-[2px] bg-gray-300 w-[100%] my-8"></div>
            <div className="text-base leading-loose">
              "미국 시장에서 성장하는데 필요한 정보와 제반 사항들이 홍수와 같이
              많은데, 실질적으로 필요한 사람과 정보를 소개해 주어서 항상 자문을
              많이 구하고 있습니다"
            </div>
          </div>
          <div className="p-8 text-center bg-white rounded-3xl drop-shadow-lg">
            <div className="text-2xl">BEARROBOTICS</div>
            <div className="text-lg">하정우 대표</div>
            <img
              src={ceo2}
              alt=""
              className="w-[130px] h-[130px] object-cover rounded-3xl mt-6 inline-block"
            />
            <div className="h-[2px] bg-gray-300 w-[100%] my-8"></div>
            <div className="text-base leading-loose">
              "KIC 실리콘밸리에서 사업 초기에 많은 회의를 하면서 밑그림을
              그렸습니다. 초기에 많은 지원을 받았기에 미국 진출하는 후배
              스타트업 여러분께도 추천해 드립니다"
            </div>
          </div>
          <div className="p-8 text-center bg-white rounded-3xl drop-shadow-lg">
            <div className="text-2xl">STRATIO</div>
            <div className="text-lg">이제형 대표</div>
            <img
              src={ceo3}
              alt=""
              className="w-[130px] h-[130px] object-cover rounded-3xl mt-6 inline-block"
            />
            <div className="h-[2px] bg-gray-300 w-[100%] my-8"></div>
            <div className="text-base leading-loose">
              "스타트업의 전쟁터 실리콘밸리, KIC는 고군분투하는 한국 및 한국계
              기업들의 어려움을 창업가 입장에서 함께 고민하고 해결책을 제시해
              주는 대한민국의 비밀 무기 입니다."
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
