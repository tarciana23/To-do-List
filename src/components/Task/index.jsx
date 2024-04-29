import {Container} from './styles'

export function Task({task,onDelete,onToggleDone}){

    return (
        <Container>
              <span 
            onClick={onToggleDone}  
            style = {{textDecoration: task.done ? "line-through" : "none"}}
        >
        {task.text}
        </span>
        <button onClick={onDelete}> Remover</button>

        </Container>
      
    )

}