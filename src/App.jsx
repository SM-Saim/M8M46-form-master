import "./App.css";
import HookForm from "./components/HookForm/HookForm";
import ReusableForm from "./components/ReusableForm/ReusableForm";
// import RefForm from "./components/RefForm/refForm";
// import SimpleForm from "./components/SimpleForm/SimpleForm";
// import StatefulForm from "./components/StatefulForm/StatefulForm";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={"Sign Up"}></ReusableForm>
      <ReusableForm
        formTitle={"Create Account"}
        submitButtontext="Update"
      ></ReusableForm>
    </>
  );
}

export default App;
