import React from 'react';
import { SimilarityBar } from './SimilarityBar';

type GuessListProps = {
  guesses: { word: string; score: number }[];
};

export function GuessList({ guesses }: GuessListProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
      {guesses.map((g, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '0.75rem',
            width: '100%',
            maxWidth: '300px',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ fontWeight: 500, flex: '1' }}>{g.word}</span>
          <SimilarityBar score={g.score} />
          <span style={{ fontSize: '0.85em', color: '#555', width: '35px', textAlign: 'right' }}>{g.score}%</span>
        </div>
      ))}
    </div>
  );
}