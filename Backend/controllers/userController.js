const asyncHandler = require('express-async-handler');
const client = require("../connection.js");

const getUser = asyncHandler(async (req, res) => {
    const { id, role } = JSON.parse(req.query.data);

    const query = `
        SELECT * FROM "${role}"
        WHERE "fak_number" = $1
    `;

    try {
        const result = await client.query(query, [id]);
        console.log(result.rows[0]);

        // Check if a user was found
        if (result.rows.length > 0) {
            return res.json({ message: "User found!", user: result.rows[0] });
        } else {
            return res.json({ message: "User not found!" });
        }
    } catch (error) {
        console.error("Query error:", error);
        return res.status(500).json({ message: "Error executing query" });
    }
})

module.exports = { getUser }