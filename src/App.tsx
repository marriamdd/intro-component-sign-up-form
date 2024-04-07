import Globals from "./globalStyles/Globals";
import Intro from "./components/Intro";
import Suggest from "./components/Suggest";
import FormValidation from "./components/FormValidation";

function App() {
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
