import { useState } from "react";
import CreateCouponModal from "../component/CreateCouponModal";

export default function Coupons() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sampleCoupons = [
    {
      title: "Course",
      subtitle: "Book Early & Save Up to 30%",
      description:
        "Act now and save up to 30% when you book early at novanectar.com. Click to get an started.",
      validity: "Valid Until 10 Jun, 25",
      code: "Get Code",
    },
    
    {
      title: "Course",
      subtitle: "Book Early & Save Up to 30%",
      description:
        "Act now and save up to 30% when you book early at novanectar.com. Click to get an started.",
      validity: "Valid Until 10 Jun, 25",
      code: "Get Code",
    },
    {
      title: "Course",
      subtitle: "Book Early & Save Up to 30%",
      description:
        "Act now and save up to 30% when you book early at novanectar.com. Click to get an started.",
      validity: "Valid Until 10 Jun, 25",
      code: "Get Code",
    },
    {
      title: "Course",
      subtitle: "Book Early & Save Up to 30%",
      description:
        "Act now and save up to 30% when you book early at novanectar.com. Click to get an started.",
      validity: "Valid Until 10 Jun, 25",
      code: "Get Code",
    },
    {
      title: "Course",
      subtitle: "Book Early & Save Up to 30%",
      description:
        "Act now and save up to 30% when you book early at novanectar.com. Click to get an started.",
      validity: "Valid Until 10 Jun, 25",
      code: "Get Code",
    },
    {
      title: "Course",
      subtitle: "Book Early & Save Up to 30%",
      description:
        "Act now and save up to 30% when you book early at novanectar.com. Click to get an started.",
      validity: "Valid Until 10 Jun, 25",
      code: "Get Code",
    },
    {
      title: "Course",
      subtitle: "Book Early & Save Up to 30%",
      description:
        "Act now and save up to 30% when you book early at novanectar.com. Click to get an started.",
      validity: "Valid Until 10 Jun, 25",
      code: "Get Code",
    },
    {
      title: "Course",
      subtitle: "Book Early & Save Up to 30%",
      description:
        "Act now and save up to 30% when you book early at novanectar.com. Click to get an started.",
      validity: "Valid Until 10 Jun, 25",
      code: "Get Code",
    },
    {
      title: "Course",
      subtitle: "Book Early & Save Up to 30%",
      description:
        "Act now and save up to 30% when you book early at novanectar.com. Click to get an started.",
      validity: "Valid Until 10 Jun, 25",
      code: "Get Code",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Coupons</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create Coupon
        </button>
      </div>

      {/* Coupons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sampleCoupons.map((coupon, i) => (
          <div key={i} className="bg-white shadow rounded p-4">
            <p className="text-sm text-gray-500">{coupon.title}</p>
            <h2 className="font-semibold text-lg mb-2">{coupon.subtitle}</h2>
            <p className="text-gray-600 text-sm mb-4">{coupon.description}</p>
            <p className="text-xs text-gray-500 mb-4">{coupon.validity}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
              {coupon.code}
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && <CreateCouponModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
