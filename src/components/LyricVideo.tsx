"use client";

import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {FaYoutube, FaSpotify} from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  video: string;
  title: string;
  lyrics: string;
  lyricBackground: "black" | "white";
  image1: string;
  image2: string;
  linkYoutube: string;
  linkSpotify: string;
}

export default function LyricVideo({
  video,
  title,
  lyrics,
  lyricBackground,
  image1,
  image2,
  linkYoutube,
  linkSpotify,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [showVideo, setShowVideo] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef<HTMLImageElement>(null);

  const image1Ref = useRef<HTMLImageElement>(null);
  const image2Ref = useRef<HTMLImageElement>(null);

  // Show / hide video according to scroll
  useEffect(() => {
    if (!containerRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 50%",
      end: "bottom -550%",
      // markers: true,
      onEnter: () => {
        setShowVideo(true);
        setIsVisible(true);
      },
      onLeave: () => {
        setIsVisible(false);
      },
      onEnterBack: () => {
        setShowVideo(true);
        setIsVisible(true);
      },
      onLeaveBack: () => {
        setIsVisible(false);
      },
    });

    return () => trigger.kill();
  }, []);

  // Fade effect
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const fade = gsap.to(videoEl, {
      opacity: isVisible ? 1 : 0,
      duration: 1,
      ease: "power2.out",
    });

    //  If hiding, unmount after fade
    if (!isVisible) {
      const timeout = setTimeout(() => setShowVideo(false), 1000); // mismo tiempo que duration

      return () => clearTimeout(timeout);
    }

    return () => fade.kill();
  }, [isVisible]);

  // Animate images movement
  useEffect(() => {
    gsap.fromTo(
      image1Ref.current,
      {y: 0},
      {
        y: -50,
        scrollTrigger: {
          trigger: image1Ref.current,
          start: "top 150%",
          end: "top -20%",
          scrub: 0.5,
        },
      }
    );

    gsap.fromTo(
      image2Ref.current,
      {y: 0},
      {
        y: 30,
        scrollTrigger: {
          trigger: image2Ref.current,
          start: "top 200%",
          end: "top -30%",
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (
    <>
      <div>
        <div ref={containerRef} className="h-0 md:h-[20vh]" />
        {/* Render conditional video */}
        {showVideo && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            className="fixed top-0 left-0 w-full h-full object-cover z-[-1] opacity-0 pointer-events-none"
          >
            <source src={video} type="video/mp4" />
          </video>
        )}

        {/* Title and lyrics */}
        <div className="flex flex-col items-center justify-center">
          <Image
            ref={titleRef}
            src={title}
            alt="Song title"
            width={1500}
            height={1500}
            className="w-[200vh] mt-64 md:mt-0"
            priority // NOTE: Its important to set priority to true on Next Images because the scrollTriggers need to be created after the images are fully loaded
          />
          <Image
            src={lyrics}
            alt="Song lyrics"
            width={1500}
            height={1500}
            className={`w-[40vh] sm:w-[60vh] ${
              lyricBackground === "white"
                ? " md:w-[70vh] lg:w-[90vh] xl:w-[115vh] bg-white/40"
                : "xl:w-[100vh] bg-black/40"
            } mt-0 md:-mt-10 p-5 xl:p-10 backdrop-blur-sm`}
            priority // NOTE: Its important to set priority to true on Next Images because the scrollTriggers need to be created after the images are fully loaded
          />
        </div>

        {/* Two Images */}
        <div className="mt-5 md:mt-28 px-10 md:px-20 flex flex-col md:flex-row items-start justify-center gap-10 overflow-hidden">
          <div className="flex flex-col items-star max-w-full md:max-w-[600px]">
            <Image
              ref={image1Ref}
              src={image1}
              alt="Image 1"
              width={4000}
              height={4000}
              quality={80}
              id="image-video-1"
              className="w-[800px] h-[400px] md:h-[790px] object-cover min-w-[100px] md:-mt-0"
              priority // NOTE: Its important to set priority to true on Next Images because the scrollTriggers need to be created after the images are fully loaded
            />
          </div>
          <div>
            <Image
              ref={image2Ref}
              src={image2}
              alt="Image 2"
              width={4000}
              height={4000}
              quality={80}
              id="image-video-2"
              className="w-[700px] h-[400px] md:h-[800px] object-cover min-w-[200px] -mt-20 md:mt-0"
              priority // NOTE: Its important to set priority to true on Next Images because the scrollTriggers need to be created after the images are fully loaded
            />
          </div>
        </div>

        {/* Social media links */}
        <div className="flex flex-col items-center justify-center mt-12 md:mt-26">
          <div className="flex gap-10">
            <a
              href={linkYoutube}
              target="_blank"
              className="duration-300 hover:scale-110"
            >
              <FaYoutube className="text-red text-5xl md:text-7xl" />
            </a>
            <a
              href={linkSpotify}
              target="_blank"
              className="duration-300 hover:scale-110"
            >
              <FaSpotify className="text-red text-5xl md:text-7xl scale-90" />
            </a>
          </div>
        </div>
        <div id="end-video" className="h-[50vh] w-full" />
      </div>
      <div className="h-[200px]" />
    </>
  );
}
