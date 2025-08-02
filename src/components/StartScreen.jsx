import React from "react";

export default function StartScreen({ numQue, dispatch }) {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16">
      <div className="text-center space-y-12 max-w-2xl mx-auto px-6">
        {/* Main heading with better spacing */}
        <div className="space-y-6">
          <h2 className="text-6xl sm:text-7xl font-bold text-white leading-tight tracking-tight">
            Welcome to React Quiz!
          </h2>
          <h3 className="text-2xl sm:text-3xl text-gray-300 leading-relaxed font-light">
            {numQue} questions to test your React mastery!
          </h3>
        </div>

        {/* Button with enhanced styling */}
        <div className="pt-8">
          <button
            className={
              "bg-white text-slate-900 rounded-2xl px-12 py-5 text-xl font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/20 border-2 border-transparent hover:border-white/20"
            }
            onClick={() => dispatch({ type: "start" })}
          >
            Let's Start
          </button>
        </div>
      </div>
    </div>
  );
}
