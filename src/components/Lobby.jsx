function Lobby() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Game Lobby</h2>
      <p className="mb-8 text-gray-700">Set up your game here.</p>
      <a
        href="/game"
        className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Enter Game
      </a>
    </div>
  );
}

export default Lobby;
