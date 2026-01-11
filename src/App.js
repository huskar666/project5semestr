import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleSignUp = (name) => {
    setUsername(name);
    setIsLoggedIn(true);
    setIsModalOpen(false);
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div className="App">
      <Header
        isLoggedIn={isLoggedIn}
        username={username}
        onOpen={() => setIsModalOpen(true)}
        onLogOut={handleLogOut}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSignUp={handleSignUp}
      />
    </div>
  );
}

export default App;
