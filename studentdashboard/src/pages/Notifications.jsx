import React from 'react';

function Notifications() {
  const notifications = [
    { text: "Account has been created successfully.", time: "1 Hour Ago" },
    { text: "Successfully applied for a job Developer.", time: "2 Hour Ago" },
    { text: "Multi vendor course updated successfully.", time: "2 Hour Ago" },
    { text: "HTML course updated successfully.", time: "2 Hour Ago" },
    { text: "HTML course updated successfully.", time: "2 Hour Ago" },
    { text: "HTML course updated successfully.", time: "2 Hour Ago" },
    { text: "JavaScript course updated successfully.", time: "3 Hour Ago" },
  ];

  return (
    <div className="max-w-8xl mx-auto  p-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
        <ul>
          {notifications.map((note, index) => (
            <li key={index} className="flex justify-between py-5 border-b last:border-b-0">
              <span className="text-gray-700">{note.text}</span>
              <span className="text-gray-500 text-sm">{note.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Notifications;
