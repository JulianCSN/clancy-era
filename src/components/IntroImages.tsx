import React, {useEffect} from "react";
import Image from "next/image";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IntroImages() {
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

    gsap.to("#image-circle-intro", {
      rotate: 80,
      scrollTrigger: {
        trigger: "#image-circle-intro",
        start: "top 200%",
        end: "top -400%",
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <div className="mt-5 md:mt-28 px-10 md:px-20 flex flex-col md:flex-row items-start justify-center gap-10 overflow-hidden">
      <div className="flex flex-col items-star max-w-full md:max-w-[600px]">
        <h2
          id="intro-title"
          className="text-yellow text-4xl md:text-6xl opacity-0"
        >
          OVERTAKE YOUR FORMER SELF.
        </h2>
        <h4
          id="intro-paragraph"
          className="text-red text-xl md:text-2xl mt-5 mb-2 md:mb-5 opacity-0"
        >
          In a world divided between control and freedom, Clancy is the voice
          that cries out from within. Here you will find the lyrics that trace
          the journey of a soul that refuses to give in.
        </h4>
        <Image
          src="/images/gallery5.webp"
          alt="Clancy Image 1"
          width={850}
          height={850}
          quality={80}
          id="image-intro-1"
          className="w-full h-[400px] md:h-[790px] object-cover min-w-[100px] opacity-0"
          priority
        />
      </div>
      <div className="relative">
        <Image
          src="/images/clancyCircle2.png"
          alt="Clancy Circle"
          width={2000}
          height={2000}
          quality={80}
          id="image-circle-intro"
          className="absolute -z-1 w-[200px] md:w-[450px] bottom-[150px] left-[32px] 2xl:-bottom-[180px] 2xl:left-[440px] block sm:hidden 2xl:block opacity-50"
          priority
        />
        <Image
          src="/images/gallery8.jpg"
          alt="Clancy Image 2"
          width={1200}
          height={1200}
          quality={70}
          id="image-intro-2"
          className="w-[700px] h-[400px] md:h-[800px] object-cover min-w-[200px] mt-5 md:mt-0 filter grayscale opacity-0"
          priority
        />
      </div>
    </div>
  );
}
