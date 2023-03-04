import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Warning = () => {
  const router = useRouter();

    function handleGoBack() {
        router.back();
    }

  useEffect(() => {
    const modal = document.getElementById('modalID');
    const showButtons = document.querySelectorAll('[data-modal-show]');
    const hideButtons = document.querySelectorAll('[data-modal-hide]');
    const toggleButtons = document.querySelectorAll('[data-modal-toggle]');

    // Show the modal when a button with data-modal-show="modalID" is clicked
    showButtons.forEach((button) => {
      button.addEventListener('click', () => {
        modal.classList.remove('hidden');
        modal.setAttribute('aria-hidden', 'false');
      });
    });

    // Hide the modal when a button with data-modal-hide="modalID" is clicked
    hideButtons.forEach((button) => {
      button.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
      });
    });

    // Toggle the modal when a button with data-modal-toggle="modalID" is clicked
    toggleButtons.forEach((button) => {
      button.addEventListener('click', () => {
        modal.classList.toggle('hidden');
        modal.getAttribute('aria-hidden') === 'true'
          ? modal.setAttribute('aria-hidden', 'false')
          : modal.setAttribute('aria-hidden', 'true');
      });
    });
  }, []);

  return (
    <>
       <a
        data-modal-target="modalID"
        data-modal-show="modalID"
        data-modal-hide="modalID"
        data-modal-toggle="modalID"
        className="mx-auto pointer hover:underline"
        type="button"
      >
        Terms &amp; Conditions
      </a> 

      <div
        id="modalID"
        className="hidden pt-2 fixed top-0 left-0 right-0 z-50 w-screen overflow-x-hidden overflow-y-auto md:inset-0  md:h-full"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="relative w-full h-full max-w-2xl md:h-auto mx-auto flex justify-center selection:items-center">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-center p-4 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white">
                    Terms and Conditions
                </h3>
                {/* <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="modalID">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">hide modal</span>
                </button> */}
            </div>
            <div class="p-6 space-y-6 text-gray-600">
            {/* <h1 className='font-md text-lg'>Welcome to our online library of research studies! Before accessing our resources, please carefully read and understand our terms and conditions:</h1> */}

                <p class="text-base leading-relaxed">
<span class="font-bold">Proper Citations and References:</span> All users are required to provide accurate and appropriate citations and references when using the research studies for academic or professional purposes.
<br />
<span class="font-bold">Privacy and Confidentiality:</span> All users must respect the privacy and confidentiality of any personal information contained in the research studies.
<br />
<span class="font-bold">Commercial and Illegal Use:</span> The research studies are strictly for professional and academic use only. Any commercial or illegal use is strictly prohibited.
<br />
<span class="font-bold">Modification and Alteration:</span> The users are prohibited from modifying, manipulating, or altering the research studies in any way without prior written permission from the library management.
<br /> <br />
We take the violation of these terms and conditions very seriously, and any offenders will face appropriate legal action. The library management reserves the right to remove any research study from our online library without prior notice or explanation.
<br /> <br />
By accessing our online library of research studies, you agree to comply with the above terms and conditions. Please note that the library is not liable for any consequences arising from the use or misuse of the research studies. We request all users to use the resources for academic and professional purposes only and to respect the intellectual property rights of the authors.
<br /> <br />
We welcome all individuals to access our online library of research studies, which is intended to serve as a valuable resource for professional and academic use only. We encourage all users to make the best use of these resources while respecting the terms and conditions outlined above. Thank you for your cooperation!
                </p>
            </div>
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="modalID" type="button" class="text-white bg-green-700 hover:bg-[#D3B306] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-hide="modalID" onClick={handleGoBack} type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
            </div>
        </div>
    </div>
</div>
</>
)}
export default Warning;
