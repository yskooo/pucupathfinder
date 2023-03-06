import Head from 'next/head';
import Navigation from '../components/subjects/Navigation'
const Terms = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions</title>
        <meta name="description" content="Terms and Conditions for accessing our online library of research studies." />
      </Head>
      <Navigation/>
      <div className="container text-lg mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
        <p className="mb-4">
          By accessing our online library of research studies, you agree to comply with the following terms and conditions:
        </p>
        <ul className="list-disc mb-4">
          <li>
            <span class="font-bold"> Proper Citations and References: <br /></span>All users are required to provide accurate and appropriate citations and references when using the research studies for academic or professional purposes.
          </li>
          <li>
            <span class="font-bold">Privacy and Confidentiality: <br /></span>All users must respect the privacy and confidentiality of any personal information contained in the research studies.
          </li>
          <li>
             <span class="font-bold">Commercial and Illegal Use: <br /></span>The research studies are strictly for professional and academic use only. Any commercial or illegal use is strictly prohibited.
          </li>
          <li>
            <span class="font-bold">Modification and Alteration:<br /></span> The users are prohibited from modifying, manipulating, or altering the research studies in any way without prior written permission from the library management.
          </li>
        </ul>
        <p className="mb-4">
          We take the violation of these terms and conditions very seriously, and any offenders will face appropriate legal action. The library management reserves the right to remove any research study from our online library without prior notice or explanation.
        </p>
        <p className="mb-4">
          Please note that the library is not liable for any consequences arising from the use or misuse of the research studies. We request all users to use the resources for academic and professional purposes only and to respect the intellectual property rights of the authors.
        </p>
        <p className="mb-4">
          We welcome all individuals to access our online library of research studies, which is intended to serve as a valuable resource for professional and academic use only. We encourage all users to make the best use of these resources while respecting the terms and conditions outlined above. Thank you for your cooperation!
        </p>
      </div>
    </>
  );
}
export default Terms;