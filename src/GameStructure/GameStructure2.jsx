import "./gameStructure.css";
import "bootstrap/dist/css/bootstrap.css";
import LetterComp from "./LetterComp";
import SymbolComp from "./SymbolComp";
import { useState, useEffect } from "react";
import PointsComp from "./PointsComp";
import YouHaveLost from "./YouHaveLost";
import TimesUp from "./TimesUp";
import BackButton from "../BackButton/BackButton";
import InstructionModal from "./InstructionsModal";

function GameStructure2({ cards, lessonUrl }) {
  const [randomCard, setRandomCard] = useState([]);
  const [randomNounIndex, setRandomNounIndex] = useState([]);
  const [score, setScore] = useState(0);
  const [hearts, setHearts] = useState(5);
  const [countdown, setCountdown] = useState(45);
  const [shake, setShake] = useState(false);

  function setRandomSymbolCards() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    setRandomNounIndex(randomIndex);
    setRandomCard(cards[randomIndex]);
  }

  console.log("randomCard.element_two", randomCard.element_two);

  function ChecksIfMatchOnClick(userChoice) {
    let leftCard = randomCard.element_two;
    if (leftCard === userChoice) {
      console.log("card is matching");
      setScore((prevScore) => prevScore + 1); // Increase the score by 1
      setRandomSymbolCards();
    } else {
      console.log("card is not matching");
      setShake(true); // Set the shake state to true for the mismatch
      setHearts((prevScore) => prevScore - 1); // Decrease the score by 1
      score >= 1 && setScore((prevScore) => prevScore - 1);
    }
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

  return randomCard ? (
    <div className="outside--gameStructure">
      <div className="inner-gamestructure">
        {/* <InstructionModal />; */}
        <div className="backButton-gamestructure">
          <BackButton />
        </div>
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
            <LetterComp letter={randomCard.element_one} />
          </div>
          <div className="segments">
            <SymbolComp
              symbol={"Masculine"}
              ChecksIfMatchOnClick={() => ChecksIfMatchOnClick("masculine")}
            />
            <SymbolComp
              symbol={"Feminine"}
              shake={shake}
              ChecksIfMatchOnClick={() => ChecksIfMatchOnClick("feminine")}
            />
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default GameStructure2;
