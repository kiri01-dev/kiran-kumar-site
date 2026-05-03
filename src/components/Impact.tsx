import { metrics } from "@/data/content";

export default function Impact() {
  return (
    <section id="impact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">Impact</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900">
            Outcomes that moved the needle
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-xl overflow-hidden">
          {metrics.map((m, i) => (
            <div key={i} className="bg-white p-8 lg:p-10 flex flex-col gap-2">
              <p className="font-serif text-4xl lg:text-5xl font-bold text-accent leading-none">
                {m.value}
              </p>
              <p className="text-gray-900 font-medium text-base mt-1">{m.label}</p>
              <p className="text-gray-500 text-sm">{m.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
