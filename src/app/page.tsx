"use client";

import {use, useEffect, useRef} from "react";
import Image from "next/image";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Lenis from "lenis";

import IntroLogo from "@/components/IntroLogo";
import ClancyTape from "@/components/ClancyTape";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // Change smoothly the background color, white to black
  useEffect(() => {
    // Indicate scroll position to top of the page always at start
    window.scrollTo(0, 0);

    gsap.fromTo(
      document.body,
      {
        backgroundColor: "white",
      },
      {
        backgroundColor: "#231f20",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "+=1000",
          scrub: 0.5,
        },
      }
    );
  }, []);

  // Lenis syncrinization with GSAP
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
      <ClancyTape repeat={50} position="left" />
      <ClancyTape repeat={50} position="right" />
      <IntroLogo />
      <div style={{height: "400vh"}}>
        <div className="flex flex-col items-center justify-center px-10">
          <Image
            src="/images/clancyVerticalRed.webp"
            alt="Clancy Text"
            width={80}
            height={80}
            priority
            quality={100}
          />
        </div>
      </div>
    </>
  );
}
