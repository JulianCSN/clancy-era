import React, {useEffect} from "react";
import Image from "next/image";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  repeat: number;
  position: "left" | "right";
}

export default function ClancyTape({repeat = 10, position}: Props) {
  useEffect(() => {
    const tapeLeft = document.getElementById("clancy-tape-left");
    const tapeRight = document.getElementById("clancy-tape-right");

    // if (tapeLeft) {
    //   gsap.to(tapeLeft, {
    //     x: 0,
    //     y: -800,
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: tapeLeft,
    //       start: "top top",
    //       end: "bottom top",
    //       scrub: 0.1,
    //     },
    //   });
    // }

    // if (tapeRight) {
    //   gsap.to(tapeRight, {
    //     x: 0,
    //     y: -800,
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: tapeRight,
    //       start: "top top",
    //       end: "bottom top",
    //       scrub: 0.1,
    //     },
    //   });
    // }
  }, []);

  return (
    <div className="relative">
      <div
        id={`clancy-tape-${position}`}
        className={`fixed top-0 ${
          position === "left" ? "left-0" : "right-0"
        } bg-black p-1 md:p-2 space-y-0.5 md:space-y-2 will-change-transform z-50`}
      >
        {Array.from({length: repeat}).map((_, i) => (
          <Image
            key={i}
            src="/images/clancyTapeWhite.webp"
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
