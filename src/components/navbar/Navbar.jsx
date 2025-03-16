// import React from 'react'

export default function Navbar() {
    const listNavbar = [
        {name: 'Home', link:'#home'},
        {name: 'Skills', link:'#skills'},
        {name: 'Experience', link:'#experience'},
        {name: 'Language', link:'#language'},
        {name: 'Projects', link:'#projects'},
    ];
  return (
    <header data-aos='fade-up' className='text-gray-600 body-font z-10'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
            <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
                <span className='ml-1 text-4xl font-bold text-red-500 '>MeghaShyam</span>
            </a>
            <nav className='md:ml-auto text-white text-base md:mr-auto flex flex-wrap items-center justify-between gap-10'>
                {
                    listNavbar.map((item, index) =>(
                        <a key={index} href={item.link} className='mr-5 text-xl font-semibold  hover:text-yellow-300'>
                            {item.name}
                        </a>
                    ))
                }
            </nav>
            <button className="inline-flex text-white bg-orange-500 py-3 px-6 
                  focus:outline-none hover:bg-orange-600 hover:shadow-lg rounded-full text-lg transition">
                <a href='#contact'>Contact me</a>
            </button>
        </div>
    </header>
  )
}
