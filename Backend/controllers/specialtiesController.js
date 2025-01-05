const asyncHandler = require('express-async-handler');
const client = require("../connection.js");

const getGradesBySpecialties = asyncHandler(async (req, res) => {
    const specialty = req.query.specialty;

    const gettingSpecialtyID = `
        SELECT "ID" FROM "Specialties" WHERE name = $1
    `;

    const specialtyID = await client.query(gettingSpecialtyID, [specialty]);

    if (specialtyID.rowCount === 0) {
        return res.status(404).json({ message: "Specialty " + specialty + " was not found!" });
    }

    if (specialtyID.rowCount > 1) {
        return res.status(400).json({ message: "More than 1 of the same specialties found. This operation can not proceed" });
    }

    const allGradesQuery = `
        SELECT "students".fak_number AS fak_number,
               "students".first_name AS student_first_name,
               "students".last_name AS student_last_name,
               ARRAY_AGG(JSON_BUILD_OBJECT(
                   'grade', "Grades".grade,
                   'subject_name', "subjects".name,
                   'teacher_name', "subjects".teacher_name
               )) AS grades_info,
                AVG("Grades".grade) AS average_grade,
                COUNT(CASE WHEN "Grades".grade < 3.00 THEN 1 END) AS not_taken_exams
        FROM "Grades"
        JOIN "subjects" ON "Grades"."subject_ID" = "subjects"."ID"
        JOIN "students" ON "Grades"."student_ID" = "students"."fak_number"
        WHERE "subjects"."spec_ID" = ${specialtyID.rows[0].ID}
        GROUP BY "students".fak_number, "students".first_name, "students".last_name
    `;

    const allGrades = await client.query(allGradesQuery);

    if (allGrades.rowCount > 0) {
        return res.status(200).json({ message: "Successful request", allData: allGrades.rows });
    }
    else {
        return res.status(400).json({ message: "No results found for specialty: " + specialty });
    }
});

module.exports = { getGradesBySpecialties };