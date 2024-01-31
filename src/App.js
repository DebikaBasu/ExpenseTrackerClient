import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Tracker from "./components/Tracker";
import HomePage from "./components/HomePage";
import GlobalStyles from "./globalStyles";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/individual-tracker" element={<Tracker />} />
        <Route path="/group-tracker" element={<Tracker />} />
      </Routes>
    </Router>
  );
}

export default App;
