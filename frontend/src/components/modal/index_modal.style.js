import styled from 'styled-components';

export const LeftDialog = styled.dialog`
	width: 100%;
	height: 100%;
	margin: auto;
	position: fixed;
	z-index: 500;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.4);
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 0px;
		height: 3px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: rgb(166, 171, 183, 0.7);
		border-radius: 40px;
	}
	&::-webkit-scrollbar-track {
		background-color: transparent;
	}
`;

export const LeftSell = styled.div`
	background-color: transparent;
	padding-block: ${(props) => props.$borderPaddingY || '40px'};
	width: ${(props) => props.width};
	height: 100%;
	overflow-x: hidden;
	visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};
	border: 0px solid transparent;
	margin-left: 0;
	transform: ${(props) =>
		props.$animation
			? props.$isOpen
				? 'translate3d(-600px, 0, 0)'
				: 'translate3d(-600px, 0, 0)'
			: 'unset'};
	transition: all 0.6s;
	transition-timing-function: ease;

	/* @media (min-width: 1440px) {
		margin-right: 0;
		margin-left: 0;
		left: 50%;
		margin-left: calc(-1440px / 2);
	} */
`;

export const CenterDialog = styled.dialog`
	width: 100%;
	height: 100%;
	margin: auto;
	position: fixed;
	z-index: 500;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.4);
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 0px;
		height: 3px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: rgb(166, 171, 183, 0.7);
		border-radius: 40px;
	}
	&::-webkit-scrollbar-track {
		background-color: transparent;
	}
`;

export const CenterShell = styled.div`
	background-color: transparent;
	padding-block: ${(props) => props.$borderPaddingY || '30px'};
	width: ${(props) => props.width};
	max-width: ${(props) => (props.$maxWidth ? props.$maxWidth : 'unset')};
	overflow-x: hidden;
	visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};
	border: 0px solid transparent;
	margin: auto;
	margin-top: 5vh;

	@media (max-width: ${(props) => props.$mediaQuery || '500px'}) {
		width: ${(props) => (props.$queryWidth ? props.$queryWidth : props.width)};
	}
`;

export const BottomDialog = styled.dialog`
	width: 100%;
	height: 100%;
	margin: auto;
	position: fixed;
	z-index: 500;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.4);
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 0px;
		height: 3px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: rgb(166, 171, 183, 0.7);
		border-radius: 40px;
	}
	&::-webkit-scrollbar-track {
		background-color: transparent;
	}
`;

export const BottomSell = styled.div`
	background-color: transparent;
	padding-block: ${(props) => props.$borderPaddingY || '40px'};
	width: 100%;
	height: ${(props) => props.height};
	overflow-x: hidden;
	visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};
	border: 0px solid transparent;
	/* margin-top: calc(100vh - ${(props) => props.height}); */
	margin-bottom: 0;
	transform: ${(props) =>
		props.$animation
			? props.$isOpen
				? 'translate3d(0, 0, 0)'
				: 'translate3d(0, 600px, 0)'
			: 'unset'};
	transition: transform 0.6s;
	transition-timing-function: ease;

	@media (min-width: 451px) and (max-width: 744px) {
		/* margin-top: calc(100vh - ${(props) => props.height} - 90px); */
		margin-bottom: 90px;
	}

	@media (min-width: 361px) and (max-width: 450px) {
		/* margin-top: calc(100vh - ${(props) => props.height} - 90px); */
		margin-bottom: 90px;
	}

	@media (max-width: 360px) {
		/* margin-top: calc(100vh - ${(props) => props.height} - 70px); */
		margin-bottom: 70px;
	}
`;
