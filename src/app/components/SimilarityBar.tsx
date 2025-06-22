import React from 'react';
import './SimilarityBar.css';

type SimilarityBarProps = {
  score: number;
};

export function SimilarityBar({ score }: SimilarityBarProps) {
  let color = 'red';
  if (score > 80) color = 'green';
  else if (score > 50) color = 'orange';

  return (
    <div className="similarity-bar">
      <div
        className="similarity-fill"
        style={{ width: `${score}%`, backgroundColor: color }}
      />
    </div>
  );
}