import React from "react";
import icon1 from "../imgs/s_desk.png";
import icon2 from "../imgs/s_company.png";
import icon3 from "../imgs/s_location-pin.png";
import icon4 from "../imgs/s_work-process.png";
import bullet1 from "../imgs/bullet1.png";

function Service() {
  return (
    <div className="w-full bg-white font-Noto">
      <div className="mt-[88px] container mx-auto grid grid-cols-12">
        <div className="col-span-12 pt-20 pb-12 text-4xl text-center">
          실리콘밸리 입성 지원
        </div>
        <div className="w-3/4 col-span-12 mx-auto text-xl leading-loose text-center break-keep">
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

      <div className="container mx-auto pb-[100px]">
        <div className="w-[60%] mx-auto text-center relative">
          <input type="checkbox" id="drop1" className="hidden peer" />
          <label
            className="flex justify-between p-4 text-2xl border-b-2 border-gray-400 cursor-pointer"
            for="drop1"
          >
            <div> KIC 실리콘밸리 카본 멤버십 </div>
          </label>
          <div className="absolute text-2xl peer-checked:rotate-90 right-4 top-4">
            -
          </div>
          <ul className="hidden peer-checked:block">
            <li className="grid grid-cols-12 py-2 place-items-center">
              <div className="col-span-3 text-lg">개요</div>
              <div className="col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal break-keep">
                    글로벌 선도 기업으로 성장할 잠재력을 보유한 국내 우수 강소
                    기업을 대상으로 미국 사업 진출, 미국 현지 사업 역량 강화 및
                    미국 현지 네트워크 구축을 지원하는 멤버십 프로그램
                  </div>
                </div>
              </div>
            </li>
            <li className="grid grid-cols-12 py-2 place-items-center">
              <div className="col-span-3 text-lg ">지원내용</div>

              <div className="w-full col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    코워킹스페이스 무료 제공 미국 법인 설립 시 센터 주소 무료
                    사용 제공
                  </div>
                </div>

                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    센터로 도착하는 우편물 관리 무료 제공용 네트워킹 마케팅
                  </div>
                </div>

                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal break-keep ">
                    지원 무료 제공 미국 법인 설립비용 지원(기업당 최대 $1,000
                    (USD) 한도 지원 (선착순, 해당 예산 소진까지) <br />※ 카본
                    멤버십 중 우수 기업은 다이아몬드 프로그램을 통해 추가로
                    지원을 합니다
                  </div>
                </div>
              </div>
            </li>

            <li className="grid grid-cols-12 py-2 place-items-center">
              <div className="col-span-3 text-lg ">지원대상</div>

              <div className="w-full col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    한국 법인이 있는 과학 기술 및 ICT 기술 기반 기업
                  </div>
                </div>

                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal break-keep">
                    공공 기관 결격 사유 없는 기업 <br />※ 결격 사유: 최근 3년
                    이내 대표자의 정부지원 과제 참여 제한 이력
                  </div>
                </div>
              </div>
            </li>
            <li className="grid grid-cols-12 py-2 place-items-center">
              <div className="col-span-3 text-lg ">지원 및 선발</div>

              <div className="w-full col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal break-keep">
                    상시 지원으로 최초 등록 시 3년 혜택 및 연장(3년) 2회
                    가능(1차/2차 심사)
                    <br />※ 1차 심사(서면) : 등록 신청서, 프로그램 동의서, 영문
                    피치덱, 기업 로고, 대표자 신분증 사본, 한국 법인 등록증 사본
                    <br />※ 2차 심사(인터뷰) : 온라인 또는 오프라인으로 진행
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-[60%] mx-auto text-center relative">
          <input type="checkbox" id="drop2" className="hidden peer" />
          <label
            className="flex justify-between p-4 text-2xl border-b-2 border-gray-400 cursor-pointer"
            for="drop2"
          >
            <div> KIC 실리콘밸리 다이아몬드 멤버십 </div>
          </label>
          <div className="absolute text-2xl peer-checked:rotate-90 right-4 top-4">
            -
          </div>
          <ul className="hidden peer-checked:block">
            <li className="grid grid-cols-12 py-2 place-items-center">
              <div className="col-span-3 text-lg">개요</div>
              <div className="col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal break-keep">
                    미국 진출 추진 중인 국내 강소 ICT 기업의 글로벌 법인 설립,
                    경영, 투자유치, 특허 출원 등록, 관리 관련 최신 법률정보 제공
                    및 기업 PR과 홍보 지원으로 기업의 현지화 및 글로벌 진출
                    지원을 통한 미국 중심 글로벌 고객 및 세일즈 확장 지원
                  </div>
                </div>
              </div>
            </li>
            <li className="grid grid-cols-12 py-2 place-items-center">
              <div className="col-span-3 text-lg">주요내용</div>
              <div className="col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    미국 세일즈 확장에 필요한 네트워킹(연 2회) 지원
                  </div>
                </div>
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    기업의 현지화를 위한 글로벌 투자유치, 특허 출원 등록 및 관리
                    관련 최신 법률정보 지원
                  </div>
                </div>
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    미국 시장 확장을 위한 기업별 필요한 멘토링 지원
                  </div>
                </div>
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    미국 시장 확장을 위한 마케팅 지원
                  </div>
                </div>
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal break-keep">
                    미국 시장 확장을 위해 필요한 현지 직원을 대체할 수 있는 ICT
                    실무 능력을 겸비한 인턴 지원(최장 6개월/기업과 센터 분담
                    지원) 현지
                  </div>
                </div>
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    기업 단독 코워킹스페이스 제공(3개월 이상 출근 시)
                  </div>
                </div>
              </div>
            </li>
            <li className="grid grid-cols-12 py-2 place-items-center">
              <div className="col-span-3 text-lg">지원대상</div>
              <div className="w-full col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    현 년도 이전에 KIC 실리콘밸리 Carbon Membership 등록한 기업
                  </div>
                </div>
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    작년도 성과 보고 제출한 기업
                  </div>
                </div>
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    현 해외 매출 및 투자 가능성이 있는 기업
                  </div>
                </div>
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    미국 법인이 있거나 설립 의지가 있는 기업
                  </div>
                </div>
              </div>
            </li>
            <li className="grid grid-cols-12 py-2 place-items-center">
              <div className="col-span-3 text-lg">지원 및 선발</div>
              <div className="w-full col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    현 년도 3월부터 ~ 10월말까지 지원
                  </div>
                </div>
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    신청 서류 및 성과 보고서 제출 내용 적합성 심사를 통한 서류
                    선발
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-[60%] mx-auto text-center relative">
          <input
            type="checkbox"
            id="drop3"
            className="hidden peer group/item"
          />
          <label
            className="flex justify-between p-4 text-2xl border-b-2 border-gray-400 cursor-pointer"
            for="drop3"
          >
            <div>KIC 실리콘밸리 얼럼나이 멤버십</div>
          </label>
          <div className="absolute text-2xl peer-checked:rotate-90 right-4 top-4">
            -
          </div>

          <ul className="hidden peer-checked:block">
            <li className="grid grid-cols-12 py-2 place-items-center">
              <div className="col-span-3 text-lg">개요</div>
              <div className="col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal break-keep">
                    글로벌 선도 기업으로 성장할 잠재력을 보유한 ICT 기술 기반의
                    국내 강소 기업을 대상으로 미국 사업 진출 및 세일즈 확장 지원
                    서비스
                  </div>
                </div>
              </div>
            </li>
            <li className="grid grid-cols-12 py-2 place-items-center">
              <div className="col-span-3 text-lg">주요내용</div>
              <div className="w-full col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    공용 코워킹스페이스 무료 제공
                  </div>
                </div>
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    미국 법인 설립 시 센터 주소 무료 사용 제공
                  </div>
                </div>
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    센터로 도착하는 우편물 관리 무료 제공
                  </div>
                </div>
              </div>
            </li>
            <li className="grid grid-cols-12 py-2 place-items-center">
              <div className="col-span-3 text-lg">지원대상</div>
              <div className="w-full col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    6년간 KIC 실리콘밸리 카본 멤버십을 유지한 기업
                  </div>
                </div>
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    6년간 KIC 실리콘밸리 카본 멤버십의 의무를 모두 이행한 기업
                  </div>
                </div>
              </div>
            </li>
            <li className="grid grid-cols-12 py-2 place-items-center">
              <div className="col-span-3 text-lg">지원 및 등록</div>
              <div className="w-full col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    6년간 KIC 실리콘밸리 카본 멤버십의 의무 이행 상황 확인
                  </div>
                </div>
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    KIC 실리콘밸리 카본 멤버십 6년 유지한 기업의 Alumni 등록
                    희망 확인
                  </div>
                </div>
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    신청서 및 동의서 제출
                  </div>
                </div>
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    5년간 멤버십 유지
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Service;
