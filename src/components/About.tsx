import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
      <div className="max-w-4xl mx-auto">
        <FadeIn direction="up">
          <div className="mb-12 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-text-heading mb-4">
              Sobre mí
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>
        </FadeIn>
        
        <FadeIn direction="up" delay={200}>
          <div className="text-lg md:text-xl text-text-muted leading-relaxed space-y-6">
            <p>
              Soy estudiante avanzado de la carrera de Ingeniería en Computación en la Universidad Nacional del Sur (UNS), en búsqueda de mi primera experiencia laboral profesional. Mi formación académica me ha otorgado una base analítica sólida y una comprensión profunda de la arquitectura de los sistemas, permitiéndome abordar problemas complejos desde el bajo nivel hasta las interfaces de usuario.
            </p>
            <p>
              Tengo un interés particular en roles que me permitan aportar y seguir desarrollándome en áreas transversales como la programación de sistemas embebidos, el diseño y gestión de redes, el desarrollo de aplicaciones web de alto rendimiento y la arquitectura de software en general. Me caracterizo por mi capacidad de aprendizaje autónomo y mi enfoque orientado a la resolución de problemas reales.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
