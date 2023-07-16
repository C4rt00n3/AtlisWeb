import Link from "../Link";
import { StyledAside } from "./styled";
import functions from "../../assets/functions.svg";
import {
  ClientsSvg,
  ConfigSvg,
  CuponSvg,
  ExamesSvg,
  FaturamentoSvg,
  PainelSvg,
  PedidosSvg,
  RelatorioSvg,
} from "../Incons";

const data = [
  {
    text: "Painel",
    icon: {
      alt: "Um grafico com com sinais de subida",
      link: <PainelSvg />,
      href: "",
    },
  },
  {
    text: "Pedidos Anterio..",
    icon: {
      alt: "um icone que para ir para os pedidos anteriores",
      link: <PedidosSvg />,
      href: "",
    },
  },
  {
    text: "Faturamento...",
    icon: {
      alt: "um icone de um cartão de credito",
      link: <FaturamentoSvg />,
      href: "",
    },
  },
  {
    text: "Exames",
    icon: {
      alt: "um icone de folha",
      link: <ExamesSvg />,
      href: "",
    },
  },
  {
    text: "Clients",
    icon: {
      alt: "um icone de um usuário",
      link: <ClientsSvg />,
      href: "",
    },
  },
  {
    text: "Relatórios",
    icon: {
      alt: "um icone de relatorio",
      link: <RelatorioSvg />,
      href: "",
    },
  },
  {
    text: "Cupons",
    icon: {
      alt: "um icone de medalha",
      link: <CuponSvg />,
      href: "",
    },
  },
  {
    text: "Configurações",
    icon: {
      alt: "um icone de um de uma catraca",
      link: <ConfigSvg />,
      href: "",
    },
  },
];

export default function Aside() {
  return (
    <StyledAside>
      <div>
        {data.map((e, i) => (
          <Link key={i} Icon={e.icon} text={e.text} />
        ))}
      </div>
      <img src={functions}></img>
    </StyledAside>
  );
}
