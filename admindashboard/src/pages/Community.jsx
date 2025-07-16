import { useState } from "react";
import CreateCommunityModal from "../component/CreateCommunityModal";

export default function Community() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Section */}
      <div className="w-1/3 border-r bg-white p-4">
        <h1 className="text-xl font-bold mb-4">Community</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
        >
          + Create New Community
        </button>

        {/* Community List */}
        <div className="mt-6 space-y-4">
          {["Learn Nation", "LevelUp Hub", "Code Masters"].map((name, i) => (
            <div
              key={i}
              className="flex justify-between items-center p-3 hover:bg-gray-100 rounded cursor-pointer transition"
            >
              <div>
                <p className="font-medium">{name}</p>
                <p className="text-xs text-gray-500 truncate">
                  Hey thanks for your interview...
                </p>
              </div>
              <span className="text-xs text-gray-400">12 mins ago</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Section */}
      <div className="w-2/3 p-6 flex flex-col">
        {/* Chat Header */}
        <div className="flex items-center mb-4 border-b pb-3">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h2 className="font-semibold text-lg">John Mayer</h2>
            <p className="text-sm text-gray-500">20 Students</p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 bg-gray-50 p-4 rounded overflow-y-auto">
          <div className="mb-4">
            <p className="font-semibold">Joe Bartmann</p>
            <p className="text-gray-700">
              We’re moving into Frontend Development now—HTML, CSS, and
              JavaScript. But honestly, I’m a bit lost. Do I really need to
              learn all three?
            </p>
            <p className="text-xs text-gray-400">12 mins ago</p>
          </div>

          <div className="bg-blue-50 p-3 rounded-lg">
            <p>
              Yeah, you do. They work together. Think of it like this: HTML is
              the structure, CSS is the design, and JavaScript brings it all to
              life with interaction.
            </p>
            <p className="text-xs text-gray-400 mt-1">10 mins ago</p>
          </div>
        </div>

        {/* Message Input */}
        <div className="mt-4 flex items-center border rounded px-2">
          <input
            type="text"
            placeholder="Reply message..."
            className="flex-1 p-2 outline-none"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Send
          </button>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <CreateCommunityModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
