import styled from "styled-components";

export const SingleCentered = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: #e4e8f1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0;
  margin: 0;

  background-image:
    radial-gradient(
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

  .heading {
    margin-inline: auto;
    display: flex;
    align-items: center;
    margin-top: 80px;

    i {
      height: 45px;
      width: 150px;
    }

    @media (max-width: 520px) {
      width: 100%;
      margin-left: 20px;
    }
  }

  .page {
    /* min-width: 34%; */
    max-width: 590px;
    width: 95%;
    height: fit-content;
    display: flex;
    border-radius: 25px;
    background-color: #10152b;
    margin-inline: auto;
    padding-inline: 1.8%;
    padding-block: 40px;
    margin-top: 40px;
  }

  .style_foot {
    width: 100%;
    min-height: 30px;
    display: flex;
  }
`;
