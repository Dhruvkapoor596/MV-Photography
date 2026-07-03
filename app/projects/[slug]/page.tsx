import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "../../../data/projectsData";
import fs from 'fs';
import path from 'path';

export default function ProjectGallery({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Get all images from the public folder for this specific project
  const projectFolder = path.join(process.cwd(), 'public', 'projects', params.slug);
  let images: string[] = [];

  if (fs.existsSync(projectFolder)) {
    images = fs.readdirSync(projectFolder)
      .filter(file => file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png'))
      .filter(file => file !== 'cover.jpg') // Exclude the cover image from the gallery
      .map(file => `/projects/${params.slug}/${file}`);
  }

  return (
    <div className="min-h-screen pt-12 px-8 md:px-16 lg:px-32">
      <h1 className="font-serif text-4xl mb-12">{project.title}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="relative aspect-[4/3] bg-[#EAE8E1] overflow-hidden">
            <Image 
              src={src} 
              alt={`${project.title} ${index + 1}`} 
              fill 
              className="object-cover" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}