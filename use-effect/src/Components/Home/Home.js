import React from "react";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h3>Hello User. Welcome back!</h3>
    </Card>
  );
};

export default Home;

// function Home(props) {
//   return (
//     <>
//       <button
//         style={{
//           fontSize: 20,
//           right: 30,
//           top: 30,
//           position: "fixed",
//           background: "transparent",
//           border: "0px",
//           opacity: 0.6,
//         }}
//         onClick={props.loginView}
//       >
//         Logout
//       </button>
//       <h1 style={{ padding: 10 }}>Welcome back.</h1>
//       <h3 style={{ padding: 3 }}> You are Logged in!</h3>
//     </>
//   );
// }

// export default Home;
