import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const Category = () => {
  const [categories, setCategories] = useState([
    "Design",
    "Marketing",
    "Web Design",
    "Programming",
    "Design",
    "Marketing",
    "Web Design",
    "Programming",
  ]);

  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory("");
    }
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Category</h2>

      {/* Add Category Input + Button */}
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter new category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddCategory}
          className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700 transition"
        >
          <FaPlus />
          Add Category
        </button>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="border border-gray-300 px-4 py-3 rounded text-center text-sm"
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
