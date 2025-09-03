"use client"

import Image from "next/image";
import TradingSight from "@/assets/TradingSight.png";
import { NavbarItems } from "@/constants";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-between px-4 md:px-12 sticky top-0 bg-fourth h-[70px] z-50 relative">
      <div>
        <Image src={TradingSight} alt="TradingSight Logo" width={100} height={200} />
      </div>
      
      <div className="hidden md:flex gap-8">
        {NavbarItems.map((item) => (
          <a 
            key={item.id} 
            href={item.link}  
            className="text-third font-semibold text-sm hover:text-fifth hover:duration-500 hover:underline mt-2"
          >
            {item.title}
          </a>
        ))}
        <Button size='sm' variant='outline' className="hover:text-white">
          sign up
        </Button>
      </div>

      <div className="md:hidden">
        <Button
          variant='ghost'
          size='icon'
          onClick={toggleMenu}
          className="text-third hover:text-fifth transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </Button>
      </div>

      {isMenuOpen && (
        <div className="fixed h-screen top-[70px] left-0 right-34 md:hidden bg-black z-50">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col 
          items-center justify-center px-4 py-4 space-y-6">
            {NavbarItems.map((item) => (
              <a 
                key={item.id} 
                href={item.link}  
                className="text-third font-semibold text-lg hover:text-fifth hover:duration-500 hover:underline text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
            <Button size='sm' variant='outline' className="hover:text-white w-fit mt-4">
              sign up
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
