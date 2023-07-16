import { StyledBoxIcons, StyledBoxInfoUser, StyledHeader } from "./styled";
import sine from "../../assets/sine.svg";
import mesage from "../../assets/mesage.svg";
import user from "../../assets/userPhoto.png";

export default function Header() {
  return (
    <StyledHeader>
      <p>Painel gerencial</p>
      <div>
        <StyledBoxIcons>
          <img src={sine} alt="um sino de alerta" />
          <img src={mesage} alt="uma carta " />
        </StyledBoxIcons>

        <StyledBoxInfoUser>
          <img src={user} alt="" />
          <div>
            <h4>Carlos Monteiro</h4>
            <p>carto@emal.com</p>
          </div>
        </StyledBoxInfoUser>
      </div>
    </StyledHeader>
  );
}
