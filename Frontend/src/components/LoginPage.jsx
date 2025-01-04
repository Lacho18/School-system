import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

export default function LoginPage() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    role: type,
  });

  const style = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  function changesHandler(e) {
    setLoginData((oldValue) => {
      return { ...oldValue, [e.target.name]: e.target.value };
    });
  }

  async function submitHandler() {
    const response = await axios.get(
      "http://localhost:3000/login/?data=" +
        encodeURIComponent(JSON.stringify(loginData))
    );

    if (response.status === 200) {
      navigate("/student/" + response.data.user.fak_number);
    }

    console.log(response);
  }

  return (
    <div className="main">
      <p className="title">Login page</p>
      <p className="subTitle">
        Log in to your account in order to use the system functionalities
      </p>
      <div style={style}>
        <div className="inputField">
          <label htmlFor="username">
            Enter your{" "}
            {type === "students"
              ? "Fak. number"
              : type === "teachers"
              ? "teacher number"
              : "administrator ID"}
          </label>
          <input
            type="text"
            name="username"
            onChange={(e) => changesHandler(e)}
          />
        </div>
        <div className="inputField">
          <label htmlFor="password">Enter your password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => changesHandler(e)}
          />
        </div>

        <button onClick={submitHandler}>Log in</button>
      </div>
    </div>
  );
}
