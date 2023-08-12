import React from "react";
import ceo from "../imgs/kicsv_peter2.JPG";
import icon1 from "../imgs/social-network.png";
import icon2 from "../imgs/location.png";
import icon3 from "../imgs/korea_location.png";
import icon4 from "../imgs/usa.png";

function Intro() {
  return (
    <>
      <div className="w-full bg-[#f8f9fa] font-Noto">
        <div className="mt-[88px] container mx-auto grid grid-cols-12 pb-16">
          <div className="col-span-12 text-4xl text-center fonr-bold p-[75px]">
            CEO 인사말
          </div>
          <div className="col-span-12 text-center py-[40px] lg:col-span-5 self-center">
            <img
              src={ceo}
              alt=""
              className="inline-block w-[350px] shadow-lg rounded-xl shadow-gray-300"
            />
          </div>
          <div className="px-[32px] md:px-0 col-span-12 text-lg leading-normal md:leading-loose lg:col-span-6 py-5 ">
            <p>안녕하세요, 실리콘벨리 글로벌 혁신 센터장 배정융 입니다.</p>
            <br />
            <p className="break-keep">
              실리콘밸리는 전 세계 수많은 기술 기업들이 전 산업 분야에 걸쳐 앞선
              기술을 기반으로 제품과 서비스로 시장 선점을 위하여 치열하게
              경쟁하는 비즈니스 전장입니다. ICT 시장은 누구도 예측하기 힘든
              속도와 방향으로 나날이 진화 중이며, 글로벌 시장은 더욱 빠르게
              바뀌어 가고 있습니다. 특히 미국이라는 시장은 크고 깊은
              블루오션이기도 하지만 예상치 못하는 경쟁자와 생소한 생태계로
              이루어져 있습니다.
            </p>
            <br />
            <p className="break-keep">
              이에 저희 KIC 실리콘밸리는 미국 시장에 도전하시는 ICT 기업자들에게
              실수는 줄이고 성공 확률은 키우는 역활을 하고 있습니다. 특히 팬데믹
              이후에 매크로 경제가 급박하게 변화하고 있는 상황에서, 저희는 ICT
              융합 기술 스타트업들이 발 빠르게 대처하고 앞서나갈 수 있도록 모든
              역량을 집중하고 있습니다.
            </p>
            <br />
            <p className="break-keep">
              가장 역동적인 기술 시장인 실리콘밸리에서 넥스트 유니콘에 도전하는
              스타트업 여러분을 위해서 탁월한 셰르파 역할에 최선을 다하겠습니다.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="container grid grid-cols-12 mx-auto bg-white">
          <div className="col-span-12 text-4xl text-center fonr-bold p-[75px]">
            KIC 실리콘밸리 주요 지원 체계
          </div>
          <div className="col-span-12 text-center">
            <p className="pb-4 break-keep">
              저희 센터에서는 유망한 한국의 스타트업들이 미국 시장에 직접
              진출하여 비용과 시간 그리고 실수를 최소화하여 소프트랜딩을 하고
              성장을 도모할 수 있도록 다양한 혜택을 제공하고 있습니다.
            </p>
            <p className="pt-4 ">
              1. 국내 과학 기술 ICT 분야 스타트업 기술/비즈니스 현지화
              액셀레이팅 프로그램 운영 등을 통한 매출 및 투자 지원합니다.
            </p>
            <p className="pb-4 ">
              2. 실리콘밸리 중심 글로벌 진출(예정) 과학기술 ICT 분야 스타트업을
              대상으로 실리콘밸리형 고속 성장 사이클을 지원합니다.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 mt-[80px] ">
            <div className="text-center">
              <img className="w-[120px] inline-block m-3" src={icon1} alt="" />
            </div>
            <div className="w-3/4 mx-auto mb-8">
              <p className="py-4 my-3 text-2xl text-center border-b-2">
                북미 시장 진출 지원 플랫폼
              </p>
              <p className="text-lg text-center break-keep">
                기술 중심의 강소기업 및 스타트업의 현지 사업 개발 및 투자 유치
                지원, 법인 설립, 코워킹 스페이스 제공, 다양한 최신 법률 (비자,
                특허, 고용 등) 정보 제공, 분야별 전문가 연계 등
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 mt-[80px] ">
            <div className="text-center">
              <img className="w-[120px] inline-block m-3" src={icon2} alt="" />
            </div>
            <div className="w-3/4 mx-auto mb-8">
              <p className="py-4 my-3 text-2xl text-center border-b-2">
                스타트업의 글로벌 사업화
              </p>
              <p className="text-lg text-center break-keep">
                글로벌 비즈니스 마인드 및 네트워크 제공, 실리콘 밸리 스타트업
                생태계 문화 및 인맥 연결, 오픈 이노베이션들과의 협력체계 지원
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 mt-[80px] ">
            <div className="text-center">
              <img className="w-[120px] inline-block m-3" src={icon3} alt="" />
            </div>
            <div className="w-3/4 mx-auto mb-8">
              <p className="py-4 my-3 text-2xl text-center border-b-2">
                현지 생태계 구축 및 국내 유관기관과 협력
              </p>
              <p className="text-lg text-center break-keep">
                실리콘밸리의 스타트업 생태계 구심점과 연동하여 한국 및 미국의
                투자사, 엑셀러레이터들과 협력체계를 구축 및 다양한 현지의
                기관들과 정보 및 기술 협력
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 mt-[80px] ">
            <div className="text-center">
              <img className="w-[120px] inline-block m-3" src={icon4} alt="" />
            </div>
            <div className="w-3/4 mx-auto mb-8">
              <p className="py-4 my-3 text-2xl text-center border-b-2">
                북미 네트워크 구축 및 산업 섹터별 네트워크 형성
              </p>
              <p className="text-lg text-center break-keep">
                현지 핵심 네트워크 (K-Group, KSEA, 상공회의소 등) 구축 및
                버티컬별 비지니스 리더들과 긴밀히 협업, 다양한 현지 기관들 (SRI,
                OIC) 소개, 글로벌 인재 양성/채용 지원
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
