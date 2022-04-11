import React from "react";

const Episode = ({ episodeData }) => {
  

  const { title, air_date, characters, episode } = episodeData;
  return (
    <div className="episode">
      <div className="episode-number">
        <span>Episode</span>
        <span>{episode}</span>
      </div>
      <div className="episode-details">
        <div className="episode-detail-group">
          <span className="episode-detail-title">Episode Title:</span>
          <span className="episode-detail-data">{title}</span>
        </div>
        <div className="episode-detail-group">
          <span className="episode-detail-title">Air Date:</span>
          <span className="episode-detail-data">{air_date}</span>
        </div>
        <div className="episode-detail-group">
          <span className="episode-detail-title">Characters:</span>
          <span className="episode-detail-data">{characters.join(" , ")}</span>
        </div>
      </div>
    </div>
  );
};

export default Episode;
