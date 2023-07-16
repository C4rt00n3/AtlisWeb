import styled from "styled-components";

export const StyledLembrete = styled.li<{
  color: string;
}>`
  height: 80px;
  width: 17%;

  :hover {
    opacity: 70%;
  }

  border-radius: 10px;

  overflow: hidden;

  display: flex;
  justify-content: space-between;

  background-color: ${({ color }) => color};

  :hover svg,
  img {
    width: 10px;
    height: 10px;
  }

  > .info {
    width: calc(150px - 18px);
    height: 100%;
  }

  h2 {
    color: #fff;
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin-left: 15px;
  }

  h4 {
    color: #fff;
    font-family: Roboto;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin-left: 15px;
    margin-top: 12px;
  }
`;

export const StyledBoxIcons = styled.div<{ colorSecundary: string }>`
  background-color: ${({ colorSecundary }) => colorSecundary};
  width: 18px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 8px;
`;
