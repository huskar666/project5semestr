import Card from "./Card";

export default function Cards({ cards, onDelete }) {
  return (
    <div className="cards">
      {cards.map(card => (
        <Card key={card.id} data={card} onDelete={onDelete} />
      ))}
    </div>
  );
}
