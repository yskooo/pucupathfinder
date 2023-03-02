import Head from 'next/head'
import Script from 'next/script'
import  {Epilogue} from '@next/font/google'
import Header from '../components/section/Header.jsx'
import Hero from '../components/Hero.jsx'
import Subjects from '../components/section/Subjects.jsx'
import About from '../components/section/About.jsx'
import Team from '../components/section/Team.jsx'
import Contact from '../components/section/Contact.jsx'
import {Warning} from '../components/subjects/Warning.jsx'
const epilogue = Epilogue({
  subsets: ['latin'],
  variable: '--font-epilogue',
})

export default function Home() {
  return (
    <>
      <Head>
        <title>PUCU PATHFINDER | Navigate the world of research</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/pathfinderwhite.svg" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.css" rel="stylesheet" />

      </Head>
      <div className='mx-auto'>
        <Header/> 
        <Hero/>
        <Subjects id={Warning}/>
        <About/>
        <Team/>
        <Contact/>
      </div>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.js" defer/>
        <Script src="../path/to/flowbite/dist/flowbite.min.js" defer/>
    </>
  )
}
