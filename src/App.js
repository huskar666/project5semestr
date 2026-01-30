import { useState, useEffect } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Search from "./components/Search";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Pets from "./components/Pets";
import Nature from "./components/Nature";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [cards, setCards] = useState([]);
  const [pets, setPets] = useState([]);
  const [images, setImages] = useState([]);

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

    setCards((prev) => [newCard, ...prev].slice(0, 3)); 
  }

  function deleteCard(id) {
    setCards((prev) => prev.filter((card) => card.id !== id));
  }

  async function petsApi() {
    const apiKeyPixabay = "50951734-f98e6cfe76b799fcfc95f0b1a"; 
    const res = await fetch(
      `https://pixabay.com/api/?key=${apiKeyPixabay}&q=dog&image_type=photo&per_page=8`
    );
    const data = await res.json();


    const newPets = data.hits.map((hit) => ({
      id: hit.id,
      url: hit.webformatURL,
    }));

    setPets((prev) => [...newPets, ...prev].slice(0, 4));
  }

  useEffect(() => {
    petsApi();
  }, []);

  async function fetchNews() {
    const newsKey = "a98097ef826a46eba1b1a451547949f3";
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=dogs&language=en&pageSize=4&apiKey=${newsKey}`
    )
    const dataNews = await res.json();

    setPets(prev =>
      prev.map((pet, i) => ({
          ...pet,
          text: dataNews.articles[i]?.title,
      }))
    ) 
  }
   useEffect(() => {
    fetchNews();
   }, [])
   async function fetchNature() {
    const apiKey = "50951734-f98e6cfe76b799fcfc95f0b1a";

    const res = await fetch(
        `https://pixabay.com/api/?key=${apiKey}&q=nature&image_type=photo&orientation=horizontal&per_page=5`
    )
    const data = await res.json();

    const newImages = data.hits.map((hit) => ({
      id: hit.id,
      url: hit.webformatURL,
    }))
    setImages(newImages);
   }
   useEffect(() => {
    fetchNature();
   }, []);
   

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
        <Pets pets={pets} />
        <Nature images={images}/>
      </main>

      <Footer />
    </div>
  );
}
