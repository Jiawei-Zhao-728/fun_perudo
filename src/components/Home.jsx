function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Perudo</h1>
      <p className="mb-8 text-lg text-gray-700">Welcome to the Perudo Game!</p>
      <a
        href="/lobby"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Start Game
      </a>
    </div>
  );
}

export default Home;
