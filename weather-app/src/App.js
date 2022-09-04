import logo from "./logo.svg";
import "./App.css";
import Search from "./components/search/search";
function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
