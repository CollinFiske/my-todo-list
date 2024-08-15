import { useState } from "react";


export function TodoForm(props) {

    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault(); // stops page from refresing
        if (newItem === "") return
    
        props.onSubmit(newItem);
        setNewItem(""); // makes it "" after submit
      }

    return (
        <form onSubmit={handleSubmit}>
            <label>New Item: </label>
            <div>
                <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"/>
            </div>
                
            
            <button class="btn btn-info">Add</button>
        </form>
    )
    
}