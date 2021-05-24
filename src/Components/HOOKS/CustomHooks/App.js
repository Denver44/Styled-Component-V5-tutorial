import Random from "./Components/CustomHooks/components/Random_V2";
import Tag from "./Components/CustomHooks/components/Tag_V2";
import "./Components/CustomHooks/styles/index.css";
function App() {
  return (
    <div className="App">
      <h1>Random GIF Applications</h1>
      <div className="main-container">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
