import "./style.css";

export default function Card ({card}) {
  return <img src={card.image} alt={card.code} className="card" />;
};