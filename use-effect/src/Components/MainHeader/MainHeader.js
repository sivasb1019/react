import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>Demo React App</h1>
      <Navigation />
    </header>
  );
};

export default MainHeader;

// import "./MainHeader.css";

// function MainHeader() {
//   return (
//     <div className="app-header">
//       <h1>React Demo App</h1>
//     </div>
//   );
// }

// export default MainHeader;
