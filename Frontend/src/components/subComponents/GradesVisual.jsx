import "./GradesVisual.css";

export default function GradesVisual({ grades }) {
  return (
    <div className="table">
      <div className="line titleLine">
        <div>№</div>
        <div>Subject name</div>
        <div>Teacher</div>
        <div>Grade</div>
        <div>Passed</div>
      </div>
      {grades.map((grade, index) => (
        <div className="line">
          <div>{index + 1}</div>
          <div>{grade.subject_name}</div>
          <div>{grade.teacher_name}</div>
          <div style={{ fontWeight: "bold" }}>{grade.grade}</div>
          <div
            style={
              grade.passed
                ? { backgroundColor: "green", padding: "5px" }
                : { backgroundColor: "red", padding: "5px" }
            }
          >
            {grade.passed ? "Yes" : "No"}
          </div>
        </div>
      ))}
    </div>
  );
}
