/* TASK component ListOfNames
Create a simple React component that displays a list of names. 
The component should have an input field that allows the user to add new names to the list,
and a button that allows the user to remove the last name from the list.

When a new name is added to the list, it should be displayed at the bottom of the list. 
If the input field is empty or contains only whitespace when the user clicks the "Add" button, 
the component should display an error message below the input field.
*/
import { useState } from "react";

export function ListOfNames(props){
    const [names, setNames] = useState(['Radek','Danny','Peter']);
    const [newName, setNewName] = useState('');
    const [errorMessage,setErrorMessage] = useState('');
    
    const handleChange = (event)=>{
        setNewName(event.target.value);
    }

    const handleRemoveName = ()=>{
        if(names.length>0) {
          setNames(names.slice(0,-1));
        }
    }

    const handleAddName = ()=>{
        const trimmedName = newName.trim();
        if(trimmedName === ''){
            setErrorMessage('Name is empty')
        } else {
            setNames([...names,trimmedName])
            setErrorMessage('');
        }
    }

    return(
      <div>
        <input type="text" value={newName} placeholder="Add to list" onChange={handleChange}></input><button onClick={handleAddName}>Add</button>
        <div id="errorMessage">{errorMessage}</div>

        <ul id="userList">
         {names.map((name,index)=>(
            <li key={index}>{name}</li>
            )
         )}
        </ul>
        <button onClick={handleRemoveName}>Remove last</button>
    </div>
    )
  }