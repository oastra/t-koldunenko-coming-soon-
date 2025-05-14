export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-[#FFA500] text-black px-4 py-10">
      {/* Illustration at the top */}
      <img
        src="/images/women-in-tech.png"
        alt="Coming Soon Illustration"
        className="w-full max-w-md mb-8"
      />

      {/* Main Content */}
      <h1 className="text-5xl font-bold mb-4">Coming Soon</h1>
      <h2 className="text-2xl mb-6">Olha Chernysh</h2>
      <p className="max-w-xl mb-6">
        I’m Olha — a Freelance Web Developer. While this site is under
        construction, I’m available for <strong>free consultations</strong> and
        excited to help small businesses grow in the digital world. Let’s
        connect!
      </p>

      {/* <form
          action="https://ochernysh25.getform.com/8dmm8"
          method="POST"
          className="w-full max-w-md bg-white p-6 rounded shadow text-left"
        >
          <p className="mb-4 text-sm text-gray-700">
            Please leave your <strong>name</strong> and describe your current
            situation — what your business does, and what kind of help you’re
            looking for online. I’ll get back to you with a
            <strong>free consultation</strong>.
          </p>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full mb-3 p-2 border border-gray-300 rounded"
          />
          <input
            type="mail"
            name="mail"
            placeholder="yourmail@yourmail.com"
            required
            className="w-full mb-3 p-2 border border-gray-300 rounded"
          />

          <textarea
            name="message"
            placeholder="Describe your business and what you need help with"
            required
            rows="5"
            className="w-full mb-3 p-2 border border-gray-300 rounded"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Send Inquiry
          </button>
        </form> */}

      <div className="w-full max-w-2xl rounded-md overflow-hidden">
        <iframe
          id="JotFormIFrame-251331958773061"
          title="Inquiry"
          src="https://form.jotform.com/251331958773061"
          style={{
            minWidth: "100%",
            maxWidth: "100%",
            height: "1080px",
            border: "none",
          }}
          allow="geolocation; microphone; camera; fullscreen"
          scrolling="no"
        />
      </div>

      <p className="mt-8 text-sm">Made with ❤️ by Olha Chernysh</p>
    </div>
  );
}
