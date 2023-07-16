import styled from "styled-components";

export const StyledCardContact = styled.li<{ color?: string }>`
  margin-top: 23px;

  width: 100%;
  height: 52px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 10px;
  }
  h4 {
    color: var(--grey50);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  p {
    color: var(--grey10);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  > img {
    width: 52px;
    height: 52px;

    border-radius: 50%;
  }

  svg {
    width: 27px;
    height: 27px;

    color: ${({ color }) => (color ? color : "var(--grey5")};

    :hover {
      opacity: 70%;
    }
  }
`;
