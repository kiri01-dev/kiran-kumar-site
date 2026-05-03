import { advisory } from "@/data/content";

export default function Advisory() {
  return (
    <section id="advisory" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">Board & Advisory</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900">
            Advisory & leadership roles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advisory.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border border-gray-100">
              <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-2">{item.role}</p>
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">{item.org}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
