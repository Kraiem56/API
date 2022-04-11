import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import QuotesList from './../Quotes/QuotesList';
import SearchQuotes from './../Quotes/SearchQuotes';
import Heading from './../Episodes/Heading';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const getQuotes = async () => {
      try {
        const res = await Axios.get("https://www.breakingbadapi.com/api/quotes");
        const quotesData = res.data;
        setQuotes(quotesData);
      } catch (err) {
        console.log(err.message);
      }
    };
    getQuotes();
  }, []);

  return (
    <div>
      <Heading title="Quotes" />
          <SearchQuotes searchText={searchText} setSearchText={setSearchText} />
          <QuotesList quotes={quotes.filter(el=>el.author.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))} />
    </div>
  );
};

export default Quotes;
