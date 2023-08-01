import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import JumboHeading from "./components/JumboHeading";
import IntroPro from "./components/IntroProg";
import Footer from "./components/Footer";
import NavEN from "./components/NavEN";
import { Routes, Route, useNavigate } from "react-router-dom";
import Kday from "./components/Kday";
import Intro from "./components/Intro";
import Service from "./components/Service";

function App() {
  const [ln, SetLN] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getLocation() {
      fetch("http://ip-api.com/json/")
        .then((response) => response.json())
        .then((res) => {
          if (res.countryCode === "KR") {
            SetLN("KR");
            console.log(res.countryCode);
          } else {
            SetLN("EN");
          }
        })
        .catch((error) => console.log(error));
    }
    ln === "" && getLocation();
    console.log("GET");
    if (ln === "KR") {
      console.log("KR");
      navigate("/");
    } else if (ln === "EN") {
      console.log("EN");
      navigate("/en/");
    }
  }, []);

  // useEffect(() => {
  //   if (ln === "KR") {
  //     console.log("KR");
  //     navigate("/");
  //   } else {
  //     console.log("EN");
  //     navigate("/en/");
  //   }
  // }, [ln, navigate]);

  if (ln === "") {
    return <></>;
  }

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
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
          path="/en/"
          element={
            <>
              <NavEN />
              <Kday />
            </>
          }
        />
        <Route path="*" element={<div>404 Pages</div>}></Route>
      </Routes>
    </div>
  );

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
}

export default App;