// Importing the Badge component

import React from "react";
import { Badge } from "../Badge";

// Mock Data for Learning Paths
const learningPaths = [
  {
    nameId: "software",
    title: "Gestión de Software",
    subjects: [
      {
        code: "TI3-701",
        description: "Desarrollo de Aplicaciones de Dispositivos Móviles",
        prerequisite: "TI3-214",
      },
      {
        code: "TI3-711",
        description: "Programación Paralela y Distribuida",
        prerequisite: "TI3-211, TI3-214",
      },
      {
        code: "TI3-501",
        description: "Tendencias en Desarrollo de Software",
        prerequisite: "TI3-212",
      },
      {
        code: "TI3-511",
        description: "Inteligencia en Ciencia de Datos",
        prerequisite: "TI3-215, TI3-314",
      },
      {
        code: "TI3-521",
        description: "Ingeniería de Software en Tiempo Real",
        prerequisite: "TI3-313",
      },
      {
        code: "TI3-531",
        description: "Seguridad en Sistemas de Desarrollo de Software",
        prerequisite: "TI3-321",
      },
    ],
    badgeColorsBorder: "from-blue-400 to-blue-300",
    badgeColors: "from-blue-500 to-blue-400",
  },
  {
    nameId: "cybersecurity",
    title: "Gestión de Ciberseguridad",
    subjects: [
      {
        code: "TI3-702",
        description: "Malware y Vulnerabilidades",
        prerequisite: "TI3-212, TI3-321",
      },
      { code: "TI3-712", description: "Criptografía", prerequisite: "TI3-110" },
      {
        code: "TI3-502",
        description: "Gestión Estratégica de Ciberseguridad",
        prerequisite: "TI3-321",
      },
      {
        code: "TI3-512",
        description: "Ethical Hacking",
        prerequisite: "TI3-321",
      },
      {
        code: "TI3-522",
        description: "Recuperación de Desastres y Manejo de incidentes",
        prerequisite: "TI3-502",
      },
      {
        code: "TI3-532",
        description: "Análisis Forense",
        prerequisite: "TI3-321",
      },
    ],
    badgeColorsBorder: "from-green-400 to-emerald-300",
    badgeColors: "from-green-500 to-emerald-400",
  },
  {
    nameId: "entrepreneurship",
    title: "Emprendimiento",
    subjects: [
      {
        code: "UNB101",
        description: "Pensamiento y Acción Emprendedora",
        prerequisite: "",
      },
      {
        code: "AD8-220",
        description: "Taller de Creatividad e Innovación para los Negocios",
        prerequisite: "AD8120",
      },
      {
        code: "AD7-519",
        description: "Emprendimiento para la Creación de Nuevos Negocios",
        prerequisite: "",
      },
      {
        code: "AD7-521",
        description: "Gestion de Nuevos Negocios",
        prerequisite: "",
      },
      {
        code: "AD7-522",
        description: "Intraemprendimiento (Emprendimiento Corporativo)",
        prerequisite: "",
      },
    ],
    badgeColorsBorder: "from-orange-300 to-amber-200",
    badgeColors: "from-orange-400 to-amber-300",
  },
  {
    nameId: "research",
    title: "Investigación",
    subjects: [
      {
        code: "CGC-200",
        description: "Metodología de la Investigación",
        prerequisite: "",
      },
      {
        code: "RT1-100",
        description: "Filosofía de la Ciencia",
        prerequisite: "",
      },
      { code: "RT1-130", description: "Estadística II", prerequisite: "" },
      {
        code: "RT1-150",
        description: "Prácticas de la Investigación",
        prerequisite: "",
      },
    ],

    badgeColorsBorder: "from-gray-300 to-gray-200",
    badgeColors: "from-gray-400 to-gray-300",
  },
  {
    nameId: "projectManagement",
    title: "Gestión de Proyectos",
    subjects: [
      {
        code: "N/A",
        description: "Introducción a la gestión de proyecto basado en PMBOOK",
        prerequisite: "",
      },
      {
        code: "N/A",
        description: "Gestión de proyectos ágiles",
        prerequisite: "",
      },
      {
        code: "N/A",
        description: "Preparación para la certificación CAPM/PMP",
        prerequisite: "",
      },
    ],

    badgeColorsBorder: "from-yellow-300 to-amber-200",
    badgeColors: "from-yellow-400 to-amber-200",
  },
  {
    nameId: "innovation",
    title: "Innovación + Desarrollo",
    subjects: [
      {
        code: "TI3-111",
        description: "Fundamentos de Programación",
        prerequisite: "TI3-110",
      },
      {
        code: "UNB-300",
        description: "Estrategias de Innovación",
        prerequisite: "",
      },
      { code: "N/A", description: "Pasantía en Innovación", prerequisite: "" },
    ],

    badgeColorsBorder: "from-purple-300 to-indigo-200",
    badgeColors: "from-purple-400 to-indigo-300",
  },
];

export const LearningPath = () => {
  return (
    <section className="px-4 py-24 mx-auto  bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-gray-400 mb-6">
        Rutas de aprendizaje
      </h1>
      <p className="mb-20 text-lg text-gray-500 text-center">
        Descubre los caminos de aprendizaje para alcanzar cada concentración
        académica. Cada badge representa una materia clave en tu ruta de
        estudio.
      </p>

      <div className="space-y-16">
        {learningPaths.map((path, index) => (
          <div key={index} id={path.nameId}>
            <div
              className={`flex rounded  items-center px-4 py-2 mb-6 mx-auto  md:flex-row bg-gradient-to-r ${path.badgeColors} `}
            >
              <h2 className="text-2xl font-bold text-white ">{path.title}</h2>
            </div>
            <div className="xl:overflow-visible py-4 overflow-x-auto overflow-y-hidden scrollbar-hide">
              <div className="xl:flex inline-flex gap-4 items-center ">
                {path.subjects.map((subject, idx) => (
                  <React.Fragment key={idx}>
                    <Badge
                      code={subject.code}
                      description={subject.description}
                      prerequisite={subject.prerequisite}
                      color={`${path.badgeColors}`} // Using different colors for each subject
                      borderColor={` bg-gradient-to-r ${path.badgeColorsBorder} `}
                      textColor={" text-black"}
                    />

                    {idx < path.subjects.length - 1 && (
                      <span className="text-xl text-gray-600">→</span> // Arrow between badges
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
