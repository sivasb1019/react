import React, { useContext } from "react";

import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import MainHeader from "./Components/MainHeader/MainHeader";
import Demo from "./Components/ReducerDemo/Demo";
import AuthContext from "./Components/Context/AuthContext";

function App() {
  let ctx = useContext(AuthContext);
  return (
    <>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </>
  );
}

// export default App;

// import { useState } from "react";

// function App() {
//   let [resourceType, setResourceType] = useState("Home");
//   return (
//     <div className="App">
//       <button onClick={() => setResourceType("Home")}>HOME</button>
//       <button onClick={() => setResourceType("About")}>ABOUT</button>
//       <button onClick={() => setResourceType("Contact")}>CONTACT</button>
//       <h3>{resourceType}</h3>
//     </div>
//   );
// }

// import MainHeader from "./Components/MainHeader/MainHeader";
// import Login from "./Components/Login/Login";
// import "./App.css";
//
// function App() {
//   return (
//     <>
//       <MainHeader />
//       <Login />
//     </>
//   );
// }

// import Demo from "./Components/ReducerDemo/Demo";

// function App() {
//   return <Demo />;
// }

export default App;
