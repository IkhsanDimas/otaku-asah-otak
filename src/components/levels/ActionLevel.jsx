import React, { useState } from 'react';

function ActionLevel({ level, onAnswer, isCorrect }) {
  const [equation, setEquation] = useState(level.equation);
  const [lineAdded, setLineAdded] = useState(false);

  const handleAddLine = (index) => {
    if (isCorrect || lineAdded) return;
    
    // For level 19: 5 + 5 + 5 = 550
    // Solution: Add line to first + to make it look like 545 + 5 = 550
    // The trick is to tap on the first + sign
    
    if (index === 2) { // Position of first + sign
      setEquation('545 + 5 = 550');
      setLineAdded(true);
      setTimeout(() => {
        onAnswer(true);
      }, 500);
    } else {
      onAnswer(false);
    }
  };

  const renderEquation = () => {
    const chars = equation.split('');
    
    return (
      <div className="flex flex-wrap justify-center items-center gap-2 text-4xl font-bold">
        {chars.map((char, index) => (
          <span
            key={index}
            onClick={() => handleAddLine(index)}
            className={`
              px-2 py-1 rounded cursor-pointer transition-all
              ${char === '+' || char === '=' ? 'hover:bg-indigo-500/30 text-indigo-300' : ''}
              ${char === ' ' ? 'w-2' : ''}
            `}
          >
            {char}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-center text-white/60">{level.instruction}</p>
      
      <div className="card p-8">
        {renderEquation()}
      </div>
      
      {!lineAdded && (
        <p className="text-sm text-white/50 text-center">
          Tap pada posisi yang tepat untuk menambahkan garis
        </p>
      )}
      
      {lineAdded && (
        <div className="text-green-400 font-bold animate-pop">
          ✓ Garis ditambahkan!
        </div>
      )}
    </div>
  );
}

export default ActionLevel;
