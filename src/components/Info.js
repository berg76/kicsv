import React from "react";
import bullet1 from "../imgs/bullet1.png";
import { Link } from "react-router-dom";

function Info() {
  const data = [
    "대화 상대방의 이름을 기억 못하는 것",
    "대화에 참여하지 않는 것",
    "지금 당장 필요하지 않기에 공을 들이지 않는 것",
    "소개해준 사람의 고마움을 표시하지 않는 것",
    "한국에서의 성공방식을 그대로 가져다가 사용하는 것",
    "자기소개나 사업 목적을 표현할 준비를 하지 않은 것",
    "처음부터 끝까지 목적 없이 사업 이야기만 나열하는 것 (내가 필요한 것만 던지는 습관)",
    "상대방이 무엇을 원하는지 파악하지 않는 습관",
    "사람이나 기업을 만나기 전에 조사하지 않는 것 (DYOR!)",
    "한 번의 만남으로 많은 진도를 빼려는 인식",
    "출장을 왔기에 수많은 미팅을 해치워야 한다는 생각 (만남의 질보다 양에 집착)",
    "기술이 좋기 때문에 실리콘밸리에서 통한다는 선입견",
    "기술이 좋기 때문에 실리콘밸리에서는 쉽게 투자받을 수 있을 것이라는 편견",
    "실리콘밸리는 무조건 회사 가치를 높게 평가하리라는 안이한 인식",
    "미국에서는 한국 사람은 언제나 쉽게 만나준다는 생각",
  ];
  return (
    <div className="w-full bg-white font-Noto">
      <div className="mt-[88px] container mx-auto grid grid-cols-12">
        <div className="col-span-12 pt-20 pb-12 text-4xl text-center">
          KIC 실리콘밸리 출장 참고사항
        </div>
        <div className="w-3/4 col-span-12 mx-auto text-xl leading-loose text-center break-keep">
          미국 현지 방문 시 유용하게 사용되는 정보 및 중요한 일정입니다. <br />
          (2023년 1월 기준)
        </div>
      </div>

      <div className="container mx-auto pb-[100px]">
        <div className="w-[60%] mx-auto text-center relative">
          <input
            type="radio"
            name="program"
            id="drop1"
            className="hidden peer"
          />
          <label
            className="flex justify-between p-4 text-2xl border-b-2 border-gray-400 cursor-pointer"
            htmlFor="drop1"
          >
            <div> 주요 공항</div>
          </label>
          <div className="absolute text-2xl peer-checked:rotate-90 right-4 top-4">
            -
          </div>
          <ul className="hidden font-light peer-checked:block">
            <li className="grid items-center grid-cols-12 py-2">
              <div className="col-span-3 text-lg">주요공항</div>
              <div className="col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal break-keep ">
                    <Link
                      to="https://www.flysfo.com/"
                      className="text-blue-500"
                      target="_blank"
                    >
                      SFO(샌프란시스코 국제 공항)
                    </Link>
                  </div>
                </div>
                <div className="relative py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal break-keep">
                    <Link
                      to="https://www.flysanjose.com/"
                      className="text-blue-500"
                      target="_blank"
                    >
                      SJC(미네타 산호세 국제공항)
                    </Link>
                  </div>
                </div>
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal break-keep">
                    <Link
                      to="https://www.oaklandairport.com/"
                      className="text-blue-500"
                      target="_blank"
                    >
                      OAK(오클랜드 국제 공항)
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-[60%] mx-auto text-center relative">
          <input
            type="radio"
            name="program"
            id="drop2"
            className="hidden peer"
          />
          <label
            className="flex justify-between p-4 text-2xl border-b-2 border-gray-400 cursor-pointer"
            htmlFor="drop2"
          >
            <div>숙박</div>
          </label>
          <div className="absolute text-2xl peer-checked:rotate-90 right-4 top-4">
            -
          </div>
          <ul className="hidden font-light peer-checked:block">
            <li className="grid items-center grid-cols-12 py-2">
              <div className="col-span-3 text-lg ">고급($250~)</div>

              <div className="w-full col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    Intercontinental, Westin
                  </div>
                </div>
              </div>
            </li>
            <li className="grid items-center grid-cols-12 py-2">
              <div className="col-span-3 text-lg ">중급($150~$250)</div>

              <div className="w-full col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    AC Hotel, Crown PlazaHotel, Marriott Hotel, Hyatt Centric,
                    Embassy Suites
                  </div>
                </div>
              </div>
            </li>
            <li className="grid items-center grid-cols-12 py-2">
              <div className="col-span-3 text-lg ">하급($150 이하)</div>
              <div className="w-full col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    Hilton Grand Inn, Aloft, Raddison, La Quinta, Ramada,
                    Holiday Inn, TownPlaces, Executive Inn
                  </div>
                </div>
              </div>
            </li>
            <li className="grid items-center grid-cols-12 py-2">
              <div className="col-span-3 text-lg ">기타 숙박</div>

              <div className="w-full col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    <Link
                      to="https://www.airbnb.co.kr/"
                      className="text-blue-500"
                      target="_blank"
                    >
                      에어비앤비
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-[60%] mx-auto text-center relative">
          <input
            type="radio"
            name="program"
            id="drop3"
            className="hidden peer"
          />
          <label
            className="flex justify-between p-4 text-2xl border-b-2 border-gray-400 cursor-pointer"
            htmlFor="drop3"
          >
            <div>이동수단</div>
          </label>
          <div className="absolute text-2xl peer-checked:rotate-90 right-4 top-4">
            -
          </div>
          <ul className="hidden font-light peer-checked:block">
            <li className="grid items-center grid-cols-12 py-2">
              <div className="col-span-3 text-lg ">공유차량</div>

              <div className="w-full col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    <Link
                      to="https://www.uber.com/"
                      target="_blank"
                      className="text-blue-500"
                    >
                      우버
                    </Link>
                    ,{" "}
                    <Link
                      to="https://www.lyft.com/"
                      target="_blank"
                      className="text-blue-500"
                    >
                      리프트
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="grid items-center grid-cols-12 py-2">
              <div className="col-span-3 text-lg ">대중교통</div>

              <div className="w-full col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal ">
                    <Link
                      to="https://www.caltrain.com/"
                      className="text-blue-500"
                    >
                      Caltrain
                    </Link>
                    ,{" "}
                    <Link
                      to="https://www.vta.org/"
                      target="_blank"
                      className="text-blue-500"
                    >
                      VTA
                    </Link>
                    ,{" "}
                    <Link
                      to="https://www.bart.gov/"
                      target="_blank"
                      className="text-blue-500"
                    >
                      BART
                    </Link>
                    , Bus, KickBoard, 모바일 앱(Clipper, Bart, Movit 등) 이용
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-[60%] mx-auto text-center relative">
          <input
            type="radio"
            name="program"
            id="drop4"
            className="hidden peer"
          />
          <label
            className="flex justify-between p-4 text-2xl border-b-2 border-gray-400 cursor-pointer"
            htmlFor="drop4"
          >
            <div>비즈니스 에티켓</div>
          </label>
          <div className="absolute text-2xl peer-checked:rotate-90 right-4 top-4">
            -
          </div>
          <ul className="hidden font-light peer-checked:block">
            <li className="grid items-center grid-cols-12 py-2">
              <div className="col-span-3 text-lg ">영어는 필수</div>

              <div className="w-full col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal break-keep">
                    영어는 사업에 있어서 필수 수단입니다. 비단 미국 시장이
                    아니더라도 영어는 사람과의 관계를 여는 수단이 됩니다. 영어를
                    ‘유창’하게 하는 것 혹은 발음이 중요하다기보다, 비즈니스
                    영어는 자신의 전문 영역이나 자기만의 스토리를 자신 있게
                    표현하는 태도가 중요합니다. 미국식 네트워킹에서 사용할 수
                    있는 게 짤막하되 인상적인 자기소개, 자신을 돋보이게 하는
                    자기만의 스토리텔링은 거울을 보고 준비하는 요령이
                    필요합니다.
                  </div>
                </div>
              </div>
            </li>

            <li className="grid items-center grid-cols-12 py-2">
              <div className="col-span-3 text-lg ">링크드인 활용</div>

              <div className="w-full col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal break-keep">
                    링크인 활용 미국에선 명함보단 링크드인을 비즈니스 네트워크에
                    더 많이 사용합니다. 명함을 주고받는 문화가 펜데믹 이후로
                    더욱 줄어들었으니, 명함을 준비는 하되 링크드인 QR코드나 직접
                    전화번호를 주고받을 준비를 하면 좋습니다. 필요합니다.
                  </div>
                </div>
              </div>
            </li>

            <li className="grid items-center grid-cols-12 py-2">
              <div className="col-span-3 text-lg ">소개에 대한 감사</div>

              <div className="w-full col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal break-keep">
                    미국에서 소개는 Warm Introduction이 매우 유효합니다. 특히
                    미국에 아무런 레퍼런스가 없을 경우 더욱 유용한데, warm
                    introduction을 해주는 매개자의 노고를 반드시 높이 평가를
                    해주는 에티켓이 필요합니다.
                  </div>
                </div>
              </div>
            </li>

            <li className="grid items-center grid-cols-12 py-2">
              <div className="col-span-3 text-lg ">간접적 관계 형성</div>

              <div className="w-full col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal break-keep">
                    현지에서는 Cold Calling이라는 소개 없는 콘택트를 sales에
                    많이 활용하고 있습니다. 성공률은 낮지만, 링크트인을 콘택트를
                    찾고, 직접 혹은 간접적으로 연결하는 수단으로 활용하고
                    있습니다
                  </div>
                </div>
              </div>
            </li>

            <li className="grid items-center grid-cols-12 py-2">
              <div className="col-span-3 text-lg ">네트워크 유지</div>

              <div className="w-full col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal break-keep">
                    미국에서는 Director 급 이상을 만나고 관계를 유지하는 것은
                    사업에 매우 중요한 일입니다. 한국과 달리 관계 형성에 많은
                    시간과 공을 들여야 하므로 한두 번 출장이나 콘퍼런스에서 만남
                    이후에 꾸준히 연락과 만남을 취해야 합니다.
                  </div>
                </div>
              </div>
            </li>

            <li className="grid items-center grid-cols-12 py-2">
              <div className="col-span-3 text-lg ">대화 매너</div>

              <div className="w-full col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal break-keep">
                    미국인들과 만날떈 이름을 불러주고 대화에서 눈맞춤이
                    중요합니다. 또한 small talk를 주기도 하고 받기도 함으로써
                    자신을 알리고 상대방을 알아나가는 노력이 중요하며, 공식적
                    미팅 혹은 비공식적인 네트워킹 이후 반드시 follow up을 해두는
                    것이 좋습니다. 미국에서 사업하시다 보면 언제 어떤 사람이
                    필요하게 될지 모릅니다. 늦었다고 생각하지 말고 지금부터라도
                    자신만의 네트워크를 갖추는 노력이 필요합니다.
                  </div>
                </div>
              </div>
            </li>

            <li className="grid items-center grid-cols-12 py-2">
              <div className="col-span-3 text-lg ">습득</div>

              <div className="w-full col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal break-keep">
                    현지에서 대화를 나누다 보면 모르는 용어나 내용을 접할 수
                    있습니다. 이때 절대 가정하거나 지나치지 마시고 직접
                    물어보시고 배워두실수록 다음에 활용하실 수 있습니다.
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="w-[60%] mx-auto text-center relative">
          <input
            type="radio"
            name="program"
            id="drop5"
            className="hidden peer"
          />
          <label
            className="flex justify-between p-4 text-2xl border-b-2 border-gray-400 cursor-pointer"
            htmlFor="drop5"
          >
            <div>주요 컨퍼런스</div>
          </label>
          <div className="absolute text-2xl peer-checked:rotate-90 right-4 top-4">
            -
          </div>
          <ul className="hidden font-light peer-checked:block">
            <li className="grid items-center grid-cols-12 py-2">
              <div className="col-span-3 text-lg ">
                캘리포니아 컨퍼런스 및 행사
              </div>

              <div className="w-full col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal break-keep">
                    <Link to="https://www.cta.tech/" className="text-blue-500">
                      CES
                    </Link>
                    ,{" "}
                    <Link
                      to="https://www.jpmorgan.com/solutions/cib/insights/health-care-conference"
                      className="text-blue-500"
                    >
                      JP Morgan Health Summit
                    </Link>
                    ,{" "}
                    <Link to="https://www.sxsw.com/" className="text-blue-500">
                      SXSW
                    </Link>
                    ,{" "}
                    <Link
                      to="https://b2b.gamescom.global/"
                      className="text-blue-500"
                    >
                      GamesCom
                    </Link>
                    ,{" "}
                    <Link
                      to="https://www.rsaconference.com/"
                      className="text-blue-500"
                    >
                      RSA
                    </Link>
                    ,{" "}
                    <Link
                      to="https://www.semi.org/en/region-selector"
                      className="text-blue-500"
                    >
                      Semicon
                    </Link>
                    ,{" WEST, "}
                    <Link
                      to="https://www.siggraph.org/"
                      className="text-blue-500"
                    >
                      SIGRAFF
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="w-[60%] mx-auto text-center relative">
          <input
            type="radio"
            name="program"
            id="drop6"
            className="hidden peer"
          />
          <label
            className="flex justify-between p-4 text-2xl border-b-2 border-gray-400 cursor-pointer"
            htmlFor="drop6"
          >
            <div>흔히 하는 실수</div>
          </label>
          <div className="absolute text-2xl peer-checked:rotate-90 right-4 top-4">
            -
          </div>
          <ul className="hidden font-light peer-checked:block">
            <li className="grid items-center grid-cols-12 py-2">
              <div className="col-span-3 text-lg ">매너</div>

              <div className="w-full col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                {data.map((string, i) => {
                  return (
                    <div className="relative w-full py-1" key={i}>
                      <img
                        src={bullet1}
                        alt=""
                        className="w-[20px] absolute top-[7px]"
                      />

                      <div className="ml-[22px] leading-normal break-keep">
                        {string}
                      </div>
                    </div>
                  );
                })}
              </div>
            </li>
          </ul>
        </div>

        <div className="w-[60%] mx-auto text-center relative">
          <input
            type="radio"
            name="program"
            id="drop7"
            className="hidden peer"
          />
          <label
            className="flex justify-between p-4 text-2xl border-b-2 border-gray-400 cursor-pointer"
            htmlFor="drop7"
          >
            <div>날씨 및 환경</div>
          </label>
          <div className="absolute text-2xl peer-checked:rotate-90 right-4 top-4">
            -
          </div>
          <ul className="hidden font-light peer-checked:block">
            <li className="grid items-center grid-cols-12 py-2">
              <div className="col-span-3 text-lg ">날씨</div>

              <div className="w-full col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal break-keep">
                    <Link
                      to="https://weather.com/ko-KR/weather/today/l/California+City+CA+United+States?canonicalCityId=6150a3ab0f361eba4f056631e9bac96003412e7e4276cb64516724d3e7237159"
                      className="text-blue-500"
                    >
                      캘리포니아 날씨 참고
                    </Link>
                    {", "}
                    <Link
                      to="https://weather.com/weather/today/l/9b881ffaf84bf05e43de6bcf4fe83005c4c5858c413f3ba2b56f40c5a9b1a2de"
                      className="text-blue-500"
                    >
                      산호세 날씨 참고
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="w-[60%] mx-auto text-center relative">
          <input
            type="radio"
            name="program"
            id="drop8"
            className="hidden peer"
          />
          <label
            className="flex justify-between p-4 text-2xl border-b-2 border-gray-400 cursor-pointer"
            htmlFor="drop8"
          >
            <div>기타</div>
          </label>
          <div className="absolute text-2xl peer-checked:rotate-90 right-4 top-4">
            -
          </div>
          <ul className="hidden font-light peer-checked:block">
            <li className="grid items-center grid-cols-12 py-2">
              <div className="col-span-3 text-lg ">운전</div>

              <div className="w-full col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal break-keep">
                    <Link
                      to="https://www.dmv.ca.gov/portal/file/california-driver-handbook-pdf"
                      className="text-blue-500"
                      target="_blank"
                    >
                      California 운전
                    </Link>
                    {", "}
                    <Link
                      to="https://www.caranddriver.com/car-insurance/a35874528/average-cost-of-car-insurance-in-san-francisco/"
                      className="text-blue-500"
                      target="_blank"
                    >
                      자동차 보험료 참고
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="grid items-center grid-cols-12 py-2">
              <div className="col-span-3 text-lg ">물가</div>

              <div className="w-full col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal break-keep">
                    <Link
                      to="https://www.budgetyourtrip.com/united-states-of-america/san-francisco"
                      className="text-blue-500"
                      target="_blank"
                    >
                      켈리포니아의 물가 참고
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="grid items-center grid-cols-12 py-2">
              <div className="col-span-3 text-lg ">거주 관련 렌트비</div>

              <div className="w-full col-span-8 pl-4 text-lg leading-loose text-left border-l-2 border-gray-500">
                <div className="relative w-full py-1">
                  <img
                    src={bullet1}
                    alt=""
                    className="w-[20px] absolute top-[7px]"
                  />

                  <div className="ml-[22px] leading-normal break-keep">
                    <Link
                      to="https://www.rentcafe.com/average-rent-market-trends/us/ca/san-francisco/"
                      className="text-blue-500"
                      target="_blank"
                    >
                      렌트비 참고
                    </Link>
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

export default Info;
