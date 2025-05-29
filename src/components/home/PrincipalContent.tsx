"use client";

import {Fragment, useEffect} from "react";
import Head from "next/head";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Lenis from "lenis";

import IntroLogo from "@/components/IntroLogo";
import ClancyTape from "@/components/ClancyTape";
import InitAlbumCover from "@/components/InitAlbumCover";
import IntroImages from "../IntroImages";
import TrainText from "../TrainText";
import LyricVideo from "../LyricVideo";
import {lirycVideos} from "@/helpers/lyricVideosList.data";
import FinalMessage from "../FinalMessage";

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
      <Head>
        {lirycVideos.map((video, index) => (
          <Fragment key={index}>
            <link
              rel="preload"
              as="video"
              href={video.video}
              type="video/webm"
            />
            <link
              rel="preload"
              as="video"
              href={video.videomp4}
              type="video/mp4"
            />
          </Fragment>
        ))}
      </Head>
      <ClancyTape repeat={20} position="left" />
      <ClancyTape repeat={20} position="right" />
      <IntroLogo />
      <InitAlbumCover />
      <IntroImages />
      <TrainText />

      {lirycVideos.map((video, index) => {
        return (
          <div key={index}>
            <LyricVideo
              video={video.video}
              videomp4={video.videomp4}
              title={video.title}
              lyrics={video.lyrics}
              lyricBackground={video.lyricBackground}
              image1={video.image1}
              image2={video.image2}
              linkYoutube={video.linkYoutube}
              linkSpotify={video.linkSpotify}
              linkAppleMusic={video.linkAppleMusic}
            />
          </div>
        );
      })}
      <FinalMessage />
    </>
  );
}
