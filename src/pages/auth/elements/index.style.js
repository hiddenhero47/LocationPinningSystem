import styled from "styled-components";

export const Container = styled.div`
  color: aliceblue;
  font-family: Outfit;
`;

export const PersonalDetailsWrapper = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-inline: 10%;
    padding-bottom: 30px;
    font-family: Outfit;
    letter-spacing: -0.30000001192092896px;

    @media (max-width: 500px) {
        padding-inline: 20px;
    }

    #continue {
        width: 100%;
        padding-block: 16px;
        margin-top: 40px;
    }

    input,
    #keyWord,
    .displayValue {
        padding-block: 17px;
        background-color: #10152B;
    }

    .style_header {
        font-size: 20px;
        font-weight: 600;
        line-height: 25.2px;
    }

    .style_sb_header {
        font-size: 15.5px;
        font-weight: 600;
        line-height: 20.16px;
    }

    .style_text {
        font-size: 12.5px;
        font-weight: 400;
        line-height: 17.64px;
    }

    .btn_back {
        font-size: 14px;
        font-weight: 400;
        line-height: 17.64px;
        padding-block: 4px;
        padding-inline: 10px;
        border-radius: 5px;
        border: 1px solid #0061e61f;
        color: #0061e6;
        background: #0061e60d;
        display: flex;
        align-items: center;
        gap: 5px;
    }
`;

export const BtnSell = styled.button`
  padding-block: 11px;
  padding-inline: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${(props) =>
    !props.$isLoading && props.disabled
      ? ({ theme }) => theme.submitBtn?.disabled
      : ({ theme }) => theme.submitBtn?.bgColor};
  position: relative;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      !props.disabled ? ({ theme }) => theme.submitBtn?.hoverBg : ""};
  }

  .content {
    display: flex;
    align-items: center;
    gap: 6px;
    visibility: ${(props) => (props.$isLoading ? "hidden" : "visible")};
    font-family: Outfit;
    font-size: 14px;
    font-weight: 400;
    line-height: 17.64px;
    color: ${({ theme }) => theme.submitBtn?.color};
  }

  .loader {
    display: ${(props) => (props.$isLoading ? "flex" : "none")};
    position: absolute;
    margin: auto;
    z-index: 2;
  }

  @media (max-width: 500px) {
    padding-block: 8px;
    padding-inline: 13px;

    .content {
      gap: 4px;
      font-size: 11px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: 0em;
    }
  }
`;
