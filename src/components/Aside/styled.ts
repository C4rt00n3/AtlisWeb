import styled from "styled-components";

export const StyledAside = styled.aside`
  width: 205px;
  height: 100%;

  background-color: var(--total-withe);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  > div {
    margin: 50px 0 0 20px;
  }

  > img {
    width: 125px;
    height: 25px;

    margin-bottom: 52px;
  }

  :hover {
    img {
      color: var(--primary);
    }
  }
`;
