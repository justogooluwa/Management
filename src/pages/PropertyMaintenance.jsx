
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Input,Textarea} from "@nextui-org/react";

const PropertyMaintenance = () => {
    const [Propid,setPropid] = useState(" ")
    const [Flatid,setFlatid] = useState(" ")
    const [Mainttype,setMainttype] = useState(" ")
    const [Maintdesc,setMaintdesc] = useState (" ")
    const [Maintdate,setMaintdate] = useState(" ")
    const [Maintcost,setMaintcost] = useState(" ")
   


// const Getstaff = ()=>{
//     axios.get("https://localhost:44326/api/legal/getallclient")
//     .then(response=>setClientdata(response.data))
// }


useEffect(()=>{
   // Getstaff;
},[])

// const Taskidtrap = ()=>{
//     const task = document.querySelector("#task")
//     const taskid = task.options [task.selectedIndex].value;
//    setTaskid(taskid) 
// }

// const Fileidtrap = ()=>{
//     const file = document.querySelector("#file")
//     const fileid = file.options [file.selectedIndex].value;
//    setFileid(fileid) 
// }

// const Staffidtrap = ()=>{
//     const staff = document.querySelector("#staff")
//     const staffid = staff.options [staff.selectedIndex].value;
//     setStaffid(staffid) 
// }
       
     const AddPropertyMaintenance =(e)=>{ 
        e.preventDefault()
        axios.post("https://localhost:44326/api/Legal/AddPropertyMaster",{
         Propid,
         Flatid,
         Mainttype,
         Maintdesc,
         Maintdate,
         Maintcost
        })
    }

  return (
    <>
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
         <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-700">PROPERTY MAINTENANCE</h2>
        
       
          <div className="space-y-4">

<form onSubmit={AddPropertyMaintenance}  method="post">
  <div>
    <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-600">
     Property-ID:
    </label>
    <Input
    type="text" 
    required 
    label="Property-ID" onChange={(e)=>setPropid(e.target.value)} />

  </div>


  <div>
    <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-600">
     Flat-id:
    </label>

    <Input
    type="text" 
    required 
    label="Flat-id" onChange={(e)=>setFlatid(e.target.value)} />
  </div>

  <div>
    <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-600">
   Maintenance-Type
    </label>

    <Input
     type="text" 
     required 
     label="Maintenance-Type" onChange={(e)=>setMainttype(e.target.value)} />
  </div>
   


  <div>
    <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-600">
    Maintenance-Description:
    </label>

    <Textarea
       onChange={(e)=>setMaintdesc(e.target.value)}
       placeholder="Enter your description"
       className="max-w-xs"
       
    />
  </div>

  <div>
    <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-600">
    Maintenance-Date:
    </label>

    <input
     type='date'
     required 
     onChange={(e)=>setMaintdate(e.target.value)} />
  </div> 
  

  <div>
    <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-600">
      Maintenance-Cost:
    </label>
    <Input
       onChange={(e)=>setMaintcost(e.target.value)}
       placeholder="Total-cost"
       className="max-w-xs"
       
    />
</div>

        <br />
      <input type='submit'  className='px-4 mx-auto bg-black text-white rounded-lg py-2' value='Submit'/>
  </form>
      </div>
         </div>
            </div>
    </>
  )
}

export default PropertyMaintenance;
