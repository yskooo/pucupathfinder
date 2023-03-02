import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Warning from '../subjects/Warning'
const Subjects = () => {
  return (
    <div className='mx-auto max-w-screen-2xl'>
         <section class="bg-gray-100 mx-auto" id='subjects'>
             <div class="px-6 py-10 mx-auto pt-20">
                <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16 text-center">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Subjects<span className='text-[#D3B306]'>.</span></h2>
                    <p class="text-base text-gray-500 sm:text-xl dark:text-gray-400">
                        Discover the available research studies by the senior high school students of PHINMA UPang College Urdaneta from A.Y. 2019 - A.Y. 2023
                    </p>
                </div>
<Warning/>

                <section class="mx-auto p-4 text-gray-900 text-base grid grid-cols-1 text-center gap-8 mt-8 xl:mt-12 xl:gap-12 sm:mx-auto sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-4">
                    <Link href="/ABM001" passHref target="">
                    <div class="w-72 bg-white border-2 rounded-xl shadow-inner hover:border-[#D3B306] p-2">                            
                    <Image
                                src='img/subjectbook.svg'
                                className='w-72'
                                width={100}
                                height={100}
                                alt='logo'
                                />
                            <h1 className='font-bold'>ABM 001</h1>
                            <p>ORGANIZATION AND MANAGEMENT</p>
                        </div>
                    </Link>
                    <div className="w-72">
                    <Image
                            src='img/subjectbook.svg'
                            className='w-72'
                            width={100}
                            height={100}
                            alt='logo'
                            />
                        <h1 className='font-bold'>ABM 006</h1>
                        <p>PRINCIPLES OF MARKETING</p>
                    </div>
                    <div className="w-72">
                    <Image
                            src='img/subjectbook.svg'
                            className='w-72'
                            width={100}
                            height={100}
                            alt='logo'
                            />
                        <h1 className='font-bold'>APP 003</h1>
                        <p>FILIPINO SA PILING LARANGAN</p>
                    </div> 
                    <Link href="/APP004" passHref target="">
                    <div class="w-72 bg-white border-2 rounded-xl shadow-inner hover:border-[#D3B306] p-2">
                    <Image
                            src='img/subjectbook.svg'
                            className='w-72'
                            width={100}
                            height={100}
                            alt='logo'
                            />
                        <h1 className='font-bold'>APP 004</h1>
                        <p>ENTREPRENEURSHIP</p>
                    </div> 
                    </Link>
                    <Link href="/APP005" passHref target="">
                    <div class="w-72 bg-white border-2 rounded-xl shadow-inner hover:border-[#D3B306] p-2">
                    <Image
                            src='img/subjectbook.svg'
                            className='w-72'
                            width={100}
                            height={100}
                            alt='logo'
                            />
                        <h1 className='font-bold'>APP 005</h1>
                        <p>PRACTICAL RESEARCH 1</p>
                    </div> 
                    </Link>
                    <Link href="/APP006" passHref target="">
                    <div class="w-72 bg-white border-2 rounded-xl shadow-inner hover:border-[#D3B306] p-2">
                    <Image
                            src='img/subjectbook.svg'
                            className='w-72'
                            width={100}
                            height={100}
                            alt='logo'
                            />
                        <h1 className='font-bold'>APP 006</h1>
                        <p>PRACTICAL RESEARCH 2</p>
                    </div>
                    </Link>
                    <div className="w-72">
                    <Image
                            src='img/subjectbook.svg'
                            className='w-72'
                            width={100}
                            height={100}
                            alt='logo'
                            />
                        <h1 className='font-bold'>APP 007</h1>
                        <p>INQUIRIES, INVESTIGATION, AND IMMERSION</p>
                    </div>
                    <div className="w-72">
                    <Image
                            src='img/subjectbook.svg'
                            className='w-72'
                            width={100}
                            height={100}
                            alt='logo'
                            />
                        <h1 className='font-bold'>STM 009</h1>
                        <p>RESEARCH IN SCIENCE, TECHNOLOGY, ENGINEERING, AND MATHEMATICS</p>
                    </div>
                </section>

                 <div className="my-5 flex justify-center items-center text-center">
                 <Link href="/APP006" passHref target="">
                    <div className='w-full grid-cols-end bg-white border-2 rounded-xl shadow-inner hover:border-[#D3B306] '>
                         <Image
                            src='img/subjectbook.svg'
                            className='p-4 w-80 mx-auto flex justify-center items-center'
                            width={100}
                            height={100}
                            alt='logo'
                            />
                        <h1 className='font-bold'>COR 003 & COR 004</h1>
                            <p className='w-2/3 mx-auto lg:w-2/3'>KOMUNIKASYON AT PANANALIKSIK SA WIKA
                                AT KULTURANG FILIPINO & PAGBASA AT PAGSURI
                                NG IBA’T IBANG TEKSTO TUNGO SA PANANALIKSIK
                            </p>
                          </div>
                    </Link>
                    </div>
                    
                </div>
        </section>
    </div>
  )
}

export default Subjects
