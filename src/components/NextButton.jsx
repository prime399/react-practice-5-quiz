export default function NextButton({
  dispatch,
  answer,
  QuestionIndex,
  numQue,
}) {
  if (answer === null) return null;

  if (QuestionIndex < numQue - 1) {
    return (
      <div className="ive">
        <button
          className="bg-purple-700 border-2 border-amber-100 cursor-pointer fixed right-20 bottom-10 rounded-3xl py-1 px-2"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      </div>
    );
  }

  if (QuestionIndex === numQue - 1)
    return (
      <div className="ive">
        <button
          className="bg-green-600 border-2 border-amber-100 cursor-pointer fixed right-20 bottom-10 rounded-3xl py-1 px-2"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      </div>
    );
}
