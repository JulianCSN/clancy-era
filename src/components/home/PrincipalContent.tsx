"use client";

import {use, useEffect, useRef} from "react";
import Image from "next/image";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Lenis from "lenis";

import IntroLogo from "@/components/IntroLogo";
import ClancyTape from "@/components/ClancyTape";
import InitAlbumCover from "@/components/InitAlbumCover";
import IntroImages from "../IntroImages";
import TrainText from "../TrainText";
import LyricVideo from "../LyricVideo";

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
      <InitAlbumCover />
      <div style={{height: "8000vh"}}>
        <IntroImages />
        <TrainText />
        <LyricVideo
          video="/videos/overcompensate-cut.mp4"
          title="/images/overcompensateTitle.png"
          lyrics="/images/overcompensateLyrics.png"
          image1="/images/gallery9.jpg"
          image2="/images/gallery2.jpg"
        />
        <div className="h-[200px]" />
        <LyricVideo
          video="/videos/nextsemester-cut.mp4"
          title="/images/nextsemesterTitle.png"
          lyrics="/images/nextsemesterLyrics.png"
          image1="/images/gallery15.jpg"
          image2="/images/gallery17.jpg"
        />
      </div>
    </>
  );
}
