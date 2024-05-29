import { connect } from "./db";
const getleads = async () => {
  try {
    // Connect to the database
    const db = await connect();
  
    // Insert user into the database
    const result = await db.query("SELECT * FROM users");

    // Close the database connection
    await db.end();

    return result;
  } catch (error) {
    return error;
  }
};

export default getleads;
