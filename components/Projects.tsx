import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

function Projects({}: Props) {
  const projects =[1,2,3,4,5]
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
        
        <div className='relative flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
          
          {projects.map((project,i) => (
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
              <motion.img 
              initial={{opacity:0,y:-300}}
              transition={{duration:1.2}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              src="https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg" alt="" />
            
              <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'>
                  <span className='underline decoration-[#F7AB0A]/50'>Case Study {i+1} of {projects.length}:</span> UPS Clone</h4>

                  <p className='text-lg text-center md:text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum provident impedit pariatur numquam labore, laudantium tempora nihil. Commodi dignissimos quisquam reiciendis culpa quam, quaerat nisi aspernatur suscipit soluta, debitis perspiciatis?
                  Aut voluptatem qui earum nesciunt, ipsa quibusdam tempora cupiditate harum deleniti voluptatum vitae, officia perspiciatis numquam id ratione sapiente, temporibus inventore consectetur illum. Voluptas placeat eveniet asperiores in iusto. Voluptatum.</p>
              </div>
            
            </div>

            
          ))}
          
        </div>
        
        <div className='w-full absolute top-[30px] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects