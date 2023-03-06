import Head from 'next/head';
import Navigation from '../components/subjects/Navigation'

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | PUCU Pathfinder</title>
      </Head>
      <Navigation/>
      <div className="container mx-auto my-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-4">PRIVACY POLICY</h1>
        <h2 className="text-xl font-bold mb-2">I. INTRO</h2>
        <p className="mb-4">PUCU Pathfinder provides an online repository for students and teachers to easily access various research studies through its website at (link), which is available on numerous devices.</p>
        <p className="mb-4">This Privacy Policy outlines our practices in collecting, recording, protecting, and managing data that you provide in our services.</p>
        <p className="mb-4">The mission of this online library is to help PUCU members navigate the world of research. It starts by improving openness and accessibility. Any person who uses the services of PUCU Pathfinder is considered a “User”. Users are prioritized and given access to the online library’s resources as well as publish their own academic works on the website.</p>
        <p className="mb-4">This privacy policy can be modified depending on legal, technological requirements and the website's capabilities. It will follow the Republic Act 10173 or the Data Privacy Act of 2012 (DPA) in protecting people’s rights by ensuring that personal information is always secured and protected.</p>
        <h2 className="text-xl font-bold mb-2">II. INFO YOU PROVIDE US</h2>
        <p className="mb-4">You can reach out to the researchers regarding displaying your academic studies through email. Rest assured that your works will be uploaded with the approval of the original researchers or teachers. With respect to their rights, the team can only upload the study if allowed by the owners and research advisers who shall also be properly acknowledged on the website.</p>
        <h2 className="text-xl font-bold mb-2">III. DATA AUTOMATICALLY COLLECTED</h2>
        <p className="mb-4">Data collected automatically includes technical information which is frequently collected across apps and websites in order to improve localization and functionality. The PUCU Pathfinder is designed to work with any HTML link to retrieve information from a web page.</p>
        <ul className="list-disc ml-8 mb-4">
          <li>Connected devices</li>
          <li>IP address</li>
          <li>location (with permission)</li>
          <li>Browser</li>
          <li>Language</li>
        </ul>
        <p className="mb-4">Information collected when contacting us such as your name, email or contact number shall be kept with the utmost confidentiality in accordance with the Privacy Act and for your protection.</p>
        <h2 className="text-xl font-bold mb-2">IV. HOW WE USE COLLECTED DATA</h2>
        <h3 className="font-bold mb-2">A. Educational purposes</h3>
        <ul className="list-disc ml-8 mb-4">
          <li>PUCU student assistance</li>
          <li>PUCU study records</li>
        </ul>
        <p className="mb-4">
        Through compiled resources from the school and users, PUCU Pathfinder
            can give access to many materials, some of which are really difficult to
            find. It will simplify data gathering for students and the process of
            teacher research more efficiently. As opposed to spending hours
            searching the internet, users can save time and energy in finding a guide
            for their own academic pursuits.
        </p>
        <p className="mt-4">
            Collected studies will be uploaded with permission and used for school
            only. They will be used to coordinate and keep track of the research done
            at the school.
          </p>
          <p className="mt-4">
            By using data that is automatically saved, such as emails, we apply the
            necessary security safeguards. On the website, every piece of information
            and every user-researcher interaction, suggestion, or comment will be
            encrypted and confidential.
          </p>
          <p className="mt-4">
            The data can be used to improve the service's quality. We can use it to
            contact you for your requests, suggestions, or concerns. It will help us
            gain a better understanding of how students use our services and how
            they can be improved.
          </p>
          <h2 className="text-2xl font-bold mt-8">Your Privacy Rights</h2>
          <p className="mt-4">
            When you visit our website, you have the right to ask us to correct or remove any
            personal information we have about you. If you wish to have your personal
            information deleted from our records, you have the right to request the deletion of
            such information. Additionally, if you have participated in a study on our website and
            wish to have your data removed, you may also exercise your right to request the
            deletion of the study. Please note that certain legal obligations may prevent us from
            immediately deleting all of your personal information, and we may need to retain
            certain information for legal or administrative purposes. Nonetheless, we will make
            reasonable efforts to fulfill your request in a timely and appropriate manner.
          </p>
</div>
</>
  )}
  export default PrivacyPolicy;