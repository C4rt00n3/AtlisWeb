import styled from "styled-components";

export const StyledConteiner = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: var(--withe);

  h1 {
    color: var(--total-black);
  }
`;

export const StyledBoxContent = styled.div`
  width: 100%;
  height: calc(100% - 100px);

  display: flex;
`;

export const SyledBoxCalendar = styled.div`
  width: 320px;
  height: calc(100% - 30px);

  margin: 15px 10px 15px 10px;
  background-color: var(--total-withe);

  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const StyledBoxMural = styled.div`
  width: 61%;

  margin-top: 15px;

  overflow-y: auto;

  svg {
    color: var(--total-withe);

    width: 10px;
    height: 10px;
  }
`;
