import React from "react";
import icon1 from "../imgs/Intro_crown.png";
import icon2 from "../imgs/Intro_organization.png";
import icon3 from "../imgs/manual.png";
import icon4 from "../imgs/stock-market.png";

export default function IntroPro() {
  return (
    <div className="container pt-24 pb-12 mx-auto">
      <div className="text-[1.875rem] text-black md:text-[3rem] text-center">
        KIC 실리콘밸리 프로그램
      </div>
      <span className="block py-12 text-xl text-center break-keep">
        KIC 실리콘밸리는 미국에 최초로 진출하고자 하는 기업들과 미국에서
        본격적으로 시장을 공략하고자 하는 기업에게 실질적인 도움이 되는 다양한
        프로그램과 멤버십 제도를 제공하고 있습니다.
      </span>
      {/* 카본 */}
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
            글로벌 선도 기업으로 성장할 잠재력을 보유한 국내 우수 강소 기업을
            대상으로 미국 사업 진출, 미국 현지 사업 역량 강화 및 미국 현지
            네트워크 구축을 지원하는 멤버십 프로그램입니다.
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
            회사의 단계와 상관없이, 미국에서 법인을 설립/운영하고 투자 및 성장을
            위한 실리콘밸리형 선진 기업 경영의 기본 틀과 전략 그리고 인사이트를
            분야별 최고 전문들로 구성하여 만든 프로그램입니다.
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
        <div className="col-span-12 p-3 md:col-span-7">
          <div className="inline-block text-3xl">
            실리콘밸리형 제품/서비스 적합성 검증 프로그램
            <br className="inline xl:hidden" />
            (Product Market-Fit Program)
          </div>
          <p className="inline-block pt-3 break-keep">
            자사의 제품과 서비스의 미국 내 잠재 고객을 찾을 수 있도록 시장
            리서치부터 제품의 현지화를 위해 다양한 형태의 방법과 툴, 사례,
            실질적인 네트워킹을 지원하여 POC까지 도달하는 프로그램입니다. AI,
            디지털 헬스, 메타버스, 기업용 솔루션, 모빌리티/로보틱스등 버터컬별로
            운영합니다.
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
            미국 시장에서 고객층을 찾은 후에 시장 검증을 한 기업들은 다음 단계로
            전속력으로 핵심 고객군을 공략하여 고속 성장을 해야 합니다. 이때 팀,
            서비스 그리고 세일즈 등 모든 분야가 성장을 동시에 해야 하기 때문에
            적절한 성장에 필요한 팀 전략, 투자 전략 등을 제공하는
            프로그램입니다.
          </p>
        </div>
        <div className="order-2 col-span-12 p-3 md:order-3 md:col-span-4">
          <img width={176} height={176} alt="" src={icon4} />
        </div>
      </div>
    </div>
  );
}
