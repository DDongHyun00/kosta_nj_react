import { useState } from "react";
function Form() {
  const [name, setName] = useState("");
  const inputName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const [age, setAge] = useState("");
  const inputAge = (e) => {
    console.log(e.target.value);
    setAge(e.target.value);
  };
  return (
    <>
      <h2>Form</h2>
      <input
        type="text"
        name="name"
        placeholder="이름을 입력하세요"
        onChange={inputName}
        value={name}
      />
      <input
        type="text"
        name="name"
        placeholder="나이를 입력하세요"
        onChange={inputAge}
        value={age}
      />
    </>
  );
}

export default Form;
