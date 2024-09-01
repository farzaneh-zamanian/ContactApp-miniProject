import React from "react";
import styles from "./SearchBox.module.css";
import { IoIosSearch } from "react-icons/io";

function SearchBox({search, setSearch,searchHandler}) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="search name or family"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button onClick={searchHandler}>
        <IoIosSearch fontSize="2rem" />
      </button>
    </div>
  );
}

export default SearchBox;
