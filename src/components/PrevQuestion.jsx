export default function PrevQuestion({ dispatch }) {
  return (
    <div className="">
      <button
        className="bg-purple-700 border-2 border-amber-100 cursor-pointer fixed left-20 bottom-10 rounded-3xl py-1 px-2"
        onClick={() => dispatch({ type: "prevQuestion" })}
      >
        Previous
      </button>
    </div>
  );
}
