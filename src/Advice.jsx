import patternDivider from "../images/pattern-divider-desktop.svg";
import iconDice from "../images/icon-dice.svg";
import React from "react";

export default function Advice() {
  const [quote, setQuote] = React.useState({});

  // Function to fetch a new quote
  function fetchAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setQuote(data.slip));
  }

  // Fetch advice when the component first mounts
  React.useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <main className="advice">
      <div className="advice--info">
        <h1 className="advice--num">ADVICE #{quote.id}</h1>
        <p className="advice--p">{quote.advice}</p>
        <img
          src={patternDivider}
          alt="Pattern Divider Icon"
          className="advice--divider"
        />
        <div onClick={fetchAdvice} className="advice--dice">
          <img src={iconDice} alt="Dice Icon" className="advice--dice-icon" />
        </div>
      </div>
    </main>
  );
}
