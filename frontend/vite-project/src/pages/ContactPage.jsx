import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-950 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="bg-pink-500 px-4 py-2 rounded-full text-sm font-semibold">
            💖 Get In Touch
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6">
            Let's Make You
            <span className="text-pink-400"> Shine</span>
          </h1>

          <p className="text-slate-300 mt-6 max-w-2xl mx-auto text-lg">
            Ready for your next beauty transformation? Contact us directly and
            book your appointment in seconds.
          </p>
        </div>
      </section>

      {/* Main Contact Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Call */}
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition">
            <div className="text-6xl mb-4">📞</div>

            <h2 className="text-2xl font-bold text-slate-800">
              Call Us
            </h2>

            <p className="text-slate-500 mt-3">
              Speak directly with our beauty experts.
            </p>

            <a
              href="tel:9597295755"
              className="inline-block mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold"
            >
              9597295755
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition">
            <div className="text-6xl mb-4">💬</div>

            <h2 className="text-2xl font-bold text-slate-800">
              WhatsApp
            </h2>

            <p className="text-slate-500 mt-3">
              Quick booking and instant support.
            </p>

            <a
              href="https://wa.me/919597295755"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Chat Now
            </a>
          </div>

          {/* Location */}
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition">
            <div className="text-6xl mb-4">📍</div>

            <h2 className="text-2xl font-bold text-slate-800">
              Visit Us
            </h2>

            <p className="text-slate-500 mt-3">
              Experience luxury beauty services in person.
            </p>

            <div className="mt-6 text-slate-700 font-medium">
              Surabi Beauty Studio
            </div>
          </div>
        </div>
      </section>

      {/* Beauty Quote Section */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl text-white p-12 text-center shadow-xl">
          <h2 className="text-4xl font-bold">
            "Beauty Begins The Moment You Decide To Be Yourself."
          </h2>

          <p className="mt-6 text-lg opacity-90">
            We are here to help you look beautiful, feel confident,
            and celebrate your uniqueness.
          </p>
        </div>
      </section>

     {/* Working Hours */}
<section className="max-w-5xl mx-auto px-6 py-20">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-slate-800">
      ⏰ Working Hours
    </h2>

    <p className="text-slate-500 mt-3">
      We're here to make you look and feel amazing.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-6">
    <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-pink-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-transparent hover:border-pink-300">
      <div className="text-5xl mb-4 group-hover:scale-125 transition duration-500">
        🌸
      </div>

      <h3 className="text-2xl font-bold text-slate-800">
        Monday - Friday
      </h3>

      <p className="mt-4 text-slate-500">
        Beauty treatments & appointments
      </p>

      <div className="mt-6 bg-pink-50 text-pink-600 font-bold py-3 rounded-xl">
        9:00 AM - 8:00 PM
      </div>
    </div>

    <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-purple-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-transparent hover:border-purple-300">
      <div className="text-5xl mb-4 group-hover:rotate-12 group-hover:scale-125 transition duration-500">
        ✨
      </div>

      <h3 className="text-2xl font-bold text-slate-800">
        Saturday
      </h3>

      <p className="mt-4 text-slate-500">
        Extended weekend beauty sessions
      </p>

      <div className="mt-6 bg-purple-50 text-purple-600 font-bold py-3 rounded-xl">
        9:00 AM - 9:00 PM
      </div>
    </div>

    <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-blue-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-transparent hover:border-blue-300">
      <div className="text-5xl mb-4 group-hover:scale-125 transition duration-500">
        💎
      </div>

      <h3 className="text-2xl font-bold text-slate-800">
        Sunday
      </h3>

      <p className="mt-4 text-slate-500">
        Relaxing self-care appointments
      </p>

      <div className="mt-6 bg-blue-50 text-blue-600 font-bold py-3 rounded-xl">
        10:00 AM - 6:00 PM
      </div>
    </div>
  </div>
</section>

      {/* Bottom CTA */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold">
            Ready For Your Glow-Up?
          </h2>

          <p className="text-slate-400 mt-4">
            Call or WhatsApp us now and reserve your appointment.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
            <a
              href="tel:9597295755"
              className="bg-pink-500 hover:bg-pink-600 px-8 py-4 rounded-xl font-semibold"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/919597295755"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-semibold"
            >
              💬 WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;