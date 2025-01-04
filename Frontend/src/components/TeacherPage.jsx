import axios from "axios";

export default function TeacherPage() {
  async function specialtiesGradesHandler(specialty) {
    const response = await axios.get(
      "http://localhost:3000/specialties/?specialty=" + specialty
    );
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
    </div>
  );
}
