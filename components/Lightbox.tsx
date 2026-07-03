"use client";
import { useState } from "react";
import Image from "next/image";

export default function Lightbox({ src, alt }: { src: string, alt: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="cursor-pointer overflow-hidden" onClick={() => setIsOpen(true)}>
        <Image src={src} alt={alt} width={600} height={600} className="hover:scale-105 transition-transform" />
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 p-10" onClick={() => setIsOpen(false)}>
          <Image src={src} alt={alt} width={1200} height={1200} className="max-h-full object-contain" />
        </div>
      )}
    </>
  );
}