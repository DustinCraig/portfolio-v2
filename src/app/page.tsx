import Header from "./header";
import Main from "./main";
import Footer from "./footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col h-screen mx-auto max-w-screen-lg px-4 py-4 md:py-10">
        <Main />
      </div>
      <Footer />
    </div>
  );
}
