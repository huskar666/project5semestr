import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Modal from './components/Modal';

function App() {
  const [isOpen, isSetOpen] = useState(false);
  return (
    <div className="App">
      <Header onOpen={() => isSetOpen(true)}/>
      <Modal isOpen={isOpen} onClose={() => isSetOpen(false)}/>
    </div>
  );
}

export default App;
