// eslint-disable-next-line no-unused-vars
import React from 'react'
import Sidebar from './components/Navbar'
import Client from './pages/Client'
import Cases from './pages/Cases'
import Staff from './pages/Staff'
import {Routes,Route} from 'react-router-dom'
import TaskApproval from './pages/TaskApproval'
import Task from './pages/Task'
import TaskTransaction from './pages/TaskTransaction'
import TaskMovement from './pages/TaskMovement'
import Header from './components/Header'
import './App.css'


const App = () => {
  return (
    <>
         <main className="dark ">
          <div className='app-container'>
            <Sidebar/>
            <div className="main-content">
            <Header/>
            <div className="case-registration">
            <Routes>         
              <Route path="/" Component={Client} />
              <Route path="/todo" Component={Task} />
              <Route path="/cases"  Component={Cases} />
              <Route path="/staff" Component={Staff} />
              <Route path='/taskapprv' Component={TaskApproval}/>
              <Route path='/tasktrans' Component={TaskTransaction}/>
              <Route path='/taskmove' Component={TaskMovement}/>
            </Routes>
            </div>
            </div>
            </div>
         </main>
    </>

  )
}

export default App
