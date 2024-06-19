import React from 'react'
//mui
import { ThemeProvider, CssBaseline } from "@mui/material";
//component
import DoashboardMentor from './DoashboardMentor';
import ManageSchedule from './ManageSchedule';
import ListSchedule from './ListSchedule';
import Topbar from '../../components/Topbar';
import {MyProSidebarProvider} from './Sidebar/sidebarContext';
//file 
import theme from "../../theme/theme";
//router-dom
import { Routes, Route } from "react-router-dom";
import { ModalProvider } from "../../context/ModalContext";

export default function MentorPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyProSidebarProvider>
        <div style={{ height: "100%", width: "100%" }}>
          <main>
            <Topbar />
            <ModalProvider>
            <Routes>
              <Route index element={<DoashboardMentor />} />  
              <Route path="/schedule" element={<ManageSchedule />} />
              <Route path="/schedule/:id" element={<ListSchedule />} />
            </Routes> 
            </ModalProvider>
          </main>
        </div>
      </MyProSidebarProvider>
    </ThemeProvider>
  )
}
