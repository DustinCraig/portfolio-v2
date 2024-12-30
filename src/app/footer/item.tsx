import { ReactNode } from "react";
import Link from "../components/link";

type FooterItemProps = {
  href?: string;
  image?: ReactNode
  text: string;
}

export default function FooterItem({ 
  href, image, text
}: FooterItemProps) {
  return (
    <Link 
      href={href ?? "#"}
      text={text}
      image={image}
      className="flex content-center mx-10 md:mx-20 my-0  gap-4"
    />
  )
}