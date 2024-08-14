import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, Textarea, Checkbox,CheckboxGroup} from "@nextui-org/react";

const TaskMovement= () => {
    const [Taskid, setTaskid] = useState("");
    const [Fileid, setFileid] = useState("");
    const [Nextadjourndate, setNextadjourndate] = useState("");
    const [Staffid, setStaffid] = useState("");
    const [Tasktransid, setTasktransid] = useState("");
    const [Taskupdatedate, setTaskupdatedate] = useState("");
    const [Taskupdatecomment, setTaskupdatecomment] = useState("");
    const [Nextstaff, setNextstaff] = useState("");
    const [Taskdocimage, setTaskdocimage] = useState("");

    // const [RemarkProgress, setRemarkProgress] = useState("");
    // const [Remarkdate, setRemarkdate] = useState("");
    // const [Nextaction, setNextaction] = useState("");
    // const [Taskapprvlevel, setTaskapprvlevel] = useState("");
    // const [Taskstatus, setTaskstatus] = useState("");
   
    const [taskdata, setTaskdata] = useState([]);
    const [filedata, setFiledata] = useState([]);
    const [staffdata, setStaffdata] = useState([]);
   
    window.onload=()=>{
     Promise.all([
            axios.get("https://localhost:44326/api/legal/GetAllCases")
                .then(response => setFiledata(response.data)),
                axios.get("https://localhost:44326/api/legal/getalltask")
                .then(response => setTaskdata(response.data)),
                axios.get("https://localhost:44326/api/legal/getallstaff")
                .then(response => setStaffdata(response.data))
           
     ])
    }

   

    const Taskidtrap = () => {
        const task = document.querySelector("#task");
        const taskid = task.options[task.selectedIndex].value;
       
        setTaskid(taskid);
       
    }

    const Fileidtrap = () => {
        const file = document.querySelector("#file");
        const fileid = file.options[file.selectedIndex].value;
        setFileid(fileid);
        // const mstaffid=" 0001";
        // axios.get('https://localhost:44326/api/legal/GetTaskCaseId/${Fileid}/${mstaffid}')
        // .then(response => setTaskdata(response.data))
    }

    const Staffidtrap = () => {
        const staff = document.querySelector("#staff");
        const staffid = staff.options[staff.selectedIndex].value;
        setNextstaff(staffid);
    }

   

    const AddToDoRecord = (e) => {
        e.preventDefault();
     try{   axios.post("https://localhost:44326/api/Legal/AddToDoTrans", {
            
        Taskid, 
        Fileid, 
        Nextadjourndate, 
        Staffid, 
        Tasktransid, 
        Taskupdatedate, 
        Taskupdatecomment, 
        Nextstaff, 
        Taskdocimage,
        
        
        
        });
    }
    catch(err){
        console.error("error",err)
    }
    }

    return (
        <div className="container">
        <div className="title">CASE FILE TO DO ACTIVITIES/FINDINGS ENTRY</div>
        <form onSubmit={AddToDoRecord} method="post">
          <div className="user-details">
            <div className="input-box">
              <span className="details">TRANSACTION-ID</span>
              <input type="text"   placeholder='Enter TRANSACTION-ID' required  onChange={(e) => setTasktransid(e.target.value)} />
            </div>
            <div className="input-box">
              <span className="details">CASE</span>
             <select  onChange={Fileidtrap} id='file' className='select'>
              <option>Select...</option>
              {filedata && filedata.map((file) => (<option key={file.fileid} value={file.fileid}>{file.casetitle}</option>))}
             </select>
            </div>
            <div className="input-box">
              <span className="details">TODO</span>
             <select  id='task' onChange={Taskidtrap} className='select'>
              <option>Select...</option>
              {taskdata && taskdata.map((task) => (
            <option key={task.taskid} value={task.taskid}>{task.taskname}</option>))}
             </select>
            </div>
            <div className="input-box">
              <span className="details">TRANSACTION-ID</span>
              <input type="text"   placeholder='Enter TRANSACTION-ID' required  onChange={(e) => setTasktransid(e.target.value)} />
            </div>
            <div className="input-box">
              <span className="details"> NEXT ADJOURNED DATE</span>
              <input type="date" id="nextadjourndate" required onChange={(e) => setNextadjourndate(e.target.value)}/>
            </div>
            <div className="input-box">
              <span className="details">NEXT ACTION STAFF</span>
             <select    id='staff' onChange={Staffidtrap} className='select'>
              <option>Select...</option>
              {staffdata && staffdata.map((staff) => (
                <option key={staff.staffid} value={staff.staffid}>{staff.surname}</option>))}
             </select>
            </div>
            <div className="input-box">
              <span className="details">FINDINGS</span>
              <input type="text" id="taskupdatecomment"   placeholder='Enter Findings' required onChange={(e) => setTaskupdatecomment(e.target.value)} />
            </div>
            <div className="input-box">
              <span className="details">UPDATE DATE</span>
              <input type="date" id="startdate" placeholder='UPDATE DATE' required onChange={(e) => setTaskupdatedate(e.target.value)}/>
            </div>
            <div className="input-box">
              <span className="details">SUPPORT DOCUMENT</span>
              <input type="file" id="taskdocimage" placeholder='UPDATE DATE' required onChange={(e) => setTaskdocimage(e.target.value)}/>
            </div>
            </div>
          <div className="button">
            <input type="submit" value='Submit'  />
          </div>
        </form>
       </div>

        // <div className="flex items-center justify-center min-h-screen bg-gray-100">
        //     <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
        //         <h2 className="text-2xl font-bold text-center text-gray-700">CASE FILE TO DO ACTIVITIES/FINDINGS ENTRY</h2>
        //         <form onSubmit={AddToDoRecord} method="post" className="space-y-4">
                   
        //         <div>
        //                 <label htmlFor="remarkprogress" className="block mb-2 text-sm font-medium text-gray-600">Transaction Id:</label>
        //                 <input type='text' className='w-full py-2 rounded text-white' required onChange={(e) => setTasktransid(e.target.value)}  />
        //         </div>



        //         <div>
        //                 <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-600">CASE:</label>
        //                 <select id='file' onChange={Fileidtrap} className='w-full shadow-md py-2 rounded text-white'>
        //                     <option value="">Select...</option>
        //                     {filedata && filedata.map((file) => (
        //                         <option key={file.fileid} value={file.fileid}>{file.casetitle}</option>
        //                     ))}
        //                 </select>
        //             </div>
                   
                   
        //             <div>
        //                 <label htmlFor="task" className="block mb-2 text-sm font-medium text-gray-600">To Do:</label>
        //                 <select id='task' onChange={Taskidtrap} className='w-full shadow-md py-2 rounded text-white'>
        //                     <option value="">Select...</option>
        //                     {taskdata && taskdata.map((task) => (
        //                         <option key={task.taskid} value={task.taskid}>{task.taskname}</option>
        //                     ))}
        //                 </select>
        //             </div>

                   

        //             <div>
        //                 <label htmlFor="nextadjourndate" className="block mb-2 text-sm font-medium text-gray-600">Next-Adjourned-Date:</label>
        //                 <input type="date" id="nextadjourndate" className='w-full py-2 rounded text-white' required onChange={(e) => setNextadjourndate(e.target.value)} />
        //             </div>

        //             <div>
        //                 <label htmlFor="staff" className="block mb-2 text-sm font-medium text-gray-600">Next Action Staff:</label>
        //                 <select id='staff' onChange={Staffidtrap} className='w-full shadow-md py-2 rounded text-white'>
        //                     <option value="">Select...</option>
        //                     {staffdata && staffdata.map((staff) => (
        //                         <option key={staff.staffid} value={staff.staffid}>{staff.surname}</option>
        //                     ))}
        //                 </select>
        //             </div>
                    
        //             <div>
        //                 <label htmlFor="taskupdatecomment
        //                     "className="block mb-2 text-sm font-medium text-gray-600">Findings:</label>
        //                 <Textarea id="taskupdatecomment" className='w-full py-2 rounded text-black' required onChange={(e) => setTaskupdatecomment(e.target.value)} />
        //             </div>
                    
        //             <div>
        //                 <label htmlFor="startdate" className="block mb-2 text-sm font-medium text-gray-600">Update Date:</label>
        //                 <input type="date" id="startdate" className='w-full py-2 rounded text-white' required onChange={(e) => setTaskupdatedate(e.target.value)} />
        //             </div>

        //              <div>
        //                 <label htmlFor="taskdocimage" className="block mb-2 text-sm font-medium text-gray-600">Support Document:</label>
        //                 <input type="file" id="taskdocimage" className='w-full py-2 rounded text-black' onChange={(e) => setTaskdocimage(e.target.value)} />
        //             </div> 

        //             <br />
        //             <input type='submit' className='px-4 mx-auto bg-black text-white rounded-lg py-2' value='Submit' />
        //         </form>
        //     </div>
        // </div>
    );
}

export default TaskMovement;
