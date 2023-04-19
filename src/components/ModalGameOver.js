import React from 'react';

const ModalGameOver = ({ tries, setTries, setGameOver }) => {
  const handleClick = () => {
    setGameOver(false);
    setTries(0);
  };
  return (
    <div className="gameover">
      <div className="gameover__container">
        <div className="gameover__results">
          Game over after {tries} tries. GG!
        </div>
        <button className="gameover__btn" onClick={handleClick}>
          Try again
        </button>
      </div>
    </div>
  );
};

export default ModalGameOver;
