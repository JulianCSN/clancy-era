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
        backgroundColor: "#231f20",
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
        <div className="flex flex-col items-center justify-center mb-20 lg:mb-44">
          <Image
            src="/images/ClancyTitle.png"
            alt="background-clancy"
            width={1500}
            height={1500}
            quality={100}
            className="w-[35vh] sm:w-[50vh] md:w-[60vh] xl:w-[90vh]"
          />
        </div>
        <div className="relative w-full h-[70vh] sm:h-[120vh]">
          {/* Backround image */}
          <Image
            src="/images/backgroundFire.jpg"
            alt="background-clancy"
            width={2400}
            height={1516}
            quality={100}
            className="w-full h-full object-cover"
          />
          {/* Tyler and Josh Clancy Cover */}
          <Image
            src="/images/clancyboys.png"
            alt="Tyler and josh clancy cover"
            width={2400}
            height={1516}
            quality={100}
            className="absolute bottom-0 right-0 w-[120vh]"
          />
        </div>
      </div>
    </>
  );
}
