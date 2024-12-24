import FooterItem from "./item";

export default function Footer() {
  return (
    <footer className="w-full p-2 bg-gray-600 fixed bottom-0 flex flex-row mx-auto  justify-center content-center">
      <FooterItem
        text="Github"
        href="https://github.com/DustinCraig"
      />
      <FooterItem
        text="LinkedIn"
        href="https://www.linkedin.com/in/dustin-craig/"
      />
      <FooterItem
        text="Contact"
        href="mailto:dustincraig16@gmail.com"
      />
    </footer>
  )
}