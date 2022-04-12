import CardsList from "./components/CardList";
import {useEffect, useState} from "react";
import "./App.css";

export default function App (){
  const [showDeck, setShowDeck] = useState(false);
  const [cardsList, setCardsList] = useState([]);
  const [deck, setDeck] = useState("");

  const handleDeckRequest = () => {
    fetch("https://deckofcardsapi.com/api/deck/new/")
      .then((res) => res.json())
      .then((res) => setDeck(res));
  };

  const handleCardsRequest = (deckId) => {
    fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=52`)
      .then((res) => res.json())
      .then((res) => setCardsList([...res.cards]));
  };

  const handleShowDeck = () => {
    setShowDeck(!showDeck);
  };

  useEffect(() => {
    handleDeckRequest();
  }, []);

  useEffect(() => {
    deck && handleCardsRequest(deck);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deck]);

  return (
    <div className="main-container">
      <h1 className="main-title">Debugue para ver o baralho</h1>
      <button onClick={handleShowDeck} className="new-deck-button">Novo baralho</button>
      {showDeck && <CardsList cardsList={cardsList} />}
    </div>
  );
};
