import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="bg-pink-500 px-4 py-2 rounded-full text-sm font-semibold">
            ✨ About Surabi Beauty Studio
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6">
            Enhancing Beauty,
            <span className="text-pink-400"> Inspiring Confidence</span>
          </h1>

          <p className="text-slate-300 mt-6 max-w-3xl mx-auto text-lg">
            At Surabi Beauty Studio, we believe beauty is more than appearance.
            It’s about confidence, self-care, and feeling your best every day.
            Our experienced professionals provide premium beauty treatments
            tailored to your unique style and needs.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e"
              alt="Beauty Salon"
              className="rounded-3xl shadow-xl w-full h-[450px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-slate-800">
              Our Story
            </h2>

            <p className="text-slate-600 mt-6 leading-relaxed">
              Founded with a passion for beauty and wellness, Surabi Beauty
              Studio has become a trusted destination for clients seeking
              exceptional beauty services. We combine modern techniques,
              premium products, and personalized care to create an unforgettable
              experience.
            </p>

            <p className="text-slate-600 mt-4 leading-relaxed">
              From bridal makeovers and facials to skincare treatments and hair
              styling, our goal is to help every client feel confident,
              beautiful, and refreshed.
            </p>

            <button className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-xl font-semibold transition">
              Book an Appointment
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-slate-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-4xl font-bold text-pink-500">10+</h3>
              <p className="text-slate-600 mt-2">Years Experience</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-4xl font-bold text-pink-500">5000+</h3>
              <p className="text-slate-600 mt-2">Happy Clients</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-4xl font-bold text-pink-500">25+</h3>
              <p className="text-slate-600 mt-2">Beauty Services</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-4xl font-bold text-pink-500">100%</h3>
              <p className="text-slate-600 mt-2">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-3xl hover:scale-105 transition">
              <div className="text-5xl mb-4">💄</div>
              <h3 className="text-2xl font-semibold">
                Expert Beauticians
              </h3>
              <p className="text-slate-400 mt-3">
                Certified professionals delivering exceptional beauty care.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-3xl hover:scale-105 transition">
              <div className="text-5xl mb-4">🌸</div>
              <h3 className="text-2xl font-semibold">
                Premium Products
              </h3>
              <p className="text-slate-400 mt-3">
                We use trusted brands to ensure safe and effective treatments.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-3xl hover:scale-105 transition">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-semibold">
                Personalized Care
              </h3>
              <p className="text-slate-400 mt-3">
                Every treatment is customized to your beauty goals.
              </p>
            </div>
          </div>
        </div>
      </section>

    

      {/* CTA */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold">
            Ready for Your Beauty Transformation?
          </h2>

          <p className="mt-4 text-lg">
            Book your appointment today and experience premium beauty care.
          </p>

          <button className="mt-8 bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;