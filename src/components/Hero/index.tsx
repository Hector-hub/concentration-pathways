export const Hero = () => {
  const scrollToConcentrations = () => {
    document
      .getElementById("ConcentrationsList")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="relative flex items-center justify-center w-full min-h-screen bg-gradient-to-r from-gray-600 to-gray-400 text-white">
      <div className="w-full   px-4 md:w-11/12 xl:w-8/12 text-center ">
        <h1 className="mb-3 text-4xl font-bold md:text-5xl md:leading-tight md:font-extrabold">
          CONCENTRACIONES <br />{" "}
          <span className="text-transparent  bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400">
            UNIBE
          </span>
        </h1>

        <h1 className="mb-3 text-4xl font-bold  md:text-5xl md:leading-tight md:font-extrabold"></h1>
        <p className="mb-6 text-lg  md:text-xl md:leading-normal">
          Sitio web creado por estudiantes para estudiantes. Descubre todas las
          concentraciones académicas, sus requisitos y las habilidades que
          desarrollarás para potenciar tu futuro en la universidad.
        </p>
      </div>

      {/* Indicador de scroll */}
      <div
        onClick={scrollToConcentrations}
        className="cursor-pointer  absolute bottom-10 flex flex-col items-center"
      >
        <div className="bg-gray-400 items-center mb-4 rounded ">
          <div className="italic text-white p-2   text-lg pl-4">
            "Lugar donde se concentran las concentraciones."
          </div>
        </div>
        <div className="w-6 h-6 border-2 border-white-500 rounded-full  animate-bounce"></div>
        <p className="text-xs mt-2">Desliza hacia abajo para explorar</p>
      </div>
    </section>
  );
};
