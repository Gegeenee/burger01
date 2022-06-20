import React from "react";

import css from "./style.module.css";

import Toolbar from "../../components/Toolbar";
import Burgerbuilder from "../Burgerbuilder";

function App() {
  return(
  <div>
      <Toolbar />
      <main className={css.Content}>
        <Burgerbuilder />
      </main>
  </div>
  );
}

export default App;
