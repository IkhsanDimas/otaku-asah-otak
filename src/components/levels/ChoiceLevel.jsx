import React from 'react';

function ChoiceLevel({ level, onAnswer, isCorrect }) {
  const handleChoice = (choice) => {
    if (isCorrect) return;
    onAnswer(choice.correct);
  };

  return (
    <div className="flex flex-col gap-2 sm:gap-3">
      {level.choices.map((choice, index) => (
        <button
          key={choice.id}
          onClick={() => handleChoice(choice)}
          className="w-full p-3 sm:p-4 bg-white/10 rounded-xl text-left hover:bg-white/20 transition-all transform hover:scale-[1.02] active:scale-[0.98] border border-white/10 hover:border-indigo-400"
          disabled={isCorrect}
        >
          <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-indigo-500/30 text-indigo-300 font-bold mr-2 sm:mr-3 text-sm sm:text-base">
            {String.fromCharCode(65 + index)}
          </span>
          <span className="text-sm sm:text-base">{choice.text}</span>
        </button>
      ))}
    </div>
  );
}

export default ChoiceLevel;
