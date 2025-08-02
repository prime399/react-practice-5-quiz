import reactLogo from "../assets/react.svg";

function Header() {
  return (
    <header className="relative py-2 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900/90 to-slate-900 border-b border-white/10">
      {/* Background Pattern - Subtle dots */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:20px_20px]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="flex items-center justify-center space-y-8">
          {/* React Logo with modern glow effect */}

          <div className=" bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse-glow"></div>
          <img
            src={reactLogo}
            alt="React logo"
            className="w-8 h-auto sm:w-10 sm:h-10 md:w-12 md:h-12 animate-spin-slow filter drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
          />

          {/* Title with modern gradient */}
          <div className="text-center  px-4">
            <h1 className=" text-xl sm:text-5xl md:text-6xl lg:text-3xl font-black tracking-tight">
              <span className=" text-white text-4xl bg-clip-text">
                THE REACT QUIZ
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-1/4 right-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
    </header>
  );
}

export default Header;
