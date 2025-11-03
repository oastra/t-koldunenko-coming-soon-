import { useState } from "react";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Form submission logic here
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        message: "",
      });

      setTimeout(() => setStatus(""), 3000);
    }, 1000);
  };

  return (
    <div
      id="contact-form"
      className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg shadow-lg p-8 max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Send Inquiry</h2>
      <p className="text-gray-600 mb-6">
        Fill out the form below and we'll get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition"
            placeholder="John Smith"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition"
            placeholder="john@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your phone number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg  bg-white focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition"
            placeholder="0400 000 000"
          />
        </div>

        {/* Service Type */}
        <div>
          <label
            htmlFor="serviceType"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Service Required *
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition bg-white"
          >
            <option value="">Select a service...</option>
            <option value="roof-installation">Roof Installation</option>
            <option value="roof-repair">Roof Repair</option>
            <option value="roof-replacement">Roof Replacement</option>
            <option value="roof-plumbing">Roof Plumbing</option>
            <option value="gutter-installation">Gutter Installation</option>
            <option value="gutter-cleaning">Gutter Cleaning</option>
            <option value="leak-repair">Leak Repair</option>
            <option value="inspection">Roof Inspection</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Tell me about your project... *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition resize-none"
            placeholder="Please describe your roofing needs..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-black text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send Inquiry"}
          </button>
        </div>

        {/* Status Messages */}
        {status === "success" && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
            ✓ Thank you! We'll contact you within 24 hours.
          </div>
        )}

        {status === "error" && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center">
            ✗ Something went wrong. Please try again or call us directly.
          </div>
        )}
      </form>
    </div>
  );
};

export default EnquiryForm;
