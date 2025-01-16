import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { LANGUAGE_DROPDOWN_ITEMS } from '../../constants/index';

function LanguageDropdown() {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const handleSelect = (languageKey: string) => {
    setSelectedLanguage(languageKey);
  };

  return (
    <div className="group relative">
      {/* Dropdown Button */}
      <button className="inline-flex items-center justify-center rounded-full bg-primary px-2 py-1 text-sm font-semibold text-white transition-colors hover:bg-[#bb0a0a]">
        <FontAwesomeIcon icon={faGlobe} className="mr-1 text-xl" />{' '}
        {/* Decreased size and reduced margin */}
        {selectedLanguage}
        <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-sm" />{' '}
        {/* Reduced margin and size */}
      </button>

      {/* Dropdown Items - Show on hover */}
      <div className="absolute right-0 z-50 mt-2 w-40 rounded-md bg-gray-200 opacity-0 shadow-lg transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        <ul className="py-1">
          {LANGUAGE_DROPDOWN_ITEMS.filter(
            (item) => item.key !== selectedLanguage,
          ).map((item) => (
            <li key={item.key}>
              <button
                onClick={() => handleSelect(item.key)}
                className="font-merriweather block w-full px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LanguageDropdown;
