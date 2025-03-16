import React from 'react'
import img_experience from '../../assets/img_experience.png'

export default function Experience() {
  return (

    <section id='experience' className='relative overflow-hidden flex flex-col text-gray-600 body-font'>
        <div className='absolute top-[100px] left-64 inset-x-0 flex items-start justify-center'>
            <div className='h-96 w-96 bg-gradient-to-br from-[#ff910a] blur-2xl invisible opacity-40 rounded-full'></div>
            <div className='h-96 w-96 bg-gradient-to-r from-[#ffdb12] opacity-40 blur-2xl rounded-full'></div>
        </div>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
            <div data-aos='fade-right' data-aos-delay='400' className='relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0'>
             <div className='md:h-[450px] h-[400px] md:w-[300px] w-[300px] md:right-36 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 absolute rounded-md transform rotate-3 -top-8 shadow-[0_0_40px_rgba(225,165,0,0.7)] z-0'></div>
            <img src={img_experience} className='object-cover md:w-[300px] md:h-[450px] object-center rounded relative z-10' alt="Experience" />
            </div>
        <div data-aos='fade-left' data-aos-delay='400' className='lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center '>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-500 '>Internship</h1>
            <h2 className='title-font font-bold text-white sm:text-2xl '> Machine Learning   By Apssdc    :</h2>
            <p className='mb-8 text-white leading-relaxed '>Collaborated with Andhra Pradesh State Skill Development Corporation (APSSDC) and Edunet Foundation, gaining hands-on experience in AI/ML technologies through the IBM SkillsBuild platform.
            Developed a Restaurant Review System leveraging Machine Learning algorithms, analyzing customer sentiment and reviews to generate insights for business improvements</p>
            <h2 className='title-font font-bold text-white sm:text-2xl '>GAOTek (Web Developer) :</h2>
            <p className='mb-8 text-white leading-relaxed '> Developed new skills and gained a deeper understanding of web development concepts through hands-on application.
Exceeded team expectations by delivering outstanding quality and results during my web development internship at GAOTek Inc.
Committed to learning, growing, and stretching to the highest level of my ability and potential.</p>
            <h2 className='title-font font-bold text-white sm:text-2xl '>TechSaksham (Microsoft&SAP) :</h2>
            <p className='mb-8 text-white leading-relaxed '>During my internship, I developed a Face Recognition Attendance System, leveraging Artificial Intelligence (AI) and Machine Learning (ML) to automate and streamline attendance tracking. This system eliminates the need for traditional methods like manual entry or RFID cards, enhancing both accuracy and efficiency.</p>
        </div>
        </div>
    </section>

  )
}
