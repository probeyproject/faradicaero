import React, { useRef } from 'react';
import gsap from 'gsap';
import './SvgBackground.css';

function SvgBackground() {
  // Create a reference for the path element
  const pathRef = useRef(null);


  const handleMouseEnter = (event) => {
    // Calculate the Y position of the mouse and set the path
    const mouseY = event.clientX;
    const newPath = `M 100 100 Q 500  ${mouseY} 990 100`; // Adjust the path dynamically

    // Use GSAP to animate the change in the path
    gsap.to(pathRef.current, {
     
      attr: { d: newPath }, // Animate the path attribute
      duration: 0.3, // Duration of the animation
     ease:"power1.out"
    });
  };

  const handleMouseLeave = (()=>{
    // Reset the path to its original position
    gsap.to(pathRef.current,{
      attr: { d: "M 100 100 Q 500 100 990 100" }
    })

  })

  return (
    <section className='w-full relative'>
      <div className='svg-container w-full 
       '  >
        <svg width={1000} height={160} className='' >
          <circle cx={100} cy={100} r={7} fill='white' />
          <path
            ref={pathRef}
          
            d="M 100 100 Q 500 100 990 100"
            onMouseMove={handleMouseEnter} onMouseLeave={handleMouseLeave}
            stroke="white"
            strokeWidth="2"
            fill="transparent"
          />
        </svg>
        <circle cx={100} cy={300} r={7} fill='white' />
      </div>
    </section>
  );
}

export default SvgBackground;
