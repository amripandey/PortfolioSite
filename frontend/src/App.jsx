function App() {

  return (
    <main className="bg-stone-950 w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <div className="text-6xl text-white font-extrabold font-mono">
          <h1>Hi</h1>
          <h2>I'm Amrit Pandey</h2>
        </div>

        <nav className="flex w-full h-fit justify-between items-center text-white text-xl font-sans mt-12">
          <h3 className="NavHover">ABOUT ME</h3>
          <h3 className="NavHover">PROJECTS</h3>
          <h3 className="NavHover">BLOGS</h3>
          <h3 className="NavHover">BOOKS</h3>
          <h3 className="NavHover">RESUME</h3>
        </nav>
      </div>
    </main>
  )
}

export default App
