import { about } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-3">
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">About</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
              Executive profile
            </h2>
          </div>
          <div className="lg:col-span-9">
            <p className="text-gray-700 text-lg leading-relaxed">{about}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              {["Loyalty & CRM", "MarTech & AI/ML", "eCommerce", "P&L Leadership", "Analytics", "Team Building"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 bg-white border border-gray-200 text-gray-600 text-sm rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
