"use client";

import {useEffect} from "react";
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

interface lirycVideos {
  video: string;
  title: string;
  lyrics: string;
  lyricBackground: "black" | "white";
  image1: string;
  image2: string;
  linkYoutube: string;
  linkSpotify: string;
}

const lirycVideos: lirycVideos[] = [
  {
    video: "/videos/overcompensate-cut.mp4",
    title: "/images/overcompensateTitle.png",
    lyrics: "/images/overcompensateLyrics.png",
    lyricBackground: "black",
    image1: "/images/gallery9.jpg",
    image2: "/images/gallery2.jpg",
    linkYoutube: "https://www.youtube.com/watch?v=53tgVlXBZVg",
    linkSpotify:
      "https://open.spotify.com/intl-es/track/1LAlLBTGBUO0MDA8IbSysd?si=bec539fa2acf451a",
  },
  {
    video: "/videos/nextsemester-cut.mp4",
    title: "/images/nextsemesterTitle.png",
    lyrics: "/images/nextsemesterLyrics.png",
    lyricBackground: "black",
    image1: "/images/gallery15.jpg",
    image2: "/images/gallery19.jpg",
    linkYoutube: "https://youtu.be/a5i-KdUQ47o?si=b1Ty804e8wrT63ip",
    linkSpotify:
      "https://open.spotify.com/intl-es/track/1BANPzYIhCQkJ1ZFq2Fb0O?si=12a54ce9da8d4172",
  },
  {
    video: "/videos/backslide-cut.mp4",
    title: "/images/backslideTitle.png",
    lyrics: "/images/backslideLyrics.png",
    lyricBackground: "black",
    image1: "/images/gallery27.webp",
    image2: "/images/gallery26.png",
    linkYoutube: "https://www.youtube.com/watch?v=YAmLMohrus4",
    linkSpotify:
      "https://open.spotify.com/intl-es/track/6fNaHkjAxP6rI2sZhT7QJn?si=326f16884d674adb",
  },
  {
    video: "/videos/midwestindigo-cut.mp4",
    title: "/images/midwestindigoTitle.png",
    lyrics: "/images/midwestindigoLyrics.png",
    lyricBackground: "white",
    image1: "/images/gallery24.jpeg",
    image2: "/images/gallery25.webp",
    linkYoutube: "https://www.youtube.com/watch?v=mREOvIgImmo",
    linkSpotify:
      "https://open.spotify.com/intl-es/track/7GVQS66ukm48XZVymA3ZUg?si=7ac8ef280c6649ed",
  },
  {
    video: "/videos/ritn-cut.mp4",
    title: "/images/ritnTitle.png",
    lyrics: "/images/ritnLyrics.png",
    lyricBackground: "black",
    image1: "/images/gallery28.webp",
    image2: "/images/gallery17.jpg",
    linkYoutube: "https://www.youtube.com/watch?v=AupwoN8QvbU",
    linkSpotify:
      "https://open.spotify.com/intl-es/track/4bDIAWaOBGAAk95nyXI6zJ?si=a9bb56a02278401f",
  },
  {
    video: "/videos/vignette-cut.mp4",
    title: "/images/vignetteTitle.png",
    lyrics: "/images/vignetteLyrics.png",
    lyricBackground: "black",
    image1: "/images/gallery30.jpg",
    image2: "/images/gallery31.jpg",
    linkYoutube: "https://www.youtube.com/watch?v=eoEKwwbPfvc",
    linkSpotify:
      "https://open.spotify.com/intl-es/track/3sEufjE0ITaW5qhtnW3avv?si=3e9a357272224b16",
  },
];

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
        {lirycVideos.map((video, index) => {
          return (
            <div key={index}>
              <LyricVideo
                video={video.video}
                title={video.title}
                lyrics={video.lyrics}
                lyricBackground={video.lyricBackground}
                image1={video.image1}
                image2={video.image2}
                linkYoutube={video.linkYoutube}
                linkSpotify={video.linkSpotify}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
