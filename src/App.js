import { useState, useEffect } from 'react';
import Card from './components/Card';
import ModalGameOver from './components/ModalGameOver';
import './App.css';

function App() {
  let cardArray = [
    {
      num: 1,
      img: 'https://cdn.pixabay.com/photo/2021/10/27/13/15/cat-6747298_960_720.jpg',
      isMatch: false,
    },
    {
      num: 2,
      img: 'https://cdn.pixabay.com/photo/2016/09/07/11/37/tropical-1651423_960_720.jpg',
      isMatch: false,
    },
    {
      num: 3,
      img: 'https://cdn.pixabay.com/photo/2022/07/08/15/37/aurora-7309447_960_720.jpg',
      isMatch: false,
    },
    {
      num: 4,
      img: 'https://cdn.pixabay.com/photo/2023/04/13/00/20/ai-generated-7921391_960_720.jpg',
      isMatch: false,
    },
    {
      num: 5,
      img: 'https://cdn.pixabay.com/photo/2016/09/29/13/08/planet-1702788_960_720.jpg',
      isMatch: false,
    },
    {
      num: 6,
      img: 'https://cdn.pixabay.com/photo/2017/01/18/16/53/earth-1990298_960_720.jpg',
      isMatch: false,
    },
  ];

  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [tries, setTries] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const shuffleCards = () => {
    let shuffledArray = [...cardArray, ...cardArray]
      .map((card, i) => ({ ...card, id: i + 1 }))
      .sort((a, b) => 0.5 - Math.random());
    //restart game
    setScore(0);
    setCards(shuffledArray);
  };

  const checkMatch = () => {
    if (selectedCards[0].num === selectedCards[1].num) {
      setScore((prev) => prev + 1);
      let updatedCards = cards.map((card) => {
        if (card.num === selectedCards[0].num) {
          return { ...card, isMatch: true };
        }
        return card;
      });
      setCards(updatedCards);
    } else {
      setTries((prev) => prev + 1);
    }
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (selectedCards.length === 2) {
      setTimeout(() => {
        setSelectedCards([]);
      }, 1000);
      checkMatch();
    }
  }, [selectedCards]);

  useEffect(() => {
    if (score === cardArray.length) {
      setTimeout(() => {
        shuffleCards();
        setGameOver(true);
      }, 1000);
    }
  }, [score, shuffleCards]);

  return (
    <>
      {gameOver && (
        <ModalGameOver
          tries={tries}
          setTries={setTries}
          setGameOver={setGameOver}
        />
      )}
      <div className="container">
        <h2 className="title">Memories...</h2>
        <div className="score__container">
          <div className="score">
            Score: {score}, tries: {tries}
          </div>
        </div>
        <div className="cards__container">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              selectedCards={selectedCards}
              setSelectedCards={setSelectedCards}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
