import React from "react";
import icon1 from "../imgs/s_desk.png";
import icon2 from "../imgs/s_company.png";
import icon3 from "../imgs/s_location-pin.png";
import icon4 from "../imgs/s_work-process.png";

function Service() {
  return (
    <div className="w-full bg-white">
      <div className="mt-[88px] container mx-auto grid grid-cols-12">
        <div className="col-span-12 pt-20 pb-12 text-4xl text-center">
          실리콘밸리 입성 지원
        </div>
        <div className="w-3/4 col-span-12 mx-auto text-xl leading-loose text-center">
          글로벌 선도 기업으로 성장할 잠재력을 보유한 국내 우수 스타트업의 현지
          사업 역량 강화와 플랫폼 구축을 위해 KIC 실리콘밸리에서는 업무공간을
          포함해 다양한 혜택을 지원하고 있습니다. 미국 법인 설립 지원,
          실리콘밸리 정보 및 KIC 실리콘밸리 등록기업 네트워크, 우편물 수취,
          코워킹스페이스 활용 및 오픈 세미나 지원 중입니다.
        </div>
        <div className="grid grid-cols-12 col-span-12 my-12">
          <div className="col-span-3 p-3 text-center">
            <img src={icon1} className="w-[75px] inline-block" alt="" />
            <div className="m-5 text-xl font-bold">코워킹스페이스 제공</div>
          </div>
          <div className="col-span-3 text-center">
            <img src={icon2} className="w-[75px] inline-block" alt="" />
            <div className="m-5 text-xl font-bold">네트워킹 지원</div>
          </div>
          <div className="col-span-3 text-center ">
            <img src={icon3} className="w-[75px] inline-block" alt="" />
            <div className="m-5 text-xl font-bold">주소지 등록</div>
          </div>
          <div className="col-span-3 text-center">
            <img src={icon4} className="w-[75px] inline-block" alt="" />
            <div className="m-5 text-xl font-bold">세미나/특강 제공</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="w-3/4 mx-auto text-center">
          <input type="checkbox" id="drop1" className="hidden peer" />
          <label
            className="flex justify-between text-2xl cursor-pointer"
            for="drop1"
          >
            <div> KIC 실리콘밸리 카본 멤버십 </div>
            <div> - </div>
          </label>
          <ul className="hidden peer-checked:block">
            <li className="grid grid-cols-12 py-4 place-items-center">
              <div className="col-span-3 text-lg">개요</div>
              <div className="col-span-9 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                글로벌 선도 기업으로 성장할 잠재력을 보유한 국내 우수 강소
                기업을 대상으로 미국 사업 진출, 미국 현지 사업 역량 강화 및 미국
                현지 네트워크 구축을 지원하는 멤버십 프로그램
              </div>
            </li>
            <li className="grid grid-cols-12 py-2 place-items-center">
              <div className="col-span-3 text-lg ">지원내용</div>
              <div className="w-full col-span-9 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                코워킹스페이스 무료 제공 미국 법인 설립 시 센터 주소 무료 사용
                <br />
                제공 센터로 도착하는 우편물 관리 무료 제공용 네트워킹 마케팅
                <br />
                지원 무료 제공 미국 법인 설립비용 지원(기업당 최대 $1,000 (USD)
                한도 지원 (선착순, 해당 예산 소진까지) <br />
                ※카본 멤버십 중 우수 기업은 다이아몬드 프로그램을 통해 추가로
                지원을 합니다
              </div>
            </li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Service;
