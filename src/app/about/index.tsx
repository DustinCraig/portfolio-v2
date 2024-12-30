"use client"

import Avatar from "../components/avatar";
import Link from "../components/link";
import avatarImage from "./Avatar.jpeg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div>
      <motion.h1
        initial={{ y: -20, opacity: 0, }}
        animate={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileInView="visible"
        className="text-4xl font-bold pb-10 underline decoration-blue-400"
      >
        Who am I?
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-40">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:block"
        >
          <Avatar 
            src={avatarImage} 
            alt="avatar" 
            width={128} 
            height={128} 
            className="w-[300px] h-[300px] md:w-[250px] md:h-[250px] lg:w-[275px] lg:h-[275px] justify-self-center md:justify-self-end"
          />
        </motion.div>
      
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col gap-4 justify-center"
        >
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
          <p className="text-lg">
            Feel free to reach out to me via email at <Link href="mailto:dustincraig16@gmail.com" text="dustincraig16@gmail.com" />, or connect with me on <Link href="https://www.linkedin.com/in/dustin-craig/" text="LinkedIn" />!
          </p>
        </motion.div>
      </div>
    </div>
  );
}