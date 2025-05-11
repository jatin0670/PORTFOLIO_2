import React from 'react'
import ProjectCards from './ProjectCards'
import chatapp from '../images/chatapp.png'
import weather from '../images/weather.png'
import quiz from '../images/quiz.png'
import bk from '../images/bk.png'

const Projects = () => {
  return (
    <div id='Projects' className=' w-full h-screen flex items-center justify-around pt-10 flex-col'>
      <h1 className='text-black text-5xl font-bold '>My Projects</h1>
      <div className='h-2/3 w-full flex items-center justify-around '>
        <ProjectCards Title="Chat App" Para="A real-time web chat application built using React and Firebase. It allows users to send and receive messages instantly with live updates, user authentication, and a smooth, responsive UI — perfect for seamless conversations." Src={chatapp} Link="https://jatin0670.github.io/Chat-App/"/>

        <ProjectCards Title="Weather_Web" Para="A sleek weather forecasting app powered by React and a weather API. It displays current weather conditions, temperature, and a multi-day forecast for any location, all wrapped in a modern, user-friendly interface." Src={weather} Link="https://jatin0670.github.io/Weather_web/"/>

        <ProjectCards Title="Quiz App" Para="A fun and responsive quiz app built with React and JavaScript. It features multiple-choice questions, score tracking, and instant feedback in a clean, user-friendly design." Src={quiz} Link="https://jatin0670.github.io/QuizGame/"/>
        <ProjectCards Title="Clone Site" Para="A visually accurate clone of the Burger King website built with HTML, CSS, and JavaScript. It replicates the layout, design, and responsiveness of the original site, showcasing strong frontend skills and attention to detail." Src={bk} Link="https://jatin0670.github.io/burger_king/"/>
      </div>
    </div>
  )
}

export default Projects
