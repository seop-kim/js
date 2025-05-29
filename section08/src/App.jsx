// CSS
import './App.css'

// Component
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List.jsx";

function App() {
  return (
      <div className="App">
        <Header/>
        <Editor/>
        <List/>
      </div>
  )
}

export default App
