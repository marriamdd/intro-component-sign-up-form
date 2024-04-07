import Globals from "./globalStyles/Globals";
import Intro from "./components/Intro";
import Suggest from "./components/Suggest";
import FormValidation from "./components/FormValidation";
import styled from "styled-components";
function App() {
  return (
    <Main>
      <div>
        <Globals />
        <Intro />
      </div>
      <div>
        <Suggest />
        <FormValidation />
      </div>
    </Main>
  );
}

export default App;
const Main = styled.main`
  @media screen and (min-width: 768px) {
    justify-content: center;
    align-items: center;
    gap: 5rem;
    display: flex;
  }
`;
