import {
  Conteiner,
  StyledBox,
  StyledBoxDownload,
  StyledBoxTextInfos,
  StyledScrollBar,
} from "./styled";
import pdf from "../../assets/pdfIcon.svg";
import user from "../../assets/contact(4).png";

export default function InfoUser() {
  const data = [
    "01 - COVID19 - SARS 154",
    "01 - COVID19 - SARS 154",
    "01 - COVID19 - SARS 154",
    "01 - COVID19 - SARS 154",
    "01 - COVID19 - SARS 154",
    "01 - COVID19 - SARS 154",
  ];

  return (
    <Conteiner>
      <StyledBox>
        <StyledBoxDownload>
          <img src={pdf} alt="um pdf icon" />
          <h4>Download do pedido</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
          >
            <path
              d="M15 6H11V0H5V6H1L8 14L15 6ZM0 16H16V18H0V16Z"
              fill="#969DD1"
            />
          </svg>
        </StyledBoxDownload>
        <div className="texts">
          <img className="imgUser" src={user} alt="foto do usuário" />

          <h3>María Clara</h3>
          <h4>000.000.000-00</h4>
          <h5>Status atual</h5>
          <h6>Aguardando coleta</h6>
        </div>
      </StyledBox>
      <StyledBoxTextInfos>
        <div className="textCollumns">
          <h3>Forma de pagamento</h3>
          <h3 className="collumn2">Parcelamento</h3>
        </div>
        <div className="textCollumns">
          <p>Online</p>
          <p className="double">1x</p>
        </div>
        <h3>Endereço da coleta</h3>
        <p>Rua Oscar silva, 15 - Candeias, Vitória da Conquista BA</p>
        <h3>Complemento</h3>
        <p>Perto da esquina</p>
        <h3>Telefone</h3>
        <p>77 9999-9999</p>
      </StyledBoxTextInfos>
      <div className="box">
        <StyledScrollBar>
          <ul>
            <h3 className="group">Coletas:</h3>
            {data.map((e, i) => (
              <li key={i}>
                <h4>{e}</h4>
              </li>
            ))}
          </ul>
          <h3>
            {data.length >= 1 && data.length < 10
              ? `0${data.length} `
              : data.length}
            ítens
          </h3>
          <ul>
            {data.map((e, i) => (
              <li key={i}>
                <h4>{e}</h4>
              </li>
            ))}
          </ul>
        </StyledScrollBar>
      </div>
    </Conteiner>
  );
}
