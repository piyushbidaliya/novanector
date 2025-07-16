export default function CreateCouponModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-6">Create Coupons</h2>

        <form className="space-y-4">
          {/* Coupon Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Coupon Title</label>
            <input
              type="text"
              placeholder="Design Course"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Coupon Sub-Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Coupon Sub-Title</label>
            <input
              type="text"
              placeholder="Book Early & Save Up to 30%"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Description</label>
            <textarea
              rows="3"
              placeholder="Act now and save up to 30% when you book early..."
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Coupon Code */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Coupon Code</label>
            <input
              type="text"
              placeholder="XDVHA432NBR"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Validity Period */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Coupon Validity Period</label>
            <input
              type="text"
              placeholder="10 June, 2025"
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
              Upload Coupon
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
