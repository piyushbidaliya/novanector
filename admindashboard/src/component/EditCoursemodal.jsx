import React from "react";
import { FaTimes } from "react-icons/fa";

const EditCourseModal = ({ isOpen, onClose, course }) => {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-start justify-center z-50 overflow-y-scroll pt-10 pb-10">
      <div className="bg-white rounded-xl p-6 w-[95%] max-w-6xl shadow-lg relative space-y-6">
    
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <FaTimes size={18} />
        </button>

        <h2 className="text-2xl font-bold mb-6">Edit Course</h2>

        
        <div>
          <label className="block text-sm font-medium mb-1">Course Title</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            defaultValue={course.name}
          />
        </div>

        
        <div>
          <label className="block text-sm font-medium mb-1">Slug</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            defaultValue="learning-javascript-with-imagination"
          />
        </div>

    
        <div>
          <label className="block text-sm font-medium mb-1">Price</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            defaultValue={course.price}
          />
        </div>

      
        <div>
          <label className="block text-sm font-medium mb-1">
            About the Course
          </label>
          <textarea
            className="w-full border rounded p-2"
            rows={4}
            defaultValue="This course helps you learn JavaScript from scratch with imagination and examples."
          />
        </div>

    
        <div>
          <label className="block text-sm font-medium mb-1">
            What You'll Learn
          </label>
          <textarea
            className="w-full border rounded p-2"
            rows={3}
            defaultValue="- Variables\n- Functions\n- Objects"
          />
        </div>

    
        <div>
          <label className="block text-sm font-medium mb-2">
            Course Thumbnail
          </label>
          <img
            src="/2.png"
            alt="Thumbnail"
            className="w-full h-[400px] object-cover rounded border mb-4"
          />

          <div className="flex items-center gap-4 mb-4">
            <label className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Upload
              <input type="file" className="hidden" />
            </label>
            <span className="text-sm text-gray-600">
              Choose image (JPG/PNG)
            </span>
          </div>

          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Update Info
          </button>
        </div>

  
        <div>
          <label className="block text-sm font-medium mb-1">
            Preview Video
          </label>
          <label className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 inline-block mb-3">
            Upload
            <input type="file" className="hidden" />
          </label>
          <video
            src="/your-preview.mp4"
            controls
            className="w-full h-[240px] object-cover rounded"
          />
        </div>

      
        <div>
          <label className="block text-sm font-medium mb-1">Add Modules</label>
          <textarea
            className="w-full border rounded p-2"
            rows={3}
            placeholder="Week 1: Intro..."
          />
        </div>

        
        <div className="flex items-center gap-2">
          <input type="checkbox" id="certificate" />
          <label htmlFor="certificate" className="text-sm font-medium">
            Provide Certificate on Completion
          </label>
        </div>

      
        <div>
          <label className="block text-sm font-medium mb-2">
            Certificate Preview
          </label>
          <img
            src="/1.jpg"
            alt="Certificate"
            className="w-100 h-[300px] object-cover border rounded"
          />
        </div>

      
        <div className="pt-4 text-right">
          <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Save All Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCourseModal;
