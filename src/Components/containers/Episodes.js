import React, { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import Heading from './../Episodes/Heading';
import EpisodesList from './../Episodes/EpisodesList';


const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        
        const res = await Axios.get("https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad");
        const episodesData = res.data;
        setEpisodes(episodesData);
      } catch (err) {
        console.log(err.message);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <Heading title="Episodes" />
      <EpisodesList episodes={episodes} />
    </div>
  );
};

export default Episodes;
