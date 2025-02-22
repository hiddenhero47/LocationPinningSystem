import React, {useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { colors } from '../../utilities/colors';
import { useSelector } from 'react-redux';
import ScrollToTop from '../scroll-to-top';
import {
	LayoutWrapper,
	LayoutContainer,
	PageCard,
} from './index.style';

function UserLayout() {
	const { theme } = useSelector((state) => state.themes);

	useEffect(() => {
        const bodyElement = document.querySelector("body");
        const htmlElement = document.querySelector("html");

        if (bodyElement) {
            bodyElement.classList.add("bg-dashboardBg");
        }
        if (htmlElement) {
            htmlElement.classList.add(
                theme === "dark" ? "nightMode" : "dayMode"
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

	return (
		<ThemeProvider
			theme={theme === 'light' ? colors?.dayMode : colors?.nightMode}
		>
			<ScrollToTop />
			<LayoutWrapper>
				<LayoutContainer>
					<PageCard>
						<Outlet />
					</PageCard>
				</LayoutContainer>
			</LayoutWrapper>
		</ThemeProvider>
	);
}

export default UserLayout;
