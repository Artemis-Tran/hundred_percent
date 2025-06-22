'use client';

import React, { useState, useEffect } from 'react';
import { GuessInput } from '../components/GuessInput';
import { GuessList } from '../components/GuessList';

function cosineSimilarity(a: number[], b: number[]): number {
  const dot = a.reduce((sum, ai, i) => sum + ai * b[i], 0);
  const normA = Math.sqrt(a.reduce((sum, ai) => sum + ai * ai, 0));
  const normB = Math.sqrt(b.reduce((sum, bi) => sum + bi * bi, 0));
  return dot / (normA * normB);
}

export default function GameRoom() {
    const target = 'tree'; // TODO: randomize or sync via Firebase
    const [guesses, setGuesses] = useState<{ word: string; score: number }[]>([]);
    const [embeddings, setEmbeddings] = useState<Record<string, number[]> | null>(null);
    
    useEffect(() => {
        fetch('/embeddings.json')
            .then((res) => res.json())
            .then(setEmbeddings);
    }, []);

  const handleGuess = (guess: string) => {
    if (!embeddings || !embeddings[guess.toLowerCase()] || !embeddings[target]) {
        console.warn("Missing embedding for guess or target");
        return;
    }

    const guessVec = embeddings[guess.toLowerCase()];
    const sim = cosineSimilarity(guessVec, embeddings[target]);
    const score = Math.round(sim * 100);

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