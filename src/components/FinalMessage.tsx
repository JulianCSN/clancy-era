import React, {useEffect} from "react";
import Image from "next/image";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FinalMessage() {
  useEffect(() => {
    gsap.fromTo(
      "#LogoTextLast",
      {opacity: 0},
      {
        opacity: 1,
        scrollTrigger: {
          trigger: "#LogoTextLast",
          start: "top 90%",
          end: "top 65%",
          scrub: 0.5,
        },
      }
    );

    gsap.fromTo(
      "#PLast1",
      {opacity: 0},
      {
        opacity: 1,
        scrollTrigger: {
          trigger: "#PLast1",
          start: "top 90%",
          end: "top 65%",
          scrub: 0.5,
        },
      }
    );

    gsap.fromTo(
      "#PLast2",
      {opacity: 0},
      {
        opacity: 1,
        scrollTrigger: {
          trigger: "#PLast2",
          start: "top 90%",
          end: "top 50%",
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="flex flex-col gap-8 justify-center items-center">
        <Image
          id="LogoTextLast"
          src="/images/topTitleYellow.svg"
          alt="Clancy Title"
          width={1500}
          height={1500}
          quality={80}
          className="w-[300px] md:w-[400px] xl:w-[700px]"
          priority
        />
        <p id="PLast1" className="text-white text-sm md:text-xl max-w-[75%]">
          We just want to say thank you for this incredible era. It&apos;s been
          an unforgettable journey filled with creativity, emotion, and meaning.
          As the final chapter approaches, we&apos;re both excited and emotional
          to see how it all concludes. No matter what comes next, this era will
          always hold a special place in our hearts.
        </p>
        <p
          id="PLast2"
          className="text-red text-sm md:text-lg max-w-[75%] font-bold"
        >
          The Clique.
        </p>
      </div>

      <footer
        id="footer"
        className="flex flex-col justify-center items-center mt-[120px] lg:mt-[320px] bg-black/60 backdrop-blur-sm py-4 md:py-8"
      >
        <p className="text-white text-[8px] md:text-[10px] max-w-[75%] text-center">
          This is a fanmade page created out of admiration and respect for
          Twenty One Pilots. We do not own any of the images, videos, lyrics or
          media featured here. All rights belong to their respective owners. Our
          only intention is to support, promote, and share the band&apos;s work
          with others.
        </p>
        <p className="text-white text-[8px] md:text-[10px] max-w-[75%] text-center mt-3">
          Created by{" "}
          <a
            href="https://www.juliancsn.click/"
            target="_blank"
            className="text-white hover:text-blue-500 hover:underline"
          >
            JulianCsn
          </a>
        </p>
      </footer>
    </>
  );
}
