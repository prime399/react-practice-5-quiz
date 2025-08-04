import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import PrevQuestion from "./components/PrevQuestion";
import FinishScr from "./components/FinishScr";

const initialState = {
  questions: [],
  //"loading", "error", "active", "finished", "ready"
  status: "loading",
  QuestionIndex: 0,
  answer: null,
  points: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      // console.log(`State: ${state}, action: ${action}`);
      return { ...state, questions: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error" };

    case "start":
      // console.log(`question: ${state.questions[0].question}`);
      return { ...state, status: "start" };

    case "newAnswer": {
      const question = state.questions[state.QuestionIndex];
      return {
        ...state,
        answer: action.payload,
        points:
          //Here "action.payload" is coming from state var from dispatcher fun and gets compared to
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }
    case "nextQuestion":
      return { ...state, QuestionIndex: state.QuestionIndex++, answer: null };

    case "prevQuestion":
      return { ...state, QuestionIndex: state.QuestionIndex-- };
    case "finish":
      return { ...state, status: "finished" };
    default:
      throw new Error("Unknown Event Received!");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { questions, status, QuestionIndex, answer, points } = state;

  const numQue = questions.length;
  const maxPossiblePoints = questions.reduce(
    (pre, curr) => pre + curr.points,
    0
  );

  useEffect(() => {
    try {
      async function getQuestion() {
        const response = await fetch("http://localhost:8000/questions");
        const questions = await response.json();
        console.log(questions);
        dispatch({ type: "dataReceived", payload: questions });
      }

      getQuestion();
    } catch (err) {
      dispatch({ type: "dataFailed" });
      console.error(err);
    }
  }, []);

  return (
    <div
      className={
        " bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900"
      }
    >
      <Header />
      <Main>
        <div className="text-center sm:py-12">
          {status == "loading" && <Loader />}
          {status == "dataFailed" && <Error />}
          {status == "ready" && (
            <StartScreen numQue={numQue} dispatch={dispatch} />
          )}
          {status == "start" && (
            <>
              <Question
                question={questions[QuestionIndex]}
                dispatch={dispatch}
                answer={answer}
                points={points}
                maxPossiblePoints={maxPossiblePoints}
                QuestionIndex={QuestionIndex}
                numQue={numQue}
              />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                QuestionIndex={QuestionIndex}
                numQue={numQue}
              />

              {QuestionIndex >= 1 && (
                <PrevQuestion
                  dispatch={dispatch}
                  QuestionIndex={QuestionIndex}
                />
              )}
            </>
          )}

          {status === "finished" && (
            <>
              <FinishScr />
            </>
          )}
        </div>
      </Main>
    </div>
  );
}

export default App;
