import { education } from "@/data/content";

export default function Education() {
  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">Education</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900">
            Academic foundation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border border-gray-100">
              <div className="w-8 h-0.5 bg-accent mb-6" />
              <p className="text-gray-600 text-sm font-medium mb-1">{edu.degree}</p>
              <h3 className="font-serif text-lg font-semibold text-gray-900 leading-snug">
                {edu.institution}
              </h3>
              {edu.school && (
                <p className="text-gray-400 text-sm mt-1">{edu.school}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
