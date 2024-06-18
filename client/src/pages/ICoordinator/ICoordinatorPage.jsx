import React from "react";
//mui
import { ThemeProvider, CssBaseline } from "@mui/material";
//component
import DoashboardIC from "./DoashboardIC";
import ListSchedule from "./ListSchedule/ListSchedule";
import TranningProgram from "./TranningProgram";
import Topbar from "../../components/Topbar";
import {MyProSidebarProvider} from "./Sidebar/sidebarContext";
import ManageSchedule from "./ManageSchedule";
import IntervieweesList from "./IntervieweesList";
//file
import theme from "../../theme/theme";
//router-dom 
import { Routes, Route } from "react-router-dom";
import { ModalProvider } from "../../context/ModalContext";


export default function ICoordinatorPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyProSidebarProvider>
        <div style={{ height: "100%", width: "100%" }}>
          <main>
            <Topbar />
            <ModalProvider>
            <Routes>
              <Route index element={<DoashboardIC />} />  
              <Route path="/schedule" element={<ManageSchedule />} />
              <Route path="/schedule/:id" element={<ListSchedule />} />
              <Route path="/schedule/:id/list-interviewees" element={<IntervieweesList />} />
              <Route path="/tranning_program" element={<TranningProgram />} />
            </Routes> 
            </ModalProvider>
          </main>
        </div>
      </MyProSidebarProvider>
    </ThemeProvider>
  );
}
