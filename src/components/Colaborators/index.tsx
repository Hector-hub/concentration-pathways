import hectorReyes from "@/assets/images/colabotators/hector-reyes.png";

export const Colaborators = () => {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-gray-400 mb-6">
        Colaboradores
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src={hectorReyes}
            alt="Héctor Reyes"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-blue-700">Héctor Reyes</h3>
          <p className="text-gray-600">Matrícula: 23-0584</p>
        </div>
      </div>
    </main>
  );
};
