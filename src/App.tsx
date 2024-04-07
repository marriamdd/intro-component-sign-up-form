import { useState } from "react";
import styled from "styled-components";

import Globals from "./globalStyles/Globals";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Globals />
    </>
  );
}

export default App;
