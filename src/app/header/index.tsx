'use client'
import Link from "../components/link"

export default function Header() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="fixed flex flex-col top-0 bg-[#0a0a0a] w-full py-2 px-2	ground flex flex-row justify-between z-10 mb-4 w-full">
      <div className="mx-auto w-full max-w-screen-lg">
        <Link 
          href="/"
          text="Dustin Craig"
          className="cursor-pointer text-2xl"          
          onClick={scrollToTop}
        />
      </div>
    </div>
  )
}