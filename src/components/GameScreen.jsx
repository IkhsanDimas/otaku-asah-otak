import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaLightbulb, FaCheck, FaTimes, FaRedo } from 'react-icons/fa';
import InputLevel from './levels/InputLevel';
import TapLevel from './levels/TapLevel';
import ChoiceLevel from './levels/ChoiceLevel';
import DragLevel from './levels/DragLevel';
import ActionLevel from './levels/ActionLevel';
import MultiLevel from './levels/MultiLevel';
import { playCorrectSound, playWrongSound, playGameOverSound } from '../utils/sounds';

function GameScreen({ level, onComplete, onBack, onGameOver }) {
  const [showHint, setShowHint] = useState(false);
  const [usedHint, setUsedHint] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [shake, setShake] = useState(false);
  const [showWrong, setShowWrong] = useState(false);
  const [showGameOver, setShowGameOver] = useState(false);

  const MAX_ATTEMPTS = 3;

  useEffect(() => {
    // Reset state when level changes
    setShowHint(false);
    setUsedHint(false);
    setAttempts(0);
    setIsCorrect(false);
    setShowWrong(false);
    setShowGameOver(false);
  }, [level?.id]);

  const handleShowHint = () => {
    setShowHint(true);
    setUsedHint(true);
  };

  const handleAnswer = (correct) => {
    if (correct) {
      setIsCorrect(true);
      setShowWrong(false);
      playCorrectSound(); // Play success sound
      
      // Calculate stars based on attempts and hint usage
      let stars = 3;
      if (usedHint) stars -= 1;
      if (attempts >= 1) stars -= 1;
      if (attempts >= 2) stars -= 1;
      stars = Math.max(1, stars);
      
      // Delay to show success animation
      setTimeout(() => {
        onComplete(stars, usedHint);
      }, 1500);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      setShake(true);
      setShowWrong(true);
      playWrongSound(); // Play error sound
      setTimeout(() => setShake(false), 500);
      
      // Check if max attempts reached
      if (newAttempts >= MAX_ATTEMPTS) {
        setTimeout(() => {
          setShowWrong(false);
          setShowGameOver(true);
          playGameOverSound(); // Play game over sound
        }, 1000);
      } else {
        // Hide wrong message after 2 seconds
        setTimeout(() => setShowWrong(false), 2500);
      }
    }
  };

  const handleRestartFromLevel1 = () => {
    setShowGameOver(false);
    if (onGameOver) {
      onGameOver();
    }
  };

  const renderLevel = () => {
    const props = {
      level,
      onAnswer: handleAnswer,
      isCorrect,
      shake
    };

    switch (level.type) {
      case 'input':
        return <InputLevel {...props} />;
      case 'tap':
        return <TapLevel {...props} />;
      case 'choice':
        return <ChoiceLevel {...props} />;
      case 'drag':
        return <DragLevel {...props} />;
      case 'action':
        return <ActionLevel {...props} />;
      case 'multi':
        return <MultiLevel {...props} />;
      default:
        return <InputLevel {...props} />;
    }
  };

  if (!level) return null;

  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <button onClick={onBack} className="btn-secondary p-2">
          <FaArrowLeft />
        </button>
        
        <div className="text-center">
          <span className="text-sm text-white/60">Level</span>
          <h2 className="text-xl font-bold">{level.id}</h2>
        </div>
        
        <button 
          onClick={handleShowHint}
          disabled={showHint}
          className={`btn-hint flex items-center gap-2 ${showHint ? 'opacity-50' : ''}`}
        >
          <FaLightbulb /> Hint
        </button>
      </div>

      {/* Game Content */}
      <div className="flex-1 flex flex-col p-4 overflow-y-auto">
        {/* Illustration */}
        {level.illustration && (
          <div className={`text-center mb-4 ${level.illustrationSize || 'text-4xl'}`}>
            <div className="inline-block p-4 bg-white/5 rounded-2xl">
              {level.illustration.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>
        )}

        {/* Question */}
        <div className="card p-6 mb-6">
          <p className="text-lg md:text-xl text-center leading-relaxed">
            {level.question}
          </p>
        </div>

        {/* Wrong Answer Feedback */}
        {showWrong && (
          <div className="mb-4 animate-pop">
            <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <FaTimes className="text-white text-xl" />
              </div>
              <div>
                <p className="text-red-400 font-bold">Jawaban Salah!</p>
                <p className="text-red-300/80 text-sm">
                  {attempts < MAX_ATTEMPTS 
                    ? `Sisa kesempatan: ${MAX_ATTEMPTS - attempts}` 
                    : 'Kesempatan habis!'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Hint Box */}
        {showHint && (
          <div className="hint-box mb-6 animate-pop">
            <div className="flex items-start gap-3">
              <FaLightbulb className="text-amber-400 text-xl flex-shrink-0 mt-1" />
              <p>{level.hint}</p>
            </div>
          </div>
        )}

        {/* Level Content */}
        <div className={`flex-1 ${shake ? 'animate-shake' : ''}`}>
          {renderLevel()}
        </div>

        {/* Success Overlay */}
        {isCorrect && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-pop">
            <div className="card p-8 text-center max-w-sm mx-4">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 success-animation">
                <FaCheck className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-400 mb-2">Benar!</h3>
              <p className="text-white/70">{level.explanation}</p>
            </div>
          </div>
        )}

        {/* Game Over Overlay */}
        {showGameOver && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-pop">
            <div className="card p-8 text-center max-w-sm mx-4">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTimes className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-red-400 mb-2">Game Over!</h3>
              <p className="text-white/70 mb-6">
                Kamu sudah salah {MAX_ATTEMPTS}x. Kamu akan kembali ke Level 1.
              </p>
              <button 
                onClick={handleRestartFromLevel1}
                className="btn-primary flex items-center justify-center gap-2 w-full"
              >
                <FaRedo /> Mulai dari Level 1
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Attempts Counter */}
      {attempts > 0 && !isCorrect && !showGameOver && (
        <div className="text-center p-2">
          <div className="flex justify-center gap-2">
            {[...Array(MAX_ATTEMPTS)].map((_, i) => (
              <div 
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
                  i < attempts ? 'bg-red-500' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
          <p className="text-white/50 text-xs mt-1">
            Kesempatan: {MAX_ATTEMPTS - attempts} / {MAX_ATTEMPTS}
          </p>
        </div>
      )}
    </div>
  );
}

export default GameScreen;
