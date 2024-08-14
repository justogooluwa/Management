// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Input} from "@nextui-org/react";

const TaskApproval = () => {
    const [Taskid,setTaskid] = useState(0)
    const [Fileid,setFileid] = useState(" ")
    const [Staffid,setStaffid] = useState(" ")
    const [Apprvlevel,setApprvlevel] = useState (0)
    const [taskdata,setTaskdata] = useState([])
    const [filedata,setFiledata] = useState([])
    const [staffdata,setStaffdata] = useState([])


  window.onload = async () =>{
    
    Promise.all([
      axios.get("https://localhost:44326/api/legal/getalltask")
     .then(response=>setTaskdata(response.data)),
      axios.get("https://localhost:44326/api/legal/GetAllCases")
      .then(response=>setFiledata(response.data)),
      axios.get("https://localhost:44326/api/legal/getallstaff")
      .then(response=>setStaffdata(response.data)),
    ])
  }
  
// const Gettask = async ()=>{
//   await  axios.get("https://localhost:44326/api/legal/getalltask")
//      .then(response=>setTaskdata(response.data))
// }

// const Getfile = async ()=>{
//   await  axios.get("https://localhost:44326/api/legal/GetAllCases")
//     .then(response=>setFiledata(response.data))
// }

// const Getstaff = async ()=>{
//   await  axios.get("https://localhost:44326/api/legal/getallstaff")
//     .then(response=>setStaffdata(response.data))
// }


// useEffect(()=>{
//     Getfile();
//     Gettask();
//     Getstaff();
// },[])

const Taskidtrap = ()=>{
    const task = document.querySelector("#task")
    const taskid = task.options [task.selectedIndex].value;
   setTaskid(taskid) 
}

const Fileidtrap = ()=>{
    const file = document.querySelector("#file")
    const fileid = file.options [file.selectedIndex].value;
   setFileid(fileid) 
}

const Staffidtrap = ()=>{
    const staff = document.querySelector("#staff")
    const staffid = staff.options [staff.selectedIndex].value;
    setStaffid(staffid) 
}
   

     const AddTaskModule =  (e)=>{ 
        e.preventDefault()
   try{
        axios.post("https://localhost:44326/api/Legal/AddTaskApprval",{
        
       Taskid : Taskid,
       Fileid : Fileid, 
       Staffid : Staffid,
       Apprvlevel : Apprvlevel,
       
      
      headers:{
        'Content-Type' : 'application/json',
  
        'Accept': 'application/json'
       },
    
         
        })
       }
       catch(err){
         console.error("error",err)
       }
 }
  return (
    <>
    <div className="container">
      <div className="title">TASK ENTRY</div>
      <form onSubmit={AddTaskModule} method="post">
        <div className="user-details">
        <div className="input-box">
            <span className="details">TASK-ID</span>
           <select  id='task' onChange={Taskidtrap}className='select'>
            <option>Select...</option>
            {taskdata && taskdata.map((task)=>(<option key={task.taskid} value={task.taskid}>{task.taskname}</option>))}
           </select>
          </div>
          <div className="input-box">
            <span className="details">FILE-ID</span>
           <select   id='file' onChange={Fileidtrap}   className='select'>
            <option>Select...</option>
            {filedata && filedata.map((file)=>(<option key={file.fileid} value={file.fileid}>{file.casetitle}</option>))}
           </select>
          </div>
          <div className="input-box">
            <span className="details">STAFF-ID</span>
           <select id='staff' onChange={Staffidtrap}  className='select'>
            <option>Select...</option>
            {staffdata && staffdata.map((staff)=>(<option key={staff.staffid} value={staff.staffid}>{staff.surname}</option>))}
           </select>
          </div>
          <div className="input-box">
            <span className="details">Approval Level</span>
            <input type="text" id='Apprvlevel' placeholder='Enter your approval level' required  onChange={(e)=>setApprvlevel(e.target.value)}/>
          </div>
          </div>
        <div className="button">
          <input type="submit" value='Submit'  />
        </div>
      </form>
     </div>
    {/* <div className="testbox">
        
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
             <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
               <h2 className="text-2xl font-bold text-center text-gray-700">TASK-ENTRY</h2>
        
       
            <div className="space-y-4">
             

        <form onSubmit={AddTaskModule} method="post">
          <div>
          <div className="item">
          <label htmlFor="name">Task-ID<span>*</span></label>
             <div className="name-item"></div>
            <select
             id='task'
             onChange={Taskidtrap}
             className='w-full shadow-md py-2 rounded text-white'
              required>

              
                      <option value="">Select...</option>
                 {taskdata && taskdata.map((task)=>(<option key={task.taskid} value={task.taskid}>{task.taskname}</option>))}
     
            </select>
            </div>
          </div>

          <div>
            <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-600">
             File-ID:
            </label>

            <select
              id='file'
              onChange={Fileidtrap}
              className='w-full shadow-md py-2 rounded text-white'>

                      <option value="" >Select....</option>
                      {filedata && filedata.map((file)=>(<option key={file.fileid} value={file.fileid}>{file.casetitle}</option>))}
               
            </select>
            
          </div>

          <div>
            <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-600">
             Staff-ID:
            </label>

            <select 
             id='staff'
             onChange={Staffidtrap}
             className='w-full shadow-md py-2 rounded text-white'>

                 
                      <option value="">Select...</option>
                      {staffdata && staffdata.map((staff)=>(<option key={staff.staffid} value={staff.staffid}>{staff.surname}</option>))}
              
            </select>
            
          </div>


          <div>
            <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-600">
             Approval-lvl:
            </label>
            <Input
            id='Apprvlevel'
             type="text" 
             required 
             onChange={(e)=>setApprvlevel(e.target.value)} />

          </div>
        <br />
        <div className='btn-block'>
      <button type='submit'  value='Submit'>SUBMIT</button>
      </div>
  </form>
      </div>
         </div>
            </div>
            </div> */}
    </>
  )
}

export default TaskApproval;
