import React, { useEffect, useState } from "react";
import api from "../services/api";

const MyBookingPage = () => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const { data } = await api.get("/bookings");

      console.log ("Bookings:", data);

      setBookings(data);
    } catch (error) {
      console.log("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        My Bookings
      </h1>

      {bookings.length === 0 ? (
        <div className="text-center text-gray-500">
          No bookings found
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl font-bold">
                {booking.service?.name}
              </h2>

              <p className="mt-2 text-gray-600">
                Price: ₹{booking.service?.price}
              </p>

              <p className="mt-2 text-gray-600">
                Duration: {booking.service?.duration}
              </p>

              <p className="mt-2">
                Status:
                <span className="text-green-600 font-semibold ml-2">
                  {booking.status}
                </span>
              </p>

              <p className="mt-2 text-sm text-gray-500">
                {new Date(
                  booking.appointmentDate
                ).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookingPage;