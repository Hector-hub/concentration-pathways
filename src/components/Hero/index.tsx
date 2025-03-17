export const Hero = () => {
  const scrollToConcentrations = () => {
    document
      .getElementById("ConcentrationsList")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="relative flex items-center justify-center w-full min-h-screen bg-gradient-to-r from-gray-600 to-gray-400 text-white">
      <div className="w-full px-4 md:w-11/12 xl:w-8/12 text-center">
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            className="size-25"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
          </svg>
        </div>
        <h1 className="mb-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold md:leading-tight md:font-extrabold text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400">
            CONCENTRACIONES
          </span>
          <br /> UNIBE
        </h1>

        <p className="mb-6 text-lg sm:text-xl md:text-2xl md:leading-normal">
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
