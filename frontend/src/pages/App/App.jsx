import './App.css'
import { v4 as uuidv4 } from 'uuid'
import React, { useState, useEffect } from 'react'
import TodoList from '../../components/TodoList/TodoList'
import StravafitLibraryPage from '../StravafitLibraryPage/StravafitLibraryPage'
import WorkoutDetailsPage from '../WorkoutDetailsPage/WorkoutDetailsPage'
import MySavedWorkoutsPage from '../MySavedWorkoutsPage/MySavedWorkoutsPage'

function App () {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/api/mymodel/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <>
      {/* we will have nav bar, stravafitlibarypage, and footer here */}
      <TodoList />
      <StravafitLibraryPage />
      <WorkoutDetailsPage />
      <MySavedWorkoutsPage />
      <h1>My Data</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
