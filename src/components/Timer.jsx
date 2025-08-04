import React, { useEffect } from "react";

export default function Timer({ dispatch, secondsRemaining }) {
  useEffect(() => {
    const id = setInterval(() => dispatch({ type: "tick" }), 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="bg-purple-700 font-white font-bold max-w-fit px-4 py-2 rounded-3xl opacity-70   ">
        Time Remaining:- {secondsRemaining}s
      </div>
    </div>
  );
}
