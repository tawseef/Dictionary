import React, { useState } from "react";

const dict = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." },
];

export default function Dictionary() {
  const [inp, setInp] = useState("");
  const [meaning, setMeaning] = useState("");
  const [notFound, setNotFound] = useState(false);

  const handle = () => {
    const mean = dict.find((ele) => {
      if (ele.word === inp) return ele.meaning;
    });
    if (Boolean(mean)) {
      setMeaning(mean.meaning);
      setNotFound(false);
    } else {
      setNotFound("Word not found in the dictionary.");
      setMeaning("");
    }
  };

  return (
    <>
      <div>
        <h1>Dictionary App</h1>
        <input
          type="text"
          vaule={inp}
          placeholder="Search for a word..."
          onChange={(e) => setInp(e.target.value)}
        />
        <button onClick={handle}>Search</button>
      </div>
      <div>
        <strong>Definition:</strong>
      </div>
      <div>
        {meaning ? <div>{meaning}</div> : false}
        {notFound ? notFound : false}
      </div>
    </>
  );
}
