import styled from "styled-components";

export const StyledConteiner = styled.div`
  width: 90%;

  margin-bottom: 54px;
`;

export const StyledAlert = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    color: var(--blue);

    /* Заголовок */
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  select {
    width: max-content;
    border: none;

    color: var(--primary25);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
