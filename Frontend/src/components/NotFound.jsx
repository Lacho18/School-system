import { useNavigate } from "react-router";

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <div>
      <p>404 Page not found</p>
      <button onClick={() => navigate("/")}>Back to home page</button>
    </div>
  );
}
