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
<<<<<<< HEAD
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
=======
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>     
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">         
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
>>>>>>> b6666a5f8984315658a9e3377d057995e13aa01d
}

export default App;
