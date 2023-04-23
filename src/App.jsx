import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import GlobalStyles from "./GlobalStyles";
import FinalStage from "./pages/FinalStage";
import Home from "./pages/Home/Home";
import NewYearSeries from "./pages/NewYearSeries/NewyearSeries";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="New-Year-Series" element={<NewYearSeries />} />
        <Route path="final-stage" element={<FinalStage />} />
      </Routes>
      <Footer/>
    </>
  );
}


export default App;
