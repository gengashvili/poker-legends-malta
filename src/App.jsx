import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./Components/Header";
import GlobalStyles from "./GlobalStyles";
import FinalStage from "./pages/FinalStage";
import Home from "./pages/Home";
import NewyearSeries from "./pages/NewyearSeries";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="New-Year-Series" element={<NewyearSeries />} />
        <Route path="final-stage" element={<FinalStage />} />
      </Routes>
    </>
  );
}


export default App;
