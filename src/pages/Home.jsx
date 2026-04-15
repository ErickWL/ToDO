function Home({ tasks }) {
  const concluidas = tasks.filter(t => t.done).length
  
  return (
    <div>
      <h1>Atividade3 React Listas e Rotas</h1>
      <p>Total de tarefas: {tasks.length}</p>
      <p>Concluídas: {concluidas}</p>
      <p>Pendentes: {tasks.length - concluidas}</p>
    </div>
  )
}

export default Home