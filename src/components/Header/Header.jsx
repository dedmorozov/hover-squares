/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

export const Header = ({
  modesList,
  handleStart,
  isStarted,
  onChangeSelect,
  isModeSelected,
}) => {
  const { easyMode, normalMode, hardMode } = modesList;

  return (
    <div className="App__header header">
      <select className="header__select" onChange={onChangeSelect}>
        <option hidden>Pick mode</option>
        <option value={easyMode.field}>
          Easy mode
        </option>
        <option value={normalMode.field}>
          Normal mode
        </option>
        <option value={hardMode.field}>
          Hard mode
        </option>
      </select>

      <button
        className="header__button"
        type="button"
        onClick={handleStart}
        disabled={!isModeSelected || isStarted}
      >
        {!isModeSelected ? 'Choose mode' : !isStarted ? 'Start' : 'Have fun'}
      </button>
    </div>
  );
};

Header.propTypes = {
  modesList: PropTypes.objectOf(PropTypes.object),
  handleStart: PropTypes.func.isRequired,
  isStarted: PropTypes.bool.isRequired,
  onChangeSelect: PropTypes.func.isRequired,
  isModeSelected: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  modesList: {},
};
