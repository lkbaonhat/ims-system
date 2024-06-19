import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
//import component
import Header from "./Header";
import ICPage from "./ICPage";
import DetailCampaign from "./DetailCampaign";
//import library
import { Routes, Route } from "react-router-dom";
import { ModalProvider } from "../../context/ModalContext";

const theme = createTheme();

function InternshipCampaigns() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ModalProvider>
        <Routes>
          <Route index element={<ICPage />} />
          <Route path="/:id" element={<DetailCampaign />} />
        </Routes>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default InternshipCampaigns;
