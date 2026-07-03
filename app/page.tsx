// app/page.tsx
import Link from "next/link";
import Image from "next/image";

// You can add your data directly here or import it
const works = [
  { title: "Events", desc: "This section describes the narrative behind the highlands collection...", img: "/Hero/Events.jpg" },
  { title: "Trips", desc: "This section describes the narrative behind the coastal collection...", img: "/Hero/Trips.jpeg" },
  { title: "People", desc: "This section describes the narrative behind the quiet collection...", img: "/Hero/People.jpg" },
  { title: "Urban", desc: "This section describes the narrative behind the urban collection...", img: "/Hero/Urban.jpg" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen px-8 md:px-16 lg:px-32 pt-16">
      
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-16 pt-0 mb-24">
        <div className="flex-1 space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-[#71717A]">UK Based Photographer</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] max-w-2xl text-[#2C2C2C]">
            Capture moments <span className="italic">Create memories</span>
          </h2>
          <Link href="/portfolio" className="inline-block border-b border-[#2C2C2C] pb-1 uppercase tracking-widest text-xs hover:text-[#D35400] transition-colors">
            Explore Work
          </Link>
        </div>
      
        <div className="w-full max-w-md aspect-[3/4] bg-[#EAE8E1] flex items-center justify-center border border-[#2C2C2C]/5">
          <span className="text-[#71717A] text-sm uppercase tracking-widest">[ Hero Image ]</span>
        </div>
      </section>

      {/* Selected Works Section (Zig-Zag) */}
      <section className="py-20">
        <h2 className="font-serif text-5xl mb-16">Selected Works</h2>
        <div className="space-y-24">
          {works.map((work, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2 aspect-[4/3] bg-[#EAE8E1] flex items-center justify-center border border-transparent transition-all duration-500 hover:border-[#D35400]">
                <span className="text-gray-500">[ {work.title} ]</span>
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="font-serif text-3xl">{work.title}</h3>
                <p className="text-gray-600 leading-relaxed">{work.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}