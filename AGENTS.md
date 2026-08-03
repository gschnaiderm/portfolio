# PORTFOLIO BLUEPRINT & DATA
**Instrucción para el Agente de IA (Developer):** 
Usa la siguiente estructura y datos para generar una Landing Page de un portfolio profesional. Interpola los textos proporcionados tal cual están. La página debe tener 3 secciones principales.

---

## SECCIÓN 1: Hero & About Me
**Componente Visual esperado:** Un Hero section limpio con un título principal, seguido de un bloque de texto formal y profesional.

*   **Nombre:** Germán Schnaider
*   **Titular:** Desarrollador de Software | Ingeniería en Computación
*   **Descripción Profesional:** 
    "Soy estudiante avanzado de la carrera de Ingeniería en Computación en la Universidad Nacional del Sur (UNS), en búsqueda de mi primera experiencia laboral profesional. Mi formación académica me ha otorgado una base analítica sólida y una comprensión profunda de la arquitectura de los sistemas, permitiéndome abordar problemas complejos desde el bajo nivel hasta las interfaces de usuario.
    Tengo un interés particular en roles que me permitan aportar y seguir desarrollándome en áreas transversales como la programación de sistemas embebidos, el diseño y gestión de redes, el desarrollo de aplicaciones web de alto rendimiento y la arquitectura de software en general. Me caracterizo por mi capacidad de aprendizaje autónomo y mi enfoque orientado a la resolución de problemas reales."

---

## SECCIÓN 2: Proyectos (Carrusel)
**Componente Visual esperado:** Un Carrusel interactivo que muestre **una sola tarjeta (card) a la vez**. El usuario debe poder navegar a la siguiente/anterior. 
**Estructura de la Card (Props):** `{ titulo, imagenes[], descripcion, caracteristicas[] }`

### Proyecto 1
*   **titulo:** Plataforma Ecommerce y Gestión de Reservas (Híbrida)
*   **imagenes:** `["/assets/proyecto-web-1.jpg", "/assets/proyecto-web-2.jpg"]` *(Nota: Dejar src como placeholders si no hay imagen)*
*   **descripcion:** Sistema web integral desarrollado para una cervecería artesanal. El desafío principal radicó en sincronizar el inventario físico (ventas en el local) con el digital (compras online) en tiempo real para evitar la sobreventa. Se implementó una solución transaccional sólida a nivel de base de datos y un modelo de stock de seguridad (buffer), gestionando todo desde una arquitectura moderna y serverless.
*   **caracteristicas:**
    *   Next.js (App Router) & React
    *   Neon Postgres (Serverless)
    *   Drizzle ORM (Transacciones ACID)
    *   Clerk (Autenticación Segura)

### Proyecto 2
*   **titulo:** Desarrollo de Sistema Embebido
*   **imagenes:** `["/assets/proyecto-embebido-1.jpg"]`
*   **descripcion:** [Breve descripción de qué hace físicamente el sistema. Ej: Sistema de adquisición de datos y control de sensores en tiempo real desarrollado para interactuar directamente con el hardware, garantizando un uso eficiente de la memoria y tiempos de respuesta críticos.]
*   **caracteristicas:**
    *   [Lenguaje ej: C / C++]
    *   [Microcontrolador ej: ESP32 / STM32 / Arduino]
    *   [Protocolos ej: I2C, SPI, UART]
    *   Gestión de Memoria y Bajo Nivel

### Proyecto 3
*   **titulo:** Motor y Lógica de Videojuego
*   **imagenes:** `["/assets/proyecto-unity-1.jpg"]`
*   **descripcion:** [Breve descripción del juego o de la mecánica principal resuelta. Ej: Desarrollo de un videojuego centrado en el rendimiento y la fluidez. Se aplicaron conceptos avanzados de programación orientada a objetos, matemáticas vectoriales y patrones de diseño específicos del rubro para manejar físicas, colisiones e inteligencia artificial de entidades.]
*   **caracteristicas:**
    *   Unity Engine
    *   C# (Programación Orientada a Objetos)
    *   [Patrones aplicados ej: State Machines, Object Pooling]
    *   Matemáticas Vectoriales

---

## SECCIÓN 3: Contacto
**Componente Visual esperado:** Un pie de página (Footer) o sección de contacto minimalista con iconos que enlacen a las redes y un llamado a la acción claro.

*   **Call to Action:** "¿Buscás sumar a alguien con perfil de ingeniería a tu equipo? Hablemos."
*   **Email:** [gschnaiderm@gmail.com]
*   **LinkedIn:** [https://linkedin.com/in/gschnaiderm]
*   **GitHub:** [https://github.com/gschnaiderm]
*   **Ubicación:** [Bahía Blanca, Argentina]