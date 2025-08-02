export default function NextButton({ dispatch, answer }) {
  if (answer === null) return null;

  return (
    <div className="ive">
      <button
        className="bg-purple-700 border-2 border-amber-100 cursor-pointer fixed right-20 bottom-10 rounded-3xl py-1 px-2"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        NextButton
      </button>
    </div>
  );
}
