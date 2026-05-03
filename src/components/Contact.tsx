import { person } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">Contact</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Let&apos;s connect
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            {person.contactBlurb}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${person.email}`}
              className="px-6 py-3 bg-accent text-white font-medium rounded hover:bg-accent-dark transition-colors text-sm"
            >
              {person.email}
            </a>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded hover:border-accent hover:text-accent transition-colors text-sm"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
