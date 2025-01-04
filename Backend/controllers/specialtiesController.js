const asyncHandler = require('express-async-handler');
const client = require("../connection.js");

const getGradesBySpecialties = asyncHandler(async (req, res) => {
    const specialty = req.query.specialty;
    console.log(specialty);

    const gettingSpecialtyID = `
        SELECT "ID" FROM "Specialties" WHERE name = $1
    `;

    const specialtyID = await client.query(gettingSpecialtyID, [specialty]);
    console.log(specialtyID.rows[0]);

    const allSubjectsQuery = `
        SELECT * FROM "subjects"
        WHERE "spec_ID" = ${specialtyID.rows[0].ID}
    `;

    const allSubjects = await client.query(allSubjectsQuery);
    console.log(allSubjects.rows);
});

module.exports = { getGradesBySpecialties };