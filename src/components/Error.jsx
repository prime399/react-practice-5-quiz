function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] p-8">
      <div className="glass-strong rounded-2xl p-8 max-w-md w-full text-center border border-red-500/20">
        {/* Error Icon */}
        <div className="relative mx-auto mb-6">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-3xl">💥</span>
          </div>
          <div className="absolute inset-0 w-16 h-16 bg-red-500/30 rounded-full blur-xl animate-pulse"></div>
        </div>

        {/* Error Message */}
        <h3 className="text-xl font-bold text-white mb-2">
          Oops! Something went wrong
        </h3>
        <p className="text-red-400/90 text-center leading-relaxed">
          There was an error fetching questions. Please check your connection
          and try again.
        </p>

        {/* Retry Button */}
        <button
          className="mt-6 px-6 py-3 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 active:scale-95"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

export default Error;
