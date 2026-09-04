export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm text-gray-500">
          <a
            href="arslanwebdevv@gmail.com"
            className="hover:text-black transition-colors"
          >
            Email
          </a>
          <a
            href="https://github.com/arslanTT"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
