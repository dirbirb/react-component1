import { useState } from 'react'
import './App.css'
import Button from './Button';
import NewsSection from './NewsSection';

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <NewsSection />
      <Button />
      
      </>  
  );
}

export default App;
