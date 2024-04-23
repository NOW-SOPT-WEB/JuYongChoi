import { Global, ThemeProvider } from "@emotion/react";
import { GlobalStyle } from "./styles/GlobalStyle";
import Main from "./pages/Home";
import { Theme } from "./styles/theme/theme";
import { LevelInfoProvider } from "./context/Level";

function App() {
  return (
    <>
      <LevelInfoProvider>
        <ThemeProvider theme={Theme}>
          <Global styles={GlobalStyle} />
          <Main />
        </ThemeProvider>
      </LevelInfoProvider>
    </>
  );
}

export default App;
