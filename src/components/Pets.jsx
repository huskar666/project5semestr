import { useState } from "react";

export default function Pets({ pets = [] }) {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleShowMore = () => {
    if (visibleCount < 8) {
      setVisibleCount((prev) => prev + 4);
    }
  };

  return (
    <div className="pets">
      <h1 className="pets__title">Interacting with our pets</h1>

      <div className="pets__container">
        {pets.slice(0, visibleCount).map((pet) => (
          <div key={pet.id} className="pets__container--div">
            <img
              className="pets__container--div--img"
              src={pet.url}
              alt="pet"
            />
            <p className="pets__container--div--text">{pet.text}</p>
          </div>
        ))}
      </div>

      {visibleCount < 8 && (
        <button className="pets__button" onClick={handleShowMore}>
          See more
        </button>
      )}
    </div>
  );
}
