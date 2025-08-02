function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-md w-full max-w-md p-6 text-center">
        <img
          src="https://via.placeholder.com/120"
          alt="Profile"
          className="rounded-full mx-auto mb-4 border-4 border-blue-300"
        />
        <h1 className="text-2xl font-bold mb-2">Seema</h1>
        <p className="text-gray-600 mb-4">
          Frontend Developer learning React and Tailwind CSS. I love building simple UIs!
        </p>
        <h2 className="text-lg font-semibold mb-2">Skills:</h2>
        <ul className="text-gray-700 mb-4">
          <li>🌟 HTML</li>
          <li>🌟 CSS</li>
          <li>🌟 JavaScript</li>
          <li>🌟 React</li>
          <li>🌟 Tailwind CSS</li>
        </ul>
        <h2 className="text-lg font-semibold mb-2">Find me on:</h2>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/yourgithub" className="text-blue-600 hover:underline" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/yourlinkedin" className="text-blue-600 hover:underline" target="_blank">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

export default App;
