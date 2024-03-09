import { useState } from "react";
import "./App.css";
import network from "../src/assets/svg/network.svg";

function App() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [option, setOption] = useState("");
  const [result, setResult] = useState("");

  function handleNumber(e) {
    console.log(!isNaN(e), "eeee");
    if (option == "") {
      if (!isNaN(e)) {
        return setNumber1((prev) => prev + e);
      }
      setNumber1(e.target.value);
    } else {
      if (!isNaN(e)) {
        return setNumber2((prev) => prev + e);
      }
      setNumber2(e.target.value);
    }
  }

  function handleOption(opt) {
    setOption(opt);
  }
  function handleClear() {
    setNumber1("");
    setNumber2("");
    setOption("");
    setResult("");
  }

  function handleOperation() {
    if (option === "+") {
      setResult(parseInt(number1) + parseInt(number2));
    } else if (option === "*") {
      setResult(parseInt(number1) * parseInt(number2));
    } else if (option === "-") {
      setResult(parseInt(number1) - parseInt(number2));
    } else if (option === "/") {
      setResult(parseInt(number1) / parseInt(number2));
    }
  }

  return (
    <div>
      <div className="w-96 bg-black rounded-3xl px-4 pt-3 pb-6 drop-shadow-2xl mx-auto">
        <div className="flex justify-between">
          <div className="text-white text-sm">9:41</div>
          <div className="text-white">
            <img src={network} alt="Network" />
          </div>
        </div>
        <div className="flex flex-row text-white">
          <p className="text-5xl">{number1}</p>
          <p className="text-5xl">{option}</p>
          <p className="text-5xl">{number2}</p>
          <p className="text-5xl">=</p>
          <p className="text-5xl">{result}</p>
        </div>
        {/* <input type="text" onChange={handleNumber} /> */}

        <div className="bg-slate-700 h-1 w-90 my-4"></div>

        <div className="text-4xl flex flex-wrap gap-4">
          <button
            className="bg-red-700 hover:bg-red-500 rounded-xl size-16 m-auto"
            onClick={handleClear}
          >
            <div className="text-slate-700 font-bold">C</div>
          </button>
          <button
            className="bg-slate-700 hover:bg-slate-500 rounded-xl size-16 m-auto"
            onClick={() => handleNumber(0)}
          >
            <div className="text-white ">0</div>
          </button>

          <button
            className="bg-slate-700 hover:bg-slate-500 rounded-xl size-16 m-auto"
            onClick={() => handleOption("*")}
          >
            <div className="text-green-500 ">*</div>
          </button>
          <button
            className="bg-slate-700 hover:bg-slate-500 rounded-xl size-16 m-auto"
            onClick={() => handleOption("+")}
          >
            <div className="text-green-500 ">+</div>
          </button>
          <button
            className="bg-slate-700 hover:bg-slate-500 rounded-xl size-16 m-auto"
            onClick={() => handleNumber(7)}
          >
            <div className="text-white ">7</div>
          </button>
          <button
            className="bg-slate-700 hover:bg-slate-500 rounded-xl size-16 m-auto"
            onClick={() => handleNumber(8)}
          >
            <div className="text-white ">8</div>
          </button>
          <button
            className="bg-slate-700 hover:bg-slate-500 rounded-xl size-16 m-auto"
            onClick={() => handleNumber(9)}
          >
            <div className="text-white ">9</div>
          </button>
          <button
            className="bg-slate-700 hover:bg-slate-500 rounded-xl size-16 m-auto"
            onClick={() => handleOption("-")}
          >
            <div className="text-green-500 ">-</div>
          </button>
          <button
            className="bg-slate-700 hover:bg-slate-500 rounded-xl size-16 m-auto"
            onClick={() => handleNumber(4)}
          >
            <div className="text-white ">4</div>
          </button>
          <button
            className="bg-slate-700 hover:bg-slate-500 rounded-xl size-16 m-auto"
            onClick={() => handleNumber(5)}
          >
            <div className="text-white ">5</div>
          </button>

          <button
            className="bg-slate-700 hover:bg-slate-500 rounded-xl size-16 m-auto"
            onClick={() => handleNumber(6)}
          >
            <div className="text-white ">6</div>
          </button>
          <button
            className="bg-slate-700 hover:bg-slate-500 rounded-xl size-16 m-auto"
            onClick={() => handleOption("/")}
          >
            <div className="text-green-500 ">/</div>
          </button>

          <button
            className="bg-slate-700 hover:bg-slate-500 rounded-xl size-16 m-auto"
            onClick={() => handleNumber(1)}
          >
            <div className="text-white ">1</div>
          </button>
          <button
            className="bg-slate-700 hover:bg-slate-500 rounded-xl size-16 m-auto"
            onClick={() => handleNumber(2)}
          >
            <div className="text-white ">2</div>
          </button>
          <button
            className="bg-slate-700 hover:bg-slate-500 rounded-xl size-16 m-auto"
            onClick={() => handleNumber(3)}
          >
            <div className="text-white ">3</div>
          </button>
          <button
            className="bg-green-700  hover:bg-green-500 rounded-xl size-16 m-auto"
            onClick={handleOperation}
          >
            <div className="text-slate-700">=</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
