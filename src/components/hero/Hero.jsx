
// // import Navbar from '../navbar/Navbar'
// // import hi from '../../assets/hi.png'
// // import CV from './CV.pdf'
// // import img from '../../assets/img.png'

// // export default function Hero() {
// //   return (
// //     <div className='relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col'>
// //         {/* <div className='md:h-[720px] h-[960px] md:w-[640px] w-[880px] right-0 bg-gradient-to-r from-orange-600 
// //         via-yellow-500 to-red-400 absolute rounded-full transform rotate-12 -top-20 shadow-[0_0_40px_rgb(255, 165, 0, 0.7)]'
// //         > */}
// //         <div>
// //         </div>
// //         <Navbar /> 
// //         <section 
// //         data-aos='fade-up'
// //         data-aos-delay='250'
// //         className='text-white body-font z-10'>
// //             <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
// //                 <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left
// //                 mb-16 md:mb-0 items-center text-center relative'>
// //                     <img src={hi} data-aos='fade-up' data-aos-delay='400'
// //                      className='absolute top-[450px] left-54 md:top-[-30px] md:left-[1000px] transform
// //                     -translate-x-1/2 -translate-y-1/2 w-20 h-20'/>
// //                 <h1 className='title-font md:text-5xl  p-5 sm:text-4xl text-4xl mb-4 font-bold text-white'>Hi! I'm MeghaShyam Yellapu</h1>
// //                 <p className='mb-8 max-w-3xl text-center leading-relaxed text-lg md:text-xl p-5'>
// //                 I'm a soon-to-be B.Tech graduate with a passion for development. I specialize in AIML and i have strong knowledge on c++, Java, Python, data structures, problem solving, and web development. Explore my portfolio as I showcase my skills and projects, ready to make an impact in the tech industry. Let's connect and create something extraordinary together.
// //                 </p>
// //                 <div className='flex justify-center p-3 ml-80'>
// //                     <a href={CV} download> 
// //                         <button className='inline-flex text-white  bg-orange-500 border-0 py-2.5 px-6 
// //                         focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
// //                         rounded-full text-lg'>
// //                             Download CV
// //                         </button>
// //                     </a>
// //                 </div>
// //                 </div>
// //                 <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
// //                    <img src={img} alt="hero" className='object-cover object-center rounded-full w-80 h-80' />
// //                 </div>
// //             </div>
// //         </section>
// //     </div>
// //   )
// // }

// import Navbar from '../navbar/Navbar'
// import hi from '../../assets/hi.png'
// import CV from './CV.pdf'
// import img from '../../assets/img.png'

// export default function Hero() {
//   return (
//     <div className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col">
      
//       {/* Navbar */}
//       <Navbar />

//       {/* Hero Section */}
//       <section 
//         data-aos="fade-up"
//         data-aos-delay="250"
//         className="text-white body-font z-10">
        
//         <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          
//           {/* Left Section - Text & Button */}
//           <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left 
//             mb-16 md:mb-0 items-center text-center relative">

//             {/* Floating Hi Image */}
            

//             {/* Title */}
//             <h1 className="title-font md:text-5xl text-4xl font-bold text-white p-5">Hi! I'm MeghaShyam Yellapu</h1>

//             {/* Description */}
//             <p className="mb-8 max-w-3xl leading-relaxed text-lg md:text-xl p-5">
//               I'm a soon-to-be B.Tech graduate with a passion for development. I specialize in 
//               <span className="font-semibold"> AIML</span> and have strong knowledge of 
//               <span className="font-semibold"> C++, Java, Python, data structures, problem solving, and web development.</span> 
//               Explore my portfolio as I showcase my skills and projects, ready to make an impact in the tech industry. 
//               Let's connect and create something extraordinary together.
//             </p>

//             {/* Download CV Button - Fully Responsive */}
//             <div className="flex justify-center md:justify-start p-5">
//               <a href={CV} download>
//                 <button className="inline-flex text-white bg-orange-500 border-0 py-3 px-6 
//                   focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
//                   rounded-full text-lg transition duration-300">
//                   Download CV
//                 </button>
//               </a>
//             </div>

//           </div>

//           {/* Right Section - Profile Image */}
//           {/* <div className="relative w-full md:w-auto flex justify-center md:justify-end">
//             <img src={img} alt="hero" className="object-cover object-center rounded-full w-40 h-40 md:w-64 md:h-64" />
//           </div> */}
//     {/* <div className=" flex justify-between w-full md:w-auto">
//             <img 
//               src={img} 
//               alt="Profile" 
//               className=" md:w-80 md:h-96 object-cover object-center"
//             />
//           </div> */}
//           <div className="md:w-1/2 flex justify-center">
//             <img 
//               src={img} 
//               alt="Profile" 
//               className="w-auto h-auto max-w-xs md:max-w-sm object-cover"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

import Navbar from '../navbar/Navbar'

import CV from './CV.pdf'
import img from '../../assets/img.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import whatsapp from '../../assets/whatsapp.png'
import mail from '../../assets/mail.png'
import leetcode from '../../assets/leetcode.png'

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col p-5">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section 
        data-aos="fade-up"
        data-aos-delay="250"
        className="text-white body-font z-10 p-5">
        
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          
          {/* Left Section - Text & Button */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-10 flex flex-col 
            md:items-start md:text-left items-center text-center space-y-6 relative">

            {/* Floating Hi Image */}
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white">Hi! I'm <span className='text-orange-500'>MeghaShyam Yellapu</span> </h1>
            <h2 className='text-xl pl-60 font-bold text-emerald-500'>Beta Microsoft Student Learn Ambassador</h2>

            {/* Description */}
            <p className="max-w-xl leading-relaxed text-lg md:text-xl">
              I'm a soon-to-be B.Tech graduate with a passion for development. I specialize in 
              <span className="font-semibold"> AIML</span> and have strong knowledge of 
              <span className="font-semibold"> C++, Java, Python, data structures, problem solving, and web development.</span> 
              Explore my portfolio as I showcase my skills and projects, ready to make an impact in the tech industry. 
              Let's connect and create something extraordinary together.
            </p>

            {/* Download CV Button */}
            <div className="flex justify-center md:justify-start space-x-6">
              <a href={CV} download>
                <button className="inline-flex text-white bg-orange-500 py-3 px-6  
                  focus:outline-none hover:bg-orange-600 hover:shadow-lg rounded-full text-lg transition">
                  Download CV
                </button>
              </a>
              
              <a className='w-12 space-x-5' href="https://www.linkedin.com/in/meghashyamyellapu/"><img src={linkedin} alt="linkedin" /></a>
              <a className='w-12 space-x-5 ' href="https://api.whatsapp.com/send?phone=919490625199&text=Hello%20I%20want%20to%20contact%20you"><img src={whatsapp} alt="Whatsapp" /></a>
              <a className='w-12 space-x-5' href="https://www.github.com/meghashyamy"><img src={github} alt="Github" /></a>
              <a className='w-12 space-x-5' href="mailto:shyamyellapu1@outlook.com"><img src={mail} alt="Mail" /></a>
              <a className='w-12 space-x-5  rounded-xl' href="https://leetcode.com/u/Meghashyamyellapu/"><img  className='rounded-xl' src={leetcode} alt="leetcode" /></a>
                
            </div>

          </div>

          {/* Right Section - Profile Image */}
          <div className="md:w-1/2 flex justify-center">
            <img 
              src={img} 
              alt="Profile" 
              className="w-auto h-auto max-w-xs md:max-w-sm object-cover"
            />
          </div>

        </div>
      </section>
    </div>
  )
}
