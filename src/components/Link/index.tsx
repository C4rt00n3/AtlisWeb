import { motion } from "framer-motion";
import { StyledLink } from "./styled";

export default function Link({
  text,
  Icon,
}: {
  text: string;
  Icon: {
    href: string;
    link: JSX.Element;
    alt: string;
  };
}) {
  return (
    <StyledLink>
      <motion.a
        href={Icon.href}
        initial={{ color: "var(--grey)" }}
        whileHover={{
          color: "var(--primary)",
          backgroundColor: "var(--houver-blue)",
        }}
      >
        {Icon ? Icon.link : <></>}
        {text}
      </motion.a>
    </StyledLink>
  );
}
