import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <nav className="bg-transparent fixed px-2 sm:px-4 py-2.5 w-full left-0 border-b z-20 border-gray-200 backdrop-filter backdrop-blur-2xl backdrop-brightness-75">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <a href="" className="flex items-center">
      <Image
      src='img/pathfinderwhite.svg'
      className='w-60'
      width={100}
      height={100}
      alt='logo'
      />
    </a>
  <div className="flex md:order-2">
    <a href='https://up.phinma.edu.ph/' target='_blank' rel='noreferrer'>
      <img src="/img/pucu-white.svg" className='w-14 opacity-95' alt="" />
    </a>
 
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
   </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
        <li>
          <a href="#home" className="block py-2 pl-3 pr-4  rounded text-white hover:text-[#D3B306] md:bg-transparent md:p-0 dark:text-white" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#subjects" className="block py-2 pl-3 pr-4 text-white rounded hover:text-[#D3B306] md:p-0">Subjects</a>
        </li>
        <li>
          <a href="#about" className="block py-2 pl-3 pr-4 text-white rounded hover:text-[#D3B306] md:p-0">About</a>
        </li>
        <li>
          <a href="#team" className="block py-2 pl-3 pr-4 text-white rounded hover:text-[#D3B306] md:p-0">Meet Our Team</a>
        </li>
        <li>
          <a href="#contact" className="block py-2 pl-3 pr-4 text-white rounded hover:text-[#D3B306] md:p-0">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header

