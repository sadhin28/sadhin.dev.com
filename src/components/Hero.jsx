import { TypeAnimation } from "react-type-animation";
import ReactiveButton from "reactive-button";

const Hero = () => {
      const scrollToSection = (id) => {
        console.log(id)
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="mt-16">
       <div className="flex flex-col md:flex-row justify-around items-center mt-10 px-4">
          {/* Left div */}
      <div className="mt-10 md:mt-20 md:w-1/2 text-center md:text-left">
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight animate-fade-in-up">
            Hi,&nbsp;
            <TypeAnimation
              sequence={[
                "I am Taosif Bin Sadhin",
                2000,
                "I am a MERN Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="gradient-text"
            />
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl animate-fade-in-up animate-delay-200 text-justify">
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
              src="https://static.vecteezy.com/system/resources/previews/024/183/502/non_2x/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg"
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
    </div>
  );
};

export default Hero;
