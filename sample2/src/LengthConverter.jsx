import { useState } from "react";

function LengthConverter() {
  const [numbers, setNumbers] = useState(0);
  const [inverted, setInverted] = useState(false);
  const timeConvert = (e) => {
    setNumbers(e.target.value);
  };
  const invertChange = () => {
    setInverted(!inverted);
  };
  const onReset = () => {
    setNumbers(0);
  };
  return (
    <>
      <h1>Length Converter</h1>
      <label htmlFor="minutes">M</label>
      <input
        type="text"
        id="minutes"
        placeholder="미터"
        value={inverted ? numbers * 1000 : numbers}
        disabled={inverted}
        onChange={timeConvert}
      />
      <label htmlFor="hours">KM</label>
      <input
        type="text"
        id="hours"
        placeholder="키로미터"
        value={inverted ? numbers : Math.round(numbers / 1000)}
        disabled={!inverted}
        onChange={timeConvert}
      />
      <button onClick={onReset}>Reset</button>
      <button onClick={invertChange}>
        {inverted ? "Forward" : "Backward"}
      </button>
    </>
  );
}

export default LengthConverter;
