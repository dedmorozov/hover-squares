import React, { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { Field } from './components/Field/Field';
import { loadModes } from './api/api';
import './App.scss';

export const App = () => {
  const [modesList, setModesList] = useState({});
  const [isStarted, setIsStarted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [squaresCount, setSquaresCount] = useState(0);
  const [isModeSelected, setIsModeSelected] = useState(false);
  const [hovered, setHovered] = useState([]);

  useEffect(async() => {
    const modes = await loadModes();

    setModesList(modes);
    setIsLoaded(true);
  }, []);

  const handleStart = () => {
    setIsStarted(true);
  };

  const onChangeSelect = (e) => {
    const { value } = e.target;

    setHovered([]);
    setIsModeSelected(true);
    setSquaresCount(+value);
  };

  return (
    <main className="container">
      <section className="App">
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
                  hovered={hovered}
                  setHovered={setHovered}
                />
              )}
          </>
        )
          : <p className="App__loading">Loading...</p>
        }
      </section>
    </main>
  );
};
