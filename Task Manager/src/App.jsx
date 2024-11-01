import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [input, setinput] = useState("")
  const [list, setlist] = useState([])
  const [edit, setedit] = useState([])

  function handlechange(event) {
    setinput(event.target.value)
  }

  const AddTask = () => {
    setlist([...list, input])
    localStorage.setItem(list, input)
    setinput("")
  }

  const deletingitems = (currentvalue) => {
    const filteritems = list.filter((_, index) => index != currentvalue)
    setlist(filteritems)

  }
  const edittodo = (index) => {
    setinput(list[index]);
    setedit(index);
  };
  return (
    <>
      <div className='Main-Container'>
        <h2 className='Main-heading'>Task Manager</h2>
        <input placeholder='Enter Your Task !' onChange={handlechange} value={input}></input>
        <button onClick={AddTask}  >TODO</button>
        <ul>
          {list.map((value, index) => (
            <li key={index}><span className='Main-Text'>{value}</span>
              <button onClick={() => deletingitems(index)} className='Main-Delete'>Delete</button>
              <button className='Main-Update' onClick={()=>edittodo(index)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App



