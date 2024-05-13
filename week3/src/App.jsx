import { Global, ThemeProvider } from "@emotion/react";
import { GlobalStyle } from "./styles/GlobalStyle";
import Main from "./pages/Home";
import { Theme } from "./styles/theme/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Global styles={GlobalStyle} />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
