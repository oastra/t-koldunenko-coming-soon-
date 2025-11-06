import { useState } from "react";
import CustomSelect from "./CustomSelect";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
    website: "", // honeypot
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) =>
    /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/.test(
      (phone || "").replace(/\s/g, "")
    );

  const validateForm = () => {
    const newErrors = {};
    if (!(formData.name || "").trim()) newErrors.name = "Name is required";
    else if ((formData.name || "").trim().length < 2)
      newErrors.name = "Name must be at least 2 characters";

    if (!(formData.email || "").trim()) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email))
      newErrors.email = "Please enter a valid email address";

    if (formData.phone && !validatePhone(formData.phone))
      newErrors.phone = "Please enter a valid phone number";

    if (!formData.serviceType)
      newErrors.serviceType = "Please select an inquiry type";

    if (!(formData.message || "").trim())
      newErrors.message = "Please share some details about your inquiry";
    else if ((formData.message || "").trim().length < 20)
      newErrors.message = "Message must be at least 20 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
    if (errors[name]) setErrors((s) => ({ ...s, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "",
          message: "",
          website: "",
        });
        setErrors({});
      } else {
        setStatus("error");
        if (data?.errors) setErrors(data.errors);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
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
        Share your vision, and I&apos;ll get back to you within 48 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* honeypot */}
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

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
            aria-invalid={!!errors.name}
            className={`w-full px-4 py-3 border rounded-lg bg-white font-text text-grey-100 placeholder:text-grey-40 focus:ring-2 focus:ring-primary-40 focus:border-transparent outline-none transition ${errors.name ? "border-red-400" : "border-grey-20"}`}
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
            aria-invalid={!!errors.email}
            className={`w-full px-4 py-3 border rounded-lg bg-white font-text text-grey-100 placeholder:text-grey-40 focus:ring-2 focus:ring-primary-40 focus:border-transparent outline-none transition ${errors.email ? "border-red-400" : "border-grey-20"}`}
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
            aria-invalid={!!errors.phone}
            className={`w-full px-4 py-3 border rounded-lg bg-white font-text text-grey-100 placeholder:text-grey-40 focus:ring-2 focus:ring-primary-40 focus:border-transparent outline-none transition ${errors.phone ? "border-red-400" : "border-grey-20"}`}
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
            aria-invalid={!!errors.message}
            className={`w-full px-4 py-3 border rounded-lg bg-white font-text text-grey-100 placeholder:text-grey-40 focus:ring-2 focus:ring-primary-40 focus:border-transparent outline-none transition resize-none ${errors.message ? "border-red-400" : "border-grey-20"}`}
            placeholder="Tell me about your project, vision, or inquiry..."
          />
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
            className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </div>

        {/* Status Messages */}
        {status === "success" && (
          <div className="p-4 bg-primary-10 border border-primary-20 rounded-lg text-primary-100 text-center font-text text-sm">
            ✓ Thanks! Your message has been received. I’ll reply within 48
            hours.
          </div>
        )}
        {status === "error" && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center font-text text-sm">
            ✗ Something went wrong. Please try again or email{" "}
            <a
              href="mailto:t.koldunenko@gmail.com"
              className="underline font-semibold"
            >
              t.koldunenko@gmail.com
            </a>
          </div>
        )}
      </form>
    </div>
  );
};

export default EnquiryForm;
