import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import data from '../data/app004.json'

const APP004 = () => {
  const router = useRouter();

  function handleGoBack() {
    router.back();
  }
  return (
    <>
      <Head>
        <title>PUCU PATHFINDER | Find the study that suits your own in a vast selection waiting for you!</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/pathfinderwhite.svg" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.css" rel="stylesheet" />
      </Head>
      <nav className=''>
        Subjects | APP 004
      </nav>

        <button onClick={handleGoBack}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>  
        </button>

        <main className='contain min-h-screen'>
        <article className='grid grid-cols-1 gap-4 m-6 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-3' loading="lazy">
      {data.map(item => (
        <div key={item.id} tooltip={item.subjectTitle}>
          <Link href={item.file} key={item.id} className="flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" target="_blank" rel="noreferrer">
            <Image
              className="object-fit w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" 
              src={item.image}
              alt={item.subjectTitle}
              width={100}
              height={100}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-lg font-serif tracking-tight text-gray-800 dark:text-white">{item.subjectTitle}</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">{item.type}</p>
              <br />
              <p className="font-light text-gray-700 dark:text-gray-500">Researchers: {item.researchers}</p>
              <p className="font-light text-gray-700 dark:text-gray-400">A.Y. {item.AY}</p>
            </div>
          </Link>
        </div>
      ))}
    </article>
        </main>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.js" defer/>
      <Script src="../path/to/flowbite/dist/flowbite.min.js" defer/>
    </>
  )
}

export default APP004;
