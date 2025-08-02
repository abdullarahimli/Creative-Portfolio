import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-black via-gray-900 to-indigo-900 text-white px-6">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute bg-white rounded-full opacity-50 animate-star twinkle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-lg text-center">
        <h1 className="text-[12rem] font-black tracking-tighter leading-none select-none text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-600 to-yellow-400 animate-gradient-x">
          404
        </h1>
        <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">
          Not Found
        </h2>
        <p className="mb-8 text-gray-300 text-lg">
          The page you are looking for is not here, but don't worry — we'll take you back home.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-600 to-yellow-400 text-white font-semibold shadow-lg hover:scale-105 transform transition"
        >
          Go to Home
        </button>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        .animate-star {
          animation-name: twinkle;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
