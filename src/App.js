import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Search from "./components/Search";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [cards, setCards] = useState([]);

  const handleSignUp = (name) => {
    setUsername(name);
    setIsLoggedIn(true);
    setIsModalOpen(false);
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
    setUsername("");
  };


async function handleSearch(city) {
  if (!city) return;

  const apiKey = "1956c5260e56c3836b6e6cf64309c3ec";
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  );

  const data = await res.json();


  const newCard = {
    id: Date.now(),
    city: data.name,
    country: data.sys.country,
    temp: Math.round(data.main.temp),
    icon: data.weather[0].icon,
    date: new Date(),
  };

  setCards(prev => [newCard, ...prev].slice(0, 3    ));
}


  function deleteCard(id) {
    setCards(prev => prev.filter(card => card.id !== id));
  }

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

      <main>
        <Search onSearch={handleSearch} />
        <Cards cards={cards} onDelete={deleteCard} />
      </main>
      <Footer />
    </div>
  );
}
