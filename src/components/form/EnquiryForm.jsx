import { useState } from "react";
import CustomSelect from "./CustomSelect";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  // Validation functions
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    // Australian phone number format (flexible)
    const re = /^(\+?61|0)[2-478](?:[ -]?[0-9]){8}$/;
    return re.test(phone.replace(/\s/g, ""));
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid Australian phone number";
    }

    // Service type validation
    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Please tell us about your project";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "",
          message: "",
        });
        setErrors({});

        // Clear success message after 5 seconds
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
        console.error("Error:", data.error);
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (error) {
      setStatus("error");
      console.error("Error:", error);
      setTimeout(() => setStatus(""), 5000);
    }
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
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="John Smith"
          />
          {errors.name && (
            <p className="text-red-700 text-sm mt-1 bg-white px-3 py-2 rounded-md font-medium">
              ⚠ {errors.name}
            </p>
          )}
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
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-red-700 text-sm mt-1 bg-white px-3 py-2 rounded-md font-medium">
              ⚠ {errors.email}
            </p>
          )}
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
            className={`w-full px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="0400 000 000"
          />
          {errors.phone && (
            <p className="text-red-700 text-sm mt-1 bg-white px-3 py-2 rounded-md font-medium">
              ⚠ {errors.phone}
            </p>
          )}
        </div>

        {/* Service Type */}
        <div>
          <label
            htmlFor="serviceType"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Service Required *
          </label>
          <CustomSelect
            value={formData.serviceType}
            onChange={handleChange}
            error={errors.serviceType}
            placeholder="Select a service..."
            options={[
              { value: "", label: "Select a service..." },
              { value: "roof-installation", label: "Roof Installation" },
              { value: "roof-repair", label: "Roof Repair" },
              { value: "roof-replacement", label: "Roof Replacement" },
              { value: "roof-plumbing", label: "Roof Plumbing" },
              { value: "gutter-installation", label: "Gutter Installation" },
              { value: "gutter-cleaning", label: "Gutter Cleaning" },
              { value: "leak-repair", label: "Leak Repair" },
              { value: "inspection", label: "Roof Inspection" },
              { value: "other", label: "Other" },
            ]}
          />
          {errors.serviceType && (
            <p className="text-red-700 text-sm mt-1 bg-white px-3 py-2 rounded-md font-medium">
              ⚠ {errors.serviceType}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Tell me about your Enquiry... *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition resize-none ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Please describe your roofing needs..."
          ></textarea>
          {errors.message && (
            <p className="text-red-700 text-sm mt-1 bg-white px-3 py-2 rounded-md font-medium">
              ⚠ {errors.message}
            </p>
          )}
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
            ✓ Thank you! We've received your inquiry and will contact you within
            24 hours. Check your email for confirmation.
          </div>
        )}

        {status === "error" && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center">
            ✗ Something went wrong. Please try again or call us directly at{" "}
            <a href="tel:0400000000" className="underline font-semibold">
              0400 000 000
            </a>
          </div>
        )}
      </form>
    </div>
  );
};

export default EnquiryForm;
