import { FC, useState, FormEvent, ChangeEvent } from "react";
import { SearchBarProps } from "../../services/interfaces";
import s from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
  };
  return (
    <header className={s.header}>
      <form className={s.searchBar} onSubmit={handleSubmit}>
        <button className={s.searchButton}>
          <FaSearch className={s.searchIcon} />
        </button>
        <input
          className={s.searchInput}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value);
          }}
          value={value}
          type="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos..."
        />
      </form>
    </header>
  );
};

export default SearchBar;
