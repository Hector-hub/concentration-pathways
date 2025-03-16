import "./App.css";

import { Hero } from "./components/Hero";
import { ConcentrationsList } from "./components/ConcentrationsList";
import { Colaborators } from "./components/Colaborators";
import { LearningPath } from "./components/LearningPath";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Hero />
      <ConcentrationsList />
      <LearningPath />
      <Colaborators />
      <Footer />
    </div>
  );
}

export default App;
