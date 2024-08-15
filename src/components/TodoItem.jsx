export function TodoItem ({ completed, id, title, toggleTodo, deleteTodo}){

    return (
        
        <li class="list-group-item" key={id}>
            <label>
                <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)}/>
                {title}
            </label>
            <button class="btn btn-danger btn-sm" onClick={() => deleteTodo(id)}>Delete</button>
        </li>

    )
}