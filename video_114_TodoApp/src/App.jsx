import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './components/navbar'
import { v4 as uuidv4 } from 'uuid';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [todos, settodos] = useState([])
  const [todo, setTodo] = useState("");
  const [showFinished, setshowFinished] = useState(true)


  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      settodos(todos)
    }
  }, []);

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todosToSave))
  }

  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    settodos(newTodos)
    saveToLS(newTodos)
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    settodos(newTodos)
    saveToLS(newTodos)
  }

  const handleAdd = () => {
    settodos([...todos, { id: uuidv4(), todo: todo, isCompleted: false }])
    setTodo("")
    saveToLS()
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    settodos(newTodos)
    saveToLS()
  }



  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className='mx-auto h-150 w-250 bg-amber-400 border-4 p-4'>
          <input type="text" placeholder="Enter your task" onChange={handleChange} value={todo} className="w-3/4 p-4 border border-gray-400 rounded bg-amber-50 mt-8 " />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-2" onClick={handleAdd} disabled={todo.length <= 3}>Add</button>
          <p className="text-center mt-4  bg-blue-600 text-2xl">Todos</p>
          <div className="flex items-center gap-2 mt-4">
  <input type="checkbox" onChange={toggleFinished} checked={showFinished} id="showFinished" />
  <label htmlFor="showFinished">Show Finished</label>
</div>
          <div className="todos">
            {todos.length === 0 && <div className='m-5'>No Todos to display</div>}
            {todos.map(item => {
              return (showFinished || !item.isCompleted) && <div key={item.id} className="flex items-center mt-7">
                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} className="mx-2"/>
                <div key={item.id} className="flex items-center mt-7">
                  <div className="bg-amber-50 w-3/4 p-4 rounded"> {item.isCompleted ? <s>{item.todo}</s> : item.todo}
                  </div>
                  <button onClick={(e) => handleEdit(e, item.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-2">Edit</button>
                  <button onClick={(e) => handleDelete(e, item.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-2">Delete</button>
                </div>
              </div>
            })}
          </div>

        </div>
      </div>

      <footer className='flex flex-col items-center justify-center py-4 gap-2'>
  <p>Developed By Khuzaima Khalid</p>
  <div className='flex gap-4'>
    <a href="https://github.com/KhuzaimaKhalid" target="_blank" rel="noreferrer" className='text-blue-600 hover:underline'>
      GitHub
    </a>
    <a href="https://www.linkedin.com/in/khuzaima-khalid-71352529a/" target="_blank" rel="noreferrer" className='text-blue-600 hover:underline'>
      LinkedIn
    </a>
  </div>
</footer>

    </>
  )
}

export default App
