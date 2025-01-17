import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { LANGUAGE_DROPDOWN_ITEMS } from '../../constants/index';

function LanguageDropdown() {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const handleSelect = (languageKey: string) => {
    setSelectedLanguage(languageKey);
    setIsOpen(false); // Close the dropdown when a language is selected
  };

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        className="inline-flex items-center justify-center font-semibold text-white"
        onClick={() => setIsOpen(!isOpen)} // Toggle dropdown visibility on button click
      >
        {/* Replace FontAwesomeIcon with custom SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-globe-americas mr-1 text-xl"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
        </svg>
        {selectedLanguage}
        <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-sm" />
      </button>

      {/* Dropdown Items - Show when isOpen is true */}
      {isOpen && (
  <div className="absolute right-0 z-50 mt-2 w-32 rounded-md shadow-lg transition-opacity duration-300 ease-in-out" style={{ backgroundColor: 'rgba(0, 100, 0, 0.5)' }}>
    <ul className="py-1">
      {LANGUAGE_DROPDOWN_ITEMS.filter(
        (item) => item.key !== selectedLanguage,
      ).map((item) => (
        <li key={item.key}>
          <button
            onClick={() => handleSelect(item.key)}
            className="font-merriweather block w-full px-4 py-1.5 text-sm text-white bg-green-700 hover:bg-green-600 focus:outline-none"
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  </div>
)}

    </div>
  );
}
export default LanguageDropdown;
