export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-yellow-200 to-pink-200 bg-clip-text text-transparent animate-pulse">
          Hello World
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-white/80">
          Welcome to URL1234.com
        </p>
        <div className="mt-8">
          <a 
            href="/kaleidoscope"
            className="inline-block px-8 py-4 bg-white/20 hover:bg-white/30 text-white rounded-full text-lg font-medium transition-all duration-300 backdrop-blur-sm border border-white/30 hover:scale-105"
          >
            Visit Kaleidoscope Project →
          </a>
        </div>
      </div>
    </div>
  );
}