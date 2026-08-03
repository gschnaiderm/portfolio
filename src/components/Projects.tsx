import Carousel from "./Carousel";
import { ProjectCardProps } from "./ProjectCard";
import FadeIn from "./FadeIn";

const projectsData: ProjectCardProps[] = [
  {
    titulo: "AirMouse",
    imagenes: ["/assets/airmouse-1.png", "/assets/airmouse-2.png"],
    descripcion: "Air Mouse es un mouse Bluetooth controlado por movimientos de la mano basado en ESP32. Adquiere datos de un IMU MPU-6050 vía I2C y mapea la orientación del cursor sin drift mediante un Filtro Complementario. La arquitectura del firmware se basa en FreeRTOS, utilizando una planificación estratégica de tareas para ejecutar en paralelo el procesamiento matemático de los sensores y la transmisión Bluetooth. Además, la interfaz aprovecha los pines capacitivos del ESP32 como botones táctiles, eliminando piezas mecánicas.",
    caracteristicas: [
      "C / C++",
      "ESP32",
      "FreeRTOS",
      "I2C",
      "Gestión de Memoria y Bajo Nivel"
    ],
    github: "github.com/gschnaiderm/air-mouse"
  },
  {
    titulo: "Westeros Hotline",
    imagenes: ["/assets/westeros-hotline.png"],
    descripcion: "Westeros Hotline es un simulador narrativo desarrollado en Unity con C# donde se aplican conceptos de Ingenieria de Software. Su núcleo fue diseñado bajo los principios SOLID y Clean Code junto con una arquitectura MVP, logrando un desacoplamiento total entre la lógica de negocio y el ciclo de vida del motor gráfico. Para organizar la complejidad estructural, la instanciación de elementos y la comunicación de eventos, se implementaron de forma nativa patrones de diseño como Singleton, Factory, Strategy y Observer. Desde una perspectiva técnica, el sistema integra dinámicamente servicios de inteligencia artificial generativa a través de las APIs de Google Gemini, Hugging Face y VoiceRSS para tener una experiencia diferente en cada partida. Por ultimo, se utilizo tecnologias como UI Toolkit para el desarrollo de la interfaz de usuario para tener una UI responsiva haciendo uso de tecnologias web.",
    caracteristicas: [
      "Unity Engine",
      "C#",
      "Arquitectura MVP",
      "Patrones de Diseño",
      "IA Generativa",
      "Unity UI Toolkit"
    ],
    github: "github.com/gschnaiderm/westeros-hotline"
  },
  {
    titulo: "Plataforma Ecommerce y Gestión de Reservas (Híbrida)",
    imagenes: ["/assets/proyecto-web-1.jpg", "/assets/proyecto-web-2.jpg"],
    descripcion: "Sistema web integral desarrollado para una cervecería artesanal. El desafío principal radicó en sincronizar el inventario físico (ventas en el local) con el digital (compras online) en tiempo real para evitar la sobreventa. Se implementó una solución transaccional sólida a nivel de base de datos y un modelo de stock de seguridad (buffer), gestionando todo desde una arquitectura moderna y serverless.",
    caracteristicas: [
      "Next.js (App Router) & React",
      "Neon Postgres (Serverless)",
      "Drizzle ORM (Transacciones ACID)",
      "Clerk (Autenticación Segura)"
    ]
  },
];

export default function Projects() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
      <div className="max-w-7xl mx-auto">
        <FadeIn direction="up">
          <div className="mb-16 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-text-heading mb-4">
              Proyectos Destacados
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={200}>
          <Carousel projects={projectsData} />
        </FadeIn>
      </div>
    </section>
  );
}
