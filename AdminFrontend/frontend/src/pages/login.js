import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Login() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setloginStatus] = useState(true);

  const navigate = useNavigate();

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response.data);
      if (response.data.length > 0) {
        alert("Login Success");
        console.log("login loginStatus " + loginStatus);

        setloginStatus(true);
        navigate(`/details`);
      } else {
        alert("User is not found!");
      }
    });
  };

  return (
    <div>
      <MDBContainer fluid className="p-4">
        <MDBRow>
          <h1
            className="px-3 display-3 fw-bold ls-tight px-3"
            style={{ color: "hsl(218, 81%, 95%)" }}
          >
            Get Status of Computers <br />
          </h1>

          <p className="px-5" style={{ color: "hsl(218, 81%, 85%)" }}>
            Identify orgnization computer's performance according to
            applications that consume system CPU.
          </p>

          <MDBCard className="my-5 bg-glass">
            <MDBCardBody className="p-5">
              <h4>Sign Into Your Account</h4>

              <MDBInput
                wrapperClass="mb-4"
                label="User Name"
                id="form3"
                type="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />

              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form4"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <Button variant="warning" onClick={login}>
                SIGN IN
              </Button>
            </MDBCardBody>
          </MDBCard>

          <MDBCard className="my-5 bg-glass">
            <MDBCardBody className="p-5">
              <h4>Create an Account</h4>

              <MDBInput
                wrapperClass="mb-4"
                label="User Name"
                id="form3"
                type="username"
                onChange={(e) => {
                  setUsernameReg(e.target.value);
                }}
              />

              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form4"
                type="password"
                onChange={(e) => {
                  setPasswordReg(e.target.value);
                }}
              />

              <Button variant="warning" onClick={register}>
                SIGN UP
              </Button>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
