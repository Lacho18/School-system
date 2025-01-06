import { Routes, Route } from "react-router";
import MainPage from "./components/MainPage";
import StudentPage from "./components/StudentPage";
import TeacherPage from "./components/TeacherPage";
import AdminPage from "./components/AdminPage";
import LoginPage from "./components/LoginPage";
import NotFoundPage from "./components/NotFound";
import "./styles/mainStyle.css";

function App() {
  return (
    <div>     
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login/:type" element={<LoginPage />} />
        <Route path="/student/:id" element={<StudentPage />} />
        <Route path="/teacher" element={<TeacherPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
