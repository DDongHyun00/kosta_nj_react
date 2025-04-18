import { useState } from "react";

function Form2() {
  const [person, setPerson] = useState({
    name: "",
    age: 0,
    email: "",
  }); // 객체
  const inputUpdate = (e) => {
    const { name, value } = e.target;
    setPerson({
      ...person,
      [name]: value,
    });
  };

  return (
    <>
      <h2>Form2</h2>
      <input
        type="text"
        name="name"
        value={person.name}
        onChange={inputUpdate}
      />
      <input type="text" name="age" value={person.age} onChange={inputUpdate} />
      <input
        type="text"
        name="email"
        value={person.email}
        onChange={inputUpdate}
      />
      <p>{console.log(person)}</p>
    </>
  );
}

export default Form2;
