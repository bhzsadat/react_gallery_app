import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import apiKey from './config'

function App() {
  const fetchData = async () => {
    const response = await fetch(`https://api.flicker.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}`);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>API Key Example</h1>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  )
}

export default App
