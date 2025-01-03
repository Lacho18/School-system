import { useNavigate } from "react-router";

export default function MainPage() {
  const navigate = useNavigate();
  return (
    <div className="main">
      <p className="title">Welcome to university management system</p>
      <p className="subTitle">Please log in to your account!</p>

      <div>
        <p>You are:</p>
        <div>
          <button onClick={() => navigate("/login/students")}>Student</button>
          <button onClick={() => navigate("/login/teachers")}>Teacher</button>
          <button onClick={() => navigate("/login/administrators")}>
            Administrator
          </button>
        </div>
      </div>
    </div>
  );
}
