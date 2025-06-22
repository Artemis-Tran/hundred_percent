'use client';

import React, { useState } from 'react';
import { GuessInput } from '../components/GuessInput';
import { GuessList } from '../components/GuessList';

export default function GameRoom() {
  const target = 'tree'; // TODO: randomize or sync via Firebase
  const [guesses, setGuesses] = useState<{ word: string; score: number }[]>([]);

  const handleGuess = async (guess: string) => {
    const res = await fetch(`https://api.datamuse.com/words?ml=${guess}`);
    const data = await res.json();
    const score = data.some((w: any) => w.word === target) ? 100 : Math.floor(Math.random() * 100); // temp logic
    setGuesses((prev) => [...prev, { word: guess, score }]);
  };

  return (
    <div style={{ maxWidth: 500, margin: '0 auto', textAlign: 'center', padding: '1rem' }}>
        <h1>🧠 100 Percent!</h1>
        <GuessInput onSubmit={handleGuess} />
        <GuessList guesses={guesses} />
        </div>
  );
}