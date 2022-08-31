import React, { useState } from "react";
import "./App.css";
import Card from "./components/card/index";
import Input from "./components/input";
import Button from "./components/button";

function App() {
  const [totalBalance, setTotalBalance] = useState(0);
  const [text, setText] = useState("");
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [amount, setAmount] = useState(0);
  const [transaction, setTransaction] = useState([]);

  const handleTransc = () => {
    const newTransc = {
      id: Math.floor(Math.random() * 100),
      text: text,
      amount: amount,
    };

    setTransaction([newTransc, ...transaction]);
    setTotalBalance(totalBalance + Number(amount));
    if (amount < 0) {
      setExpense(expense + Number(amount));
    } else {
      setIncome(income + Number(amount));
    }
    setAmount(0);
    setText("");
  };
  const delTransc = (id, amount) => {
    const updatedtransc = transaction.filter((item) => item.id !== id);
    console.log(id);
    setTransaction(updatedtransc);
    setTotalBalance(totalBalance - Number(amount));
    amount < 0
      ? setExpense(expense - Number(amount))
      : setIncome(income - Number(amount));

    // by using if else
    // setTotalBalance(totalBalance - Number(amount));
    // if (amount < 0) {
    //   setExpense(expense - Number(amount));
    // } else {
    //   setIncome(income - Number(amount));
    // }
  };
  return (
    <div className="App">
      <Card>
        <h2 id="header">Expense Tracker</h2>
        <div className="expenses">
          <p>Your Balance</p>
          <h1>{totalBalance}</h1>
        </div>
        <div className="inc-exp">
          <div className="income">
            <p>Income</p>
            <h1>{income}</h1>
          </div>
          <div className="line"></div>
          <div className="expenses2">
            <p>Expenses</p>
            <h1>{expense}</h1>
          </div>
        </div>
        {transaction.length > 0 ? (
          <div className="history">
            <h2>History</h2>
            <hr />
            {transaction.map((trx, index) => (
              <div className="mrg-exp">
                <p>{trx.text}</p>
                <p>{trx.amount}</p>
                <Button
                  name="del"
                  className="del-btn"
                  type="submit"
                  onClick={() => delTransc(trx.id, trx.amount)}
                />
              </div>
            ))}
          </div>
        ) : (
          <h2>No data here!</h2>
        )}
        <div className="transaction">
          <h2>Add New Transaction</h2>
          <hr />
        </div>
        <div className="text">
          <p>Text</p>

          <Input
            className="styleInput"
            id="outlined-basic"
            label="filled"
            variant="filled"
            size="large"
            placeholder="Enter text"
            fullWidth
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <p>
            Amount <br />
            (negative-expense , positive-income.)
          </p>
          <Input
            id="outlined-basic"
            label="text"
            variant="filled"
            type="number"
            size="large"
            fullWidth
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="footer-btn">
          <Button
            name="Add Transaction"
            type="submit"
            className="btn"
            onClick={handleTransc}
          />
        </div>
      </Card>
    </div>
  );
}

export default App;
