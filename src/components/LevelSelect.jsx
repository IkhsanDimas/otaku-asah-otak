import React from 'react';
import { FaArrowLeft, FaStar, FaLock, FaRedo } from 'react-icons/fa';
import { levels } from '../data/levels';

function LevelSelect({ progress, onSelectLevel, onBack, onReset }) {
  const renderStars = (levelId) => {
    const stars = progress.completedLevels[levelId] || 0;
    return (
      <div className="flex gap-1 mt-2">
        {[1, 2, 3].map(i => (
          <FaStar 
            key={i} 
            className={`text-sm ${i <= stars ? 'text-yellow-400' : 'text-white/20'}`}
          />
        ))}
      </div>
    );
  };

  const getDifficultyLabel = (difficulty) => {
    const labels = {
      1: { text: 'Mudah', color: 'bg-green-500' },
      2: { text: 'Sedang', color: 'bg-yellow-500' },
      3: { text: 'Sulit', color: 'bg-orange-500' },
      4: { text: 'Expert', color: 'bg-red-500' }
    };
    return labels[difficulty] || labels[1];
  };

  return (
    <div className="flex-1 flex flex-col p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={onBack}
          className="btn-secondary flex items-center gap-2"
        >
          <FaArrowLeft /> Kembali
        </button>
        
        <h2 className="text-xl font-bold">Pilih Level</h2>
        
        <button 
          onClick={onReset}
          className="btn-secondary flex items-center gap-2 text-red-400"
        >
          <FaRedo />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="card p-4 mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-white/70">Progress</span>
          <span className="text-indigo-400 font-medium">
            {Object.keys(progress.completedLevels).length} / {levels.length} Level
          </span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
            style={{ width: `${(Object.keys(progress.completedLevels).length / levels.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Level Grid */}
      <div className="grid grid-cols-4 gap-3 overflow-y-auto pb-20">
        {levels.map(level => {
          const isUnlocked = level.id <= progress.unlockedLevel;
          const isCompleted = progress.completedLevels[level.id];
          const difficulty = getDifficultyLabel(level.difficulty);

          return (
            <button
              key={level.id}
              onClick={() => isUnlocked && onSelectLevel(level.id)}
              disabled={!isUnlocked}
              className={`
                level-card flex flex-col items-center
                ${isCompleted ? 'completed' : ''}
                ${!isUnlocked ? 'locked' : ''}
              `}
            >
              {/* Level Number */}
              <span className="text-2xl font-bold mb-1">
                {isUnlocked ? level.id : <FaLock className="text-lg" />}
              </span>

              {/* Difficulty Badge */}
              {isUnlocked && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${difficulty.color} text-white`}>
                  {difficulty.text}
                </span>
              )}

              {/* Stars */}
              {isUnlocked && renderStars(level.id)}
            </button>
          );
        })}
      </div>

      {/* Stats Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-4">
        <div className="card p-3 flex justify-around text-center">
          <div>
            <div className="flex items-center justify-center gap-1 text-yellow-400">
              <FaStar />
              <span className="font-bold">{progress.totalStars}</span>
            </div>
            <p className="text-xs text-white/50">Total Bintang</p>
          </div>
          <div className="w-px bg-white/20" />
          <div>
            <span className="font-bold text-indigo-400">{progress.hintsUsed}</span>
            <p className="text-xs text-white/50">Hint Dipakai</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LevelSelect;
