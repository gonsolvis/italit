import React from "react";
import "./gameStructure.css";
import "bootstrap/dist/css/bootstrap.css";

function SymbolComp({ symbol, ChecksIfMatchOnClick, shake }) {
  const cardClasses = `game--card--div card ${shake ? "shake-animation" : ""}`;
  return (
    <div className={cardClasses} onClick={ChecksIfMatchOnClick}>
      <div className="game--card--body card-body">
        <p className="game--card--p">{symbol}</p>
      </div>
    </div>
  );
}

export default SymbolComp;
