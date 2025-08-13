import { Linkedin, Mail } from "lucide-react";
import { GrGithub } from "react-icons/gr";
import { TypeAnimation } from "react-type-animation";
import ReactiveButton from "reactive-button";
import profileImg from '../assets/sadhin.jpg'
const Hero = () => {
      const scrollToSection = (id) => {
        console.log(id)
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div id="home" className="md:mb-20 mb-10">
       <div className="flex mt-10 flex-col md:flex-row justify-around items-center  px-4">
          {/* Left div */}
      <div className="mt-10 md:mt-20 md:w-1/2 text-center md:text-left">
        <div className="space-y-4">
          <h1 className="text-2xl  sm:text-3xl lg:text-4xl font-bold leading-tight animate-fade-in-up">
            Hi, I am &nbsp;
            <TypeAnimation
              sequence={[
                "Taosif Bin Sadhin",
                2000,
                "a MERN Stack Web Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-red-500"
            />
          </h1>

          <p className="text-xl text-gray-400 sm:text-2xl text-muted-foreground max-w-3xl animate-fade-in-up animate-delay-200 text-justify">
            Crafting seamless full-stack experiences with MongoDB, Express.js, React, and Node.js
          </p>
        </div>
      </div>

      {/* Right div */}
      <div className="mt-10 md:mt-20 w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 relative">
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 to-red-500">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
            <img
              className="rounded-full object-cover w-full h-full animate-float"
              src={profileImg && profileImg}
              alt="profile"
            />
          </div>
        </div>
      </div>
       </div>
       <div className="flex mt-10 sm:flex-row gap-20 justify-center items-center animate-fade-in-up animate-delay-400 ">
          <ReactiveButton outline
           onClick={()=>scrollToSection('projects')}  
          color="green"
          idleText=' View My Work'
          size="lerge"
          />
          <ReactiveButton
         
          color="yellow"
          idleText='Download CV'
          size="lerge"
          />
            
           
          </div>
           {/* Social Links */}
          <div className=" mt-12 flex justify-center space-x-10 animate-fade-in-up animate-delay-600">
             <a 
              href="https://github.com/sadhin28" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110 border border-border hover:border-green-500"
            >
              <GrGithub className="h-6 w-6" />
            </a>
             <a 
              href="https://www.linkedin.com/in/taosif-bin-sadhin-527899368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110 border border-border hover:border-green-500"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <button 
              onClick={()=>scrollToSection('contact')} 
              className="p-3 bg-card hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110 border border-border hover:border-green-500"
            >
              <Mail className="h-6 w-6" />
            </button>
          </div>
    </div>
  );
};

export default Hero;
