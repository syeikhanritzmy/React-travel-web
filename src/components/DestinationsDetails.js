import React from "react";

const DestinationsDetails = ({ title, text }) => {
  return (
    <div className="destinationsInfo__details ">
      <div className="destinationsInfo__details__head animation">{title}</div>
      <div className="destinationsInfo__details__text animation">{text}</div>
    </div>
  );
};

export default DestinationsDetails;
