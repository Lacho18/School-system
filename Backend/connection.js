const { Client } = require('pg');
require('dotenv').config();

// Validate environment variables
if (!process.env.DATABASE_PASSWORD) {
    console.error("DATABASE_PASSWORD is not set in the .env file");
    process.exit(1);   
}

const client = new Client({
    host: process.env.DATABASE_HOST || "localhost",
    user: process.env.DATABASE_USER || "postgres",
    port: process.env.DATABASE_PORT || 5432,
    password: process.env.DATABASE_PASSWORD,
    database: "school_system"
});

const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log("Connection complete");
    } catch (err) {
        console.error("Connection error:", err.stack);
    }
};

connectToDatabase();

module.exports = client;
