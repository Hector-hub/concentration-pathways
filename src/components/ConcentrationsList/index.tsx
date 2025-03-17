import { motion } from "framer-motion";
import softwareImage from "@/assets/images/concentrations/software.webp";
import cybersecurityImage from "@/assets/images/concentrations/cybersecurity.jpg";
import entrepreneurshipImage from "@/assets/images/concentrations/entrepreneurship.png";
import researchImage from "@/assets/images/concentrations/research.jpg";
import projectManagementImage from "@/assets/images/concentrations/project-management.jpg";
import innovationImage from "@/assets/images/concentrations/innovation.jpg";
const concentrations = [
  {
    title: "Gestión de Software",
    description:
      "Dirigida al desarrollo, implementación y mantenimiento de soluciones tecnológicas, incluyendo metodologías ágiles y arquitectura de software.",
    image: softwareImage,
    nameId: "software",
  },
  {
    title: "Gestión de Ciberseguridad",
    description:
      "Enfocada en la protección de sistemas, redes y datos contra amenazas digitales, brindando conocimientos en seguridad informática, criptografía y gestión de riesgos.",
    image: cybersecurityImage,
    nameId: "cybersecurity",
  },
  {
    title: "Emprendimiento",
    description:
      "A través de esta concentración aprenderás las competencias para identificar, desarrollar y ejecutar oportunidades de negocio.",
    image: entrepreneurshipImage,
    nameId: "entrepreneurship",
  },
  {
    title: "Investigación",
    description:
      "Desarrolla habilidades analíticas para contribuir al avance del conocimiento en tecnología, con énfasis en metodologías científicas y experimentación.",
    image: researchImage,
    nameId: "research",
  },
  {
    title: "Gestión de Proyectos",
    description:
      "Enseña a planificar, ejecutar y supervisar proyectos tecnológicos mediante metodologías de gestión como Scrum y PMP.",
    image: projectManagementImage,
    nameId: "projectManagement",
  },
  {
    title: "Innovación Tecnológica",
    description:
      "Explora nuevas tecnologías y su aplicación en la solución de problemas, promoviendo la creatividad y el desarrollo de productos disruptivos.",
    image: innovationImage,
    nameId: "innovation",
  },
];

export const ConcentrationsList = () => {
  const scrollToPathWay = (concentrationNameId: string) => {
    document
      .getElementById(concentrationNameId)
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="px-4 py-24 mx-auto max-w-7xl">
      <h1
        id="ConcentrationsList"
        className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-gray-400 mb-6"
      >
        Concentraciones
      </h1>
      <p className="mb-20 text-lg text-gray-500 text-center">
        Estas concentraciones ofrecen un conjunto estructurado de asignaturas
        que profundizan en un área determinada, proporcionando conocimientos y
        habilidades especializadas.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {concentrations.map((concentration, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white cursor-pointer  shadow-lg rounded-xl overflow-hidden transition-transform duration-300"
            onClick={() => scrollToPathWay(concentration.nameId)}
          >
            <img
              src={concentration.image}
              className="object-cover w-full h-56"
              alt={concentration.title}
              loading="lazy"
            />
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                {concentration.title}
              </h2>
              <p className="text-sm text-gray-500">
                {concentration.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
