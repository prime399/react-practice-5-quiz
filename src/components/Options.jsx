import React from "react";

export default function Options({ question, dispatch, answer }) {
  return (
    <div className="grid grid-cols-2 gap-1">
      {question.options.map((option, i) => (
        <button
          key={i}
          className={`mx-2 my-1 mt-4 max-w-full px-4 py-2 justify-center rounded-2xl transition-transform duration-200 hover:scale-105
      ${
        answer === null
          ? "bg-purple-900 hover:bg-purple-700 text-white"
          : i === question.correctOption
          ? "bg-green-200 text-green-700 scale-105"
          : i === answer
          ? "bg-red-200 text-red-700 opacity-80"
          : "bg-purple-200 text-purple-700 opacity-70"
      }
    `}
          onClick={() => {
            if (answer === null) dispatch({ type: "newAnswer", payload: i });
          }}
          disabled={answer !== null}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
