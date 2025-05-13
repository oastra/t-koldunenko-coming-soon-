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

      <form
        className="w-full max-w-md bg-white p-6 rounded shadow"
        action="https://formspree.io/f/YOUR_ID_HERE"
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />
        <textarea
          name="message"
          placeholder="Tell me about your project..."
          required
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          Send Inquiry
        </button>
      </form>

      <p className="mt-8 text-sm">Made with ❤️ by Olha Chernysh</p>
    </div>
  );
}
