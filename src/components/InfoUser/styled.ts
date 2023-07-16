import styled from "styled-components";

export const Conteiner = styled.div`
  border-radius: 10px;
  background: var(--total-withe);

  width: calc(100% - 88px);
  height: 350px;

  margin: 13px 0 38px 0;

  padding: 27px;

  display: flex;

  .box {
    width: 435px;

    margin-left: 25px;

    border-radius: 11px;
    border: 1px solid var(--withe);

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledBoxDownload = styled.div`
  width: 195px;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 5px;

  h4 {
    color: #969dd1;
    font-family: Mulish;
    font-size: 13px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }

  svg {
    width: 16px;
    height: 18px;
    flex-shrink: 0;

    :hover {
      opacity: 50%;
    }
  }
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;

  .texts {
    gap: 7px;
    .imgUser {
      width: 124px;
      height: 115px;
      flex-shrink: 0;

      border-radius: 50px;

      margin: 25px 0 16px 0;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 185px;

    h3 {
      color: var(--grey50);

      /* Название проекта в виджите */
      font-family: Mulish;
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    h4 {
      color: var(--grey50);

      font-family: Mulish;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    h5 {
      color: #2a2a2a;

      /* Название проекта в виджите */
      font-family: Mulish;
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    h6 {
      color: var(--colorbrand1);
      font-family: Mulish;
      font-size: 13px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
    }
  }
`;

export const StyledBoxTextInfos = styled.div`
  width: 310px;
  margin-left: 25px;

  .textCollumns {
    display: flex;
    justify-content: space-between;

    .collumn2 {
      width: 88px;
    }
  }

  .double {
    width: 88px;
  }

  p {
    color: var(--grey50);

    font-family: Mulish;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin: 7px 0 14px 0;
  }

  h3 {
    color: var(--grey50);

    font-family: Mulish;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const StyledScrollBar = styled.div`
  width: 90%;
  height: 328px;

  overflow-y: scroll;
  scroll-behavior: smooth;

  h3 {
    width: 80%;
    color: var(--grey50);

    margin-bottom: 23px;
    margin-top: 23px;

    /* Название проекта в виджите */
    font-family: Mulish;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  h4 {
    color: #848282;

    /* Название проекта в виджите */
    font-family: Mulish;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  ul {
    height: max-content;
    display: flex;
    flex-direction: column;

    list-style: none;
    width: 80%;

    li {
      padding: 9px;
      border-bottom: 1px solid #f3f3f3;
    }
  }
`;
