import React, { useState } from 'react';

function TapLevel({ level, onAnswer, isCorrect }) {
  const [tapCounts, setTapCounts] = useState({});
  const [foundHidden, setFoundHidden] = useState(false);

  const handleTap = (item) => {
    if (isCorrect) return;

    // Handle hidden item discovery
    if (item.hidden && !foundHidden) {
      setFoundHidden(true);
      return;
    }

    // Handle tap count items (like level 12)
    if (item.tapCount) {
      const newCount = (tapCounts[item.id] || 0) + 1;
      setTapCounts(prev => ({ ...prev, [item.id]: newCount }));
      
      if (newCount >= item.tapCount) {
        onAnswer(item.correct || item.isTextTrick);
      }
      return;
    }

    // Handle solution items (like level 17 - tap sun to light all)
    if (item.isSolution) {
      onAnswer(true);
      return;
    }

    // Handle text trick (level 3)
    if (item.isText && item.correct) {
      onAnswer(true);
      return;
    }

    // Normal tap
    onAnswer(item.correct);
  };

  const renderItem = (item) => {
    const count = tapCounts[item.id] || 0;
    
    // Hidden items
    if (item.hidden && !foundHidden) {
      return (
        <div
          key={item.id}
          onClick={() => handleTap(item)}
          className="absolute -bottom-4 -right-4 w-12 h-12 bg-white/5 rounded-full cursor-pointer"
        />
      );
    }

    // Text items (for trick questions)
    if (item.isText) {
      return (
        <button
          key={item.id}
          onClick={() => handleTap(item)}
          className="text-xl sm:text-2xl font-bold text-indigo-300 hover:text-indigo-100 transition-colors cursor-pointer underline"
        >
          {item.label}
        </button>
      );
    }

    // Color button items (level 12)
    if (item.color) {
      const colorClasses = {
        red: 'bg-red-500',
        green: 'bg-green-500',
        blue: 'bg-blue-500',
        orange: 'bg-orange-500'
      };
      
      return (
        <button
          key={item.id}
          onClick={() => handleTap(item)}
          className={`${colorClasses[item.color]} px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold text-white text-sm sm:text-base transform transition-all hover:scale-105 active:scale-95`}
        >
          {item.label}
          {item.tapCount && count > 0 && (
            <span className="ml-1 sm:ml-2 text-xs sm:text-sm opacity-70">({count}/{item.tapCount})</span>
          )}
        </button>
      );
    }

    // Emoji items
    return (
      <button
        key={item.id}
        onClick={() => handleTap(item)}
        className="flex flex-col items-center p-3 sm:p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all transform hover:scale-110 active:scale-95"
        style={{ fontSize: Math.min(item.size || 40, 32) }}
      >
        <span className="sm:text-[40px]" style={{ fontSize: 'inherit' }}>{item.emoji}</span>
        <span className="text-xs sm:text-sm mt-1 sm:mt-2 text-white/70">{item.label}</span>
      </button>
    );
  };

  return (
    <div className="relative">
      {level.instruction && (
        <p className="text-center text-white/60 mb-3 sm:mb-4 text-sm sm:text-base">{level.instruction}</p>
      )}
      
      <div className="flex flex-wrap gap-2 sm:gap-4 justify-center items-center">
        {level.items.map(renderItem)}
      </div>
    </div>
  );
}

export default TapLevel;
