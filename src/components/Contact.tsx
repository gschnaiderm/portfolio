import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
      <div className="max-w-4xl mx-auto">
        <FadeIn direction="up">
          <div className="mb-12 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-text-heading mb-4">
              Contacto
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>
        </FadeIn>
        
        <FadeIn direction="up" delay={200}>
          <div className="flex flex-col items-center text-center">
            <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-10 max-w-3xl">
              Actualmente me encuentro en la búsqueda activa de nuevas oportunidades laborales. Estoy sumamente motivado por integrarme a un entorno profesional donde pueda aportar mi base técnica, seguir aprendiendo de proyectos reales y ganar experiencia de valor dentro de la industria.
            </p>
            
            <a 
              href="mailto:gschnaiderm@gmail.com" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-bg-base font-bold text-lg rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contactar
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
