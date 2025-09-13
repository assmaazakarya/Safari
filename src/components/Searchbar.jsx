import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="bg-transparent border rounded-xl p-4 flex items-center my-6">
      <FaSearch className="text-gray-400 mr-3" />
      <input
        type="text"
        placeholder="Search..."
        className="flex-grow focus:outline-none text-gray-700"
      />
    </div>
  );
};

export default SearchBar;