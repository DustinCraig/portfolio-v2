import { SocialIcon } from "@/components";
import { personalInfo } from "@/lib/data";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Socials() {
  return (
    <div className="flex justify-center gap-8 mb-8">
      <SocialIcon
        href={personalInfo.github}
        label="GitHub"
        hoverColor="hover:text-white"
      >
        <SiGithub className="w-full h-full" />
      </SocialIcon>
      <SocialIcon
        href={personalInfo.linkedin}
        label="LinkedIn"
        hoverColor="hover:text-blue-400"
      >
        <SiLinkedin className="w-full h-full" />
      </SocialIcon>
    </div>
  );
}
