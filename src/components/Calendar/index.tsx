import { useState } from "react";
import { StyledCalendar } from "./styled";
import Calendar from "react-calendar";

export default function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  function adicionarZeros(numero: number) {
    if (numero > 0 && numero < 10) {
      return 0 + numero.toString();
    } else {
      return numero.toString();
    }
  }

  const editDate = (e: string) => {
    const newDate = months.findIndex((m) => m == e);
    return newDate;
  };

  return (
    <StyledCalendar>
      <div>
        <h4>Agenda</h4>
        <div>
          <select
            onChange={(e) => {
              setDate(
                new Date(
                  date.getFullYear(),
                  editDate(e.target.value),
                  date.getUTCDate()
                )
              );
            }}
            value={months[date.getMonth()]}
            name="date"
            id=""
          >
            {months.map((month, i) => (
              <option key={i} value={month}>
                {month} de {date.getFullYear()}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Calendar
        onClickDay={setDate}
        showNavigation={false}
        value={date}
        className={"calendar"}
      />
    </StyledCalendar>
  );
}
