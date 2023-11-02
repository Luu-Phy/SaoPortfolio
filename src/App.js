import "./App.css"
import Banner from "./components/Banner"
import Experience from "./components/Experience&Education"
import Header from "./components/Header"
import Skills from "./components/Skills"
import Project from "./components/Project"

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <hr />
      <Skills />
      <hr />
      <Experience />
      <hr />
      <Project />
    </div>
  )
}

export default App
