import CardContact from "../CardContact";
import { StyledAlert, StyledConteiner } from "./styled";

export default function Contacts() {
  const filters = [
    "Concluídos",
    "Pendentes",
    "Pendentes",
    "Em antedimento",
    "Cancelados",
  ];

  const contacts = [
    {
      name: "Rafaela Porto",
      email: "alex@gzp.ru",
      color: "var(--green)",
    },
    {
      name: "Maria Gadu",
      email: "mar134@gzp.ru",
    },
    {
      name: "Ivete sangalo",
      email: "zip45@gzp.ru",
      color: "var(--orange)",
    },
  ];

  return (
    <StyledConteiner>
      <StyledAlert>
        <h3>Chamados(16)</h3>
        <select value="Filtrar" name="filters" id="filters">
          {filters.map((e, i) => (
            <option key={i} value={e}>
              {e}
            </option>
          ))}
        </select>
      </StyledAlert>

      <ul>
        {contacts.map((e, i) => (
          <CardContact key={i} index={i} user={e} />
        ))}
      </ul>
    </StyledConteiner>
  );
}
