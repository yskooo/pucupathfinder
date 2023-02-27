import { useState } from 'react';

function Dropdown({ options, label, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className="flex">
      <label htmlFor="dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        {label}
      </label>
      <button
        id="dropdown-button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
        type="button"
      >
        {selectedOption || 'All categories'}{' '}
        <svg
          aria-hidden="true"
          className={`w-4 h-4 ml-1 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        id="dropdown"
        className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${isOpen ? '' : 'hidden'}`}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
          {options.map((option) => (
            <li key={option}>
              <button
                type="button"
                className={`inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                  option === selectedOption ? 'bg-gray-100 dark:bg-gray-600 dark:text-white' : ''
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
