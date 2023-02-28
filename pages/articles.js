import Head from 'next/head';
import Script from 'next/script';
import ArticleNav from '../components/search-articles/ArticleNav.jsx';
import ArticleDesc from '../components/search-articles/ArticleDesc.jsx';
import ResearchCard from '../components/search-articles/ResearchCard';

const Search = () => {
  return (
    <>
      <Head>
        <title>| Find the study that suits your own in a vast selection waiting for you!</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/pathfinderwhite.svg" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.css" rel="stylesheet" />
        {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.js" defer/>
        <Script src="../path/to/flowbite/dist/flowbite.min.js" defer/> */}
      </Head>
      <nav className=''>
          <ArticleNav/>
      </nav>
        <main className='contain min-h-screen'>
            <ArticleDesc/>
            <ResearchCard/>
        </main>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.js" defer/>
      <Script src="../path/to/flowbite/dist/flowbite.min.js" defer/>
    </>
  )
}

export default Search;
