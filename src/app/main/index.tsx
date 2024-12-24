import About from "../about";
import Experience from "../experience";
export default function Main() {
  
  return (
    <main className="grow p-10 grid grid-cols-1 gap-10">
      <About />
      <Experience />
    </main>
  )
}