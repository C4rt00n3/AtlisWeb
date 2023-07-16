import Aside from "../../components/Aside";
import Atendimentos from "../../components/Atendimentos";
import Calendar from "../../components/Calendar";
import Contacts from "../../components/Contacts";
import Header from "../../components/Header";
import InfoUser from "../../components/InfoUser";
import {
  StyledBoxContent,
  StyledBoxMural,
  StyledConteiner,
  SyledBoxCalendar,
} from "./styled.home";

export default function Home() {
  return (
    <StyledConteiner>
      <Header />
      <StyledBoxContent className="boxContent">
        <Aside />
        <SyledBoxCalendar>
          <Calendar />
          <Contacts />
        </SyledBoxCalendar>
        <StyledBoxMural>
          <Atendimentos />
          <InfoUser />
        </StyledBoxMural>
      </StyledBoxContent>
    </StyledConteiner>
  );
}
