import React, { useEffect } from "react";
import gsap from "gsap";
import "./SeamlessGallery.css";

const SeamlessGallery = () => {
  useEffect(() => {
    const spacing = 0.1;
    const cards = gsap.utils.toArray(".cards__ li");
    const seamlessLoop = buildSeamlessLoop(cards, spacing);
    
    function scrubTo(totalTime) {
      gsap.to(seamlessLoop, {
        totalTime: totalTime,
        duration: 0.5,
        ease: "power3"
      });
    }

    document.querySelector(".next").addEventListener("click", () => scrubTo(seamlessLoop.time() + spacing));
    document.querySelector(".prev").addEventListener("click", () => scrubTo(seamlessLoop.time() - spacing));
  }, []);

  return (
    <div className="gallery__">
      <ul className="cards__">
        {Array.from({ length: 31 }, (_, i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <div className="actions__">
        <button className="prev button__">Prev</button>
        <button className="next button__">Next</button>
      </div>
    </div>
  );
};

function buildSeamlessLoop(items, spacing) {
  let rawSequence = gsap.timeline({ paused: true });
  
  gsap.set(items, { xPercent: 400, opacity: 0, scale: 0 });

  items.forEach((item, i) => {
    let time = i * spacing;
    rawSequence
      .fromTo(item, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false }, time)
      .fromTo(item, { xPercent: 400 }, { xPercent: -400, duration: 1, ease: "none", immediateRender: false }, time);
  });

  return rawSequence;
}

export default SeamlessGallery;
