import Lembrete from "../Lembrete";
import {
  StyledAtendimentos,
  StyledBoxTopAtendimento,
  StyledList,
  StyledListClients,
  SyledTopColumns,
} from "./styled";
import { AiFillSetting } from "react-icons/ai";
import contacts from "../../assets/contact(4).png";
import { BiDownload } from "react-icons/bi";
import { CgEyeAlt } from "react-icons/cg";
import { MdDelete } from "react-icons/md";

const alerts = [
  {
    title: "Cancelados",
    count: 9,
    color: "#8DC643",
    colorSecundary: "#1C8B67",
  },
  {
    title: "Em antedimento",
    count: 1,
    color: "#FF9838",
    colorSecundary: "#B96C24",
  },
  {
    title: "Agendados",
    count: 1,
    color: "#767DF4",
    colorSecundary: "#2B4FAB",
  },
  {
    title: "Pendentes",
    count: 3,
    color: "#FFD5A9",
    colorSecundary: "#E78B49",
  },

  {
    title: "Concluídos",
    count: 2,
    color: "#F65858",
    colorSecundary: "rgba(181, 62, 62, 1)",
  },
];

const user = [
  {
    img: contacts,
    name: "Maria Clara",
    type: "Dominicial",
    time: "13:45",
    status: "Aguardando Coleta",
    date: "08-12-2020",
  },
  {
    img: contacts,
    name: "Maria Clara",
    type: "Dominicial",
    time: "13:45",
    status: "Aguardando Coleta",
    date: "08-12-2020",
  },
  {
    img: contacts,
    name: "Maria Clara",
    type: "Dominicial",
    time: "13:45",
    status: "Aguardando Coleta",
    date: "08-12-2020",
  },
  {
    img: contacts,
    name: "Maria Clara",
    type: "Dominicial",
    time: "13:45",
    status: "Aguardando Coleta",
    date: "08-12-2020",
  },
  {
    img: contacts,
    name: "Maria Clara",
    type: "Dominicial",
    time: "13:45",
    status: "Aguardando Coleta",
    date: "08-12-2020",
  },
  {
    img: contacts,
    name: "Maria Clara",
    type: "Dominicial",
    time: "13:45",
    status: "Aguardando Coleta",
    date: "08-12-2020",
  },
  {
    img: contacts,
    name: "Maria Clara",
    type: "Dominicial",
    time: "13:45",
    status: "Aguardando Coleta",
    date: "08-12-2020",
  },
];

export default function Atendimentos() {
  return (
    <StyledAtendimentos>
      <StyledBoxTopAtendimento>
        <h3>Atendimentos</h3>
        <AiFillSetting fill={"rgba(187, 208, 226, 0.50)"} />
      </StyledBoxTopAtendimento>
      <StyledList>
        {alerts.map((item, index) => (
          <Lembrete key={index} item={item} />
        ))}
      </StyledList>
      <SyledTopColumns>
        <h4>Cliente</h4>
        <h4>Horário da Coleta</h4>
        <h4>Coleta</h4>
      </SyledTopColumns>
      <StyledListClients>
        <div>
          {user.map((e, i) => (
            <li key={i}>
              <img src={e.img} alt={"imagem do client" + e.name} />
              <h4>{e.name}</h4>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="6"
                  viewBox="0 0 7 6"
                  fill="none"
                >
                  <ellipse
                    cx="3.66927"
                    cy="3"
                    rx="3.20565"
                    ry="3"
                    fill="#6B2B58"
                  />
                </svg>
                <p>{e.type}</p>
              </div>
              <p className="time">{e.time}</p>
              <p className="date">{e.date}</p>
              <div className="boxButton">
                <button>
                  <BiDownload />
                </button>
                <button>
                  <CgEyeAlt />
                </button>
                <button>
                  <MdDelete />
                </button>
              </div>
            </li>
          ))}
        </div>
      </StyledListClients>
    </StyledAtendimentos>
  );
}
