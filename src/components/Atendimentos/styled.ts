import styled from "styled-components";

export const StyledAtendimentos = styled.div`
  width: calc(100% - 40px);
  height: 500px;

  background-color: var(--total-withe);

  border-radius: 10px;
`;

export const StyledBoxTopAtendimento = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 27px;

  h3 {
    color: var(--grey50);
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  svg {
    width: 21px;
    height: 21px;

    color: var(--grey50);
  }
`;

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-left: 27px;

  gap: 18px;
`;

export const SyledTopColumns = styled.div`
  margin-bottom: 16px;
  width: 460px;
  display: flex;
  justify-content: space-between;

  color: var(--grey50);
  font-family: Roboto;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin: 27px 0 15px 27px;
`;

export const StyledListClients = styled.ul`
  display: flex;
  flex-direction: column;

  width: 95%;

  gap: 16px;
  overflow-y: auto;

  > div {
    display: flex;
    flex-direction: column;

    gap: 16px;

    overflow-y: scroll;
    max-height: 240px;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 27px;
    margin-right: 27px;

    margin-top: 1px;
    outline: var(--grey5) 1px solid;
    border-radius: 10px;

    padding: 5px 21px 5px 21px;

    .boxButton {
      svg {
        color: var(--withe);
      }
    }

    :hover {
      background-color: rgba(150, 246, 194, 1);
      outline: none;
    }

    > div {
      display: flex;
      align-items: center;

      gap: 8px;

      color: var(--grey50);
      font-family: Roboto;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    h4 {
      color: var(--grey50);

      /* Название проекта в виджите */
      font-family: Mulish;
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    .date {
      color: var(--grey);
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .time {
      color: var(--grey50);
      font-family: Roboto;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  > div > li > img {
    width: 40px;
    height: 40px;

    border-radius: 50px;

    margin-right: 10px;
  }

  .boxButton {
    display: flex;
    gap: 16px;
  }

  button {
    background: none;

    width: 20px;
    height: 20px;

    svg {
      color: var(--grey5);
      width: 100%;
      height: 100%;
    }
  }
`;
