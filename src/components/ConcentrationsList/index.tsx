import { motion } from "framer-motion";
import softwareAvif from "@/assets/images/concentrations/software.avif";
import softwareWebp from "@/assets/images/concentrations/software.webp";
import cybersecurityAvif from "@/assets/images/concentrations/cybersecurity.avif";
import cybersecurityWebp from "@/assets/images/concentrations/cybersecurity.webp";
import entrepreneurshipAvif from "@/assets/images/concentrations/entrepreneurship.avif";
import entrepreneurshipWebp from "@/assets/images/concentrations/entrepreneurship.webp";
import researchAvif from "@/assets/images/concentrations/research.avif";
import researchWebp from "@/assets/images/concentrations/research.webp";
import projectManagementAvif from "@/assets/images/concentrations/project-management.avif";
import projectManagementWebp from "@/assets/images/concentrations/project-management.webp";
import innovationAvif from "@/assets/images/concentrations/innovation.avif";
import innovationWebp from "@/assets/images/concentrations/innovation.webp";

const concentrations = [
  {
    title: "Gestión de Software",
    description:
      "Dirigida al desarrollo, implementación y mantenimiento de soluciones tecnológicas, incluyendo metodologías ágiles y arquitectura de software.",
    images: { avif: softwareAvif, webp: softwareWebp },
    nameId: "software",
  },
  {
    title: "Gestión de Ciberseguridad",
    description:
      "Enfocada en la protección de sistemas, redes y datos contra amenazas digitales, brindando conocimientos en seguridad informática, criptografía y gestión de riesgos.",
    images: { avif: cybersecurityAvif, webp: cybersecurityWebp },
    nameId: "cybersecurity",
  },
  {
    title: "Emprendimiento",
    description:
      "A través de esta concentración aprenderás las competencias para identificar, desarrollar y ejecutar oportunidades de negocio.",
    images: { avif: entrepreneurshipAvif, webp: entrepreneurshipWebp },
    nameId: "entrepreneurship",
  },
  {
    title: "Investigación",
    description:
      "Desarrolla habilidades analíticas para contribuir al avance del conocimiento en tecnología, con énfasis en metodologías científicas y experimentación.",
    images: { avif: researchAvif, webp: researchWebp },
    nameId: "research",
  },
  {
    title: "Gestión de Proyectos",
    description:
      "Enseña a planificar, ejecutar y supervisar proyectos tecnológicos mediante metodologías de gestión como Scrum y PMP.",
    images: { avif: projectManagementAvif, webp: projectManagementWebp },
    nameId: "projectManagement",
  },
  {
    title: "Innovación + Desarrollo",
    description:
      "Diseñada para ofrecer a nuestros estudiantes una experiencia enriquecedora y orientada hacia la innovación y el desarrollo de habilidades creativas y emprendedoras.",
    images: { avif: innovationAvif, webp: innovationWebp },
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
        CONCENTRACIONES
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
            className="bg-white cursor-pointer shadow-lg rounded-xl overflow-hidden transition-transform duration-300"
            onClick={() => scrollToPathWay(concentration.nameId)}
          >
            <picture>
              <source srcSet={concentration.images.avif} type="image/avif" />
              <source srcSet={concentration.images.webp} type="image/webp" />
              <img
                src={concentration.images.webp} // Fallback
                className="object-cover w-full h-56"
                alt={concentration.title}
                loading="lazy"
              />
            </picture>
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
