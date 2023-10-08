import "./gameStructure.css";

function LetterComp({ letter  }) {
  return (
    <div className="card game--card--div">
      <div className="card-body game--card--body">
        <p className="game--card--p" id="LetterGameWord">
          {letter}
        </p>
      </div>
    </div>
  );
}

export default LetterComp;
