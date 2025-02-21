import styled from "styled-components";

export const ContainerSvg = styled.svg`
  width: ${(props) =>
    typeof props.width === "number" ? `${props.width}px` : props.width};
  height: ${(props) =>
    typeof props.height === "number" ? `${props.height}px` : props.height};
  color: ${(props) => props.color};
  pointer-events: none;
`;
