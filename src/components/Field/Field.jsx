/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import './Field.scss';

export const Field = ({ squaresCount, setIsColored }) => {
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
    const { style } = e.target;

    console.log(
      `row ${e.target.parentElement.rowIndex + 1}`,
      `col ${e.target.cellIndex + 1}`,
    );
    setIsColored(true);
    style.background = style.background === '' ? 'blue' : '';
  };

  return (
    <>
      <table className="App__Field Field">
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
    </>
  );
};

Field.propTypes = {
  squaresCount: PropTypes.number.isRequired,
  setIsColored: PropTypes.func.isRequired,
};
