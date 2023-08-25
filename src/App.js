import { useEffect } from "react";
// import { useState } from "react";
import { useLocation } from "react-router-dom";
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import JumboHeading from "./components/JumboHeading";
import IntroPro from "./components/IntroProg";
import Footer from "./components/Footer";
import NavEN from "./components/NavEN";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Kday from "./components/Kday";
import Intro from "./components/Intro";
import Service from "./components/Service";
import HomeEng from "./components/HomeEng";
import FooterEng from "./components/FooterEng";
import AboutEN from "./components/AboutEN";
import InvestorEN from "./components/InvestorEN";
import AcceleratorEN from "./components/AcceleratorEN";
import Program from "./components/Program";
import Partners from "./components/Partners";
import Oic from "./components/Oic";
import Info from "./components/Info";

import loading from "./imgs/Loading_icon.gif";

function App() {
  // const [ln, SetLN] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // console.log("");
    window.addEventListener("beforeunload", () => {
      localStorage.clear();
      console.log("Clear");
    });
  }, []);

  useEffect(() => {
    async function getLocation() {
      // fetch("http://ip-api.com/json/")
      // fetch(
      //   "https://api.ipgeolocation.io/ipgeo?apiKey=a3843e529e464d82901e1eb01c29be9c"
      // )
      fetch("http://ipwho.is/")
        .then((response) => response.json())
        .then((res) => {
          // console.log(res);
          // console.log(res.country_code);
          if (res.country_code === "KR") {
            // SetLN("KR");
            navigate("/main");
          } else {
            // SetLN("EN");
            navigate("/en/");
          }
        })
        .catch((error) => console.log(error));
    }

    if (location.pathname === "/") {
      getLocation();
    } else {
      // SetLN("ANY");
      navigate(location.pathname);
      console.log("Move to url you requested");
    }
    // if (ln === "KR") {
    //   console.log("KR");
    //   navigate("/");
    // } else if (ln === "EN") {
    //   console.log("EN");
    //   navigate("/en/");
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (ln === "KR") {
  //     console.log("KR");
  //     navigate("/main");
  //   } else if (ln !== "") {
  //     console.log("EN");
  //     navigate("/en/");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [ln]);

  // if (ln === "") {
  //   return <div>Loading...</div>;
  // } else {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/intro"
          element={
            <>
              <NavBar />
              <Intro />
              <Footer />
            </>
          }
        />
        <Route
          path="/service"
          element={
            <>
              <NavBar />
              <Service />
              <Footer />
            </>
          }
        />
        <Route
          path="/program"
          element={
            <>
              <NavBar />
              <Program />
              <Footer />
            </>
          }
        />
        <Route
          path="/partner"
          element={
            <>
              <NavBar />
              <Partners />
              <Footer />
            </>
          }
        />
        <Route
          path="/info"
          element={
            <>
              <NavBar />
              <Info />
              <Footer />
            </>
          }
        />
        <Route
          path="/en/"
          element={
            <>
              <NavEN />
              <HomeEng />
              <FooterEng />
            </>
          }
        />
        <Route
          path="/en/kday"
          element={
            <>
              <NavEN />
              <Kday />
            </>
          }
        />
        <Route
          path="/en/about"
          element={
            <>
              <NavEN />
              <AboutEN />
            </>
          }
        />
        <Route
          path="/en/investor"
          element={
            <>
              <NavEN />
              <InvestorEN />
            </>
          }
        />
        <Route
          path="/en/accelerator"
          element={
            <>
              <NavEN />
              <AcceleratorEN />
            </>
          }
        />
        <Route
          path="/en/oic"
          element={
            <>
              <NavEN />
              <Oic />
            </>
          }
        />
        <Route
          path="/main"
          element={
            <>
              <NavBar />
              <JumboHeading />
              <IntroPro />
              <Footer />
            </>
          }
        />
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center  h-[100vh]">
              <img src={loading} alt="" className="" />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

// return (
//   <div className="App">
//     <BrowserRouter>
//       <NavEN />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <JumboHeading /> <IntroPro />
//             </>
//           }
//         ></Route>
//         <Route path="/en/*" element={<div>EN</div>}></Route>
//         {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
//         <Route path="*" element={<div>404 Pages</div>}></Route>
//       </Routes>
//     </BrowserRouter>
//   </div>
// );
// }

export default App;
