import styled from "styled-components";

export const Container = styled.div`
  color: aliceblue;
  font-family: Outfit;

  #model {
    width: 100%;
    height: auto;
    min-height: 200px;
    padding-bottom: 25px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    background-color: #10152b;

    .cancel {
      transform: translateY(5px);
      padding-right: 18px;
      color: #747ea1;
    }

    .body_wrapper {
      width: 100%;
      flex-direction: column;
      align-items: center;
      display: flex;
      padding-inline: 35px;

      @media (max-width: 500px) {
        padding-inline: 10%;
      }
    }

    .heading {
      width: 100%;
      padding-right: 30px;
      font-size: 20px;
      font-weight: 600;
      line-height: 30.24px;
      color: #ffffff;

      @media (max-width: 500px) {
        padding-inline: 6%;
      }
    }

    .heading_sm {
      width: 100%;
      padding-right: 30px;
      font-size: 13px;
      font-weight: 600;
      line-height: 20px;
      color: #ffffff;

      @media (max-width: 500px) {
        padding-inline: 6%;
      }
    }

    form {
      margin-top: 40px;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 5px;
      padding-bottom: 35px;

      #btnSub {
        padding-block: 15px;
        margin-top: 30px;
      }

      #name,
      #email,
      #password {
        background-color: #1d243a;
      }

      .my_password,
      .My_select .displayValue {
        background-color: #1d243a;
      }
    }
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
