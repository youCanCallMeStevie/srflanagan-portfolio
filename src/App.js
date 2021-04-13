import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "./styles/themes";
import {CV, BarNav, Footer} from "./Components"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const [theme, setTheme] = useState("light");

  
  return (
    <>
    <ThemeProvider theme={themes[theme]}>
    <Router>

      <BarNav theme={theme} setTheme={setTheme}/>
      <CV theme={theme} setTheme={setTheme}/>
      <Footer theme={theme} setTheme={setTheme}/>
      </Router>
      </ThemeProvider>
</>
  );
}

export default App;
