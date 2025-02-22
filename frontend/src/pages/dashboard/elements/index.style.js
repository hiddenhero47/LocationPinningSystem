import styled from "styled-components";

export const Container = styled.div`
  color: aliceblue;
  font-family: Outfit;
`;

export const TableWrapper = styled.div`
    width: 100%;
    font-family: Outfit;

    th:has(.first),
    td:has(.first) {
        padding-left: 5px;
        display: flex;
        justify-content: center;
    }

    .method {
        padding-left: 5px;
    }
`;
