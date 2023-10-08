import "./gameStructure.css";
import "bootstrap/dist/css/bootstrap.css";
import LetterComp from "./LetterComp";
import SymbolComp from "./SymbolComp";
import { useState, useEffect } from "react";
import PointsComp from "./PointsComp";
import YouHaveLost from "./YouHaveLost";
import TimesUp from "./TimesUp";

const AMOUNT_OF_CARDS = 3;

function GameStructure({ cards, lessonUrl }) {
  const [randomCards, setRandomCards] = useState([]);
  const [score, setScore] = useState(0);
  const [hearts, setHearts] = useState(5);
  const [randomIndex, setRandomIndex] = useState(0);
  const [countdown, setCountdown] = useState(45);
  const [shake, setShake] = useState(false);
  
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
    console.log("setRandomCrds", randomCards);
    setRandomIndex(Math.floor(Math.random() * AMOUNT_OF_CARDS));
    console.log("randomIndex", randomIndex);
  }

  //clickhandler
  function ChecksIfMatchOnClick(element_two) {
    let leftCard = randomCards[randomIndex].element_one;
  
    if (leftCard === element_two) {
      setScore((prevScore) => prevScore + 1); // Increase the score by 1
      setRandomSymbolCards();
    } else {
      setShake(true); // Set the shake state to true for the mismatch
      setHearts((prevScore) => prevScore - 1); // Decrease the score by 1
      score >= 1 && setScore((prevScore) => prevScore - 1);
    }
  
    // Use setTimeout to reset the shake state after a certain duration (e.g., 1 second)
    setTimeout(() => {
      setShake(false);
    }, 1000);
  }
  function restartGame() {
    setHearts(5);
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
      <div className="inner-gamestructure">
        <div className="points-box">
          <PointsComp
            currentScore={score}
            heartsLeft={hearts}
            countdown={countdown}
          />
          <div>
            {!hearts && (
              <YouHaveLost
                restartGame={() => restartGame()}
                currentScore={score}
                heartsLeft={hearts}
                lessonUrl={lessonUrl}
              />
            )}

            {!countdown && (
              <TimesUp
                restartGame={() => restartGame()}
                currentScore={score}
                heartsLeft={hearts}
                lessonUrl={lessonUrl}
              />
            )}
          </div>
        </div>
        <div className="cards-container">
          <div className="letterBox">
            <LetterComp
              id={randomCards[randomIndex].id}
              letter={randomCards[randomIndex].element_one}
            />
          </div>

          <div className="segments">
            {randomCards.map((card) => (
              <SymbolComp
                key={card.id}
                id={card.id}
                symbol={card.element_two}
                shake={shake} // Pass the shake state as a prop
                ChecksIfMatchOnClick={() =>
                  ChecksIfMatchOnClick(card.element_one)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default GameStructure;
