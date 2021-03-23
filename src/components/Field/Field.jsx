/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Field.scss';

export const Field = ({ squaresCount }) => {
  const [hovered, setHovered] = useState([]);

  const getSquares = (squaresAmount) => {
    const squares = [];

    for (let i = 1; i <= squaresAmount; i += 1) {
      squares.push(i);
    }

    return squares;
  };

  const squareStyle = {
    width: `calc(100% / ${squaresCount})`,
    height: `calc(400px / ${squaresCount})`,
  };

  const handleHover = (e) => {
    const {
      style,
      parentElement,
      cellIndex,
    } = e.target;

    const row = parentElement.rowIndex + 1;
    const col = cellIndex + 1;

    if (style.background === '') {
      style.background = 'blue';

      setHovered([...hovered, [row, col]]);
    } else {
      style.background = '';

      setHovered(hovered
        .splice((hovered
          .findIndex(item => item === [row, col]), 1)));
    }
  };

  return (
    <section className="App__Field Field">
      <table className="Field__squares">
        <tbody>
          {getSquares(squaresCount).map(row => (
            <tr key={row}>
              {getSquares(squaresCount).map(col => (
                <td
                  key={`${row}, ${col}`}
                  className="Field__square"
                  style={squareStyle}
                  onMouseOver={handleHover}
                  onFocus={handleHover}
                >
                  {' '}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {hovered.length > 0
      && (
        <ul className="Field__hovered hovered">
          {hovered.map(([row, col]) => (
            <li key={[row, col]} className="hovered__item">
              {`row ${row} col ${col}`}
            </li>
          ))}
        </ul>
      )
      }
    </section>
  );
};

Field.propTypes = {
  squaresCount: PropTypes.number.isRequired,
};
