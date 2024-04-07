import { useState } from "react";
import styled from "styled-components";

import Globals from "./globalStyles/Globals";
import Intro from "./components/Intro";
import Suggest from "./components/Suggest";
import FormValidation from "./components/FormValidation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Globals />
      <Intro />
      <Suggest />
      <FormValidation />
    </>
  );
}

export default App;
