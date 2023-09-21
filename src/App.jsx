import "./App.css";
import Grandpa from "./components/Grandpa/Grandpa";
// import HookForm from "./components/HookForm/HookForm";
// import ReusableForm from "./components/ReusableForm/ReusableForm";
// import RefForm from "./components/RefForm/refForm";
// import SimpleForm from "./components/SimpleForm/SimpleForm";
// import StatefulForm from "./components/StatefulForm/StatefulForm";

function App() {
  // const handleSignUpSubmit = (data) => {
  //   console.log("sign up data", data);
  // };

  // const handleUpdateProfile = (data) => {
  //   console.log("update profile", data);
  // };
  return (
    <>
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
        <div>
          <h1>Sign Up</h1>
          <p>This is sign up form</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={"Create Account"}
        submitButtontext="Update"
        handleSubmit={handleUpdateProfile}
      >
        <div>
          <h1>Update Form</h1>
          <p>This is update form</p>
        </div>
      </ReusableForm> */}
    </>
  );
}

export default App;
