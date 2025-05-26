import React, {useEffect} from "react";
import Image from "next/image";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function InitAlbumCover() {
  // Parallax effect
  useEffect(() => {
    gsap.to("#background-parallax", {
      y: 150,
      ease: "none",
      scrollTrigger: {
        trigger: "#background-parallax",
        start: "top bottom",
        end: "+=2000",
        scrub: 0.5,
      },
    });

    gsap.to("#cover-parallax", {
      y: -60,
      ease: "none",
      scrollTrigger: {
        trigger: "#cover-parallax",
        start: "top bottom",
        end: "+=2000",
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center lg:mb-52">
        <Image
          src="/images/ClancyTitle.png"
          alt="background-clancy"
          width={1500}
          height={1500}
          quality={100}
          className="w-[35vh] sm:w-[50vh] md:w-[60vh] xl:w-[90vh]"
          priority
        />
      </div>

      {/* Album Cover image */}
      <div className="relative w-full h-[65vh] sm:h-[120vh] album-container">
        {/* Top and bottom borders */}
        <div className="album-border-top" />
        <div className="album-border-bottom" />

        {/* Background image with parallax */}
        <Image
          src="/images/backgroundFire.jpg"
          alt="background"
          width={2400}
          height={1516}
          quality={100}
          className="w-full h-full object-cover will-change-transform"
          style={{zIndex: 0}}
          id="background-parallax"
          priority
        />

        {/* Tyler and Josh image with parallax */}
        <Image
          src="/images/clancyboys.png"
          alt="Tyler and Josh Clancy Cover"
          width={2400}
          height={1516}
          quality={100}
          className="absolute bottom-0 right-0 w-[110vh] will-change-transform"
          id="cover-parallax"
          priority
        />
      </div>
    </>
  );
}
