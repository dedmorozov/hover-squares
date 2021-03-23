import React, { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { Field } from './components/Field/Field';
import { loadModes } from './api/api';
import './App.scss';

export const App = () => {
  const [modesList, setModesList] = useState({});
  const [isStarted, setIsStarted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isColored, setIsColored] = useState(false);
  const [squaresCount, setSquaresCount] = useState(0);
  const [isModeSelected, setIsModeSelected] = useState(false);

  useEffect(async() => {
    const modes = await loadModes();

    setModesList(modes);
    setIsLoaded(!isLoaded);
  }, []);

  const handleStart = () => {
    setIsStarted(true);
  };

  const onChangeSelect = (e) => {
    const { value } = e.target;

    setIsModeSelected(true);
    setIsColored(false);
    setSquaresCount(+value);
  };

  return (
    <div className="container">
      <div className="App">
        {isLoaded ? (
          <>
            <Header
              modesList={modesList}
              handleStart={handleStart}
              isStarted={isStarted}
              onChangeSelect={onChangeSelect}
              isModeSelected={isModeSelected}
            />
            {isStarted
              && (
                <Field
                  squaresCount={squaresCount}
                  isColored={isColored}
                  setIsColored={setIsColored}
                />
              )}
          </>
        )
          : <p className="App__loading">Loading...</p>
        }
      </div>
    </div>
  );
};
