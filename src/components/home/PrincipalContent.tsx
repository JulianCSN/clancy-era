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

  useEffect(() => {
    gsap.fromTo(
      "#intro-title",
      {x: -80},
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#intro-title",
          start: "top 95%",
          end: "top 60%",
          scrub: 0.5,
        },
      }
    );

    gsap.fromTo(
      "#intro-paragraph",
      {x: -70},
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#intro-paragraph",
          start: "top 90%",
          end: "top 60%",
          scrub: 0.5,
        },
      }
    );

    gsap.fromTo(
      "#image-intro-1",
      {y: 0},
      {
        y: 30,
        opacity: 1,
        scrollTrigger: {
          trigger: "#image-intro-1",
          start: "top 95%",
          end: "top 10%",
          scrub: 0.5,
        },
      }
    );

    gsap.fromTo(
      "#image-intro-2",
      {y: 50},
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#image-intro-2",
          start: "top 95%",
          end: "top 30%",
          scrub: 0.5,
        },
      }
    );
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
            <h2
              id="intro-title"
              className="text-yellow text-4xl md:text-6xl opacity-0"
            >
              OVERTAKE YOUR FORMER SELF.
            </h2>
            {/* <h3 className="text-red text-4xl mt-5">
              In a world divided between control and freedom, Clancy is the
              voice that cries out from within.
            </h3> */}
            <h4
              id="intro-paragraph"
              className="text-red text-xl md:text-2xl mt-5 mb-2 md:mb-5 opacity-0"
            >
              In a world divided between control and freedom, Clancy is the
              voice that cries out from within. Here you will find images,
              lyrics, and sounds that trace the journey of a soul that refuses
              to give in.
            </h4>
            <Image
              src="/images/gallery5.png"
              alt="Clancy Title"
              width={4000}
              height={4000}
              quality={40}
              id="image-intro-1"
              className="w-full h-[400px] md:h-[790px] object-cover min-w-[100px] opacity-0"
            />
          </div>
          <div>
            <Image
              src="/images/gallery8.jpg"
              alt="Clancy Title"
              width={4000}
              height={4000}
              quality={60}
              id="image-intro-2"
              className="w-[700px] h-[400px] md:h-[800px] object-cover min-w-[200px] mt-5 md:mt-0 filter grayscale opacity-0"
            />
          </div>
        </div>
      </div>
    </>
  );
}
