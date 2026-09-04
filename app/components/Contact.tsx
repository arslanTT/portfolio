const CONTACT_LINKS = [
  {
    label: "Email",
    href: "arslan.acc112@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto px-6 py-24 scroll-mt-20 text-center"
    >
      <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
      <p className="mt-2 text-gray-600">
        Interested in working together? Feel free to reach out.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {CONTACT_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-black text-sm font-medium transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
