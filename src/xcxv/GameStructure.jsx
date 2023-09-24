import "./gameStructure.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";


const AMOUNT_OF_CARDS = 3;

function GameStructure() {
  const [randomCards, setRandomCards] = useState([]);
  const [score, setScore] = useState(0);
  const [randomIndex, setRandomIndex] = useState(0);
  const [countdown, setCountdown] = useState(45);


  function setRandomSymbolCards() {
    const newArrayOfSymbolCards = [];

    while (newArrayOfSymbolCards.length < AMOUNT_OF_CARDS) {
      const randomIndexNumberOfDataArr = Math.floor(
        Math.random() * cards.length
      );

      if (!newArrayOfSymbolCards.includes(randomIndexNumberOfDataArr)) {
        newArrayOfSymbolCards.push(randomIndexNumberOfDataArr);
      }
    }

    setRandomCards(newArrayOfSymbolCards.map((index) => cards[index]));
    setRandomIndex(Math.floor(Math.random() * AMOUNT_OF_CARDS));
  }

  //clickhandler
  function ChecksIfMatchOnClick(id) {
    let savedLetterCompId = randomCards[randomIndex].id;

    if (id === savedLetterCompId) {
      setScore((prevScore) => prevScore + 1); // Increase the score by 1
      setRandomSymbolCards();
      console.log("we have a match");
    } else {
      score >= 1 && setScore((prevScore) => prevScore - 1);
    }
  }

  function restartGame() {
    setScore(0);
    setCountdown(45);
    setRandomSymbolCards();
  }

  useEffect(() => {
    setRandomSymbolCards();
  }, []);

  useEffect(() => {
    if (hearts > 1) {
      const interval = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 0) {
            hearts === 5 && setScore((prevScore) => prevScore + 5);
            clearInterval(interval);
            return 0;
          }
          return prevCountdown - 1;
        });
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [countdown, hearts]);

  return randomCards.length ? (
    <div className="outside--gameStructure">
      <div className="outer--pointidv">
        <PointsComp
          currentScore={score}
                 countdown={countdown}
          lettersTable={lettersTable}
        />
        <div>
       

       
        </div>
      </div>
      <div className="cards-container">
        <div className="letterBox">
          <LetterComp
            id={randomCards[randomIndex].id}
            letter={randomCards[randomIndex].Letter}
          />
        </div>

        <div className="segments">
          {randomCards.map((card) => (
            <SymbolComp
              key={card.id}
              id={card.id}
              symbol={card.Symbol}
              ChecksIfMatchOnClick={() => ChecksIfMatchOnClick(card.id)}
            />
          ))}
        </div>
      </div>
    </div>
  ) : null;
}

export default GameStructure;