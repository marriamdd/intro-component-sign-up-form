import { useState } from "react";
import styled from "styled-components";

import Globals from "./globalStyles/Globals";
import Intro from "./components/Intro";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Globals />
      <Intro />
    </>
  );
}

export default App;
