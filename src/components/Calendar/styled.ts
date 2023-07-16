import styled, { css } from "styled-components";

export const StyledCalendar = styled.div`
  width: 90%;

  > div {
    width: 100%;

    select {
      width: min-content;

      color: #31394d;
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      border: none;
    }
  }

  h4 {
    color: #31394d;

    /* Заголовок */
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .react-calendar__month-view__weekdays__weekday {
    margin-bottom: 12px;
    abbr {
      color: #748aa1;
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      text-decoration: none;

      text-transform: capitalize;
    }
  }

  .react-calendar__tile--now {
    abbr {
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: var(--total-withe);
      color: var(--total-black);
    }
    border-radius: 5px;
    border: 0px solid #878282;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  }

  .react-calendar__navigation {
    display: none;
  }

  .react-calendar {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .react-calendar__month-view__weekdays {
    color: #b8c5d3;
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -1px;
  }

  .react-calendar__month-view__days {
    gap: 11px;

    > button {
      width: 30px;
      flex: 1;
    }
    .react-calendar__month-view__days__day--neighboringMonth {
      opacity: 0;
      > abbr {
        display: none;
      }

      transition: 0.2s;
    }

    .react-calendar__month-view__days__day--neighboringMonth:hover {
      opacity: 80%;
      > abbr {
        display: inline-block;
      }
    }

    .react-calendar__tile {
      max-width: 30px;
      max-height: 30px;
      min-height: 30px;

      border-radius: 5px;

      text-align: center;
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -1px;
    }

    .react-calendar__month-view__days__day {
      background-color: #e5e9f2;
      color: #748aa1;
    }
  }

  > div {
    margin-top: 20px;

    display: flex;
    justify-content: space-between;

    > p {
      color: #31394d;
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

export const StyledDay = styled.button<{ now?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  color: var(--grey30);

  ${({ now }) =>
    now
      ? css`
          background: var(--withe25);
        `
      : css`
          background: var(--total-withe);
          border-radius: 5px;
          border: 0px solid #878282;
          box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
        `}

  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1px;
`;

export const StyledWeekDays = styled.span``;
