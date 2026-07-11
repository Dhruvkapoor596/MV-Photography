"use client";

import { useState } from "react";
import { photos } from "../../data/portfolioData";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function PortfolioPage() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Prepare slides for the lightbox
  const slides = photos.map((photo) => ({ src: photo.src }));

  return (
    <div className="min-h-screen pt-16 px-8 md:px-16 lg:px-32 pb-2">
      <div className="mb-10">
        <h1 className="font-serif text-5xl md:text-6xl mb-4">Portfolio</h1>
        <p className="text-[#71717A] text-sm uppercase tracking-widest">General Collection</p>
      </div>

      <div className="pt-8 border-t border-[#EAE8E1]"></div>

      {/* 4-Column Masonry Layout with Lightbox Trigger */}
      <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4">
        {photos.map((photo, i) => (
          <div 
            key={photo.id} 
            className="break-inside-avoid bg-[#EAE8E1] group border border-transparent transition-all duration-500 hover:border-[#D35400] cursor-pointer"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <Image 
              src={photo.src} 
              alt={photo.caption} 
              width={600} 
              height={400}
              className="w-full h-auto block" 
            />
          </div>
        ))}
      </div>

      {/* Lightbox Component */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        on={{ view: ({ index: currentIndex }) => setIndex(currentIndex) }}
      />
    </div>
  );
}