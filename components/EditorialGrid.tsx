// components/EditorialGrid.tsx
import { Photo } from "../data/portfolioData";

export default function EditorialGrid({ photos, title }: { photos: Photo[], title?: string }) {
  return (
    <section className="w-full pb-32">
      {title && (
        <div className="mb-20 border-b border-[#EAE8E1] pb-4">
          <h3 className="font-serif text-4xl md:text-5xl text-[#2C2C2C]">{title}</h3>
        </div>
      )}
      
      <div className="flex flex-col gap-32">
        {photos.map((photo, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div key={photo.id} className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Image Container */}
              <div className="flex-1 w-full aspect-[4/3] bg-[#EAE8E1] flex items-center justify-center p-6 border border-transparent hover:border-[#D35400] transition-all duration-500">
                <span className="font-serif text-sm text-[#71717A] opacity-70">[ {photo.caption} ]</span>
              </div>

              {/* Description Text */}
              <div className="flex-1 space-y-6">
                <h4 className="font-serif text-3xl">{photo.caption}</h4>
                
                {/* 2. CHANGED THE DESCRIPTION SIZE HERE: from text-sm to text-base (or text-lg if you want it even bigger) */}
                <p className="text-[#71717A] text-base leading-relaxed max-w-md">
                  This section describes the narrative behind the {photo.caption.toLowerCase()} collection. 
                  You can edit this placeholder text to explain the context, the light, or the emotion 
                  captured in these specific frames.
                </p>
                <div className="pt-4 border-t border-[#EAE8E1] w-20"></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}