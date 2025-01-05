import "./SpecialtiesData.css";

export default function SpecialtiesData({ specialtyData, specialty }) {
  if (specialtyData.length === 0) {
    return <p className="subtitle">No students for this specialty</p>;
  }
  return (
    <div>
      <p className="title">{specialty}</p>
      <div className="teacher_table">
        {specialtyData.map((student) => (
          <div className="group">
            <div>
              <p>Fak. number - {student.fak_number}</p>
              <p>
                Names: {student.student_first_name} {student.student_last_name}
              </p>
            </div>
            <div style={{ fontWeight: "bold" }}>
              <p>Subject</p>
              <p>Teacher</p>
              <p>Grade</p>
            </div>
            {student.grades_info.map((grade) => (
              <div>
                <p>{grade.subject_name}</p>
                <p>{grade.teacher_name}</p>
                <p style={{ fontWeight: "bold" }}>{grade.grade}</p>
              </div>
            ))}
            <div>
              <p>
                Average grade:{" "}
                <span style={{ fontWeight: "bold" }}>
                  {student.average_grade.toFixed(2)}
                </span>
              </p>
            </div>
            <div>
              <p>
                Not taken exams:{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: student.not_taken_exams > 0 ? "red" : "green",
                  }}
                >
                  {student.not_taken_exams}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
