import React from 'react';
import { FaStar, FaRedo, FaList, FaArrowRight, FaTrophy } from 'react-icons/fa';
import Confetti from 'react-confetti';

function ResultScreen({ result, onNextLevel, onBackToLevels, onRetry }) {
  const { level, stars, isLastLevel } = result;

  const renderStars = () => {
    return (
      <div className="flex justify-center gap-3 my-6">
        {[1, 2, 3].map(i => (
          <FaStar 
            key={i}
            className={`text-5xl transition-all duration-300 ${
              i <= stars 
                ? 'text-yellow-400 animate-bounce-slow' 
                : 'text-white/20'
            }`}
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
    );
  };

  const getMessage = () => {
    if (isLastLevel) {
      return {
        title: '🎉 Selamat!',
        subtitle: 'Kamu berhasil menyelesaikan semua level!'
      };
    }
    if (stars === 3) {
      return {
        title: 'Luar Biasa! 🌟',
        subtitle: 'Kamu mendapat bintang sempurna!'
      };
    }
    if (stars === 2) {
      return {
        title: 'Bagus! 👍',
        subtitle: 'Coba lagi untuk dapat 3 bintang!'
      };
    }
    return {
      title: 'Berhasil! ✓',
      subtitle: 'Kamu bisa lebih baik lagi!'
    };
  };

  const message = getMessage();

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
      {/* Confetti for perfect score or last level */}
      {(stars === 3 || isLastLevel) && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
        />
      )}

      {/* Trophy for last level */}
      {isLastLevel && (
        <div className="mb-6 animate-bounce-slow">
          <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
            <FaTrophy className="text-5xl text-white" />
          </div>
        </div>
      )}

      {/* Level completed card */}
      <div className="card p-8 max-w-sm w-full animate-pop">
        <p className="text-white/60 mb-2">Level {level}</p>
        <h2 className="text-3xl font-bold mb-2">{message.title}</h2>
        <p className="text-white/70">{message.subtitle}</p>

        {renderStars()}

        {/* Buttons */}
        <div className="flex flex-col gap-3 mt-6">
          {!isLastLevel && (
            <button 
              onClick={onNextLevel}
              className="btn-primary flex items-center justify-center gap-2"
            >
              Level Berikutnya <FaArrowRight />
            </button>
          )}

          <button 
            onClick={onRetry}
            className="btn-secondary flex items-center justify-center gap-2"
          >
            <FaRedo /> Main Lagi
          </button>

          <button 
            onClick={onBackToLevels}
            className="btn-secondary flex items-center justify-center gap-2"
          >
            <FaList /> Pilih Level
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultScreen;
