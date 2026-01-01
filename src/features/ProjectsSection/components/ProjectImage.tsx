"use client";

import Image from "next/image";

interface ProjectImageProps {
  src?: string;
  title: string;
}

export default function ProjectImage({ src, title }: ProjectImageProps) {
  return (
    <div className="relative aspect-video mb-6 overflow-hidden rounded-lg bg-gray-900 border border-white/5 group-hover:border-primary/30 transition-colors duration-300">
      <Image
        src={src || "/images/template.png"}
        alt={`${title} screenshot`}
        fill
        className={`object-cover transition-all duration-500 group-hover:scale-105 ${!src ? 'opacity-60 group-hover:opacity-100' : ''}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}
