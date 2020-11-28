import React from "react";
import {ThemeProvider} from "styled-components";
import Theme from "../styles/Theme";
import GlobalStyles from "../styles/GlobalStyles";

const App = () => {
    return <ThemeProvider theme={Theme}>
        <GlobalStyles/>
        <div>Hello World</div>
    </ThemeProvider>
}

export default App;