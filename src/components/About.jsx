import React from 'react'
import SkillCard from './SkillCard'

const About = () => {
  return (
    <div id='About' className=' w-full  min-h-screen md:h-screen gap-y-16 md:gap-0 pt-10 flex flex-col '>
      <div className=' md:h-2/5 w-full flex flex-col items-center justify-center space-y-1 md:space-y-2'>
      <h3 className=' text-white text-sm font-bold md:text-2xl lg:text-3xl'>my skills</h3>
      <h1 className=' text-white text-xl font-bold md:text-4xl  lg:text-5xl'>What I do</h1>
      <p className=' text-gray-500 lg:hover:text-white text-lg w-5/6 md:w-5/6 lg:w-4/5 text-center font-normal lg:text-2xl'>I specialize in building modern, responsive web applications and crafting smooth user experiences. With a solid foundation in programming, I create clean code, solve complex problems, and continuously learn new technologies to stay ahead in the tech game.</p>

      </div>

      <div className=' md:h-3/5 gap-y-10 md:gap-y-5 w-full flex-col md:flex-row flex flex-wrap items-center justify-around'>
          <SkillCard Title="Frontend Web Development" Para="I craft responsive and visually appealing websites using modern tools and best practices. My goal is to deliver seamless, user-friendly experiences that leave a lasting impression. " Src="https://icones.pro/wp-content/uploads/2021/05/icone-html-orange.png" />
          <SkillCard Title="Java Development" Para="Java helps me build strong OOP foundations and develop scalable, cross-platform applications — from console tools to GUI programs." Src="https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg" />
          <SkillCard Title=" C++ Programming" Para="I use C++ to understand core programming concepts, data structures, and system-level logic. It sharpens my problem-solving and algorithmic thinking." Src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJ_ghJdBpApjfngFZARBFlSCjb9KVYLSo6Q&s" />
          <SkillCard Title="Version Control (Git)" Para="I use Git to manage code efficiently, collaborate with teams, and keep development organized. It helps me track changes and maintain clean, stable projects." Src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-512.png" />
      </div>
    </div>
  )
}

export default About


