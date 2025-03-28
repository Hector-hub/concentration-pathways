export const Badge = ({
  code,
  description,
  prerequisite,
  color = "from-blue-200 to-blue-100",
  borderColor = "bg-blue-300",
  textColor,
  isForExplanation = false,
}: {
  code: string;
  description: string;
  prerequisite?: string;
  color?: string;
  borderColor?: string;
  textColor?: string;
  isForExplanation?: boolean;
}) => {
  if (isForExplanation) {
    return (
      <div className="flex items-center w-full flex-col">
        <h3 className="text-2xl font-bold mb-12 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          ELEMENTOS DEL BADGE
        </h3>

        <div className="relative w-full max-w-xl py-10 font-sans">
          <div className="relative flex justify-center my-16">
            {/* Badge regular */}
            <div className="relative w-48 h-42 z-10">
              {/* Borde externo */}
              <div
                className={`absolute w-full h-full ${borderColor} 
                  transform rotate-90 clip-hexagon`}
              />

              {/* Hexágono principal con gradiente 3D */}
              <div
                className={`absolute w-[calc(100%-8px)] h-[calc(100%-8px)] top-1 left-1 
                  bg-gradient-to-br ${color} transform rotate-90 clip-hexagon 
                  shadow-lg p-2`}
              >
                {/* Contenedor de texto */}
                <div className="absolute inset-0 flex flex-col items-center justify-center transform -rotate-90 text-center">
                  {/* Código */}
                  <span className="text-lg font-bold text-white drop-shadow-md">
                    {code}
                  </span>

                  {/* Descripción */}
                  <span
                    className={`text-sm font-medium max-w-[90%] ${textColor} drop-shadow-sm mt-1`}
                  >
                    {description}
                  </span>

                  {/* Prerrequisito (si existe) */}
                  {prerequisite && (
                    <span className="text-xs text-gray-900 mt-1">
                      {prerequisite}
                    </span>
                  )}
                </div>

                {/* Efecto de brillo radial centrado */}
                <div
                  className="absolute inset-0 clip-hexagon 
                  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
                  from-white/30 via-white/10 to-transparent"
                />
              </div>
            </div>

            {/* Flechas y explicaciones - Estilo moderno */}

            {/* Código de materia - Flecha superior */}
            <div className="absolute z-10 top-0 left-1/2 transform -translate-x-1/2 -translate-y-26">
              <div className="flex flex-col items-center">
                <div className="font-medium text-sm px-4 py-2 bg-gray-900 text-white rounded-lg shadow-md mb-3">
                  Código
                </div>
                <div className="w-3 h-3 rounded-full bg-gray-900 -mt-1.5 animate-pulse"></div>
                <div className="h-18 w-[1px] bg-black"></div>
              </div>
            </div>

            {/* Nombre de materia - Flecha derecha */}
            <div className="z-10 absolute top-1/2 sm:right-5 right-0 transform translate-x-1 -translate-y-1/2">
              <div className="flex items-center">
                <div className=" sm:w-22 w-4 h-[1px]  bg-black "></div>
                <div className="w-3 h-3 rounded-full  bg-gray-900 -mr-1.5 animate-pulse"></div>
                <div className="font-medium text-sm px-4 py-2 bg-gray-900 text-white rounded-lg shadow-md ml-3">
                  Nombre
                </div>
              </div>
            </div>

            {/* Prerequisitos - Flecha inferior */}
            {prerequisite && (
              <div className="z-10 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-26">
                <div className="flex flex-col items-center">
                  <div className="h-18 w-[1px] bg-black"></div>

                  <div className="w-3 h-3 rounded-full bg-gray-900 -mb-1.5 animate-pulse"></div>
                  <div className="font-medium text-sm px-4 py-2 bg-gray-900 text-white rounded-lg shadow-md mt-3">
                    Prerequisitos
                  </div>
                </div>
              </div>
            )}

            {/* Círculo decorativo de fondo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 opacity-50 animate-pulsar"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Versión normal del badge (sin explicación)
  return (
    <div className="relative w-48 h-42 group">
      {/* Borde externo */}
      <div
        className={`absolute w-full h-full ${borderColor} 
            transform rotate-90 clip-hexagon transition-all duration-300`}
      />

      {/* Hexágono principal con gradiente 3D */}
      <div
        className={`absolute w-[calc(100%-8px)] h-[calc(100%-8px)] top-1 left-1 
            bg-gradient-to-br ${color} transform rotate-90 clip-hexagon 
            shadow-lg transition-all duration-300 group-hover:scale-105 p-2`}
      >
        {/* Contenedor de texto */}
        <div className="absolute inset-0 flex flex-col items-center justify-center transform -rotate-90 text-center">
          {/* Código */}
          <span className="text-lg font-bold text-white drop-shadow-md">
            {code}
          </span>

          {/* Descripción */}
          <span
            className={`text-sm font-medium max-w-[90%] ${textColor} drop-shadow-sm mt-1`}
          >
            {description}
          </span>

          {/* Prerrequisito (si existe) */}
          {prerequisite && (
            <span className="text-xs text-gray-900 mt-1">{prerequisite}</span>
          )}
        </div>

        {/* Efecto de brillo radial centrado */}
        <div
          className="absolute inset-0 clip-hexagon 
            bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
            from-white/30 via-white/10 to-transparent"
        />
      </div>
    </div>
  );
};
