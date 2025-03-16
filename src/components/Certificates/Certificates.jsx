
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import mlsa  from '../../assets/mlsabetacertificate.png'
import mlsa1  from '../../assets/mlsaalpha.jpeg'
import goldman from '../../assets/goldmansachsforage.png'
import ey from '../../assets/EYinternship.png'

export default function Certificates() {
    const listProjects = [
        {id:1, image:mlsa1, title:'ALPHA MLSA', description:'MLSA ALPHA CERTIFICATE'},
        {id:2, image:mlsa, title:'BETA MLSA', description:'MLSA BETA CERTIFICATE'},
        {id:3, image:goldman, title:'GOLDMAN SACHS', description:'GOLDMAN SACHS FORAGE CERTIFICATE'},
        {id:4, image:ey, title:'EY INTERNSHIP', description:'EY INTERNSHIP CERTIFICATE'},
    ];
        
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow:3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 780,
                settings:{
                    slidesToShow: 1,
                }
            }
        ]
    };
  return (
    <section data-aos='fade-up' data-aos-delay='400' id='projects' className='relative overflow-hidden flex flex-col text-white body-font'>
        <div className='container px-5 py-24 mx-auto'>
            <h2 className='text-4xl font-bold text-center mb-12'>My Certificates </h2>
            <Slider {...settings}>
                {
                    listProjects.map((project)=>{
                        return(
                        <div key={project.id} className='p-4'>
                            <div className='h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden'>
                                <img src={project.image} alt={project.title} className='w-full h-auto lg:h-80 md:h-36 sm:h-24 object-cover object-center' />
                                <div className='p-6'>
                                    <h2 className='p-3 tracking-widest text-xl title-font font-bold text-white mb-1'>{project.title}</h2>
                                    
                                </div>
                            </div>
                        </div>
                        )
                       
                    })
                }
            </Slider>
        </div>
    </section>
  )
}
