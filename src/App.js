import "./App.css";
import Header from "./Components/HeaderMenu.js";
import Info from "./Components/Info.js";
import Footer from "./Components/Footer.js";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Info />
      <Footer />
    </div>
  );
}

function AddItem(props) {
  const smth = props.text;
  let wtf = "This is random text...";
  wtf = props.number + " For " + props.text;

  return (
    <form>
      <h2>{wtf}</h2>
      <label for="text-form">Type something: </label>
      <input id="text-form" value={smth} type="text" />
    </form>
  );
}

AddItem.defaultProps = {
  number: 3,
};

export default App;
