"use client"
import Image from "next/image";
import phone from "@/assets/phone.png";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set(textRef.current, { x: -100, opacity: 0 });
    gsap.set(imageRef.current, { x: 100, opacity: 0 });

    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.to(textRef.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    })
    .to(imageRef.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5"); 
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between px-4 md:px-10 py-10 md:py-20 items-center lg:items-start">
      <div ref={textRef} className="text-third flex flex-col gap-4 md:gap-6 mt-8 lg:mt-44 text-center lg:text-left max-w-full lg:max-w-none">
        <h1 className="text-2xl md:text-3xl lg:text-xl font-extrabold leading-tight">
          Track Stocks Anywhere with Real-Time Insights
        </h1>
        <p className="text-base md:text-lg font-bold px-4 lg:px-0 lg:ml-1.5 max-w-full lg:w-[450px] leading-relaxed">
          Stay ahead of the market with our intuitive mobile stock dashboard.
          Monitor real-time charts, analyze trends, and follow top-performing
          stocks like Apple, Tesla, and Microsoft — all from the palm of your
          hand
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 lg:px-0">
            <Button variant="secondary" className="bg-fifth text-white hover:text-parimary hover:duration-500">
              Explore
            </Button>
            <Button variant='outline' className="text-black hover:text-third bg-none">
              Analyze
            </Button>
        </div>
      </div>
      <div ref={imageRef} className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
        <Image 
          alt="stock market" 
          src={phone} 
          width={350} 
          height={150} 
          className="w-64 md:w-80 lg:w-[350px] h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;

