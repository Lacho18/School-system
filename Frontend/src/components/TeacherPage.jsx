import axios from "axios";
import { useState } from "react";
import SpecialtiesData from "./subComponents/SpecialtiesData";
import GradesVisual from "./subComponents/GradesVisual";

export default function TeacherPage() {
  const [specialty, setSpecialty] = useState("");
  const [error, setError] = useState("");
  const [specialtyData, setSpecialtyData] = useState([]);
  const [inputField, setInputField] = useState("");
  const [singleStudentGrades, setSingleStudentGrades] = useState([]);

  async function specialtiesGradesHandler(specialty) {
    try { 
      setSingleStudentGrades([]);    
      setInputField("");
      const response = await axios.get(
        "http://localhost:3000/specialties/?specialty=" + specialty
      );
      setSpecialty(specialty);
      console.log(response);

      if (response.status === 200) {
        setSpecialtyData(response.data.allData);
      }
    } catch (err) {
      setSpecialtyData([]);
      setError(err.response.data.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  }

  async function getSpecificStudentData() {
    try {
      setSpecialtyData([]);
      const response = await axios.get(
        "http://localhost:3000/grade/?id=" + inputField
      );

      if (response.status === 200) {
        setSingleStudentGrades(response.data.grades);
      }
    } catch (err) {
      setError(err.response.data.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  }

  return (
    <div className="main">
      <p className="title">Welcome Mr. John Asenov</p>
      <p className="subTitle">Here you can manage all students results</p>

      <p>View all results for the given specialties!</p>
      <div>
        <button onClick={() => specialtiesGradesHandler("KST")}>KST</button>
        <button onClick={() => specialtiesGradesHandler("SKI")}>SKI</button>
        <button onClick={() => specialtiesGradesHandler("KTKS")}>KTKS</button>
      </div>
      {error !== "" && <p className="error">{error}</p>}
      <div>
        <div className="inputField">
          <label htmlFor="fakNumber">Look for specific student</label>
          <input
            type="text"
            name="fakNumber"
            placeholder="Student Fak. number"
            onChange={(e) => setInputField(e.target.value)}
          />
        </div>
        <button onClick={getSpecificStudentData}>See results</button>
      </div>
      {singleStudentGrades.length > 0 && (
        <GradesVisual grades={singleStudentGrades} />
      )}
      <div>
        {specialty !== "" ? (
          <SpecialtiesData
            specialtyData={specialtyData}
            specialty={specialty}
          />
        ) : (
          <p>View specialties data here</p>
        )}
      </div>
    </div>
  );
}
