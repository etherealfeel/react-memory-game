import { useState, useEffect } from 'react';

const Card = ({ card, selectedCards, setSelectedCards }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setSelectedCards([...selectedCards, card]);
  };

  useEffect(() => {
    if (
      selectedCards[0] === card ||
      selectedCards[1] === card ||
      card.isMatch
    ) {
      setIsFlipped(true);
    } else {
        setIsFlipped(false);
    }
  }, [selectedCards]);

  return (
    <div className={isFlipped ? "card open clicks--removed" : "card"} onClick={handleClick}>
      <div className="card__front">
        <img src={card.img} alt={card.id} />
      </div>
      <div className="card__back"></div>
    </div>
  );
};

export default Card;
