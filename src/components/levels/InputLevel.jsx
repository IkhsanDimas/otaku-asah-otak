import React, { useState } from 'react';

function InputLevel({ level, onAnswer, isCorrect }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCorrect || !input.trim()) return;
    
    const normalizedInput = input.toLowerCase().trim();
    const isAnswerCorrect = level.answers.some(
      answer => normalizedInput === answer.toLowerCase()
    );
    
    onAnswer(isAnswerCorrect);
    if (!isAnswerCorrect) {
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ketik jawabanmu di sini..."
        className="input-answer"
        disabled={isCorrect}
        autoFocus
      />
      
      <button 
        type="submit"
        className="btn-primary"
        disabled={isCorrect || !input.trim()}
      >
        Jawab
      </button>
    </form>
  );
}

export default InputLevel;
