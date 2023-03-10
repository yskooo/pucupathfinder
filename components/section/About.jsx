import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section class="py-20" id='about'>
        <div class="gap-8 items-center px-4 mx-auto max-w-screen-2xl xl:gap-6 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <Image
            src='/img/digilibpucu.svg'
             className='w-4/5 ml-4 rounded-2xl'
             alt="Online Library"
             width={100}
             height={100}
              />
            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900">About PUCU PATHFINDER<span className='text-[#D3B306]'>.</span></h2>
                <p class="mb-6 mr-4 mx-auto text-base text-slate-500 md:text-lg">
                  The first online library of PHINMA UPang College Urdaneta intended to help students navigate their steps through the perplexity of research, containing sample studies organized in categories leading to their desired topics. 
                   An assistant and guide to any academic research undertaking, truly training students to become pathfinders!
                </p>
                <button className='bg-green-700 rounded-lg'>
                <a href="" class="inline-flex items-center text-white text-base font-medium px-5 py-3 text-center">
                    Read research study
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default About