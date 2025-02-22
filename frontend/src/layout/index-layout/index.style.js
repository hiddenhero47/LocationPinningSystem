import styled from 'styled-components';

export const LayoutWrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	/* background-image: radial-gradient(circle at top center, #1c244c, #0c0f27); */
	background-image: radial-gradient(
			circle at 63% 12%,
			${({ theme }) => theme?.mainBody?.bgPattern} 0%,
			${({ theme }) => theme?.mainBody?.bgPattern} 5%,
			transparent 5%,
			transparent 95%
		),
		radial-gradient(
			circle at 22% 57%,
			${({ theme }) => theme?.mainBody?.bgPattern} 0%,
			${({ theme }) => theme?.mainBody?.bgPattern} 5%,
			transparent 5%,
			transparent 95%
		),
		radial-gradient(
			circle at 17% 63%,
			${({ theme }) => theme?.mainBody?.bgPattern} 0%,
			${({ theme }) => theme?.mainBody?.bgPattern} 6%,
			transparent 6%,
			transparent 94%
		),
		radial-gradient(
			circle at 49% 89%,
			${({ theme }) => theme?.mainBody?.bgPattern} 0%,
			${({ theme }) => theme?.mainBody?.bgPattern} 6%,
			transparent 6%,
			transparent 94%
		),
		radial-gradient(
			circle at 82% 10%,
			${({ theme }) => theme?.mainBody?.bgPattern} 0%,
			${({ theme }) => theme?.mainBody?.bgPattern} 6%,
			transparent 6%,
			transparent 94%
		),
		radial-gradient(
			circle at 2% 34%,
			${({ theme }) => theme?.mainBody?.bgPattern} 0%,
			${({ theme }) => theme?.mainBody?.bgPattern} 6%,
			transparent 6%,
			transparent 94%
		),
		radial-gradient(
			circle at 75% 60%,
			${({ theme }) => theme?.mainBody?.bgPattern} 0%,
			${({ theme }) => theme?.mainBody?.bgPattern} 4%,
			transparent 4%,
			transparent 96%
		),
		radial-gradient(
			circle at 87% 43%,
			${({ theme }) => theme?.mainBody?.bgPattern} 0%,
			${({ theme }) => theme?.mainBody?.bgPattern} 4%,
			transparent 4%,
			transparent 96%
		),
		radial-gradient(
			circle at 30% 49%,
			${({ theme }) => theme?.mainBody?.bgPattern} 0%,
			${({ theme }) => theme?.mainBody?.bgPattern} 4%,
			transparent 4%,
			transparent 96%
		),
		radial-gradient(
			circle at 26% 78%,
			${({ theme }) => theme?.mainBody?.bgPattern} 0%,
			${({ theme }) => theme?.mainBody?.bgPattern} 4%,
			transparent 4%,
			transparent 96%
		),
		radial-gradient(
			circle at top center,
			${({ theme }) => theme?.mainBody?.backgroundLight},
			${({ theme }) => theme?.mainBody?.backgroundDark}
		);
`;

export const LayoutContainer = styled.div`
	width: 90%;
	max-width: 1296px;
	height: 86.66%;
	min-height: fit-content;
	max-height: 887.4px;
	display: flex;
	/* flex-wrap: wrap; */
	justify-content: center;
	align-items: center;
	position: relative;
`;

export const SidebarWrapper = styled.div`
	height: 90%;
	width: 0.625%;
	min-width: 72px;
	max-width: 75px;
	border-radius: 20px 0px 0px 20px;
	background-color: ${({ theme }) => theme.mainBody?.sidebarBg};

	@media (max-width: 635px) {
		width: 0px;
		min-width: unset;
		max-width: unset;
	}
`;

export const PageCard = styled.div`
	flex-grow: 1;
	flex-basis: 0;
	min-width: 500px;
	height: 100%;
	border-radius: 20px;
	background-color: ${({ theme }) => theme.mainBody?.cardBg};
	border-width: 0px 2px 2px 0px;
	border-style: solid;
	border-color: ${({ theme }) => theme.mainBody?.cardBorder};
	background-image: linear-gradient(
		195deg,
		${({ theme }) => theme.mainBody?.cardLight} 0%,
		${({ theme }) => theme.mainBody?.cardDark} 90%
	);

	@media (max-width: 635px) {
		width: 100%;
		min-width: unset;
		flex-grow: unset;
		flex-basis: unset;
	}
`;

export const SideMenuWrapper = styled.div`
	height: 90%;
	width: ${(props) => (props.$isActive ? '20%' : '0px')};
	min-width: ${(props) => (props.$isActive ? '216px' : 'unset')};
	max-width: ${(props) => (props.$isActive ? '240px' : 'unset')};
	display: ${(props) => (props.$isActive ? 'flex' : 'none')};
	border-radius: 0px 20px 20px 0px;
	background-color: ${({ theme }) => theme.mainBody?.sideMenu};

	@media (max-width: 1150px) {
		width: 0px;
		min-width: unset;
		max-width: unset;
	}
`;

export const SidebarSell = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
	padding-top: 25px;

    .wrapper {
        flex: 1;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 936px;
        max-height: 86.7%;
        overflow-y: auto !important;

        &::-webkit-scrollbar {
            width: 6px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: rgb(166, 171, 183, 0.7);
            border-radius: 40px;
        }
        &::-webkit-scrollbar-track {
            background-color: transparent;
        }
    }
`;

export const RoutersBox = styled.ul`
    width: 84%;
    height: fit-content;
    max-height: 799px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
	border-bottom: 2px solid #51587b;
	padding-bottom: 5px;

    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgb(166, 171, 183, 0.7);
        border-radius: 40px;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
    gap: 5px;
`;

export const Options = styled.li`
    width: 100%;
    margin: 0;
    list-style: none;

    a {
        width: 100%;
        height: 56px;
        padding-block: 2px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        text-decoration: none;
        border-radius: 5px;
        transition: all 0.3s;
        gap: 2px;
        font-family: Outfit;
        font-size: 11.3px;
        font-weight: 700;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: center;
    }
`;

export const RoutersBoxFoot = styled.ul`
    margin-top: 10px;
    width: 84%;
    max-height: 144px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const OptionsFoot = styled.li`
    width: 100%;
    margin: 0;
    list-style: none;
    margin-bottom: 12px;

    a {
        width: 100%;
        height: 56px;
        padding-block: 2px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        text-decoration: none;
        border-radius: 5px;
        transition: all 0.3s;
        gap: 2px;
        font-family: Outfit;
        font-size: 11.3px;
        font-weight: 700;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: center;
    }

    button {
        width: 100%;
        height: 56px;
        padding-block: 2px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        text-decoration: none;
        border-radius: 5px;
        transition: all 0.3s;
        gap: 2px;
        font-family: Outfit;
        font-size: 11.3px;
        font-weight: 700;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: center;
    }
`;
