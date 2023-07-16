import { StyledBoxIcons, StyledLembrete } from "./styled";
import { AiFillSetting } from "react-icons/ai";
import Alert from "../../assets/alert.svg";

export default function Lembrete({
  item,
}: {
  item: { title: string; count: number; color: string; colorSecundary: string };
}) {
  const format = (number: number) => {
    if (number >= 1 && number <= 9) {
      return 0 + number.toString();
    }

    return number.toString();
  };
  return (
    <StyledLembrete color={item.color}>
      <div className=".info">
        <h4>{item.title}</h4>
        <h2>{format(item.count)}</h2>
      </div>
      <StyledBoxIcons colorSecundary={item.colorSecundary}>
        <AiFillSetting />
        <img src={Alert} />
      </StyledBoxIcons>
    </StyledLembrete>
  );
}
