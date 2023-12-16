import React from 'react';
import './App.css';
import axios from 'axios';

function App() {


  const OPENAI_API_KEY ="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";

const getPrompt = (userInput) => {
 return `Generate a workout plan for a Male who is 26 years old and has a hard fitness level. They want to target upper Body and have a 120-minute workout.`
  // return `Generate a workout plan for a ${userInput.gender} who is ${userInput.age} years old and has a ${userInput.fitnessLevel} fitness level. They want to target ${userInput.targetMuscles} and have a ${userInput.workoutDuration}-minute workout.`;
};

 const generateWorkoutPlan = async (payload) => {
  const url = "https://api.openai.com/v1/completions";
  const headers = {
    "Content-Type": "application/json;charset=UTF-8",
    Charset: "utf-8",
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  };

  const prompt = getPrompt(payload);
  const { data } = await axios.post(
    url,
    {
      model: "gpt-3.5-turbo-instruct",
      prompt,
      max_tokens: 150,
      temperature: 0,
    },
    { headers }
  );

  // return { data };
  console.log("response",data)
};


  return (
   <div>
    <button onClick={generateWorkoutPlan}>Click Me</button>

   </div>
  );
}

export default App;
