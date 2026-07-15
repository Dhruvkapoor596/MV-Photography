"use client";

import { useFormStatus } from "react-dom";
import { sendEmail } from "../actions/sendEmail";
import Image from "next/image";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button 
      type="submit" 
      disabled={pending}
      className="pt-4 block text-xs uppercase tracking-widest text-[#2C2C2C] hover:text-[#D35400] transition-colors disabled:opacity-50"
    >
      {pending ? "Sending..." : "Send message ➔"}
    </button>
  );
}

export default function Contact() {
  async function action(formData: FormData) {
    const result = await sendEmail(formData);
    if (result.success) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message.");
    }
  }

  return (
    <div className="min-h-screen pt-16 px-8 md:px-16 lg:px-32 pb-24">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        
        {/* Left Side: Call to Action */}
        <div className="flex-1 space-y-8">
          <h1 className="font-serif text-5xl md:text-6xl text-[#2C2C2C]">
            Let’s create <br /> something together.
          </h1>
          <div className="text-[#71717A] text-sm md:text-base leading-relaxed max-w-sm">
            <p>
              Whether you have a project in mind, a question about my work, 
              or just want to say hello, I am always open to new conversations.
            </p>
            <p className="mt-6">
              Available for commissions, collaborations, and inquiries.
            </p>
          </div>
        </div>

        {/* Right Side: Contact Form & WhatsApp */}
        <div className="flex-1 w-full max-w-lg space-y-12">
          <form action={action} className="space-y-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#71717A] mb-2">Name</label>
              <input name="name" required type="text" className="w-full border-b border-[#EAE8E1] bg-transparent py-2 focus:border-[#2C2C2C] outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#71717A] mb-2">Email</label>
              <input name="email" required type="email" className="w-full border-b border-[#EAE8E1] bg-transparent py-2 focus:border-[#2C2C2C] outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#71717A] mb-2">Message</label>
              <textarea name="message" required rows={4} className="w-full border-b border-[#EAE8E1] bg-transparent py-2 focus:border-[#2C2C2C] outline-none transition-colors"></textarea>
            </div>
            <SubmitButton />
          </form>

          {/* WhatsApp Section */}
          <div className="pt-8 border-t border-[#EAE8E1]">
            <p className="text-[10px] uppercase tracking-widest text-[#71717A] mb-4">
              Prefer to chat instantly?
            </p>
            <a 
              href="https://wa.me/447768445459?text=Hi%20Mohit,%20I'm%20interested%20in%20your%20photography%20services." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#EAE8E1] px-5 py-2 text-xs uppercase tracking-widest hover:bg-[#EAE8E1] transition-colors text-[#2C2C2C]"
            >
              <Image 
                src="/Whatsapp.png" 
                alt="WhatsApp logo" 
                width={18} 
                height={18} 
                className="mr-2"
              />
              Chat on WhatsApp
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
}