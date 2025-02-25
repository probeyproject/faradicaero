import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
// import "./styles.css";

gsap.registerPlugin(Observer);

const images = [
  "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMyMDUzOA&ixlib=rb-1.2.1&q=80&w=400",
  "https://images.unsplash.com/photo-1558603668-6570496b66f8?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMyMDUzOA&ixlib=rb-1.2.1&q=85&w=400",
  "https://images.unsplash.com/photo-1537165924986-cc3568f5d454?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMyMDU4NA&ixlib=rb-1.2.1&q=85&w=400",
  "https://images.unsplash.com/photo-1589271243958-d61e12b61b97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NjMyMDU4NA&ixlib=rb-1.2.1&q=80&w=400"
];

const ProductGrid = () => {
  const sectionsRef = useRef([]);
  const outerWrappersRef = useRef([]);
  const innerWrappersRef = useRef([]);
  const imagesRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    gsap.set(outerWrappersRef.current, { xPercent: 100 });
    gsap.set(innerWrappersRef.current, { xPercent: -100 });
    gsap.set(outerWrappersRef.current[0], { xPercent: 0 });
    gsap.set(innerWrappersRef.current[0], { xPercent: 0 });

    Observer.create({
      type: "wheel,touch,pointer",
      preventDefault: true,
      wheelSpeed: -1,
      onUp: () => gotoSection(currentIndex + 1, 1),
      onDown: () => gotoSection(currentIndex - 1, -1),
      tolerance: 10
    });

    document.addEventListener("keydown", logKey);
    return () => document.removeEventListener("keydown", logKey);
  }, [currentIndex]);

  const gotoSection = (index, direction) => {
    if (animating) return;
    setAnimating(true);
    const wrapIndex = (index + images.length) % images.length;

    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "expo.inOut" },
      onComplete: () => setAnimating(false)
    });

    tl.fromTo(
      outerWrappersRef.current[wrapIndex],
      { xPercent: 100 * direction },
      { xPercent: 0 }
    )
      .fromTo(
        innerWrappersRef.current[wrapIndex],
        { xPercent: -100 * direction },
        { xPercent: 0 }
      )
      .fromTo(
        imagesRef.current[wrapIndex],
        { xPercent: 125 * direction, scaleX: 1.5, scaleY: 1.3 },
        { xPercent: 0, scaleX: 1, scaleY: 1 }
      );

    setCurrentIndex(wrapIndex);
  };

  const logKey = (e) => {
    if ((e.code === "ArrowUp" || e.code === "ArrowLeft") && !animating) {
      gotoSection(currentIndex - 1, -1);
    }
    if ((e.code === "ArrowDown" || e.code === "ArrowRight" || e.code === "Space" || e.code === "Enter") && !animating) {
      gotoSection(currentIndex + 1, 1);
    }
  };

  return (
    <div className="slideshow-container">
      {images.map((img, i) => (
        <section
          key={i}
          className={`slide ${i === 0 ? "visible" : "hidden"}`}
          ref={(el) => (sectionsRef.current[i] = el)}
        >
          <div className="slide__outer" ref={(el) => (outerWrappersRef.current[i] = el)}>
            <div className="slide__inner" ref={(el) => (innerWrappersRef.current[i] = el)}>
              <div className="slide__content">
                <h2 className="slide__heading">{i % 2 === 0 ? "SCROLL" : "SWIPE"}</h2>
                <figure className="slide__img-cont">
                  <img className="slide__img" src={img} alt="Slide" ref={(el) => (imagesRef.current[i] = el)} />
                </figure>
              </div>
            </div>
          </div>
        </section>
      ))}
      <footer>
        <p>GSAP React Demo</p>
      </footer>
    </div>
  );
};

export default ProductGrid;


