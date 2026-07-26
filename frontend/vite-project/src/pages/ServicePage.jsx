import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../services/api"; // Adjust path if needed

const ServicePage = () => {
  const [services, setServices] = useState([]);
  const {addToBooking} = useAuth();

  const fetchServices = async () => {
    try {
      const { data } = await api.get("/services");
      console.log(data);
      setServices(data.services);
    } catch (error) {
      console.log("Error fetching services:", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="bg-pink-500 px-4 py-2 rounded-full text-sm font-semibold">
            ✨ Premium Beauty Care
          </span>

          <h1 className="text-5xl font-bold mt-6">Our Beauty Services</h1>

          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Discover luxury beauty treatments designed to make you look and feel
            your absolute best.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-8 text-center">
                <div className="text-6xl">💄</div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-slate-800">
                  {service.name}
                </h2>

                <p className="text-slate-500 mt-3">{service.description}</p>

                <div className="flex justify-between mt-6">
                  <div>
                    <p className="text-sm text-slate-500">Price</p>
                    <h3 className="text-xl font-bold text-pink-600">
                      ₹{service.price}
                    </h3>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Duration</p>
                    <h3 className="text-lg font-semibold">
                      {service.duration}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => addToBooking(service._id)}
                  className="w-full mt-6 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-2xl font-semibold">Expert Professionals</h3>
              <p className="text-slate-400 mt-3">
                Skilled beauticians with years of experience.
              </p>
            </div>

            <div>
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-2xl font-semibold">Premium Products</h3>
              <p className="text-slate-400 mt-3">
                We use only trusted, high-quality beauty products.
              </p>
            </div>

            <div>
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-2xl font-semibold">Easy Booking</h3>
              <p className="text-slate-400 mt-3">
                Schedule appointments online in just a few clicks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold text-slate-800">
          Ready to Transform Your Look?
        </h2>

        <p className="text-slate-500 mt-4">
          Book your favorite beauty service today.
        </p>

        <button className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-xl font-semibold transition duration-300"  onClick={() => addToBooking(service._id)}>
          Book Now
        </button>
      </section>
    </div>
  );
};

export default ServicePage;
