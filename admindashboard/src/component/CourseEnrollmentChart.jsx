import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';

const dataMap = {
  HTML: [
    { month: 'Jan', students: 50 },
    { month: 'Feb', students: 120 },
    { month: 'Mar', students: 300 },
    { month: 'Apr', students: 500 },
    { month: 'May', students: 1500 },
    { month: 'Jun', students: 1400 },
    { month: 'Jul', students: 900 },
    { month: 'Aug', students: 400 },
    { month: 'Sept', students: 700 },
    { month: 'Oct', students: 850 },
    { month: 'Nov', students: 900 },
    { month: 'Dec', students: 820 },
  ],
  CSS: [
    { month: 'Jan', students: 30 },
    { month: 'Feb', students: 80 },
    { month: 'Mar', students: 200 },
    { month: 'Apr', students: 400 },
    { month: 'May', students: 1000 },
    { month: 'Jun', students: 1200 },
    { month: 'Jul', students: 1000 },
    { month: 'Aug', students: 600 },
    { month: 'Sept', students: 500 },
    { month: 'Oct', students: 750 },
    { month: 'Nov', students: 850 },
    { month: 'Dec', students: 880 },
  ]
};

const CourseEnrollmentChart = () => {
  const [selectedCourse, setSelectedCourse] = useState('HTML');

  return (
    <div className="p-5 border border-[#DEE0E4] rounded-[12px]  w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Courses Enrolled Status</h2>
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          className="border border-[#DEE0E4] rounded-[6px] px-3 py-1 focus:outline-none"
        >
          {Object.keys(dataMap).map(course => (
            <option key={course} value={course}>{course}</option>
          ))}
        </select>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={dataMap[selectedCourse]}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
            formatter={(value) => [`${value} Student Enrolled`, '']}
            labelFormatter={(label) => `${label}, 2025`}
          />
          <Line type="monotone" dataKey="students" stroke="#296AD2" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CourseEnrollmentChart;
