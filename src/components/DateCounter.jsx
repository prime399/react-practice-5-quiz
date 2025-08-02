import { useReducer } from "react";

function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return { count: 0, step: 1 };
    default:
      throw new Error("Unkown Input Given!");
  }
}

function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  const initialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec", payload: 1 });
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({ type: "inc", payload: 1 });
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
    // setStep(Number(e.target.value));
  };

  const reset = function () {
    // setCount(0);
    // setStep(1);
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
        Date Counter
      </h2>

      {/* Step Control */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Step: <span className="text-blue-600 font-semibold">{step}</span>
        </label>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0</span>
          <span>10</span>
        </div>
      </div>

      {/* Count Control */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Count
        </label>
        <div className="flex items-center space-x-3">
          <button
            onClick={dec}
            className="w-12 h-12 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full transition-colors duration-200 flex items-center justify-center shadow-md"
          >
            −
          </button>
          <input
            value={count}
            onChange={defineCount}
            className="flex-1 text-center text-lg font-semibold py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200"
          />
          <button
            onClick={inc}
            className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-colors duration-200 flex items-center justify-center shadow-md"
          >
            +
          </button>
        </div>
      </div>

      {/* Date Display */}
      <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
        <p className="text-center text-lg font-semibold text-gray-800">
          📅 {date.toDateString()}
        </p>
      </div>

      {/* Reset Button */}
      <div className="text-center">
        <button
          onClick={reset}
          className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
export default DateCounter;
