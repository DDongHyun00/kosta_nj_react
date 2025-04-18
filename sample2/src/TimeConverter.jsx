import { useState } from "react";

function TimeConverter() {
  const [numbers, setNumbers] = useState(0);
  //const [hours, setHours] = useState(0);
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
      <h1>Time Converter</h1>
      <label htmlFor="minutes">분</label>
      <input
        type="text"
        id="minutes"
        placeholder="분"
        value={inverted ? numbers * 60 : numbers}
        disabled={inverted}
        onChange={timeConvert}
      />
      <label htmlFor="hours">시간</label>
      <input
        type="text"
        id="hours"
        placeholder="시간"
        value={inverted ? numbers : Math.round(numbers / 60)}
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

export default TimeConverter;
