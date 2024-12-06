import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <>
      <div className={"relative pt-24 lg:pt-0  text-white min-h-[800px]"}>
        <div className="container relative inset-0 z-10 gap-8 section flex  items-center flex-col lg:flex-row justify-center lg:justify-between min-h-[800px] lg:min-h-[650px]">
          <div className="mb-16 max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold leading-tight">
              Alliez technologie et créativité pour toucher votre public comme
              jamais auparavant.
            </h1>
            <p className="text-xl opacity-90">
              La pub là où vous ne l&apos;avez jamais créée. Nous sommes votre
              partenaire, offrez-vous une nouvelle dimension.
            </p>
          </div>
        </div>
        <Image src={"/ville.png"} alt="bg" fill className="object-cover" />
      </div>
    </>
  );
}

export default Hero;
