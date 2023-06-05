import { React, useState } from "react";
import "./Login.css";
import LoginImg from "../../assets/images/login.svg";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { useNavigate } from "react-router-dom";
import { Snackbar } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState(false);
  const [openSnackbarError, setOpenSnackbarError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, password);

    // Send a POST request to the login endpoint with the user's credentials
    const response = await fetch("http://128.199.234.179:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: email, password: password }),
    });

    // If the request was successful, the API will return a JWT in the response
    if (response.ok) {
      const json = await response.json();
      window.localStorage.setItem("userData", JSON.stringify(json.data));
      // Store the JWT in local storage
      window.localStorage.setItem("token", json.token);

      setOpenSnackbarSuccess(true);
      navigate("/dashboard", { replace: true });
    } else {
      setErrorMessage("email and password invalid.");
      setOpenSnackbarError(true);
    }
  };

  return (
    <div className="Container">
      <div className="LogoImg">
        <img src={LoginImg} alt="" />
      </div>

      <form className="FormDiv" onSubmit={handleSubmit}>
        <h2 className="SignInText">Sign In</h2>

        <Snackbar
          open={openSnackbarSuccess}
          autoHideDuration={6000}
          onClose={() => {
            setOpenSnackbarSuccess(false);
            setErrorMessage(null);
          }}
          message="You are successfully logged in."
        />
        <Snackbar
          open={openSnackbarError}
          autoHideDuration={6000}
          onClose={() => {
            setOpenSnackbarError(false);
          }}
          message={errorMessage}
        />
        {/* Input Email */}
        <div className="Input">
          <MailOutlineIcon className="Icon" />
          <input
            className="Name"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {/* Input Password */}
        <div className="Input" style={{ paddingTop: "25px" }}>
          <VpnKeyIcon className="Icon" />
          <input
            className="Name"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* Sign In Btn */}
        <button className="SignIn-Btn" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
