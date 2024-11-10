import "./SearchBar.css";
import { useState } from "react";

const SearchBar = () => {
  const [songName, setSongName] = useState("");
  const onChangeSongName = (event) => {
    setSongName(event.target.value);
  };
  console.log(songName);
  return (
    <>
      <input className="search-bar" placeholder="What do you want to play?" onChange={onChangeSongName} />
    </>
  );
};

export default SearchBar;
