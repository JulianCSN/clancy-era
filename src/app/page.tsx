"use client";

import {useEffect, useRef} from "react";
import Image from "next/image";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!logoRef.current) return;

    gsap.fromTo(
      logoRef.current,
      {
        scale: 1,
      },
      {
        scale: 250,
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "+=8000",
          scrub: 0.5,
        },
      }
    );
  }, []);

  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    });
    gsap.ticker.lagSmoothing(0);
  }, []);

  return (
    <>
      <div
        ref={logoRef}
        className="flex justify-center items-center fixed top-0 left-0 w-full h-full"
      >
        <Image
          src="/images/logoBandClancyEra.svg"
          alt="Twenty One Pilots Logo"
          width={200}
          height={200}
          priority
        />
      </div>

      {/* Contenido de relleno para permitir el scroll */}
      <div style={{height: "8000vh"}}></div>
    </>
  );
}
