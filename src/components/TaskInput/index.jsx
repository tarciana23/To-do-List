import {useState} from  'react'

import {Form} from './styles'

export function TaskInput({onAddTask}){
    const [input,setInput] = useState("");

   const handleSubmit = (e) =>{
    e.preventDefault()//evita que o form recarregue da maneira tradicional

    if (input.trim()) {
        console.log(input);
        onAddTask(input);
        setInput("");
        // se tiver texto, ele passa para a função a nova task a ser adicionada
        // depois disso, limpa o texto do input
    }
   }
    return(
       <Form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Adicione uma nova tarefa"
            />
            <button type="submit">Adicionar</button>
       </Form>
    )
}