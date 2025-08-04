import Options from "./Options";

export default function Question({
  question,
  dispatch,
  answer,
  points,
  maxPossiblePoints,
  QuestionIndex,
  numQue,
}) {
  // Calculate progress percentage
  const progress = ((QuestionIndex + 1) / numQue) * 100;

  console.log(question);

  return (
    <div className="flex flex-col">
      <h4 className="font-bold text-center">{question.question}</h4>
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 font-extrabold bg-purple-700 rounded-3xl px-4 py-2 shadow-2xl border-2 border-purple-300 z-10">
        Your Points: {points}/{maxPossiblePoints}
      </div>
      <div className="flex items-center justify-center">
        <div className="w-96 bg-gray-200 rounded-full h-3 my-4 ">
          <div
            className="bg-purple-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <p className="text-center font-bold text-sm">
        {QuestionIndex + 1}/{numQue}
      </p>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}
