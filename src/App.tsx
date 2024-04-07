import { useState } from "react";
import styled from "styled-components";

import Globals from "./globalStyles/Globals";
import Intro from "./components/Intro";
import Suggest from "./components/Suggest";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Globals />
      <Intro />
      <Suggest />
    </>
  );
}

export default App;
