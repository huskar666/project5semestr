export default function Pets({ pets = [] }) {
  return (
    <div className="pets">
      <h1 className="pets__title">Interacting with our pets</h1>
      <div className="pets__container">
        {pets.map((pet) => (
          <div key={pet.id} className="pets__container--div">
            <img className="pets__container--div--img" src={pet.url} alt="pet" />
            <p className="pets__container--div--text">{pet.text}</p>
          </div>
        ))}
      </div>
      <button className="pets__button">See more</button>
    </div>
  );
}
