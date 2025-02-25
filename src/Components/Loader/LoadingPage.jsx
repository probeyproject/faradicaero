import React from "react";
import gsap from "gsap"


function LoadingPage() {
  return (
    <section>
      <div className="_wrapper bg-black h-screen z-50  absolute top-0 left-0 w-screen flex justify-center items-center">
        <div className="_container rotate-45 w-24  grid grid-cols-3 gap-x-1 gap-y-1 ">
         {new Array(9).fill().map((arr)=>{return(
            <div className="box w-7 h-7 bg-[#65cdef] "> </div>
         
         )})}
        </div>
      </div>
    </section>
  );
}

export default LoadingPage;
