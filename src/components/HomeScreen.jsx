import React from 'react';
import { FaBrain, FaStar, FaTrophy, FaGamepad, FaLightbulb } from 'react-icons/fa';
import { getTotalLevels } from '../data/levels';

function HomeScreen({ onStart, progress }) {
  const totalLevels = getTotalLevels();
  const completedCount = Object.keys(progress.completedLevels).length;
  const maxStars = totalLevels * 3;
  const progressPercent = Math.round((completedCount / totalLevels) * 100);

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Logo with glow effect */}
      <div className="mb-6 relative">
        <div className="absolute inset-0 bg-indigo-500/30 rounded-full blur-2xl scale-150"></div>
        <div className="relative w-28 h-28 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce-slow">
          <FaBrain className="text-5xl text-white drop-shadow-lg" />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
        Otaku
      </h1>
      <div className="flex items-center gap-2 mb-6">
        <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-xs font-bold text-white shadow-md">
          Asah Otak Indonesia
        </span>
      </div>

      {/* Stats Cards */}
      <div className="flex gap-4 mb-8 w-full max-w-xs">
        <div className="flex-1 bg-gradient-to-br from-yellow-500/20 to-amber-500/10 backdrop-blur-sm rounded-2xl p-4 border border-yellow-500/30">
          <FaStar className="text-yellow-400 text-2xl mx-auto mb-2" />
          <div className="text-2xl font-bold text-yellow-400">{progress.totalStars}</div>
          <div className="text-xs text-yellow-400/70">dari {maxStars}</div>
        </div>
        
        <div className="flex-1 bg-gradient-to-br from-green-500/20 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-4 border border-green-500/30">
          <FaTrophy className="text-green-400 text-2xl mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-400">{completedCount}</div>
          <div className="text-xs text-green-400/70">dari {totalLevels} level</div>
        </div>
      </div>

      {/* Progress Bar */}
      {completedCount > 0 && (
        <div className="w-full max-w-xs mb-8">
          <div className="flex justify-between text-xs text-white/60 mb-2">
            <span>Progress</span>
            <span>{progressPercent}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}

      {/* Start Button */}
      <button 
        onClick={onStart}
        className="group relative px-10 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl font-bold text-lg text-white shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 overflow-hidden"
      >
        <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
        <span className="relative flex items-center gap-3">
          <FaGamepad className="text-xl" />
          Mulai Main
        </span>
      </button>

      {/* Features */}
      <div className="mt-8 flex flex-wrap justify-center gap-3 max-w-sm">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full text-xs text-white/60">
          <span>🧠</span> 20 Level
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full text-xs text-white/60">
          <span>🎯</span> Puzzle Unik
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full text-xs text-white/60">
          <span>💡</span> Hint System
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
