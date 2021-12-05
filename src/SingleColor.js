import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';
const SingleColor = ({ rgb, weight, index, hex, btw }) => {
  //console.log(hex);
  const [alert, setAlert] = useState(false);
  const bgc = rgb.join(',');
  const hexColors = rgbToHex(...rgb);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [alert]);
  return (
    <article
      className={`color ${index > btw && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bgc})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexColors);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexColors}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
