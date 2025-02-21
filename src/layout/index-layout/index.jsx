import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { colors } from "../../utilities/colors";
import { useSelector } from "react-redux";
import ScrollToTop from "../scroll-to-top";
import {
  LayoutWrapper,
  LayoutContainer,
  SidebarWrapper,
  PageCard,
  SideMenuWrapper,
} from "./index.style";
import Sidebar from "./sidebar";
import { useNavigate } from 'react-router-dom';

function IndexLayout() {
  const { theme } = useSelector((state) => state.themes);
  const { user, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const bodyElement = document.querySelector("body");
    const htmlElement = document.querySelector("html");

    if (bodyElement) {
      bodyElement.classList.add("bg-dashboardBg");
    }
    if (htmlElement) {
      htmlElement.classList.add(theme === "dark" ? "nightMode" : "dayMode");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
	if (user && (Object.keys(user).length === 0 && token?.trim() === "")) {
		navigate("/auth");
	}

  if (!user && !token) {
		navigate("/auth");
	}
	
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, token])
  

  const active = false;
  return (
    <ThemeProvider
      theme={theme === "light" ? colors?.dayMode : colors?.nightMode}
    >
      <ScrollToTop />
      <LayoutWrapper>
        <LayoutContainer>
          <SidebarWrapper>
            <Sidebar />
          </SidebarWrapper>
          <PageCard>
            <Outlet />
          </PageCard>
          <SideMenuWrapper $isActive={Boolean(active)}></SideMenuWrapper>
        </LayoutContainer>
      </LayoutWrapper>
    </ThemeProvider>
  );
}

export default IndexLayout;
