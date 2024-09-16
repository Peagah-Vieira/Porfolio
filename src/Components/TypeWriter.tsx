import React from "react";
import Typewriter from "typewriter-effect";

export default function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-stack Developer",
          "Laravel Specialist",
          "React & TypeScript Developer",
          "Python Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
