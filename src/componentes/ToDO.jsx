import { useState } from 'react'

function ToDo({ tasks, setTasks }) {
  const [input, setInput] = useState('')
  
  const addTask = () => {
    const text = input.trim()
    if (!text) return
    setTasks(prev => [...prev, { id: Date.now(), text, done: false }])
    setInput('')
  }
  
  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(t => t.id === id ? { ...t, done: !t.done } : t)
    )
  }
  
  const removeTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }
  
  return (
    <div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && addTask()}
        placeholder="Nova tarefa..."
      />
      <button onClick={addTask}>Adicionar</button>
      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => toggleTask(t.id)}
            />
            <span style={{ textDecoration: t.done ? 'line-through' : 'none' }}>
              {t.text}
            </span>
            <button onClick={() => removeTask(t.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDo