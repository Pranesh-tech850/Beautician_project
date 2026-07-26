import React from "react";

const HomePage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div>
              <span className="bg-pink-500 px-4 py-2 rounded-full text-sm font-semibold">
                ✨ Premium Beauty Services
              </span>

              <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
                Book Your
                <span className="text-pink-400"> Beauty </span>
                Appointment Online
              </h1>

              <p className="text-slate-300 mt-6 text-lg">
                Discover professional beauty treatments, expert stylists,
                and seamless online booking—all in one place.
              </p>

              <div className="flex gap-4 mt-8">
                <button className="bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-xl font-semibold transition duration-300">
                  Book Now
                </button>

                <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-slate-900 transition duration-300">
                  Explore Services
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
                alt="Beauty"
                className="rounded-3xl shadow-2xl h-[500px] object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-800">
            Our Beauty Services
          </h2>
          <p className="text-slate-500 mt-3">
            Choose from a wide range of professional treatments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-5xl">💇‍♀️</div>
            <h3 className="text-2xl font-semibold mt-4">
              Hair Styling
            </h3>
            <p className="text-slate-500 mt-3">
              Trendy haircuts and premium styling by experts.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-5xl">💅</div>
            <h3 className="text-2xl font-semibold mt-4">
              Nail Care
            </h3>
            <p className="text-slate-500 mt-3">
              Elegant manicure and pedicure services.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-5xl">💆‍♀️</div>
            <h3 className="text-2xl font-semibold mt-4">
              Spa & Facial
            </h3>
            <p className="text-slate-500 mt-3">
              Relaxing treatments for glowing skin.
            </p>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-4xl font-bold text-pink-400">500+</h3>
            <p className="mt-2">Happy Clients</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-pink-400">50+</h3>
            <p className="mt-2">Beauty Experts</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-pink-400">1000+</h3>
            <p className="mt-2">Appointments</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-pink-400">4.9★</h3>
            <p className="mt-2">Customer Rating</p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-slate-800">
            Ready For Your Next Glow-Up?
          </h2>

          <p className="text-slate-500 mt-4">
            Book your appointment today and experience premium beauty services.
          </p>

          <button className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-xl font-semibold transition duration-300">
            Schedule Appointment
          </button>
        </div>
      </section>

    </div>
  );
};

export default HomePage;