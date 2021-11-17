import React from 'react'
import './App.scss';

function App() {

  React.useEffect(() => {
    document.addEventListener('keypress', keypressHandler)
    return () => document.removeEventListener('keypress', keypressHandler)
  }, [])

  const keypressHandler = (key) => {
    console.log(key)
  }

  return (
    <div className="App">
      app
    </div>
  );
}

export default App;
