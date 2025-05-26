import React from "react";
import Image from "next/image";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  repeat: number;
  position: "left" | "right";
}

export default function ClancyTape({repeat = 10, position}: Props) {
  return (
    <div className="relative">
      <div
        id={`clancy-tape-${position}`}
        className={`fixed top-0 ${
          position === "left" ? "left-0" : "right-0"
        } bg-black p-1 md:p-2 space-y-0.5 md:space-y-2 z-50`}
      >
        {Array.from({length: repeat}).map((_, i) => (
          <Image
            key={i}
            src="/images/ClancyTapeWhite.webp"
            alt="Clancy Tape"
            width={100}
            height={100}
            priority
            quality={100}
            className="bg-black w-3 md:w-10"
          />
        ))}
      </div>
    </div>
  );
}
