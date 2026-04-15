import ToDo from '../componentes/ToDo'

function Tarefas({ tasks, setTasks }) {
  return (
    <div>
      <h2>Minhas Tarefas</h2>
      <ToDo tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default Tarefas