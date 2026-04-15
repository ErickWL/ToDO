import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Menu from './componentes/Menu'
import Home from './pages/Home'
import Tarefas from './pages/Tarefas'
import Sobre from './pages/Sobre'

function App() {
  const [tasks, setTasks] = useState([])

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home tasks={tasks} />} />
        <Route path="/tarefas" element={<Tarefas tasks={tasks} setTasks={setTasks} />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App