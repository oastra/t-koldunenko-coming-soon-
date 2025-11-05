// src/pages/privacy-policy/index.jsx
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Tetiana Koldunenko</title>
        <meta
          name="description"
          content="How your personal information is collected, used and protected on this website."
        />
      </Head>

      <main className="px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop pt-28 pb-20 bg-[#F6E8E6]">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-raleway text-h2 uppercase tracking-[0.08em] text-grey-100 mb-2">
            Privacy Policy
          </h1>
          <p className="font-lexend text-small text-grey-60 mb-10">
            <span className="uppercase tracking-wider">Last updated:</span> 05
            November 2025
          </p>

          <div className="prose prose-neutral max-w-none font-lexend text-body text-grey-100">
            <p>
              This Privacy Policy explains how I,{" "}
              <strong>Tetiana Koldunenko</strong>, collect, use and protect your
              personal information when you use my website or contact me.
            </p>

            <h2>1. Who I am</h2>
            <ul>
              <li>
                <strong>Data controller:</strong> Tetiana Koldunenko (Sydney,
                Australia)
              </li>
              <li>
                <strong>Contact:</strong>{" "}
                <a href="mailto:t.koldunenko@gmail.com">
                  t.koldunenko@gmail.com
                </a>
              </li>
            </ul>

            <h2>2. What I collect</h2>
            <p>
              I only collect information that you choose to give me or that
              helps the site function.
            </p>
            <ul>
              <li>
                <strong>Contact form:</strong> your name, email, and message.
              </li>
              <li>
                <strong>Newsletter sign-up:</strong> your name, email, and topic
                preferences.
              </li>
              <li>
                <strong>Browsing data (cookies/analytics):</strong>{" "}
                non-identifying information such as pages viewed, device type,
                approximate location, and session data.
              </li>
            </ul>

            <h2>3. How I use your information</h2>
            <ul>
              <li>To respond to enquiries or provide project information.</li>
              <li>
                To send newsletters or updates if you subscribed (you can
                unsubscribe any time).
              </li>
              <li>
                To operate and improve the website and understand usage
                patterns.
              </li>
              <li>
                To comply with legal obligations and protect this site from
                misuse.
              </li>
            </ul>

            <h2>4. Legal basis (EU/EEA visitors)</h2>
            <ul>
              <li>
                <strong>Consent</strong> – for newsletters and non-essential
                analytics cookies.
              </li>
              <li>
                <strong>Legitimate interests</strong> – to operate and secure
                the website.
              </li>
              <li>
                <strong>Contract</strong> – when data is needed to deliver
                agreed services.
              </li>
            </ul>

            <h2>5. How long I keep data</h2>
            <ul>
              <li>
                <strong>Enquiries:</strong> kept up to 12 months unless a
                project starts.
              </li>
              <li>
                <strong>Newsletter data:</strong> kept until you unsubscribe.
              </li>
              <li>
                <strong>Analytics:</strong> stored according to Google’s
                retention settings.
              </li>
            </ul>

            <h2>6. Sharing & third-party services</h2>
            <p>I don’t sell or rent data. I use trusted providers:</p>
            <ul>
              <li>
                <strong>Hosting:</strong> Vercel (serves this website).
              </li>
              <li>
                <strong>Email delivery:</strong> Resend (for contact and
                newsletter forms).
              </li>
              <li>
                <strong>Analytics:</strong> Google Analytics (aggregated usage
                statistics).
              </li>
            </ul>

            <h2>7. Cookies & analytics</h2>
            <p>
              Cookies help the site function, remember preferences, and
              understand visitor behaviour. You can disable cookies in your
              browser or use Google’s opt-out tools.
            </p>

            <h2>8. Your rights</h2>
            <ul>
              <li>
                <strong>Unsubscribe</strong> using the link in each email.
              </li>
              <li>
                <strong>Access / Correction / Deletion</strong> – contact me at{" "}
                <a href="mailto:t.koldunenko@gmail.com">
                  t.koldunenko@gmail.com
                </a>
                .
              </li>
              <li>
                <strong>Withdraw consent</strong> at any time for consent-based
                processing.
              </li>
            </ul>

            <h2>9. Children</h2>
            <p>
              This site isn’t intended for children under 16, and I don’t
              knowingly collect data from them.
            </p>

            <h2>10. Security</h2>
            <p>
              I take reasonable steps to protect your data, but no online
              transmission is 100% secure.
            </p>

            <h2>11. Changes to this policy</h2>
            <p>
              If I make material updates, I’ll update the “Last updated” date
              and notify you on this site.
            </p>

            <h2>12. Contact</h2>
            <p>
              Questions or requests? Email{" "}
              <a href="mailto:t.koldunenko@gmail.com">t.koldunenko@gmail.com</a>
              .
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
