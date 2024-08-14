// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react'
import axios from 'axios'
import {Input} from "@nextui-org/react"



const Task = () => {
     const [Taskid,setTaskid] = useState("")
     const [Taskname,setTaskname] = useState(" ")
     const [Apprvlevel,setApprvlevel] = useState ("")

     const AddTask =(e)=>{ 
        e.preventDefault()
        axios.post("https://localhost:44326/api/Legal/AddTodo",{
         Taskid : Taskid,
         Taskname : Taskname,
         Apprvlevel : Apprvlevel
        })

        
    }
  return (
    <>
       
     <div className="container">
      <div className="title">TASK ENTRY</div>
      <form onSubmit={AddTask} method="post">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Task-ID</span>
            <input type="text" placeholder='Enter Task-ID' required  onChange={(e)=>setTaskid(e.target.value)}/>
          </div>
          <div className="input-box">
            <span className="details">Task-Name</span>
            <input type="text" placeholder='Enter Task-Name' required onChange={(e)=>setTaskname(e.target.value)} />
          </div>
          <div className="input-box">
            <span className="details">Approval Level</span>
            <input type="text" placeholder='Enter Approval Level' required  onChange={(e)=>setApprvlevel(e.target.value)}/>
          </div>
          </div>
          {/* <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="text" placeholder='Enter your name' required />
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input type="text" placeholder='Enter your name' required />
          </div>
          <div className="input-box">
            <span className="details">Confirm Password</span>
            <input type="text" placeholder='Enter your name' required />
          </div>
        </div>
        <div className="gender-details">
          <input type="radio" name='gender' id='dot-1'/>
          <input type="radio" name='gender' id='dot-2'/>
          <input type="radio" name='gender' id='dot-3'/>
          <span className="gender-title">Gender</span>
          <div className="category">
            <label htmlFor='dot-1'>
              <span className="dot one"></span>
              <span className="gender">Male</span>
            </label>
            <label htmlFor='dot-2'>
              <span className="dot two"></span>
              <span className="gender">Female</span>
            </label>
            <label htmlFor='dot-3'>
              <span className="dot three"></span>
              <span className="gender">Prefer not to say</span>
            </label>
          </div>
        </div> */}
        <div className="button">
          <input type="submit" value='Submit'  />
        </div>
      </form>
     </div>



    



    
      {/* <div className="">
        <h2 className="">TASK ENTRY</h2>
        <form onSubmit={AddTask} method="post" className="">
          <div className='field'>
            <label htmlFor="field1" className="">
             Task-ID:
            </label>
            <Input
            type="text" 
            required 
            onChange={(e)=>setTaskid(e.target.value)} />

         <label htmlFor="field1" className="">
             Task-Name:
            </label>
            <Input
            type="text" 
            required 
            onChange={(e)=>setTaskname(e.target.value)} />

          </div>

          <div>
            <label htmlFor="field1" className="">
             Approval-level:
            </label>
            <Input
            type="text" 
            required 
            onChange={(e)=>setApprvlevel(e.target.value)} />

          </div>
          <br />
          <input type='submit'  className='' value='Submit'/>
          </form>
     </div> */}
    </>
  )
}

export default Task;
