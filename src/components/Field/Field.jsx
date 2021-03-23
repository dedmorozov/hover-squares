import React from 'react';
import PropTypes from 'prop-types';
import './Field.scss';

export const Field = ({
  squaresCount,
  hovered,
  setHovered,
}) => {
  const getSquares = (squaresAmount) => {
    const squares = [];

    for (let i = 1; i <= squaresAmount; i += 1) {
      squares.push(i);
    }

    return squares;
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

  if (hovered.length === 0) {
    document.querySelectorAll('.Field__square')
      .forEach((item) => {
        // eslint-disable-next-line no-param-reassign
        item.style.background = '';
      });
  }

  const squareStyle = {
    width: `calc(100% / ${squaresCount})`,
    height: `calc(400px / ${squaresCount})`,
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
  hovered: PropTypes.arrayOf(PropTypes.array).isRequired,
  setHovered: PropTypes.func.isRequired,
};
