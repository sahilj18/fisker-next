"use client";
import { useState } from "react";
import Header from "../components/Header";
import Preview from "../components/Preview";
import Configurator from "../components/Configurator";

function HomePage() {
  const [activeOption, setActiveOption] = useState ({
  color: "red_planet",
  interior: "white",
  wheel: "Vortex",
  });
  function updateOption(option ,value) {
    const newOPtions = { ...activeOption, [option]: value };
    setActiveOption(newOPtions);
  }
  
  return (
    <>
      <Header />
      <main className="flex flex-col sm:flex-row justify-between md:gap-8 px-2 md:px-8 py-3 md:py-6">
        <section className="w=full md:w-3/4 ">
          <Preview color="Blue Planet" interior="white" wheel="Vortex" />
        </section>
        <aside className="w-full md:w-1/4 bg-red-300 px-2">
          <Configurator updateOption={updateOption} />
        </aside>
      </main>
    </>
  );
}

export default HomePage;