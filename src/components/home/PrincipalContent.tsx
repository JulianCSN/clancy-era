"use client";

import {use, useEffect, useRef} from "react";
import Image from "next/image";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Lenis from "lenis";

import IntroLogo from "@/components/IntroLogo";
import ClancyTape from "@/components/ClancyTape";
import InitAlbumCover from "@/components/InitAlbumCover";

gsap.registerPlugin(ScrollTrigger);

export default function PrincipalContent() {
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
        <InitAlbumCover />
        <div className="mt-5 md:mt-28 px-10 md:px-20 flex flex-col md:flex-row items-start justify-center gap-10 overflow-hidden">
          <div className="flex flex-col items-star max-w-full md:max-w-[600px]">
            <h2 className="text-yellow text-5xl md:text-6xl">I AM TRAPPED.</h2>
            <h3 className="text-red text-4xl mt-5">
              Stuck in a cycle I have never been able to break.
            </h3>
            <h4 className="text-red text-2xl mt-5 mb-8 md:mb-16">
              I want to believe this is the last time, but I don't know for
              sure...
            </h4>
            <Image
              src="/images/gallery5.png"
              alt="Clancy Title"
              width={4000}
              height={4000}
              quality={100}
              className="w-full h-[400px] md:h-[790px] object-cover min-w-[100px] "
            />
          </div>
          <div>
            <Image
              src="/images/gallery8.jpg"
              alt="Clancy Title"
              width={4000}
              height={4000}
              quality={100}
              className="w-[700px] h-[400px] md:h-[800px] object-cover min-w-[200px] filter grayscale"
            />
          </div>
        </div>
      </div>
    </>
  );
}
