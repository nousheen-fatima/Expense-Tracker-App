// import React, { useEffect, useState } from "react";
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: "209.3",
    date: new Date(2022, 8, 28),
  },
  {
    id: "e2",
    title: "Books",
    amount: "303.3",
    date: new Date(2022, 2, 18),
  },
  {
    id: "e3",
    title: "Fruits",
    amount: "409.30",
    date: new Date(2020, 4, 28),
  },
  {
    id: "e4",
    title: "Grocarry",
    amount: "209.3",
    date: new Date(2019, 2, 28),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
  //   const [userInput, setUserInput] = useState("");
  //   // const [showInputField, setShowInputField] = useState(false);
  //   const [correctCount, setCorrectCount] = useState(0);
  //   const [missedCount, setMissedCount] = useState(0);
  //   const [time, setTime] = useState(5);

  //   const textToMatch = "Text to show for 30 seconds";
  //   const wordsToMatch = textToMatch.split("");

  //   // setTimeout(() => {
  //   //   setShowInputField(true);
  //   // }, 30000);

  //   useEffect(() => {
  //     const timer = setInterval(() => setTime(time - 1), 1000);
  //     if (time === 0) clearInterval(timer);

  //     return () => clearInterval(timer);
  //   }, [time]);

  //   const handleSubmit = (event) => {
  //     event.preventDefault();

  //     let correct = 0;
  //     let missed = 0;
  //     for (let i = 0; i < textToMatch.length; i++) {
  //       if (textToMatch[i] === userInput[i]) {
  //         correct++;
  //       } else {
  //         missed++;
  //       }
  //     }
  //     setCorrectCount(correct);
  //     setMissedCount(missed);
  //   };

  //   return (
  //     <div className="App">
  //       {time === 0 ? (
  //         <form onSubmit={handleSubmit}>
  //           <label>
  //             Enter a string:
  //             <input
  //               type="text"
  //               value={userInput}
  //               onChange={(e) => setUserInput(e.target.value)}
  //             />
  //           </label>
  //           <button type="submit">Submit</button>
  //         </form>
  //       ) : (
  //         <h1>Text to show for {time} seconds</h1>
  //       )}
  //       {correctCount > 0 || missedCount > 0 ? (
  //         <div>
  //           <p>Words correct: {correctCount}</p>
  //           <p>Words missed: {missedCount}</p>
  //         </div>
  //       ) : null}
  //     </div>
  //   );
}

export default App;
