"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

export default function Home() {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    let tl = gsap.timeline({ repeat: -1, repeatDelay: 0.2, yoyo: true });
    tl.to(".animated-text-modes > .letter", {
      duration: 1,
      color: "#36e063",
      stagger: 0.1,
      ease: "power3.inOut",
    }).to(".animated-text-brandline > .letter", {
      duration: 1,
      color: "#e41efa",
      stagger: 0.1,
      ease: "power3.inOut",
    });
  });

  const [targetAudience, setTargetAudience] = useState("all");

  const targetAudienceList = [
    "all",
    "humans 🙎‍♂️",
    "spiders 🕷️",
    "magnito 🧲",
    "robots 🤖",
    "aliens 👽",
    "ghosts 👻",
    "vampires 🧛‍♂️",
    "werewolves 🐺",
    "zombies 🧟‍♂️",
    "mutants 🧬",
    "superhumans 🦸‍♂️",
  ];

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      setTargetAudience(
        targetAudienceList[
          Math.floor(Math.random() * (targetAudienceList.length - 0)) + 0
        ]
      );
    }, 2000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [targetAudience]);

  return (
    <div className="flex flex-col h-screen justify-center">
      <div>
        <h1
          aria-label="Fingers tentacles or telekinesis
no matter what users use to surf the web,
we develop software that works for everyone."
          className="text-3xl sm:text-4xl  md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl my-5"
        >
          <span className="animated-text-modes">
            <span className="letter">F</span>
            <span className="letter">i</span>
            <span className="letter">n</span>
            <span className="letter">g</span>
            <span className="letter">e</span>
            <span className="letter">r</span>
            <span className="letter">s</span>
            <span className="letter"> </span>
            <span className="letter">t</span>
            <span className="letter">e</span>
            <span className="letter">n</span>
            <span className="letter">t</span>
            <span className="letter">a</span>
            <span className="letter">c</span>
            <span className="letter">l</span>
            <span className="letter">e</span>
            <span className="letter">s</span>
            <span className="letter"> </span>
            <span>o</span>
            <span>r</span>
            <span className="letter"> </span>
            <span className="letter">t</span>
            <span className="letter">e</span>
            <span className="letter">l</span>
            <span className="letter">e</span>
            <span className="letter">k</span>
            <span className="letter">i</span>
            <span className="letter">n</span>
            <span className="letter">e</span>
            <span className="letter">s</span>
            <span className="letter">i</span>
            <span className="letter">s</span>
          </span>
          <br />
          no matter what users use to surf the web, <br />
          <span className="animated-text-brandline relative">
            <span className="letter">w</span>
            <span className="letter">e</span>
            <span className="letter"> </span>
            <span className="letter">d</span>
            <span className="letter">e</span>
            <span className="letter">v</span>
            <span className="letter">e</span>
            <span className="letter">l</span>
            <span className="letter">o</span>
            <span className="letter">p</span>
            <span className="letter"> </span>
            <span className="letter">s</span>
            <span className="letter">o</span>
            <span className="letter">f</span>
            <span className="letter">t</span>
            <span className="letter">w</span>
            <span className="letter">a</span>
            <span className="letter">r</span>
            <span className="letter">e</span>
            <span className="letter"> </span>
            <span className="letter">t</span>
            <span className="letter">h</span>
            <span className="letter">a</span>
            <span className="letter">t</span>
            <span className="letter"> </span>
            <span className="letter">w</span>
            <span className="letter">o</span>
            <span className="letter">r</span>
            <span className="letter">k</span>
            <span className="letter">s</span>
            <span className="letter"> </span>
            {targetAudience != "" ? `for ${targetAudience}` : ""}
          </span>
          .
        </h1>
      </div>
    </div>
  );
}
