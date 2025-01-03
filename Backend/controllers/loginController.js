const asyncHandler = require('express-async-handler');
const client = require("../connection.js");

const login = asyncHandler(async (req, res) => {
    const { username, password, role } = JSON.parse(req.query.data);

    if (username === "" || password === "") {
        return res.json({ message: "All fields are required!" });
    }

    if (!/^[0-9]+$/.test(username)) {
        return res.json({ message: "The ID is expected to be only from numbers!" });
    }

    const query = `
        SELECT * FROM "${role}"
        WHERE "fak_number" = $1 AND "password" = $2
    `;

    try {
        const result = await client.query(query, [username, password]);
        console.log(result.rows[0]);

        // Check if a user was found
        if (result.rows.length > 0) {
            return res.json({ message: "Login successful", user: result.rows[0] });
        } else {
            return res.json({ message: "Invalid credentials" });
        }
    } catch (error) {
        console.error("Query error:", error);
        return res.status(500).json({ message: "Error executing query" });
    }
})

module.exports = { login }