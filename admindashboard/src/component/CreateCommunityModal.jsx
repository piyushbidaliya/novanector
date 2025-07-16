import { useState } from "react";
import bannerImage from "../assets/banner.jpg";

export default function CreateCommunityModal({ onClose }) {
  const [selectedImage, setSelectedImage] = useState(bannerImage);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const fileURL = URL.createObjectURL(e.target.files[0]);
      setSelectedImage(fileURL);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative shadow-lg max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
        >
          ✕
        </button>

        {/* Banner Image */}
        <div className="w-full h-80 rounded-lg mb-4 overflow-hidden border">
          <img
            src={selectedImage}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Upload Button */}
        <div className="mb-6">
          <input
            type="file"
            id="fileInput"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
          <label
            htmlFor="fileInput"
            className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700"
          >
            Upload
          </label>
          <p className="text-xs text-gray-500 mt-1">
            Recommended Dimensions: 800px × 400px.
          </p>
        </div>

        {/* Form Fields */}
        <h2 className="text-2xl font-semibold mb-4">Create New Community</h2>

        <form className="space-y-4">
          {/* Community Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Community Name
            </label>
            <input
              type="text"
              placeholder="Enter community name"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Slug
            </label>
            <input
              type="text"
              placeholder="Enter slug (e.g., my-community)"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              rows="3"
              placeholder="Write a short description"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* URL */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              URL
            </label>
            <input
              type="text"
              placeholder="remx.xyz/slug"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
