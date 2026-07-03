"use client";

import { photos } from "../../data/portfolioData";
import Image from "next/image";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-12 px-8 md:px-16 lg:px-32 pb-24">
      <div className="mb-16">
        <h1 className="font-serif text-5xl md:text-6xl mb-6">Portfolio</h1>
        <p className="text-[#71717A] text-sm uppercase tracking-widest">General Collection</p>
      </div>

      {/* 4-Column Masonry Layout */}
      <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4">
        {photos.map((photo) => (
          <div 
            key={photo.id} 
            className="break-inside-avoid bg-[#EAE8E1] group border border-transparent transition-all duration-500 hover:border-[#D35400]"
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
    </div>
  );
}