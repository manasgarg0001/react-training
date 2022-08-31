import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button";

function App() {
  return (
    <div className="App">
      <div>
        <p>add ToDo</p>
        <input className="input"></input>
      </div>
      <p>no tasks added yet</p>
      <Button name="save" />
      <Button name="delete" />
      <Button name="edit" />
    </div>
  );
}

export default App;
