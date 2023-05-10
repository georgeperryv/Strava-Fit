import './App.css'
import React, { useState, useEffect } from 'react'
import TodoList from '../../components/TodoList/TodoList'

function App () {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/api/mymodel/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <main className='App'>
      <>
        <TodoList />
      </>
    </main>
  )
}

export default App
