
import express from '../../assets/Express.png'
import postman from '../../assets/postman.png'
import MongoDB from '../../assets/MongoDB.png'

import tailwind from '../../assets/Tailwind.png'
import react from '../../assets/react.png'
import nodejs from '../../assets/node.js.png'

export default function Skills() {
  return (
    <section id='skills' className='relative overflow-hidden flex flex-col text-white body-font'>
        <div className='container flex flex-wrap px-5 py-24 mx-auto items-center'>
            <div 
            data-aos='fade-up' 
            data-aos-delay='200' 
            className=' md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pd-14 space-y-5 border-b border-orange-400'>
                <h1 data-aos='fade-right' data-aos-delay='500' className='sm:text-5xl font-medium title-font mb-2 text-white '>Skills</h1>
                <p data-aos='fade-right' data-aos-delay='500' className='text-lg leading-relaxed'>
                A third-year B.Tech student specializing in Artificial Intelligence and Machine Learning. Proficient in C++, Java, Python, Node.js,Express.js,Mongodb,postman, HTML, CSS, and React, with a strong foundation in Data Structures and Algorithms (DSA). I am also skilled in web development and have experience in building websites using React, Node.js, and Express.js. I am passionate about learning new technologies and applying them to real-world problems. I am looking for opportunities to work on challenging projects and enhance my skills.
                </p>
            </div>
            <div data-aos='fade-left' data-aos-delay='500' className='flex flex-col md:w-1/2 md:pl-12'>
            <nav className='flex flex-wrap list-none -mb-1'>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={MongoDB} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={express} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={react} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={nodejs} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={tailwind} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                    <img src={postman} alt="" className='rounded-full w-24 h-24 object-cover'/>
                </li>
            </nav>
            </div>
        </div>
    </section>
  )
}
