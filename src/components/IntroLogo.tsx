"use client";

import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IntroLogo() {
  const logoRef = useRef<HTMLDivElement>(null);
  const [showLogo, setShowLogo] = useState(true);

  // Mount and unmoint logo according to scroll
  useEffect(() => {
    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "+=1000",
      onUpdate: (self) => {
        const scrollY = self.scroll();

        if (scrollY >= 980) {
          setShowLogo(false);
        } else if (scrollY <= 980) {
          setShowLogo(true);
        }
      },
    });
  }, []);

  // Antimations that are applied each time the logo is mounted
  useEffect(() => {
    if (!logoRef.current || !showLogo) return;

    // Fade in inicial
    gsap.fromTo(logoRef.current, {opacity: 0}, {opacity: 1, duration: 1.5});

    // Scale up logo
    gsap.fromTo(
      logoRef.current,
      {scale: 1},
      {
        scale: 20,
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "+=5000",
          scrub: 0.5,
        },
      }
    );
  }, [showLogo]);

  return (
    <>
      {showLogo && (
        <div
          ref={logoRef}
          className="flex justify-center items-center fixed top-0 left-0 w-full h-full opacity-0 -z-10"
        >
          {/* Twenty one pillots svg logo */}
          <svg
            id="_MAIN_Logo"
            data-name="[MAIN] Logo"
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 152 152"
          >
            <path
              id="Path_396"
              data-name="Path 396"
              d="M292.9,173.626a76,76,0,1,0,76,76A76,76,0,0,0,292.9,173.626Zm-38.46,123.556a3.815,3.815,0,0,1-6.351,2.85q-1.472-1.311-2.878-2.717a67.443,67.443,0,0,1,0-95.377q1.406-1.405,2.878-2.717a3.814,3.814,0,0,1,6.351,2.849Zm86.148.133A67,67,0,0,1,292.9,317.068a67.936,67.936,0,0,1-14.421-1.54,3.807,3.807,0,0,1-3-3.728V187.453a3.814,3.814,0,0,1,3-3.728,67.936,67.936,0,0,1,14.421-1.541,67,67,0,0,1,47.688,19.753q1.878,1.878,3.588,3.875a3.813,3.813,0,0,1-2.9,6.295H326.468L297.8,286.795h24.813l24.746-64.714a3.814,3.814,0,0,1,7.038-.209,67.562,67.562,0,0,1-13.811,75.444Z"
              transform="translate(-216.896 -173.626)"
              fill="#231f20"
            />
            <rect
              id="Rectangle_10"
              data-name="Rectangle 10"
              width="22.49"
              height="7.778"
              transform="translate(64.755 72.111)"
              fill="#231f20"
            />
          </svg>
        </div>
      )}
      <div style={{height: "220vh"}}></div>
    </>
  );
}
