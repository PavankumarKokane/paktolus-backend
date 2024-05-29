import { connect } from "./db";

const addlead = async (first_name, last_name, email, mobile, inquiry, message, utm_source, utm_medium, utm_campaign) => {

  try {
    // Connect to the database
    const db = await connect();
    // Insert user into the database
    const result = await db.query(
      "INSERT INTO users (first_name, last_name, email, mobile, inquiry, message, utm_source, utm_medium, utm_campaign) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [first_name, last_name, email, mobile, inquiry, message, utm_source, utm_medium, utm_campaign]
    );

    // Close the database connection
    await db.end();

    return result;
  } catch (error) {
    return error;
  }
};

export default addlead;