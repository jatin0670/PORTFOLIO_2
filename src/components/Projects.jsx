import React from 'react'
import ProjectCards from './ProjectCards'
import chatapp from '../images/chatapp.png'
import weather from '../images/weather.png'
import quiz from '../images/quiz.png'
import bk from '../images/bk.png'
import lib from '../images/library.png'
import multi from '../images/multi.png'
import { motion } from "motion/react"

const Projects = () => {
  return (
    <div id='Projects' className=' flex flex-col mt-10 w-full items-center justify-center gap-10'>
      <motion.h1 initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0}} viewport={{ once: true }} className='text-white text-3xl md:text-4xl font-bold'>My Projects</motion.h1>
      <div className='h-[80%] p-5 lg:p-2 gap-10 lg:gap-20 w-full flex flex-col lg:flex-row items-center justify-center'>
        {/* <ProjectCards Title="Chat App" Para="A real-time web chat application built using React and Firebase. It allows users to send and receive messages instantly with live updates, user authentication, and a smooth, responsive UI — perfect for seamless conversations." Src={chatapp} Link="https://jatin0670.github.io/Chat-App/"/> */}

        {/* <ProjectCards Title="Weather_Web" Para="A sleek weather forecasting app powered by React and a weather API. It displays current weather conditions, temperature, and a multi-day forecast for any location, all wrapped in a modern, user-friendly interface." Src={weather} Link="https://jatin0670.github.io/Weather_web/"/> */}

        <ProjectCards Title="Library Management" Para="A full-stack Library Management System built with React.js and Spring Boot. It features book and student management, book issuing and tracking, an admin dashboard with real-time data, and is deployed on Vercel and Render with MySQL database on Aiven cloud." Src={lib} Link="https://librarymanagementfrontend-eta.vercel.app/"/>

        <ProjectCards Title="Multi Tools Web" Para="A responsive Multi-Tool web application built with React.js that provides multiple useful utilities in one place. It features Image Compression, URL Shortener, and QR Code Generator." Src={multi} Link="https://multiwebtools.vercel.app/"/>

        <ProjectCards Title="Clone Site" Para="A visually accurate clone of the Burger King website built with HTML, CSS, and JavaScript. It replicates the layout, design, and responsiveness of the original site, showcasing strong frontend skills and attention to detail." Src={bk} Link="https://jatin0670.github.io/burger_king/"/>

      </div>
    </div>
  )
}

export default Projects
