import { StyledCardContact } from "./styled";
import { AiFillMessage } from "react-icons/ai";
import contact1 from "../../assets/contact(1).png";
import contact2 from "../../assets/contact(2).png";
import contact3 from "../../assets/contact(3).png";

const constacts = [contact1, contact2, contact3];

export default function CardContact({
  user,
  index,
}: {
  user: {
    name: string;
    email: string;
    color?: string;
  };
  index: number;
}) {
  return (
    <StyledCardContact color={user.color}>
      <div>
        <img src={constacts[index]} alt="imagem de um usuário" />
        <div>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      </div>
      <AiFillMessage />
    </StyledCardContact>
  );
}
