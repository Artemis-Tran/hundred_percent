import React, { useState, FormEvent } from 'react';

type GuessInputProps = {
  onSubmit: (guess: string) => void;
};

export function GuessInput({ onSubmit }: GuessInputProps) {
  const [guess, setGuess] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (guess.trim()) {
      onSubmit(guess.trim());
      setGuess('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', marginTop: '1rem' }}>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess..."
        style={{ flex: 1, padding: '8px', fontSize: '16px' }}
      />
      <button type="submit" style={{ padding: '8px 16px' }}>Submit</button>
    </form>
  );
}