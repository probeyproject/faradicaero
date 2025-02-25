import React, { useEffect, useRef } from "react";
import { FaCannabis, FaRandom, FaCamera } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const serviceList = [
	{ color: "red", icon: <FaCannabis />, title: "Data Entry", description: "Given. Morning it darkness moved. Winged may, living moveth multiply earth day heaven land a dry divide multiply darkness midst." },
	{ color: "blue", icon: <FaRandom />, title: "Content Verifing", description: "Created, every, green deep abundantly set said our life second greater. Forth had first let night had. Brought creepeth that." },
	{ color: "yellow", icon: <FaCamera />, title: "Photo Editing", description: "Every upon which behold evening forth. Beast life days deep man. I you're likeness doesn't whose. Creature creepeth from subdue." },
	{ color: "red", icon: <FaCamera />, title: "Branding", description: "Image set multiply the had greater without face itself whales yielding image female fruit given light second bring seed in." },
	{ color: "blue", icon: <FaRandom />, title: "Content Marketing", description: "Given dominion spirit years evening together form rule meat two subdue after likeness greater from cattle yielding creature bring all." },
	{ color: "yellow", icon: <FaCannabis />, title: "API Intigration", description: "A, fowl after dominion under. Years be beast evening fruitful whose seasons second seas let morning together cattle fill you." }
];

const MergeText = ({ref}) => {
	const sectionRef = useRef(null);
	const titleRef = useRef(null);

	useEffect(() => {
		const splitText = new SplitType(".service-title", { types: "chars" });
		gsap.from(splitText.chars, {
			opacity: 0,
			y: 20,
			stagger: 0.05,
			scrollTrigger: {
				trigger: titleRef.current,
				start: "top 50%",
			}
		});

		gsap.to(sectionRef.current, {
			y: -50,
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top bottom",
				scrub: true,
			}
		});
	}, []);

	return (
		<section ref={ref} className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4 mx-auto" ref={sectionRef}>
				<div className="flex items-center justify-center mb-6 sm:mb-12">
					<div className="w-full max-w-xl text-center">
						<h2 ref={titleRef} className="text-3xl leading-none md:text-[45px] font-bold mb-4 service-title">Services We Have</h2>
						<p className="text-lg opacity-80 mb-6">
							Heaven third, in years fourth every male seed fish us saying female his great doesn't. Bearing. Kind sixth moving, beast.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-3 gap-6 lg:gap-12 pt-12">
					<div className="col-span-3 lg:col-span-1 lg:order-2">
						<div className="bg-center bg-no-repeat bg-cover rounded-2xl h-full min-h-[200px]" style={{ backgroundImage: "url(https://cdn.easyfrontend.com/pictures/sign-in-up/sign3.jpg)" }}></div>
					</div>
					{serviceList.map((service, i) => (
						<div key={i} className={`col-span-3 lg:col-span-1 ${i >= 3 ? 'lg:order-3' : ''} lg:my-12 flex mt-12 ${i >= 3 ? 'lg:text-end' : ''}`}>
							<div className="mr-4 lg:mr-0 lg:ml-4 lg:order-2">
								<span className={`bg-${service.color}-500 text-white w-16 h-16 rounded-full text-3xl inline-flex justify-center items-center mb-6`}>
									{service.icon}
								</span>
							</div>
							<div>
								<h4 className="text-2xl font-medium mb-4 service-title">{service.title}</h4>
								<p className="opacity-80">{service.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MergeText;