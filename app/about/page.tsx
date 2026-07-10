import Link from "next/link";
import Image from "next/image";
import { aboutImage } from "../../data/portfolioData";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16 px-8 md:px-16 lg:px-32 pb-24">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center mb-32">
        
        <div className="flex-1 w-full relative aspect-[3/4] bg-[#EAE8E1] border border-transparent transition-all duration-500 hover:border-[#D35400] overflow-hidden">
          <Image 
            src={aboutImage.src}
            alt={aboutImage.alt}
            fill
            className="object-cover"
            priority // Since this is above the fold, priority is recommended
          />
        </div>

        {/* Right Side: Typography & Story */}
        <div className="flex-1 space-y-8">
          <h1 className="font-serif text-5xl md:text-6xl text-[#2C2C2C]">
            The man behind <br /> the lens.
          </h1>
          
          <div className="space-y-6 text-[#71717A] text-sm md:text-base leading-relaxed">
            <p>
              Based in the UK, I specialize in capturing the quiet, authentic moments that often go unnoticed. What started as casually documenting travels and trips with friends has evolved into a dedicated pursuit of visual storytelling.
            </p>
            <p>
              My approach to photography is rooted in observation rather than orchestration. Whether it is the raw geometry of a city street, the sweeping landscapes of a new destination, or a candid, unposed portrait, my goal is to create images that feel alive, breathable, and undeniably real.
            </p>
            <p>
              When I am not behind the camera, you can usually find me planning the next road trip or scouting new locations for the perfect natural light.
            </p>
          </div>

          <div className="pt-8 border-t border-[#EAE8E1]">
            <Link 
              href="/contact" 
              className="inline-block text-xs uppercase tracking-widest text-[#2C2C2C] hover:text-[#D35400] transition-colors"
            >
              Get in touch ➔
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}