import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">Experience</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900">
            Career highlights
          </h2>
        </div>

        <div className="space-y-0">
          {experience.map((role, i) => (
            <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 py-10 border-b border-gray-200 last:border-0">
              {/* Period */}
              <div className="lg:col-span-2">
                <span className="text-sm text-gray-400 font-medium">{role.period}</span>
              </div>

              {/* Content */}
              <div className="lg:col-span-10">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
                  <h3 className="font-serif text-xl font-semibold text-gray-900">{role.title}</h3>
                  <span className="text-accent font-medium text-base">{role.company}</span>
                </div>
                <ul className="space-y-2">
                  {role.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                      <span className="text-accent mt-1 flex-shrink-0">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Earlier career note */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-gray-400 text-sm">
            Earlier career: Manager of Finance, Safeway Inc. (2006–2009) · Staff Program Manager & Senior Process Development Engineer, Broadcom Ltd. (1996–2006)
          </p>
        </div>
      </div>
    </section>
  );
}
