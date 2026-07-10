import Link from "next/link";
import Image from "next/image";
import { projects } from "../../data/projectsData";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-16 px-8 md:px-16 lg:px-32 pb-12">
      <div className="mb-10">
      <h1 className="font-serif text-5xl md:text-6xl mb-4">Projects</h1>
      <p className="text-[#71717A] text-sm uppercase tracking-widest">Services we offer</p>
      </div>

      <div className="pt-8 border-t border-[#EAE8E1]"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {projects.map((project) => (
          <Link 
            key={project.slug} 
            href={`/projects/${project.slug}`} 
            className="group block relative"
          >
            {/* Image Container with Blur effect */}
            <div className="relative overflow-hidden border border-transparent transition-all duration-500 max-w-xs">
              <Image 
                src={project.cover} 
                alt={project.title} 
                width={600} 
                height={400}
                // 'blur-sm' makes it blurred initially, 'group-hover:blur-none' clears it
                className="w-full h-auto block transition-all duration-700 ease-in-out blur-xs group-hover:blur-none" 
              />
              
              {/* Overlay Text - Always visible, but feels part of the blurred image */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <h2 className="font-serif text-xl text-white text-center drop-shadow-lg opacity-90 group-hover:opacity-0 transition-opacity duration-500">
                  {project.title}
                </h2>
              </div>
            </div>
            
            {/* Visible Title below the image */}
          </Link>
        ))}
      </div>
    </div>
  );
}