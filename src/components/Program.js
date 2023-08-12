import React from "react";
import { Link } from "react-router-dom";

function Program() {
  return (
    <div className="w-full bg-white font-Noto">
      <div className="mt-[88px] lg:container mx-auto">
        <div className="pt-16 pb-8 text-4xl text-center">
          KIC 실리콘밸리 프로그램
        </div>
        <div className="px-5 pb-16 text-base text-center w-[60%] mx-auto break-keep">
          스타트업의 수요에 맞는 지원 플랫폼을 구축하고, 현지 생태계 진입 및
          글로벌 성공사례를 도출하기 위해 로컬 파트너사 및 스타트업 액셀러레이터
          등과 협력하여 프로그램을 운영합니다.
        </div>
        <div className="mx-auto lg:container">
          <div className="w-[90%] mx-auto grid items-center grid-cols-3 gap-2">
            <input
              type="radio"
              name="program"
              id="drop1"
              className="hidden peer/emf"
            />
            <label
              className="h-full bg-[#f8f9fa] rounded-xl cursor-pointer grid items-center grid-cols-1 peer-checked/emf:bg-[#0d6efd] peer-checked/emf:text-white"
              htmlFor="drop1"
            >
              <div className="text-xl text-center">
                실리콘밸리형 <br className="lg:hidden" />
                기업가 프로그램
                <wbr />
                (EMF)
              </div>
            </label>
            <input
              type="radio"
              name="program"
              id="drop2"
              className="hidden peer/pmf"
              defaultChecked
            />
            <label
              className="h-full bg-[#f8f9fa] rounded-xl  cursor-pointer grid items-center grid-cols-1 peer-checked/pmf:bg-[#0d6efd] peer-checked/pmf:text-white"
              htmlFor="drop2"
            >
              <div className="text-xl text-center">
                실리콘밸리형 제품/서비스 <br className="lg:hidden" />
                적합성 검증 프로그램
                <wbr />
                (PMF)
              </div>
            </label>
            <input
              type="radio"
              name="program"
              id="drop3"
              className="hidden peer/gmf"
            />
            <label
              className="h-full bg-[#f8f9fa] rounded-xl  cursor-pointer grid items-center grid-cols-1 peer-checked/gmf:bg-[#0d6efd] peer-checked/gmf:text-white"
              htmlFor="drop3"
            >
              <div className="py-3 text-xl text-center peer-checked/gmf:text-white">
                실리콘밸리형 <br className="lg:hidden" />
                고속 성장 프로그램
                <br className="" />
                (GMP 2024년 예정)
              </div>
            </label>
            {/* EMF */}
            <div className="hidden col-span-3 py-12 mb-24 bg-[#f8f9fa] rounded-xl peer-checked/emf:block">
              <div className="w-[80%] mx-auto text-center text-2xl p-4 mb-5 break-keep">
                회사의 단계와 상관없이, 미국에서 법인을 설립/운영하고 투자 및
                성장을 위한 <br className="hidden lg:inline" />
                실리콘밸리형 선진 기업 경영의 기본 틀과 전략 그리고 인사이트를
                분야별 최고 전문들로 구성하여 만든 프로그램.
              </div>
              <div className="w-[70%] mx-auto font-light">
                <ul className="text-xl list-image-arrow">
                  <li className="pt-3">
                    주요내용:
                    <ul className="text-xl list-['-']">
                      <li className="py-0 pl-1">투자 및 경영 전략</li>
                      <li className="py-0 pl-1">글로벌 기업가 마인드 셋</li>
                      <li className="py-0 pl-1">기술 경영 및 미국 시장 안착</li>
                    </ul>
                  </li>
                  <li className="pt-3">
                    지원대상:
                    <ul className="text-xl list-['-']">
                      <li className="pl-1 break-keep">
                        ICT 분야의 유망 기술 및 서비스를 보유하고 있으며, 글로벌
                        진출을 희망하는 국내 ICT 강소기업 중 아래 조건을 모두
                        충족하는 기업
                      </li>
                      <li className="pl-1 break-keep">
                        빅데이터/클라우드/SaaS/엔터프라이즈 테크/AI 등 분야의
                        유망 기술 및 서비스를 보유하고, 글로벌 진출을 희망하는
                        국내 ICT 중소·중견기업
                      </li>
                      <li className="pl-1">
                        국내 액셀러레이터 및 VC 포트폴리오 중 추천 기업
                      </li>
                      <li className="pl-1">
                        국내 유관기관 포트폴리오 중 추천 기업
                      </li>
                      <li className="pl-1">
                        2022년 K-Pitch 및 K-디지털 그랜드 챔피언십 수상 기업
                        <ul className="ml-4 text-base list-image-mark">
                          <li className="break-keep">
                            영어로 비즈니스 미팅이 가능한 ICT 분야 강소기업
                            임원진(대표 또는 C Level) 참가 필수
                          </li>
                          <li className="break-keep">
                            프로그램 전체 수료 필수(국내 투자활동이나 긴급한
                            제품 개발 등이 불참의 양해 조건이 될 수 없음을 사전
                            공지)
                          </li>
                          <li className="break-keep">
                            사전 및 사후 오리엔테이션 참가 필수
                          </li>
                          <li className="break-keep">
                            EMF 참가기업 중 성과 미제출 회사는 등록 기업 안되며
                            타 프로그램 참가 못함
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="pt-3">
                    지원 및 선발:
                    <ul className="text-xl list-['-']">
                      <li className="pl-1">
                        2023년 상반기 (접수마감, 4월 운영) 및 하반기 (8월 접수,
                        10월 운영) 10개 사 내외
                      </li>
                      <li className="pl-1">
                        총 3주 (온라인 및 현지 포함한 하이브리드 과정)
                      </li>
                      <li className="pl-1">
                        서류 및 현지 투자자 영어 인터뷰 등 2차례 평가
                      </li>
                      <li className="pl-1">
                        기타 자세한 설명과 유의 사항 등은 2월 중 웹사이트에 개재
                        예정
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            {/* PMF INFO */}
            <div className="hidden col-span-3 py-12 mb-24 bg-[#f8f9fa]  rounded-xl peer-checked/pmf:block">
              <div className="w-[80%] mx-auto text-center text-2xl p-4 mb-5 break-keep">
                “디지털 헬스”분야의 한국 유망 기업들이 미국 시장 진출 기반을
                마련할 수 있도록, Product Market Fit(시장 제품 적합성 검증)
                프로그램을 KIC SV에서 지원합니다. 국내 디지털 헬스 ICT 강소
                기업의 글로벌 잠재 고객 개척 및 미국 시장 진출을 위한 마케팅,
                네트워킹 등 기업별 현지 시장 맞춤형 프로그램을 약 6주간 (온라인
                1주 + 오프라인 5주 예상) 제공합니다.
              </div>
              <div className="w-[70%] mx-auto font-light">
                <ul className="text-xl list-image-arrow">
                  <li className="pt-3">(모집기업) 총 5개사 내외</li>
                  <li className="pt-3">
                    (모집기업) 총 5개사 내외
                    <ul className="text-xl list-['-']">
                      <li className="py-0 pl-1 break-keep">
                        (모집대상) 디지털 헬스 분야의 유망 기술 및 서비스를
                        보유하고 있으며, 글로벌 진출을 희망하는 국내 ICT 강소
                        기업 중 아래 조건을 하나 이상 충족하는 기업
                      </li>
                      <li className="py-0 pl-1">
                        국내 액셀러레이터, 국내 기업, 유관 기관 및 투자자
                        포트폴리오 중 추천 디지털 헬스 관련 제품 및 솔루션 보유
                        기업
                      </li>
                      <li className="py-0 pl-1">
                        KIC Soaring 1, 2 또는 TRT 프로그램을 수료한 우수 디지털
                        헬스 관련 제품 및 솔루션 보유 기업
                      </li>
                      <li className="py-0 pl-1">
                        2022년 K-Pitch 및 K-디지털 그랜드 챔피언십 수상 디지털
                        헬스 관련 제품 및 솔루션 보유 기업
                        <ul className="text-sm break-keep list-['*']">
                          <li className="font-bold text-blue-500">
                            기업 대표 또는 공동창업자 직접 참가 및 프로그램 전체
                            직접 수료 필수(국내외 투자 유치 및 긴급한 제품 개발
                            등의 불참 사유 허용 불가)
                          </li>
                          <li className="font-bold text-blue-500">
                            명확한 최종 제품 혹은 솔루션 보유 필수(기술 개발
                            미흡 혹은 제품/솔루션의 최소 검증이 없는 기업은 미국
                            PoC 완료 어려움)
                          </li>
                          <li className="font-bold text-blue-500">
                            미국 현지(샌프란시스코 및 라스베가스)의 최소 5주
                            체류 일정에 문제가 있는 기업의 경우, 전체 수료 완료
                            불가
                          </li>
                          <li className="font-bold text-blue-500">
                            한국의 국경일 및 명절 등의 일정을 모두 고려하여 6주
                            프로그램 참가 필수
                          </li>
                          <li className="font-bold text-blue-500">
                            사전 오리엔테이션, 온라인 강의, K-Day 및 HLTH 2023
                            컨퍼런스/전시회 참가 필수
                          </li>
                          <li className="font-bold text-blue-500">
                            프로그램 참가 기업 중, 위의 필수 사항 미달 및 성과
                            미제출 기업은 등록 기업 가입 불가, 후속 지원 및 타
                            프로그램 참여 불가
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="pt-3">
                    (프로그램 운영) 실리콘밸리 6주 하이브리드 프로그램(온라인
                    1주 + 오프라인 5주)
                  </li>
                  <li className="pt-3">
                    (접수기간) 2023년 7월 11일 ~ 8월 7일(한국 시간 기준
                    24시까지)
                  </li>
                  <li className="pt-3">
                    (접수처) KIC 실리콘밸리 – apply@kicsv.org
                  </li>
                  <li className="pt-3">
                    (접수방법) 이메일 접수(메일 제목 및 파일명 가이드 준수)
                    <ul className="text-xl list-['-']">
                      <li className="py-0 pl-1 break-keep">
                        (메일제목) 2023 KIC SV PMF 프로그램 참가 신청(기업명)
                      </li>
                      <li className="py-0 pl-1 break-keep">
                        (파일명) 제출서류 제목에 기업명 포함 -{" "}
                        <span className="font-bold">
                          apply@kicsv.org 메일로 접수 필수(타 이메일로 접수
                          불가)
                        </span>
                        <ul className="text-sm break-keep list-['※'] ml-2">
                          <li className="pl-1 font-bold text-blue-500">
                            예시: 1. 프로그램 참가 신청서(기업명).doc
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="pt-3">
                    (제출서류)
                    <ul className="-ml-3 text-xl list-none">
                      <li className="py-0 pl-1 break-keep">
                        1. 프로그램 참가 신청서 : 프로그램 지원 신청서 / 성실
                        참가 확약서 / 개인 정보 수집 및 활용 동의서 -{" "}
                        <Link
                          to="/files/pmf/1. 프로그램 참가 신청서.docx"
                          className="text-blue-500"
                          target="_blank"
                        >
                          양식다운
                        </Link>
                      </li>
                      <li className="py-0 pl-1 break-keep">
                        2. Pitch Deck(영문, Max 10 Slides)
                      </li>
                      <li className="py-0 pl-1 break-keep">
                        3. Resume(영문, 참가자 전원)
                      </li>
                      <li className="py-0 pl-1 break-keep">4. 사업자 등록증</li>
                      <li className="py-0 pl-1 break-keep">
                        5. 회사 로고(Ai/SVG File)
                      </li>
                      <li className="py-0 pl-1 break-keep">
                        6. (선택) Product/Service Demo Video File(영문, 4분이내,
                        mp4 File)
                      </li>
                    </ul>
                  </li>
                  <li className="pt-3">
                    (지원내용) 현지 오프라인 5주 기간 동안 기업당 1인 숙박
                    지원(2인 1실 기준)
                    <ul className="text-xl list-['-']">
                      <li className="py-0 pl-1 break-keep">
                        현지 숙박 제공은 2인 1실 기준으로 하며, 2개 기업이 한
                        방을 공유(추가 인원 숙박은 기업 자체 부담)
                      </li>
                      <li className="py-0 pl-1 font-bold text-blue-500 break-keep">
                        예) A사와 B사 함께 방을 공유, 기업당 1인 지원으로 각
                        침대 사용 가능(2인 1실)
                      </li>
                      <li className="py-0 pl-1 break-keep">
                        숙소 위치는 현지 샌프란시스코 코워킹스페이스를 중심으로
                        근처 에어비앤비 혹은 호텔 숙소 배정 예정
                      </li>
                      <li className="py-0 pl-1 break-keep">
                        프로그램 기간내 식비와 항공료 등 제반 비용 기업 자체
                        부담
                      </li>
                      <li className="py-0 pl-1 break-keep">
                        KIC SV의 숙박 지원을 받게될 경우, 지정된 곳에서 숙박
                        필수
                      </li>
                      <li className="py-0 pl-1 break-keep">
                        KIC SV의 숙박 지원을 받지 않을 경우, 기업측이 개별적으로
                        알아본 숙소에서 직접 결제 및 숙박 가능 (단, 참여자의
                        안전과 프로그램 참여에 지장이 없어야 함)
                      </li>
                      <li className="py-0 pl-1 break-keep">
                        9월 11일까지 숙소 체크인 요망(현지 숙박은 9월
                        11일(체크인)부터 10월 12일(체크아웃)까지 지원 예정)
                        <ul className="text-sm break-keep list-['※'] ml-2">
                          <li className="pl-1 font-bold text-blue-500">
                            예시: 1. 프로그램 참가 신청서(기업명).doc
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="pt-3">
                    (선발방법) 1차 서류 심사, 2차 인터뷰 심사
                    <ul className="text-xl list-['-']">
                      <li className="py-0 pl-1 break-keep">
                        1차 적합성 평가 : 기술 타당성, 기술/제품 및 솔루션 등의
                        검증 자료, 지원 자격 등을 중심으로 서류 평가 전형 실시
                      </li>
                      <li className="py-0 pl-1 break-keep">
                        2차 인터뷰 심사 : 기업당 심사위원 (현지 전문가로
                        구성)에게{" "}
                        <span className="font-bold text-blue-500">
                          Elevator Pitching 5분, 질의 응답 3분, 총 8분
                        </span>
                        의 시간 소요 예정 (사전에 간단한 카메라/오디오 테스트
                        진행 예정)
                      </li>
                    </ul>
                  </li>

                  <li className="pt-3">
                    (선정절차) ※ 한국시간 기준
                    <ul className="text-xl list-['-']">
                      <li className="py-0 pl-1 break-keep">
                        <div className="inline-block text-center w-[120px] bg-[#00000033] rounded-xl border-2 border-[#f8f9fa]">
                          공고/접수
                        </div>{" "}
                        : 7.11 ~ 8.7 / 참여기업 모집 공고
                      </li>
                      <li className="py-0 pl-1 break-keep">
                        <div className="inline-block text-center w-[120px] bg-[#00000033] rounded-xl border-2 border-[#f8f9fa]">
                          1/2차 심사
                        </div>{" "}
                        : 8.8 ~ 8.14 / 서면 및 온라인 대면 평가(기술성 및
                        사업성)
                      </li>
                      <li className="py-0 pl-1 break-keep">
                        <div className="inline-block text-center w-[120px] bg-[#00000033] rounded-xl border-2 border-[#f8f9fa]">
                          최종발표
                        </div>{" "}
                        : 8.15 / 개별통지
                      </li>
                    </ul>
                  </li>

                  <li className="pt-3">
                    (추진 일정) 프로그램 운영 스케줄(자세한 일정과 내용은
                    오리엔테이션 때 공유)
                    <ul className="text-xl list-['-']">
                      <li className="py-0 pl-1 break-keep">
                        온라인 프로그램 : 2023년 9월 6일 ~ 8일(※ 한국 시간 기준)
                      </li>
                      <li className="py-0 pl-1 break-keep">
                        오프라인 프로그램 : 2023년 9월 12일 ~ 10월 12일(※ 미국
                        서부 시간 기준)
                      </li>
                      <ul className="-ml-2 text-xl list-none">
                        <li className="py-0 break-keep">
                          <svg
                            width="18"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block"
                          >
                            <rect width="6" height="6" x="7" y="7" />
                          </svg>
                          현지 킥오프 미팅 : 2023년 9월 12일
                        </li>
                        <li className="py-0 break-keep">
                          <svg
                            width="18"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block"
                          >
                            <rect width="6" height="6" x="7" y="7" />
                          </svg>
                          K-Day : 2023년 9월 14일 ~ 9월 16일 (K-Week 포함)
                        </li>
                        <li className="py-0 break-keep">
                          <svg
                            width="18"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block"
                          >
                            <rect width="6" height="6" x="7" y="7" />
                          </svg>
                          HLTH 2023 컨퍼런스 참가 및 전시회 (부스) 운영 : 2023년
                          10월 8일 ~ 10월 11일
                        </li>
                        <li className="py-0 break-keep">
                          <svg
                            width="18"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block"
                          >
                            <rect width="6" height="6" x="7" y="7" />
                          </svg>
                          PoC안 실행, 잠재고객사 방문, 비즈니스 미팅 참여,
                          네트워킹 이벤트 참여 등
                          <ul className="text-sm break-keep list-['※'] ml-5">
                            <li className="pl-1 font-bold text-blue-500">
                              프로그램 추진 일정 및 세부 내용은 현지 상황에 따라
                              변동 가능
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </ul>
                  </li>

                  <li className="pt-3">
                    (온라인 설명회) 2023년 7월 26일 오전 9:30 ~ 10:30 ※
                    한국시간기준
                    <ul className="text-sm break-keep list-['※'] ml-2 ">
                      <li className="pl-1 font-bold text-blue-500">
                        프로그램 추진 일정 및 세부 내용은 현지 상황에 따라 변동
                        가능
                      </li>
                    </ul>
                  </li>

                  <li className="pt-3">
                    온·오프라인 프로그램 핵심 내용
                    <ul className="text-xl list-['-']">
                      <li className="py-0 pl-1 break-keep">
                        <span className="font-bold">(PoC)</span> PoC(Proof of
                        Concept, 기술 검증)를 위한 다양한 고객사와의 교류
                      </li>
                      <li className="py-0 pl-1 break-keep">
                        <span className="font-bold">(시장 조사)</span> 글로벌
                        시장 진출 목표에 기반한 정확한 현지 시장 분석, 실질적인
                        TAM(Total Addressable Market)
                        <wbr />
                        /SAM(Service Available Market)/
                        <wbr />
                        SOM(Service Obtainable Market) 재확인 및 이에 따른 목표
                        시장 규모와 잠재적 고객사 이해
                      </li>
                      <li className="py-0 pl-1 break-keep">
                        <span className="font-bold">(사업 및 판매 전략)</span>{" "}
                        목표 시장에 맞는 잠재적 고객사 집중 리스트업, 접근 방법
                        등 판매 계획 및 전략 수립 관련 노하우 습득
                      </li>
                      <li className="py-0 pl-1 break-keep">
                        <span className="font-bold">(비즈니스 모델)</span>{" "}
                        사업모델 시뮬레이션 및 가격 책정 전략 등 고객사 니즈
                        파악과 이에 맞는 기술 및 솔루션의 가치 전달
                      </li>
                    </ul>
                  </li>
                  <li className="pt-3">
                    실리콘밸리 현지 행사 참여
                    <ul className="text-xl list-['-']">
                      <li className="py-0 pl-1 break-keep">
                        <span className="font-bold">(K-Day 행사 참가)</span>{" "}
                        한국의 유망 ICT 강소 기업과 실리콘밸리를 대표하는 주요
                        리더 및 테크 인플루언서들이 대거 참석하는 K-Day 및
                        K-Week 참여
                      </li>
                      <li className="py-0 pl-1 break-keep">
                        <span className="font-bold">(HLTH 참가)</span> 헬스케어
                        생태계의 혁신과 변화를 이끄는 주된 플랫폼인 HLTH 2023
                        컨퍼런스 참가 및 전시회(부스) 운영
                        <ul className="text-sm break-keep list-['※'] ml-2 ">
                          <li className="pl-1 ">
                            자세한 내용은 최종 합격 후, 오리엔테이션 진행 시
                            안내 예정
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="pt-3">
                    (문의처) 김지혜 매니저 - jkim928@kicsv.org
                  </li>
                </ul>
              </div>
            </div>

            {/* GMF INFO */}
            <div className="hidden rounded-xl col-span-3 py-12 mb-24 bg-[#f8f9fa] peer-checked/gmf:block">
              <div className="w-[80%] mx-auto text-center text-2xl p-4 mb-5 break-keep">
                미국 시장에서 고객군을 찾은 후 시장을 빠르게 선점해야 합니다.
                GMP는 고속 성장에 따른 자금과 팀 관리 및 다양한 역량 확보를 위한
                전략적 계획 및 실행안을 수립할 수 있도록 방법과 사례를
                제공합니다.
              </div>
              <div className="w-[70%] mx-auto font-light">
                <ul className="text-xl list-image-arrow">
                  <li className="pt-3">
                    Exponential Growth Management
                    <ul className="text-xl list-['-']">
                      <li className="py-0 pl-1">
                        Venture Capital and Other Funding Source for Fast Growth
                      </li>
                      <li className="py-0 pl-1">
                        Recruiting & Managing C Level and VP
                      </li>
                      <li className="py-0 pl-1">BOD & Voting Strategy</li>
                      <li className="py-0 pl-1">Exit Strategies</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program;
