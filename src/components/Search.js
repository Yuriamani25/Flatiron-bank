import React from 'react'
import {FiSearch} from "react-icons/fi";

function Search({searchTerm, setSearchTerm}) {
  return (
    <div className="search">
      <input
        id="search-input"
        type="text"
        placeholder="Search your Recent Transcations"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <span className='search-icon'>
        <FiSearch />
      </span>
    </div>
  );
}

export default Search