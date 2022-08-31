import "./App.css";
import { BrowserRouter, useHistory } from "react-router-dom";
import Routes from "./routers/index";
function App() {
  const history = useHistory();
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
