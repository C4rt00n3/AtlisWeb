import styled from "styled-components";

export const StyledLink = styled.div`
  a {
    width: 165px;
    height: 39px;

    padding-left: 9px;

    display: flex;
    align-items: center;

    gap: 24px;

    img {
      color: var(--grey);
    }

    :hover {
      svg {
        color: var(--primary);

        path {
          color: var(--primary);
        }
      }
    }
    svg {
      color: var(--grey55);
    }

    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    text-decoration: none;
    border-radius: 4px;
  }
`;
