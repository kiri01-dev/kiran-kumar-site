import { person } from "@/data/content";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-serif text-gray-500 text-sm">{person.name} · {person.location}</p>
        <div className="flex gap-6">
          <a
            href={`mailto:${person.email}`}
            className="text-gray-400 hover:text-accent text-sm transition-colors"
          >
            Email
          </a>
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent text-sm transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
