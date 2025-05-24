import React, {useEffect} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TrainText() {
  useEffect(() => {
    gsap.fromTo(
      "#letsbeginText",
      {x: 1200},
      {
        x: -1300,
        opacity: 1,
        scrollTrigger: {
          trigger: "#letsbeginText",
          start: "top 138%",
          end: "top -200%",
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (
    <div className="overflow-hidden -mt-36 xl:-mt-44">
      <h2
        id="letsbeginText"
        className="text-yellow text-[90px] sm:text-[140px] 2xl:text-[220px] font-bold whitespace-nowrap"
      >
        LET&apos;S BEGIN
      </h2>
    </div>
  );
}
