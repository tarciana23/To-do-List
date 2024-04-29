import {useState,useEffect} from 'react'

import {Container} from './styles'

import { TaskInput } from '../../components/TaskInput'
import { TaskList } from '../../components/TaskList'

export function Principal() {

  /*esse state guarda os valores das taks, pegando as que estão
  no localStorage: primeiro transforma para um array de objetos.
  Caso não tenha nenhum dado no localStorage o estado da task inicia como um
  array vazio */
  const[tasks,setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []);

  /*Toda vez que a variável tasks for alterada, será passado para
  o local storage o seu valor. Antes de passar transformo o arrau de objetos
  em  string. Porque o localStorage só aceita strings */
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])



  function addTask(task){
    setTasks([...tasks,{id:Date.now(),text:task,done:false}])
  }

  function deleteTask(taskId){
    setTasks(tasks.filter(task=> task.id !== taskId));
  }

  function toggleTaskDone(taskId){
    console.log("aqui",taskId)
    setTasks(tasks.map(task => task.id === taskId ? {...task, done: !task.done} : task))
    // quando eu faço !task.done estou alterando o status ao contrário
  }

 return(
  <Container>
      <h1>Lista de Tarefas</h1>
      <TaskInput onAddTask = {addTask}/>
      <TaskList tasks ={tasks} onDeleteTask={deleteTask} onToggleTaskDone ={toggleTaskDone}/>
  </Container>
 
  
 )
}