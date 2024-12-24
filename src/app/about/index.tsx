import Avatar from "../components/avatar";
import avatarImage from "./Avatar.jpeg";

export default function About() {
  return (
    <div>
      <h1 className="text-4xl font-bold pb-10 underline decoration-blue-400">Who am I?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-40">
        <Avatar 
          src={avatarImage} 
          alt="avatar" 
          width={128} 
          height={128} 
          className="w-[300px] h-[300px] md:w-[250px] md:h-[250px] lg:w-[275px] lg:h-[275px] justify-self-center md:justify-self-end"
        />
      
        <div className="flex flex-col gap-4 justify-center">
          <div>
            <h1 className="text-2xl font-bold">Dustin Craig</h1>
            <p className="text-gray-600">Software Engineer</p>
          </div>
          <p className="text-lg">
            I am passionate about building performant and accessible applications natively and on the web!
          </p>
          <p className="text-lg">
            I also have an interest in computer graphics and game development as thats where I started my programming journey.
          </p>
        </div>
      </div>
    </div>
  );
}