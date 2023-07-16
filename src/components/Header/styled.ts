import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 90%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 5% 0 5%;

  background-color: var(--colorbrand1);
  color: var(--total-black);

  > p {
    color: var(--total-withe);

    /* Заголовок */
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  > div {
    display: flex;

    gap: 73px;
  }
`;

export const StyledBoxInfoUser = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;

  img {
    border-radius: 50%;
  }

  div {
    h4 {
      color: var(--total-black);
      text-align: right;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
    }
    p {
      margin-left: 10px;

      color: var(--withe);
      text-align: right;
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

export const StyledBoxIcons = styled.div`
  display: flex;
  align-items: center;

  gap: 36.16px;
`;
