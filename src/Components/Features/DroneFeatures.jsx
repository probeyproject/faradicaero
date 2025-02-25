import React from 'react';

function DroneFeatures({ref}) {
  return (
    <section className='overflow-hidden'>
<div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8" ref={ref}>
  <div className="max-w-7xl mx-auto text-center">
    {/* Main Heading */}
    <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-8">
      We are your
      <br />
      <span className="text-red-500">agricultural partner</span>
    </h1>

    {/* Subheadings with SVG */}
    <div className="flex justify-center items-center gap-4 mb-16">
   
      <div className="text-left">
        <p className="text-2xl font-semibold text-white">
          Efficient soil monitoring
        </p>
        <p className="text-2xl font-semibold text-white">
          and crop management
        </p>
      </div>
    </div>

    {/* Stats Grid */}
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      <div className="p-6">
        <p className="text-5xl font-bold text-red-500 mb-2">91,372+</p>
        <p className="text-white">Achievigiers</p>
      </div>
      <div className="p-6">
        <p className="text-5xl font-bold text-red-500 mb-2">117,584+</p>
        <p className="text-white">Drones connected</p>
      </div>
      <div className="p-6">
        <p className="text-5xl font-bold text-red-500 mb-2">83,246+</p>
        <p className="text-white">Land parcels monitored</p>
      </div>
    </div>

    {/* Buttons */}
    {/* <div className="flex justify-center gap-4">
      <button className=" text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-colors">
        Request a demo
      </button>
      <button className="border-2 text-yellow-400 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400/10 transition-colors">
        See pricing
      </button>
    </div> */}
  </div>
</div>
    </section>
  );
}

export default DroneFeatures;
