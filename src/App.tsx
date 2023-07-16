import { useState } from "react";
import StyleGlobal from "../styles/global.styles";
import { ThemeProvider } from "styled-components";
import light from "../styles/theme/light";
import dark from "../styles/theme/dark";
import RoutesMain from "./routes/routes";

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <ThemeProvider theme={theme ? light : dark}>
      <StyleGlobal />
      <RoutesMain />
    </ThemeProvider>
  );
}

export default App;
