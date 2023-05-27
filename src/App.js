import logo from './logo.svg';
import './App.css';
import Sum from "./Sum"
import Minus from "./Minus"
import Multiplication from "./Multiplication"
import Division from "./Division"

function App() {
  let sum = 2 
  sum += 2

  return (
    <div className="App">
    <Sum a={2} b={3}>Sum</Sum>
    <Minus a={10} b={4}>Minus</Minus>
    <Multiplication a={5} b={3}>Multiplication</Multiplication>
    <Division a={27} b={3}>Division</Division>
    </div>
  );
}

export default App;
