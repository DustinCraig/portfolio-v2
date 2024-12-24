'use client'
import { ReactNode } from "react"
import type { ClassNameValue } from "tailwind-merge";
import { twMerge } from "tailwind-merge";

type LinkProps = {
  href?: string;
  target?: "_blank";
  image?: ReactNode;
  text: string; 
  className?: ClassNameValue;
  onClick?: () => void;
}

const linkStyles = ``
const linkHoverStyles = `absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full`

export default function Link({
  href,
  target,
  image,
  text,
  className,
  onClick
}: LinkProps) {
  return (
    <a 
      href={href ?? "#"}
      target={target}
      className={twMerge(linkStyles, className)}
      onClick={onClick}
    >
      {image}
      <span className="relative group">
        {text}
        <span className={linkHoverStyles}></span>
      </span>
    </a>
  )
}