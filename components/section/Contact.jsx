import React from 'react'

const Contact = () => {
  return (
   <div id="contact" className="grid grid-cols-1 lg:grid-cols-2 xl:grid-flow-cols-2  mx-auto my-auto max-w-screen-4xl">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.839329813278!2d120.57001291485737!3d15.969764788942449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33913fab6540dcdd%3A0xde4220ea0771817a!2sPHINMA%20UPANG%20College%20Urdaneta!5e0!3m2!1sen!2sph!4v1677403845852!5m2!1sen!2sph" 
            title="map" scrolling="no" frameborder="0"
            width="100%" height="300px"
            className="h-screen p-4 rounded-4xl" 
            loading="lazy" 
          /> 

        <div className="flex flex-col justify-center items-center text-justify">
          <section className="rounded-lg border-blue-900 px-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Get in Touch<span className='text-[#D3B306]'>.</span></h2>
             <p className="mb-6 text-lg text-gray-500 md:text-lg text-justify">
             Hello there! We're thrilled to hear from you.
             <br /> <br />
             Whether if you have a feature request or would like to feature your research study on our platform, please let us know. We value your input and would love to hear your ideas.
             <br /> <br />
             If you have a research study you would like to feature, please include a brief summary and any relevant links. We are always looking for new and exciting research to showcase on our platform.
             <br /><br />
             We appreciate your interest and look forward to hearing from you! Reach us out here!
             </p>
             <button>
               <a href="mailto:pucupathfinder@gmail.com" className="text-blue-900 bg-transparent border-2 border-blue-900 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                 pucupathfinder@gmail.com
               </a>
             </button>
          </section>
         </div>

         <br /><br />
   </div>
        // rounded-sm relative w-full object-cover h-100 lg:w-full md:h-screen bg-cover bg-center">

  )
}

export default Contact