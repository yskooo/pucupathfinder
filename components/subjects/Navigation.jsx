import React from 'react'
import {useRouter} from 'next/router'

const Navigation = () => {
    const router = useRouter();

    function handleGoBack() {
        router.back();
    }
  return (
    <>
    <nav className="bg-white fixed px-2 sm:px-4 py-2.5 w-full left-0 border-b border-gray-200">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  {/* <div className="mx-2 "> */}
      <button onClick={handleGoBack} className="border-2 rounded-md p-2.5 hover:border-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>  
      </button>
    {/* </div> */} 
  <div className="flex">
    <a href=''>
      <img src="/img/blue.svg" className='w-72 opacity-95' alt="" />
    </a>
  </div>
    <div className="items-center w-full md:flex md:w-auto md:order-2">
    <a href='https://up.phinma.edu.ph/' target='_blank' rel='noreferrer'>
      <img src="https://2.bp.blogspot.com/-FSwWI2155H8/XBdPWMrINdI/AAAAAAAAAHg/_W5mFdgcEYYx7EndE1ngXrqlABxRkV7ewCK4BGAYYCw/s1600/PHINMA.gif" className='w-20' alt="" />
    </a>
    </div>
  </div>
</nav>
<br /> <br /> <br />
</>
  )
}

export default Navigation
