import {Container,Paragrafo} from './styles'

import {Task} from '../Task'

export function TaskList({tasks,onDeleteTask,onToggleTaskDone}){

    return(
        (tasks.length> 0) ?
        <Container>
               {tasks.map((task) =>(
                <Task 
                    key={task.id}
                    task={task} 
                    onDelete={() => onDeleteTask(task.id)}
                    onToggleDone = {()=>onToggleTaskDone(task.id)}    
                />
            ))}
        </Container>
         : <Paragrafo> Não há tarefas cadastradas!</Paragrafo>

    ) 
}