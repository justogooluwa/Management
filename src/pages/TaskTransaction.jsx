// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, Textarea, Checkbox,CheckboxGroup} from "@nextui-org/react";

const TaskTransaction = () => {
    const [Taskid, setTaskid] = useState("");
    const [Fileid, setFileid] = useState("");
    const [Nextadjourndate, setNextadjourndate] = useState("");
    const [Staffid, setStaffid] = useState("");
    const [Startdate, setStartdate] = useState("");
    const [Timeline, setTimeline] = useState("");
    const [Timelinetype, setTimelinetype] = useState("");
    const [Completiondate, setCompletiondate] = useState("");
    
    // const [RemarkProgress, setRemarkProgress] = useState("");
    // const [Remarkdate, setRemarkdate] = useState("");
    // const [Nextaction, setNextaction] = useState("");
    // const [Taskapprvlevel, setTaskapprvlevel] = useState("");
    // const [Taskstatus, setTaskstatus] = useState("");
   // const [Taskdocimage, setTaskdocimage] = useState("");
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
    }

    const Staffidtrap = () => {
        const staff = document.querySelector("#staff");
        const staffid = staff.options[staff.selectedIndex].value;
        setStaffid(staffid);
    }

    const calculateCompletionDate = () => {
        if (Startdate && Timeline && Timelinetype) {
            let startDate = new Date(Startdate);
            let timelineValue = parseInt(Timeline);
            switch (Timelinetype) {
              case "day":
                  startDate.setDate(startDate.getDate() + timelineValue);
                  break;
              case "week":
                  startDate.setDate(startDate.getDate() + (timelineValue * 7));
                  break;
              case "month":
                  startDate.setMonth(startDate.getMonth() + timelineValue);
                  break;
              default:
                  break;
            }
            setCompletiondate(startDate.toISOString().split('T')[0]);
        }
    }

    useEffect(() => {
        calculateCompletionDate();
    }, [Startdate, Timeline, Timelinetype]);

    const AddTaskTransaction = (e) => {
        e.preventDefault();
     try{   axios.post("https://localhost:44326/api/Legal/AddTaskTrans", {
            Fileid,
            Taskid,
            Nextadjourndate,
            Staffid,
            Startdate,
            Timeline,
            Timelinetype,
            Completiondate
            // RemarkProgress,
            // Remarkdate,
            // Nextaction,
            // Taskapprvlevel,
            // Taskstatus,
           // Taskdocimage
        });
    }
    catch(err){
        console.error("error",err)
    }
    }

    return (
        <div className="container">
        <div className="title">CASE FILE TO DO ITEMS LIST SETUP</div>
        <form onSubmit={AddTaskTransaction} method="post">
          <div className="user-details">
          <div className="input-box">
              <span className="details">CASE</span>
             <select   id='file' onChange={Fileidtrap}   className='select'>
              <option>Select...</option>
              {filedata && filedata.map((file)=>(<option key={file.fileid} value={file.fileid}>{file.casetitle}</option>))}
             </select>
            </div>
          <div className="input-box">
              <span className="details">TODO</span>
             <select  id='task' onChange={Taskidtrap}className='select'>
              <option>Select...</option>
              {taskdata && taskdata.map((task)=>(<option key={task.taskid} value={task.taskid}>{task.taskname}</option>))}
             </select>
            </div>
            <div className="input-box">
              <span className="details"> NEXT ADJOURNED DATE</span>
              <input type="date" id="nextadjourndate" required onChange={(e) => setNextadjourndate(e.target.value)}/>
            </div>
            <div className="input-box">
              <span className="details">STAFF-ID</span>
             <select id='staff' onChange={Staffidtrap}  className='select'>
              <option>Select...</option>
              {staffdata && staffdata.map((staff)=>(<option key={staff.staffid} value={staff.staffid}>{staff.surname}</option>))}
             </select>
            </div>
            <div className="input-box">
              <span className="details">START DATE</span>
              <input  type="date" id="startdate"  placeholder='UPDATE DATE' required onChange={(e) => setStartdate(e.target.value)}/>
            </div>
            {/* <div className="gender-details">
          <input type="radio" name='gender' id='dot-1'/>
          <input type="radio" name='gender' id='dot-2'/>
          <input type="radio" name='gender' id='dot-3'/>
          <span className="gender-title">Timeline-Type</span>
          <div className="category" onChange={(e) => setTimelinetype(e[0])}>
            <label htmlFor='dot-1'>
              <span className="dot one"></span>
              <span className="gender">Day</span>
            </label>
            <label htmlFor='dot-2'>
              <span className="dot two"></span>
              <span className="gender">Week</span>
            </label>
            <label htmlFor='dot-3'>
              <span className="dot three"></span>
              <span className="gender">Month</span>
            </label>
          </div>
          </div> */}
            <div className="input-box">
              <span className="details">TIME LINE</span>
              <input type="number" id='timeline' placeholder='Enter your approval level' required  onChange={(e) => setTimeline(e.target.value)}/>
            </div>
            <div className="input-box">
              <span className="details">COMPLETION DATE</span>
              <input type="date" id="completion" placeholder='Enter your approval level' readOnly value={Completiondate}/>
            </div>
            </div>
          <div className="button">
            <input type="submit" value='Submit'  />
          </div>
        </form>
       </div>
        // <div className="flex items-center justify-center min-h-screen bg-gray-100">
        //     <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
        //         <h2 className="text-2xl font-bold text-center text-gray-700">CASE FILE TO DO ITEMS LIST SETUP</h2>
        //         <form onSubmit={AddTaskTransaction} method="post" className="space-y-4">
                   
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
        //                 <label htmlFor="staff" className="block mb-2 text-sm font-medium text-gray-600">Staff-ID:</label>
        //                 <select id='staff' onChange={Staffidtrap} className='w-full shadow-md py-2 rounded text-white'>
        //                     <option value="">Select...</option>
        //                     {staffdata && staffdata.map((staff) => (
        //                         <option key={staff.staffid} value={staff.staffid}>{staff.surname}</option>
        //                     ))}
        //                 </select>
        //             </div>

        //             <div>
        //                 <label htmlFor="startdate" className="block mb-2 text-sm font-medium text-gray-600">Start-Date:</label>
        //                 <input type="date" id="startdate" className='w-full py-2 rounded text-white' required onChange={(e) => setStartdate(e.target.value)} />
        //             </div>

        //             <div>
        //                 <label className="block mb-2 text-sm font-medium text-gray-600">Timeline-Type:</label>
        //                 <CheckboxGroup onChange={(e) => setTimelinetype(e[0])}>
        //                     <Checkbox value="D"><p id='day' className='text-black'>Day</p></Checkbox>
        //                     <Checkbox value="W"><p id='week' className='text-black'>Week</p></Checkbox>
        //                     <Checkbox value="M"><p id='month' className='text-black'>Month</p></Checkbox>
        //                 </CheckboxGroup>
        //             </div>

        //             <div>         
        //                 <label htmlFor="timeline" className="block mb-2 text-sm font-medium text-gray-600">Timeline:</label>
        //                 <Input type="number" id='timeline' className='w-full py-2 rounded text-black' required onChange={(e) => setTimeline(e.target.value)} />
        //             </div>

        //             <div>
        //                 <label htmlFor="completion" className="block mb-2 text-sm font-medium text-gray-600">Completion-Date:</label>
        //                 <input type="date" id="completion" className='w-full py-2 rounded text-white' readOnly value={Completiondate} />
        //             </div>

        //             <br />
        //             <input type='submit' className='px-4 mx-auto bg-black text-white rounded-lg py-2' value='Submit' />
        //         </form>
        //     </div>
        // </div>
    );
}

export default TaskTransaction;
