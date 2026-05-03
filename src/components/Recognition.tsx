import { recognition } from "@/data/content";

export default function Recognition() {
  return (
    <section id="recognition" className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-gray-400 text-sm font-medium tracking-widest uppercase mb-12">
          Recognized by leading publications
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {recognition.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-6 border border-gray-100 rounded-xl hover:border-accent/30 hover:shadow-sm transition-all"
            >
              <p className="font-serif text-lg font-bold text-gray-800 group-hover:text-accent transition-colors">
                {item.publication}
              </p>
              <p className="text-gray-500 text-xs mt-2 leading-snug">{item.award}</p>
              <p className="text-accent text-xs font-semibold mt-1">{item.year}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
