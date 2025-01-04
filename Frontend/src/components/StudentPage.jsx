import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import GradesVisual from "./subComponents/GradesVisual";

export default function StudentPage() {
  const { id } = useParams();
  const [student, setStudent] = useState({});
  const [allGrades, setAllGrades] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getStudent() {
      const data = {
        id: id,
        role: "students",
      };

      const response = await axios.get(
        "http://localhost:3000/user/?data=" +
          encodeURIComponent(JSON.stringify(data))
      );

      if (response.status === 200) {
        setStudent(response.data.user);
      }
    }

    getStudent();
  }, []);

  async function getStudentGrades() {
    const response = await axios.get(
      "http://localhost:3000/grade/?id=" + student.fak_number
    );

    if (response.status === 200) {
      setAllGrades(response.data.grades);
    } else {
      setError(response.data.message);
      setTimeout(() => setError(""), 5000);
    }
  }

  if (Object.keys(student).length === 0) {
    return (
      <div className="main">
        <p className="title">No student data found</p>
      </div>
    );
  }

  return (
    <div className="main">
      <p className="title">
        Welcome {student.first_name} {student.last_name}
      </p>
      <p className="subtitle">Here you can check your grades and statistics</p>
      {error !== "" && <p className="error">{error}</p>}
      <div>
        <button onClick={getStudentGrades}>View all grades</button>
        <button>View average grade</button>
        <button>View not taken exams</button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {allGrades.length > 0 && <GradesVisual grades={allGrades} />}
      </div>
    </div>
  );
}
