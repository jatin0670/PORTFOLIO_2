import React from 'react'
import SkillCard from './SkillCard'

const About = () => {
  return (
    <div id='About' className=' w-full h-screen pt-10 flex flex-col'>
      <div className=' h-1/2 w-full flex flex-col items-center justify-center space-y-2'>
      <h3 className=' text-black text-lg font-bold md:text-2xl '>my skills</h3>
      <h1 className=' text-black text-3xl font-bold md:text-4xl '>What I do</h1>
      <p className=' text-gray-600 text-xl w-3/5 text-center font-normal lg:text-2xl'>I specialize in building modern, responsive web applications and crafting smooth user experiences. With a solid foundation in programming, I create clean code, solve complex problems, and continuously learn new technologies to stay ahead in the tech game.</p>

      </div>

      <div className=' h-1/2 w-full flex items-center justify-around'>
          <SkillCard Title="Frontend Web Development" Para="I craft responsive and visually appealing websites using modern tools and best practices. My goal is to deliver seamless, user-friendly experiences that leave a lasting impression. " Src="https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png" />
          <SkillCard Title="Java Development" Para="Java helps me build strong OOP foundations and develop scalable, cross-platform applications — from console tools to GUI programs." Src="https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg" />
          <SkillCard Title=" C++ Programming" Para="I use C++ to understand core programming concepts, data structures, and system-level logic. It sharpens my problem-solving and algorithmic thinking." Src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJ_ghJdBpApjfngFZARBFlSCjb9KVYLSo6Q&s" />
          <SkillCard Title="Version Control (Git)" Para="I use Git to manage code efficiently, collaborate with teams, and keep development organized. It helps me track changes and maintain clean, stable projects." Src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-512.png" />
      </div>
    </div>
  )
}

export default About
