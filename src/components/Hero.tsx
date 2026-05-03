import Image from "next/image";
import { person } from "@/data/content";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* Text — 3 columns */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">
              San Francisco Bay Area
            </p>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              {person.name}
            </h1>
            <h2 className="font-serif text-2xl lg:text-3xl text-accent font-medium mb-6">
              {person.headline}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
              {person.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-accent text-white font-medium rounded hover:bg-accent-dark transition-colors text-sm"
              >
                Get in Touch
              </a>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded hover:border-accent hover:text-accent transition-colors text-sm"
              >
                View LinkedIn
              </a>
              <a
                href="#impact"
                className="px-6 py-3 text-gray-500 font-medium text-sm hover:text-accent transition-colors flex items-center gap-2"
              >
                See Impact ↓
              </a>
            </div>
          </div>

          {/* Photo — 2 columns */}
          <div className="lg:col-span-2 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-72 h-80 lg:w-80 lg:h-96">
              <div className="absolute inset-0 rounded-2xl bg-accent/10 translate-x-3 translate-y-3" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
                <Image
                  src={person.headshot}
                  alt={person.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
