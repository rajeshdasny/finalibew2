import React, { useState, useEffect, useMemo } from "react";
import questions from "./questions";

// Helper to shuffle array
function shuffleArray(array) {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  // Shuffle options for current question and keep track of mapping to original answer
  const { shuffledOptions, correctOptionIndex } = useMemo(() => {
    const q = questions[currentIndex];
    const options = q.options;
    const shuffled = shuffleArray(options);
    // Find new index of the correct answer option
    const correctAnswer = options[q.answer];
    const newCorrectIndex = shuffled.findIndex((opt) => opt === correctAnswer);
    return { shuffledOptions: shuffled, correctOptionIndex: newCorrectIndex };
  }, [currentIndex]);

  const handleAnswerClick = (index) => {
    const correct = index === correctOptionIndex;
    setIsCorrect(correct);
    setShowFeedback(true);

    setTimeout(() => {
      setShowFeedback(false);
      setIsCorrect(null);
      setCurrentIndex((prev) =>
        prev + 1 < questions.length ? prev + 1 : 0
      );
    }, 1500);
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20, fontFamily: "Arial" }}>
      <h1>Electrical Safety Quiz</h1>
      <div style={{ marginBottom: 20 }}>
        <h2>
          Question {currentIndex + 1}/{questions.length}
        </h2>
        <p>{questions[currentIndex].question}</p>
      </div>
      <div>
        {shuffledOptions.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswerClick(idx)}
            disabled={showFeedback}
            style={{
              display: "block",
              margin: "10px 0",
              padding: "10px 20px",
              cursor: showFeedback ? "default" : "pointer",
              backgroundColor: "#white",
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
          >
            {option}
          </button>
        ))}
      </div>
      {showFeedback && (
        <div
          style={{
            marginTop: 20,
            fontWeight: "bold",
            color: isCorrect ? "green" : "red",
          }}
        >
          {isCorrect ? "Correct!" : "Wrong!"}
        </div>
      )}
    </div>
  );
}
