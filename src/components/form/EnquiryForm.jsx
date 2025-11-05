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
    // Flexible international phone format
    const re =
      /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
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

    // Phone validation (optional but validated if provided)
    if (formData.phone.trim() && !validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Service type validation
    if (!formData.serviceType) {
      newErrors.serviceType = "Please select an inquiry type";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Please share some details about your inquiry";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters";
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
      className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-grey-10 p-8 max-w-2xl mx-auto"
    >
      <h2 className="font-display text-3xl font-normal text-grey-100 mb-2 tracking-wide">
        Get in Touch
      </h2>
      <p className="font-text text-grey-60 mb-8 text-sm">
        Share your vision, and I'll get back to you within 48 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block font-text text-sm font-medium text-grey-80 mb-2"
          >
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg bg-white font-text text-grey-100 placeholder:text-grey-40 focus:ring-2 focus:ring-primary-40 focus:border-transparent outline-none transition ${
              errors.name ? "border-red-400" : "border-grey-20"
            }`}
            placeholder="Jane Doe"
          />
          {errors.name && (
            <p className="text-red-600 text-xs mt-2 font-text bg-red-50 px-3 py-2 rounded-md">
              ⚠ {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block font-text text-sm font-medium text-grey-80 mb-2"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg bg-white font-text text-grey-100 placeholder:text-grey-40 focus:ring-2 focus:ring-primary-40 focus:border-transparent outline-none transition ${
              errors.email ? "border-red-400" : "border-grey-20"
            }`}
            placeholder="jane@example.com"
          />
          {errors.email && (
            <p className="text-red-600 text-xs mt-2 font-text bg-red-50 px-3 py-2 rounded-md">
              ⚠ {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block font-text text-sm font-medium text-grey-80 mb-2"
          >
            Phone Number{" "}
            <span className="text-grey-40 font-light">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg bg-white font-text text-grey-100 placeholder:text-grey-40 focus:ring-2 focus:ring-primary-40 focus:border-transparent outline-none transition ${
              errors.phone ? "border-red-400" : "border-grey-20"
            }`}
            placeholder="+61 400 000 000"
          />
          {errors.phone && (
            <p className="text-red-600 text-xs mt-2 font-text bg-red-50 px-3 py-2 rounded-md">
              ⚠ {errors.phone}
            </p>
          )}
        </div>

        {/* Inquiry Type */}
        <div>
          <label
            htmlFor="serviceType"
            className="block font-text text-sm font-medium text-grey-80 mb-2"
          >
            Inquiry Type *
          </label>
          <CustomSelect
            value={formData.serviceType}
            onChange={handleChange}
            error={errors.serviceType}
            placeholder="Select inquiry type..."
            options={[
              { value: "", label: "Select inquiry type..." },
              { value: "commission", label: "Commission Work" },
              { value: "collaboration", label: "Collaboration" },
              { value: "exhibition", label: "Exhibition Inquiry" },
              { value: "purchase", label: "Purchase Artwork" },
              { value: "workshop", label: "Workshop / Teaching" },
              { value: "interview", label: "Interview / Press" },
              { value: "consultation", label: "Consultation" },
              { value: "other", label: "Other" },
            ]}
          />
          {errors.serviceType && (
            <p className="text-red-600 text-xs mt-2 font-text bg-red-50 px-3 py-2 rounded-md">
              ⚠ {errors.serviceType}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block font-text text-sm font-medium text-grey-80 mb-2"
          >
            Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className={`w-full px-4 py-3 border rounded-lg bg-white font-text text-grey-100 placeholder:text-grey-40 focus:ring-2 focus:ring-primary-40 focus:border-transparent outline-none transition resize-none ${
              errors.message ? "border-red-400" : "border-grey-20"
            }`}
            placeholder="Tell me about your project, vision, or inquiry..."
          ></textarea>
          {errors.message && (
            <p className="text-red-600 text-xs mt-2 font-text bg-red-50 px-3 py-2 rounded-md">
              ⚠ {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-primary-80 text-white px-6 py-4 rounded-lg font-text font-medium transition-all duration-300 hover:bg-primary-60 active:bg-primary-100 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </div>

        {/* Status Messages */}
        {status === "success" && (
          <div className="p-4 bg-primary-10 border border-primary-20 rounded-lg text-primary-100 text-center font-text text-sm">
            ✓ Thank you for reaching out! I've received your message and will
            respond within 48 hours.
          </div>
        )}

        {status === "error" && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center font-text text-sm">
            ✗ Something went wrong. Please try again or email me directly at{" "}
            <a
              href="mailto:hello@tkoldunenko.com"
              className="underline font-semibold"
            >
              hello@tkoldunenko.com
            </a>
          </div>
        )}
      </form>
    </div>
  );
};

export default EnquiryForm;
