import React, { useState, useEffect } from 'react';
import { levels, getTotalLevels } from './data/levels';
import HomeScreen from './components/HomeScreen';
import LevelSelect from './components/LevelSelect';
import GameScreen from './components/GameScreen';
import ResultScreen from './components/ResultScreen';

function App() {
  const [screen, setScreen] = useState('home'); // home, levels, game, result
  const [currentLevel, setCurrentLevel] = useState(1);
  const [gameProgress, setGameProgress] = useState(() => {
    const saved = localStorage.getItem('otaku-progress');
    return saved ? JSON.parse(saved) : {
      unlockedLevel: 1,
      completedLevels: {},
      totalStars: 0,
      hintsUsed: 0
    };
  });
  const [lastResult, setLastResult] = useState(null);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('otaku-progress', JSON.stringify(gameProgress));
  }, [gameProgress]);

  const startGame = (levelId) => {
    setCurrentLevel(levelId);
    setScreen('game');
  };

  const handleLevelComplete = (stars, usedHint) => {
    const newProgress = { ...gameProgress };
    
    // Update completed level
    const prevStars = newProgress.completedLevels[currentLevel] || 0;
    if (stars > prevStars) {
      newProgress.totalStars += (stars - prevStars);
      newProgress.completedLevels[currentLevel] = stars;
    }

    // Unlock next level
    if (currentLevel >= newProgress.unlockedLevel && currentLevel < getTotalLevels()) {
      newProgress.unlockedLevel = currentLevel + 1;
    }

    // Track hints
    if (usedHint) {
      newProgress.hintsUsed += 1;
    }

    setGameProgress(newProgress);
    setLastResult({ 
      level: currentLevel, 
      stars, 
      isLastLevel: currentLevel === getTotalLevels() 
    });
    setScreen('result');
  };

  const nextLevel = () => {
    if (currentLevel < getTotalLevels()) {
      setCurrentLevel(currentLevel + 1);
      setScreen('game');
    } else {
      setScreen('levels');
    }
  };

  const resetProgress = () => {
    if (window.confirm('Yakin ingin reset semua progress? Ini tidak bisa dibatalkan!')) {
      setGameProgress({
        unlockedLevel: 1,
        completedLevels: {},
        totalStars: 0,
        hintsUsed: 0
      });
      setScreen('home');
    }
  };

  const handleGameOver = () => {
    // Reset to level 1 when user fails 3 times
    setCurrentLevel(1);
    setScreen('game');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {screen === 'home' && (
        <HomeScreen 
          onStart={() => setScreen('levels')} 
          progress={gameProgress}
        />
      )}
      
      {screen === 'levels' && (
        <LevelSelect 
          progress={gameProgress}
          onSelectLevel={startGame}
          onBack={() => setScreen('home')}
          onReset={resetProgress}
        />
      )}
      
      {screen === 'game' && (
        <GameScreen 
          level={levels.find(l => l.id === currentLevel)}
          onComplete={handleLevelComplete}
          onBack={() => setScreen('levels')}
          onGameOver={handleGameOver}
        />
      )}
      
      {screen === 'result' && (
        <ResultScreen 
          result={lastResult}
          onNextLevel={nextLevel}
          onBackToLevels={() => setScreen('levels')}
          onRetry={() => setScreen('game')}
        />
      )}
    </div>
  );
}

export default App;
