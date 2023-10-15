import React, { useState } from 'react';

const ColorPicker = () => {
  const initialColors = [
    'red',
    'blue',
    'green',
    'yellow',
    'purple',
    'orange',
    'pink',
    'teal',
    'brown',
    'gray',
    'cyan',
    'magenta',
    'lime',
    'indigo',
    'violet',
    'turquoise',
    'black',
    'white',
  ];

  const [colors] = useState(initialColors);
  const [isColorListVisible, setColorListVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleColorList = () => {
    setColorListVisible((prevIsColorListVisible) => !prevIsColorListVisible);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setColorListVisible(false);
    document.body.style.backgroundColor = color;
  };

  return (
    <div className="color-picker" style={{marginTop:'300px'}} >
      
      {isColorListVisible && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
          
        </div>
      )}
      {selectedColor && (
        <p className="selected-color">Selected Color: {selectedColor}</p>
      )}<button onClick={toggleColorList}>Pick a color</button>
    </div>
  );
};

export default ColorPicker;