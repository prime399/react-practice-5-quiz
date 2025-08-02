import React from "react";

export default function Main({ children }) {
  return (
    <main className="relative flex-1 px-6 sm:px-8 lg:px-12 py-12 flex items-center justify-center ">
      {/* Background decorative elements - more subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-4 w-48 h-48 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-32 right-8 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-indigo-500/5 to-blue-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 right-1/3 w-24 h-24 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

      {/* Content container with modern styling - centered */}
      <div className="w-full max-w-5xl mx-auto">
        <div className="glass-strong rounded-3xl p-8 sm:p-12 lg:p-14 border border-white/10 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-center">{children}</div>
        </div>
      </div>
    </main>
  );
}
