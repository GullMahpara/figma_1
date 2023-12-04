
import React from 'react';

const Button = () => {
  const gradientStyle = {
    background:
      "linear-gradient(to right, rgba(87, 0, 123, 1),rgba(102, 117, 247, 1))",
    // Adjust the colors and gradient direction as needed
  };

  return (
    <button style={gradientStyle} className="h-12 rounded-md text-white font-bold px-5">
      Gradient Button
    </button>
  );
};

export default Button;
