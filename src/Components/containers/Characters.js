import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterList from './../Characters/CharacterList';
import SearchCharacters from './../Characters/SearchCharacters';
import Heading from './../Episodes/Heading';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const getCharacters = async () => {
      try {
        const res = await Axios.get("https://www.breakingbadapi.com/api/characters");
        const charactersData = res.data;
        setCharacters(charactersData);
      } catch (err) {
        console.log(err.message);
      }
    };
    getCharacters();
  }, []);
 
  return (
    <div className="characters">
      <Heading title="Characters" />
          <SearchCharacters
            searchText={searchText}
            setSearchText={setSearchText}
          />
          <CharacterList characters={characters.filter(el=>el.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))} />
    </div>
  );
};

export default Characters;
