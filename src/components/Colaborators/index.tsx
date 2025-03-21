import hectorReyes from "@/assets/images/colabotators/hector-reyes.png";
// import dafaultProfile from "@/assets/images/colabotators/dafault-profile.png";
import miguelCuevas from "@/assets/images/colabotators/miguel-cuevas.jpeg";
import onilyValera from "@/assets/images/colabotators/onily-valera.jpeg";
import johnnyRondon from "@/assets/images/colabotators/johnny-rondon.png";
import luisPascual from "@/assets/images/colabotators/luis-pascual.png";

const collaborators = [
  { name: "Héctor Reyes", id: "23-0584", image: hectorReyes },
  { name: "Luis Pascual", id: "23-0238", image: luisPascual },
  { name: "Onily Valera", id: "23-0895", image: onilyValera },
  { name: "Johnny Rondón", id: "23-0421", image: johnnyRondon },
  { name: "Miguel Cuevas", id: "23-0688", image: miguelCuevas },
];

export const Colaborators = () => {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-gray-400 mb-6">
        Colaboradores
      </h1>

      {/* Scroll horizontal en móvil/tablet, pero en PC se acomoda en filas */}
      <div className="w-full overflow-x-auto scrollbar-hide lg:overflow-visible">
        <div className="flex gap-4 px-8 py-4 flex-nowrap lg:flex-wrap lg:justify-center">
          {collaborators.map((collaborator, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center min-w-[200px]"
            >
              <img
                src={collaborator.image}
                alt={collaborator.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-700">
                {collaborator.name}
              </h3>
              <p className="text-gray-600">Matrícula: {collaborator.id}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
