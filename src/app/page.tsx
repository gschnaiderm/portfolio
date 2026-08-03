import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-primary/30 overflow-hidden">
      {/* Fondo base */}
      <div className="fixed inset-0 -z-20 h-full w-full bg-bg-base"></div>

      {/* Brillo ambiental (Glow) */}
      <div className="fixed inset-0 -z-10 h-full w-full">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[120px]"></div>
      </div>

      {/* Patrón de puntos (Dot pattern) */}
      <div
        className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)]"
        style={{ backgroundSize: '32px 32px' }}
      ></div>

      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

