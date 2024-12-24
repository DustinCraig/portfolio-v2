import Image, { StaticImageData } from "next/image";
import { ClassNameValue } from "tailwind-merge";
import { twMerge } from "tailwind-merge";

type AvatarProps = {
  src: string | StaticImageData;
  width: number; 
  height: number;
  alt: string;
  className?: ClassNameValue;
}

export default function Avatar({ src, alt, width, height, className }: AvatarProps) {
  return (
    <div className="">
      <Image 
        className={twMerge("rounded-full", className)}
        src={src} 
        width={width}
        height={height}
        alt={alt}
      />
    </div> 
  )
}