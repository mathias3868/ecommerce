/* eslint-disable react/prop-types */

// import React from "react";
import { useState } from "react";
import Star from "../assets/icons/Star";

const mainStyle = {
  display: "flex",
  alignItems: "center",
  gap: "70px",
};

const starStyle = {
  display: "flex",
  alignItems: "center",
  gap: "3px",
};

const StarRate = ({
  starRate = 5,
  color = "#fcc419",
  size = `${30}px`,
  className = "",
  message = [],
  defaultRate = 0,
  onSetMovieRate = 0,
}) => {
  const textStyle = {
    fontSize: `${size}px`,
    color,
  };
  const [rating, setRating] = useState(defaultRate);
  const [tempRating, setTempRating] = useState(0);

  function handleRate(rating) {
    setRating(rating);
    onSetMovieRate(rating);
  }
  return (
    <div style={mainStyle} className={className}>
      <div style={starStyle}>
        {Array.from({ length: starRate }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRate(i + 1)}
            // onHoverin={() => setTempRating(i + 1)}
            // onHoverout={() => setTempRating(0)}
            color={color}
            fontSize={size}
          />
        ))}
      </div>
      {/* <p style={textStyle}>
        {message.length === starRate
          ? message[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p> */}
    </div>
  );
};

export default StarRate;
