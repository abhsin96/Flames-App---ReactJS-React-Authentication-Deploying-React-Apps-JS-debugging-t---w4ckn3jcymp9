import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [status, setStatus] = useState("");

  const handleCalculation = () => {
    if (firstName === "" || secondName === "") {
      setStatus("Please Enter valid input");
      return;
    }

    let first = firstName.split("");
    let second = secondName.split("");

    for (let i = 0; i < first.length; i++) {
      for (let j = 0; j < second.length; j++) {
        if (first[i] === second[j]) {
          first[i] = 0;
          second[j] = 0;
          break;
        }
      }
    }
    let count1 = 0;
    for (let i = 0; i < first.length; i++) {
      if (first[i] === 0) {
        count1++;
      }
    }

    let count2 = 0;
    for (let i = 0; i < second.length; i++) {
      if (second[i] === 0) {
        count2++;
      }
    }

    let sum = first.length + second.length - count1 - count2;
    // let map = new Map();
    // for (let i = 0; i < firstName.length; i++) {
    //   if (map.has(firstName[i])) {
    //     map.set(firstName[i], map.get(firstName[i]) + 1);
    //   } else {
    //     map.set(firstName[i], 1);
    //   }
    // }
    // for (let i = 0; i < secondName.length; i++) {
    //   if (map.has(secondName[i])) {
    //     map.set(secondName[i], map.get(secondName[i]) - 1);
    //   } else {
    //     map.set(secondName[i], 1);
    //   }
    // }
    // let sum = 0;
    // map.forEach((value, key) => {
    //   sum += value > 0 ? value : value * -1;
    // });

    let flame = [
      "Siblings",
      "Friends",
      "Love",
      "Affection",
      "Marriage",
      "Enemy",
    ];

    setStatus(flame[sum % 6]);
  };

  return (
    <div id="main">
      <h3 data-testid="answer">{status}</h3>
      <label className="">First Name</label>
      <input
        value={firstName}
        type="text"
        data-testid="input1"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label>Second Name</label>
      <input
        value={secondName}
        type="text"
        data-testid="input2"
        onChange={(e) => setSecondName(e.target.value)}
      />
      <button data-testid="calculate_relationship" onClick={handleCalculation}>
        Calculate Relationship Future
      </button>
      <button
        data-testid="clear"
        onClick={() => {
          setFirstName("");
          setSecondName("");
          setStatus("");
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default App;
