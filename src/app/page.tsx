import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Impact from "@/components/Impact";
import Experience from "@/components/Experience";
import Expertise from "@/components/Expertise";
import Advisory from "@/components/Advisory";
import Recognition from "@/components/Recognition";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Impact />
        <Experience />
        <Expertise />
        <Advisory />
        <Recognition />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
