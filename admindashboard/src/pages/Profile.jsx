import React from "react";

const Profile = () => {
  const profile = {
    registrationDate: "20, January 2024 9:00 PM",
    firstName: "Michle",
    lastName: "Obema",
    username: "obema007",
    email: "obema@example.com",
    phone: "+55 669 4456 25987",
    expert: "Graphics Design",
    biography:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores veniam, delectus accusamus nesciunt laborum repellat laboriosam, deserunt possimus itaque iusto perferendis voluptatum quaerat cupiditate vitae. Esse aut illum perferendis nulla, corporis impedit quasi alias est!",
  };

  const renderRow = (label, value, isBlue = false) => (
    <tr className={`${isBlue ? "bg-blue-50" : ""}`}>
      <td className="border border-blue-300 px-4 py-3 font-medium w-1/3">{label}</td>
      <td className="border border-blue-300 px-4 py-3">{value}</td>
    </tr>
  );

  return (
    <div className="p-6 bg-white min-h-screen">
      <table className="table-auto w-full border border-blue-500">
        <thead>
          <tr className="bg-blue-200 text-left">
            <th colSpan={2} className="px-4 py-3 text-lg font-semibold border-b border-blue-300">
              Profile
            </th>
          </tr>
        </thead>
        <tbody>
          {renderRow("Registration Date", profile.registrationDate)}
          {renderRow("First Name", profile.firstName, true)}
          {renderRow("Last Name", profile.lastName)}
          {renderRow("Username", profile.username, true)}
          {renderRow("Email", profile.email)}
          {renderRow("Phone Number", profile.phone, true)}
          {renderRow("Expert", profile.expert)}
          {renderRow("Biography", profile.biography, true)}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
