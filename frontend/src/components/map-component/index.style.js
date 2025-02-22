import styled from "styled-components";

export const MapWrapper = styled.div`
  border-radius: 0px;
  width: ${(props) =>
    typeof props.width === "number" ? `${props.width}px` : props.width};
  height: ${(props) =>
    typeof props.height === "number" ? `${props.height}px` : props.height};
`;
