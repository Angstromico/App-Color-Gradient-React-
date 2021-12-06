import React, { useState } from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';

const options = [4, 11, 21, 41, 51, 101, 201];

function App() {
  const [color, setColor] = useState('#FF6F61');
  const [error, setError] = useState(false);
  const [gradientNumber, setGradientNumber] = useState(20);
  const [blackWhite, setBlackWhite] = useState(5);
  const [list, setList] = useState(new Values(color).all(gradientNumber));
  const [liStyles, setLiStyles] = useState(false);
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  const year = new Date().getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();
    let colors = new Values(color).all(gradientNumber);
    setList(colors);
    setError(false);
  };
  const randomColor = () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomN()];
    }

    let colors = new Values(hexColor).all(gradientNumber);
    setColor(hexColor);

    setList(colors);
    setError(false);
  };
  function getRandomN() {
    return Math.floor(Math.random() * hex.length);
  }
  const backgroundDark = (e) => {
    e.target.style.backgroundColor = '#cc594e';
  };
  const backgroundNormal = (e) => {
    e.target.style.backgroundColor = '#FF6F61';
  };
  const pickLiNumber = (e) => {
    const targeting = e.target.value;

    const weight = Math.round(200 / targeting);
    const bw = targeting / 2;

    console.log('pick', color);

    setBlackWhite(bw);
    setList(new Values(color).all(weight));
    setGradientNumber(weight);
  };
  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#34568B"
            className={`${error ? 'error' : 'success'}`}
          />
          <button className="btn" type="submit">
            Chose Color
          </button>
        </form>
      </section>

      <div className="picker">
        <ul name="select" id="select" className="pick-number">
          <li
            disabled
            onClick={() => (!liStyles ? setLiStyles(true) : setLiStyles(false))}
            className="first-li"
          >
            --Select a Quantity of Examples--
          </li>

          {options.map((count) => (
            <li
              key={count}
              value={count}
              className={`option-center ${liStyles ? 'liStyles' : ''}`}
              onMouseOver={backgroundDark}
              onMouseOut={backgroundNormal}
              onClick={pickLiNumber}
            >
              {count}
            </li>
          ))}
        </ul>
        <button className="btn" onClick={randomColor}>
          Get Random Color
        </button>
      </div>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hex={color.hex}
              btw={blackWhite}
            />
          );
        })}
      </section>
      <footer className="footer">
        <p>{`Manuel Morales Web Developer All the Rights Reserved ${year}`}</p>
      </footer>
    </>
  );
}

export default App;
