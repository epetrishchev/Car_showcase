'use client';

import { useState } from "react";
import { SearchManufacter } from "./";

const SearchBar = () => {
  const [manufacturer, setManufacterer] = useState('');
  const handleSearch = () => { };
  return (
    <form
      action=""
      className="searchbar"
      onSubmit={handleSearch}
    >
      <div className="searchbar__item">
        <SearchManufacter
          manufacterer={manufacturer}
          setManufacterer={setManufacterer}
        />

      </div>
    </form>
  )
}

export default SearchBar