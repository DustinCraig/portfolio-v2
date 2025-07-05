import HeroSection from "@/features/HeroSection";
import ExperienceSection from "@/features/ExperienceSection";
import ProjectsSection from "@/features/ProjectsSection";
import Footer from "@/features/Footer";
import Navigation from "@/features/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
