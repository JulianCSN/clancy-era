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
}

export default function LyricVideo({video, title, lyrics}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [showVideo, setShowVideo] = useState(false); // Montaje en el DOM
  const [isVisible, setIsVisible] = useState(false); // Visibilidad (opacidad)

  // Mostrar / ocultar video según scroll
  useEffect(() => {
    if (!containerRef.current) return;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 50%",
      end: "bottom 0%",
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

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  // Fade in/out animado con GSAP
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const fade = gsap.to(videoEl, {
      opacity: isVisible ? 1 : 0,
      duration: 1,
      ease: "power2.out",
    });

    // Si se está ocultando, desmontar después del fade
    if (!isVisible) {
      const timeout = setTimeout(() => setShowVideo(false), 1000); // mismo tiempo que duration

      return () => clearTimeout(timeout);
    }

    return () => fade.kill();
  }, [isVisible]);

  // Animaciones de movimiento imagenes
  useEffect(() => {
    gsap.fromTo(
      "#image-video-1",
      {y: 0},
      {
        y: -50,
        scrollTrigger: {
          trigger: "#image-video-1",
          start: "top 150%",
          end: "top -20%",
          scrub: 0.5,
        },
      }
    );

    gsap.fromTo(
      "#image-video-2",
      {y: 0},
      {
        y: 80,
        scrollTrigger: {
          trigger: "#image-video-2",
          start: "top 150%",
          end: "top -20%",
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (
    <div ref={containerRef}>
      <div id="init-video"></div>
      <div className="h-[20vh]" />
      {/* Renderizado condicional del video */}
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

      <div className="flex flex-col items-center justify-center">
        <Image
          src={title}
          alt="Overcompensate title"
          width={1500}
          height={1500}
          quality={100}
          className="w-[200vh] mt-64 md:mt-0"
        />
        <Image
          src={lyrics}
          alt="Overcompensate title2"
          width={1500}
          height={1500}
          quality={100}
          className="w-[40vh] sm:w-[60vh] xl:w-[100vh] mt-0 md:-mt-20"
        />
      </div>

      <div className="mt-5 md:mt-28 px-10 md:px-20 flex flex-col md:flex-row items-start justify-center gap-10 overflow-hidden">
        <div className="flex flex-col items-star max-w-full md:max-w-[600px]">
          <Image
            src="/images/gallery9.jpg"
            alt="Clancy Image 1"
            width={4000}
            height={4000}
            quality={80}
            id="image-video-1"
            className="w-full h-[400px] md:h-[790px] object-cover min-w-[100px] mt-20 md:-mt-0"
            priority
          />
        </div>
        <div>
          <Image
            src="/images/gallery2.jpg"
            alt="Clancy Image 2"
            width={4000}
            height={4000}
            quality={80}
            id="image-video-2"
            className="w-[700px] h-[400px] md:h-[800px] object-cover min-w-[200px] -mt-24 md:mt-0"
            priority
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-12 md:mt-26">
        <div className="flex gap-10">
          <a href="https://www.youtube.com/watch?v=53tgVlXBZVg" target="_blank">
            <FaYoutube className="text-red text-5xl md:text-7xl" />
          </a>
          <a
            href="https://open.spotify.com/intl-es/album/5ZSqGFLuXUJUlIObSkN0Bz?trackId=0ZucyPms79Cydv0RMYV2Oi"
            target="_blank"
          >
            <FaSpotify className="text-red text-5xl md:text-7xl" />
          </a>
        </div>
      </div>
      <div id="end-video" className="h-[50vh] w-full" />
    </div>
  );
}
