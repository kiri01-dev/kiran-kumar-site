import { expertise } from "@/data/content";

export default function Expertise() {
  return (
    <section id="expertise" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">Expertise</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900">
            Core capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, i) => (
            <div
              key={i}
              className="p-8 border border-gray-100 rounded-xl hover:border-accent/30 hover:shadow-sm transition-all group"
            >
              <div className="w-8 h-0.5 bg-accent mb-6 group-hover:w-12 transition-all duration-300" />
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
