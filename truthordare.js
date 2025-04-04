import React, { useState } from "react";
import { Button } from "react-bootstrap";

const truthQuestions = [
  { question: "What is your biggest fear?", options: ["Fear of failure", "Fear of rejection"] },
  { question: "Have you ever lied to your best friend?", options: ["Yes", "No"] },
];

const dareQuestions = [
  "Dance for 30 seconds without music",
  "Sing a song in a funny voice",
  "Do 10 push-ups",
  "Act like your favorite animal for a minute",
];

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

export default function TruthOrDare() {
  const [mode, setMode] = useState(null);
  const [truth, setTruth] = useState(null);
  const [dare, setDare] = useState(null);

  const handleTruth = () => {
    setMode("truth");
    setTruth(getRandom(truthQuestions));
  };

  const handleDare = () => {
    setMode("dare");
    setDare(getRandom(dareQuestions));
  };

  return (
    <div className="text-center">
      <h1>Truth or Dare</h1>
      <Button onClick={handleTruth}>Truth</Button>
      <Button onClick={handleDare}>Dare</Button>

      {mode === "truth" && truth && (
        <div>
          <h2>{truth.question}</h2>
          <div>
            {truth.options.map((opt, i) => (
              <Button key={i}>{opt}</Button>
            ))}
          </div>
        </div>
      )}

      {mode === "dare" && dare && (
        <div>
          <h2>{dare}</h2>
          <input type="file" accept="video/*" />
        </div>
      )}
    </div>
  );
}