import { useParams } from "react-router";

export default function LoginPage() {
  const { type } = useParams();

  const style = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

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
            {type === "student"
              ? "Fak. number"
              : type === "teacher"
              ? "teacher number"
              : "administrator ID"}
          </label>
          <input type="text" name="username" />
        </div>
        <div className="inputField">
          <label htmlFor="password">Enter your password</label>
          <input type="password" name="password" />
        </div>
      </div>
    </div>
  );
}
