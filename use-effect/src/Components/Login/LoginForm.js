import { useState, useEffect } from "react";

function LoginForm(props) {
  let [inputEmail, updateInputEmail] = useState("");
  let [inputPassword, updateInputPassword] = useState("");
  let [isFormValid, updateIsFormValid] = useState(false);
  function onLogin() {
    props.loginView();
  }

  useEffect(() => {
    let value = setTimeout(() => {
      console.log("typing...");
      updateIsFormValid(
        inputEmail.includes("@") && inputPassword.trim().length > 8
      );
    }, 500);
    return () => {
      console.log("\nCleanup fuction executing");
      clearTimeout(value);
    };
  }, [inputEmail, inputPassword]);

  return (
    <form className="row g-2" onSubmit={onLogin}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        className="form-control "
        id="name"
        placeholder="Email"
        style={{ width: "100%" }}
        value={inputEmail}
        required
        onChange={(event) => updateInputEmail(event.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        className="form-control"
        id="password"
        placeholder="Password"
        style={{ width: "100%" }}
        value={inputPassword}
        onChange={(event) => updateInputPassword(event.target.value)}
      />
      <button className="btn btn-primary" disabled={!isFormValid} type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
