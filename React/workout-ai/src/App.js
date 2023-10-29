import React, { useState } from 'react';
import openai from 'openai';




const App = () => {
  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
console.log("API_key",API_KEY)

  const [response, setResponse] = useState('');
  const generateText = async () => {
    const prompt = 'Once upon a time...';

    try {
      const apiKey =  process.env.REACT_APP_OPENAI_API_KEY;
      const result = await openai.Completion.create({
        engine: 'davinci',
        prompt: prompt,
        max_tokens: 50,
      }, { apiKey });

      setResponse(result.choices[0].text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
    <button onClick={generateText}>Generate Text</button>
    <div>{response}</div>
  </div>
  )
}

export default App