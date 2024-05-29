import React from "react";
import getleads from "@/utils/getleads";
import "./table.css";

const Page = async () => {
  const user_data = await getleads();
  //console.log(user_data[0].length);
  const rows = user_data[0].map((user) => {
    return (
      <tr key={user.id}>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.email}</td>
        <td>{user.mobile}</td>
        <td>{user.inquiry}</td>
        <td>{user.message}</td>
        <td>{user.utm_source}</td>
        <td>{user.utm_medium}</td>
        <td>{user.utm_campaign}</td>
      </tr>
    );
  });

  return (
    <>
    <div className="user-data">
      <table className="user-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Inquiry</th>
            <th>Message</th>
            <th>utm_source</th>
            <th>utm_medium</th>
            <th>utm_campaign</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
    </>
  );
};

export default Page;
