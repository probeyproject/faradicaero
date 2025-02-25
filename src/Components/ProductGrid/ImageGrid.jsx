import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

const ImageGrid = () => {
  const [active, setActive] = useState("img-1");

  useEffect(() => {
    const products = document.querySelectorAll(".product");
    products.forEach((el) => {
      el.addEventListener("click", () => changeGrid(el));
    });
    
    return () => {
      products.forEach((el) => {
        el.removeEventListener("click", () => changeGrid(el));
      });
    };
  }, []);

  const changeGrid = (el) => {
    if (el.dataset.grid === active) return;

    const state = Flip.getState(".product");
    setActive(el.dataset.grid);
    el.dataset.grid = "img-1";

    Flip.from(state, {
      duration: 1.4,
      absolute: true,
      ease: "power1.inOut",
      flipX: true,
      flipY: true,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="w-full max-w-lg">
        <div className="relative w-full grid grid-cols-3 grid-rows-4 gap-2 sm:gap-4 sm:grid-cols-4 sm:grid-rows-3">
          <div className="product product-1" data-grid="img-1"></div>
          <div className="product product-2" data-grid="img-2"></div>
          <div className="product product-3" data-grid="img-3"></div>
          <div className="product product-4" data-grid="img-4"></div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;

// Tailwind CSS styles
// Add these styles to your global CSS or use a style block
