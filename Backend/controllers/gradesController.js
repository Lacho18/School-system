const asyncHandler = require('express-async-handler');
const client = require("../connection.js");

const getGrades = asyncHandler(async (req, res) => {
    console.log("Here i get grades!");
    console.log(req.query.id);
    const id = req.query.id;

    const query = `
        SELECT g.*, 
        s.name AS subject_name, 
        s.teacher_name
        FROM 
        public."Grades" g
        JOIN 
        public."subjects" s
        ON 
        g."subject_ID" = s."ID"
        WHERE g."student_ID" = ${id}
    `;

    const result = await client.query(query);

    if (result.rowCount > 0) {
        return res.status(200).json({ message: "Successful request", grades: result.rows });
    }
    else {
        return res.status(404).json({ message: "Grades not found!" });
    }
});

module.exports = { getGrades };