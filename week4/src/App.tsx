import { Global, ThemeProvider, css } from "@emotion/react";
import { Outlet } from "react-router-dom";
import { Theme } from "@styles/theme";
import { GlobalStyle } from "@styles/GlobalStyle";

const MainCenterView = css({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Global styles={GlobalStyle} />
        <main css={MainCenterView}>
          <Outlet />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
