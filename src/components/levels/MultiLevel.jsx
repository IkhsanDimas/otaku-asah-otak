import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

function MultiLevel({ level, onAnswer, isCorrect }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [inputs, setInputs] = useState(level.subQuestions.map(() => ''));
  const [results, setResults] = useState([]);

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleSubmit = (index) => {
    if (isCorrect) return;
    
    const subQ = level.subQuestions[index];
    const userAnswer = inputs[index].toLowerCase().trim();
    const isAnswerCorrect = subQ.answers.some(
      answer => userAnswer === answer.toLowerCase()
    );
    
    const newResults = [...results];
    newResults[index] = isAnswerCorrect;
    setResults(newResults);
    
    if (isAnswerCorrect) {
      // Move to next question or complete
      if (index < level.subQuestions.length - 1) {
        setCurrentQuestion(index + 1);
      } else {
        // Check if all answers are correct
        const allCorrect = newResults.every(r => r === true);
        onAnswer(allCorrect);
      }
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.key === 'Enter') {
      handleSubmit(index);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {level.subQuestions.map((subQ, index) => {
        const isActive = index === currentQuestion;
        const isAnswered = results[index] !== undefined;
        const isQCorrect = results[index] === true;
        
        return (
          <div 
            key={index}
            className={`
              card p-4 transition-all duration-300
              ${isActive ? 'border-indigo-400 bg-indigo-500/10' : ''}
              ${isAnswered && isQCorrect ? 'border-green-400 bg-green-500/10' : ''}
              ${isAnswered && !isQCorrect ? 'border-red-400 bg-red-500/10' : ''}
              ${!isActive && !isAnswered ? 'opacity-50' : ''}
            `}
          >
            <div className="flex items-start gap-3">
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                ${isAnswered && isQCorrect ? 'bg-green-500' : ''}
                ${isAnswered && !isQCorrect ? 'bg-red-500' : ''}
                ${!isAnswered ? 'bg-white/20' : ''}
              `}>
                {isAnswered && isQCorrect && <FaCheck className="text-white" />}
                {isAnswered && !isQCorrect && <FaTimes className="text-white" />}
                {!isAnswered && <span className="text-white/70">{index + 1}</span>}
              </div>
              
              <div className="flex-1">
                <p className="mb-3">{subQ.q}</p>
                
                {isActive && !isAnswered && (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputs[index]}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      onKeyPress={(e) => handleKeyPress(e, index)}
                      placeholder="Ketik jawaban..."
                      className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-400"
                      autoFocus
                    />
                    <button
                      onClick={() => handleSubmit(index)}
                      className="btn-primary px-4 py-2"
                      disabled={!inputs[index].trim()}
                    >
                      OK
                    </button>
                  </div>
                )}
                
                {isAnswered && isQCorrect && (
                  <p className="text-green-400 text-sm">✓ Benar!</p>
                )}
                
                {isAnswered && !isQCorrect && (
                  <p className="text-red-400 text-sm">✗ Coba lagi</p>
                )}
              </div>
            </div>
          </div>
        );
      })}
      
      {/* Progress indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {level.subQuestions.map((_, index) => (
          <div
            key={index}
            className={`
              w-3 h-3 rounded-full transition-all
              ${results[index] === true ? 'bg-green-500' : ''}
              ${results[index] === false ? 'bg-red-500' : ''}
              ${results[index] === undefined ? 'bg-white/30' : ''}
            `}
          />
        ))}
      </div>
    </div>
  );
}

export default MultiLevel;
