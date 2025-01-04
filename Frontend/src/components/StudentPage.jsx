import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import GradesVisual from "./subComponents/GradesVisual";

export default function StudentPage() {
  const { id } = useParams();
  const [student, setStudent] = useState({});
  const [allGrades, setAllGrades] = useState([]);
  const [viewAverage, setViewAverage] = useState({
    averageGrade: 0,
    view: false,
  });
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
    if (viewAverage.view) {
      setViewAverage((oldValue) => {
        return { ...oldValue, view: false };
      });
    }
    const response = await axios.get(
      "http://localhost:3000/grade/?id=" + student.fak_number
    );

    if (response.status === 200) {
      console.log(response.data);
      setAllGrades(response.data.grades);
      setViewAverage((oldValue) => {
        return { ...oldValue, averageGrade: response.data.averageGrade };
      });
    } else {
      setError(response.data.message);
      setTimeout(() => setError(""), 5000);
    }
  }

  async function onAverage() {
    setAllGrades([]);
    setViewAverage((oldValue) => {
      return { ...oldValue, view: !oldValue.view };
    });
  }

  async function notPassedExams() {
    if (allGrades.length === 0) {
      await getStudentGrades();
    }

    setAllGrades((oldValue) => {
      let newResult = oldValue.filter((value) => value.passed === false);

      return newResult;
    });
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
        <button onClick={onAverage}>View average grade</button>
        <button onClick={notPassedExams}>View not taken exams</button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {allGrades.length > 0 && <GradesVisual grades={allGrades} />}
        {viewAverage.view && (
          <p>
            Average grade:{" "}
            <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>
              {viewAverage.averageGrade.toFixed(2)}
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
