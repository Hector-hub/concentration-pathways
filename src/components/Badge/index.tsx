export const Badge = ({
  code,
  description,
  prerequisite,
  color = "from-blue-200 to-blue-100",
  borderColor = "bg-blue-300",
  textColor,
}: {
  code: string;
  description: string;
  prerequisite?: string;
  color?: string;
  borderColor?: string;
  textColor?: string;
}) => (
  <div className="relative w-48 h-44  group">
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
          <span className="text-xs text-gray-900  mt-1">{prerequisite}</span>
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
