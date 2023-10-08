import "./gameStructure.css";
import "bootstrap/dist/css/bootstrap.css";

function SymbolComp({ symbol, ChecksIfMatchOnClick }) {
  return (
    <div className="game--card--div card " onClick={ChecksIfMatchOnClick}>
      <div className="game--card--body card-body">
        <p className="game--card--p">{symbol}</p>
      </div>
    </div>
  );
}

export default SymbolComp;
