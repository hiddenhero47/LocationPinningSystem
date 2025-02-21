import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { colors } from "../../utilities/colors";
import { useSelector } from "react-redux";
import ScrollToTop from "../scroll-to-top";
import { SingleCentered } from "./index.style";
import { FaMapLocationDot } from "react-icons/fa6";

function AuthLayout() {
  const { theme } = useSelector((state) => state.themes);

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

  return (
    <ThemeProvider
      theme={theme === "light" ? colors?.dayMode : colors?.nightMode}
    >
      <ScrollToTop />
      <SingleCentered>
        <div className="heading">
          <i>
            <FaMapLocationDot size="100%" />
          </i>
        </div>
        <div className="page intro-y">
          <div className="min-h-[500px] w-full"><Outlet /></div>
        </div>
        <div className="style_foot" />
      </SingleCentered>
    </ThemeProvider>
  );
}

export default AuthLayout;
