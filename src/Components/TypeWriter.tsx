import React from "react";
import Typewriter from "typewriter-effect";

export default function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Desenvolvedor Full-stack",
          "Especialista em Laravel",
          "Desenvolvedor React e TypeScript",
          "Criador de Aplicações Escaláveis",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
