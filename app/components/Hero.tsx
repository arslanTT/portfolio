import Image from "next/image";

// This is a Server Component because it doesn't use state or browser APIs.
// Keeping it server-rendered reduces the JavaScript sent to the client.

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center"
    >
      {/* Profile image */}
      <div
        className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white
          shadow-lg md:h-40 md:w-40 animate-fade-in-up"
      >
        <Image
          src="/profile-placeholder.jpg"
          alt="Your Name"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Name + pitch */}
      <h1
        className="mt-6 text-3xl font-bold text-gray-900 md:text-5xl
          animate-fade-in-up [animation-delay:150ms]"
      >
        Muhammad Arslan
      </h1>

      <p
        className="mt-4 max-w-xl text-base text-gray-600 md:text-lg
          animate-fade-in-up [animation-delay:300ms]"
      >
        Full-stack developer building AI-integrated web apps with the MERN stack
        and Next.js.
      </p>

      {/* CTA buttons */}
      <div
        className="mt-8 flex flex-col gap-4 sm:flex-row
          animate-fade-in-up [animation-delay:450ms]"
      >
        <a
          href="#projects"
          className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white
            transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-black px-6 py-3 text-sm font-medium
            transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
