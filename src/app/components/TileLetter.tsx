import React from 'react';

type TileLetterProps = {
  letter: string;
  isSelected?: boolean;
  onClick?: () => void;
};

export default function TileLetter({ letter, isSelected = false, onClick }: TileLetterProps) {
  return (
    <div
      className={`tile-letter ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        border: '2px solid black',
        borderRadius: '4px',
        backgroundColor: isSelected ? '#d3e5ff' : '#fff',
        fontSize: '20px',
        fontWeight: 'bold',
        cursor: 'pointer',
        userSelect: 'none',
        margin: '4px',
      }}
    >
      {letter.toUpperCase()}
    </div>
  );
}
