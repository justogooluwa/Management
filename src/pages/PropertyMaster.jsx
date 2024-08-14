// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Input,Textarea} from "@nextui-org/react";

const PropertyMaster = () => {
    const [Propid,setPropid] = useState(" ")
    const [Proploc,setProploc] = useState(" ")
    const [PropAddr,setPropAddr] = useState(" ")
    const [Clientid,setClientid] = useState (" ")
    const [Registdate,setRegistdate] = useState(" ")
    const [Propdesc,setPropdesc] = useState(" ")
    const [Remark,setRemark] = useState(" ")
    // const [Clientdata,setClientdata] = useState([])



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
       
     const AddPropertyMaster =(e)=>{ 
        e.preventDefault()
        axios.post("https://localhost:44326/api/Legal/AddPropertyMaster",{
         Propid,
         Proploc,
         PropAddr,
         Clientid,
         Registdate,
         Propdesc,
         Remark
        })
    }

  return (
    <>
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
         <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-700">PROPERTY-MASTER</h2>
        
       
          <div className="space-y-4">

<form onSubmit={AddPropertyMaster}  method="post">
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
     Property-Location:
    </label>

    <Input
    type="text" 
    required 
    label="Property-location" onChange={(e)=>setProploc(e.target.value)} />
  </div>

  <div>
    <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-600">
     Property-Address:
    </label>

    <Input
     type="text" 
     required 
     label="Property-Address" onChange={(e)=>setPropAddr(e.target.value)} />
  </div>
   


  <div>
    <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-600">
      Client-ID:
    </label>

    <Input
      type="text" 
      required 
      readOnly
      label="Client-id" onChange={((e)=>(setClientid(e.target.value)))} />
  </div>

  <div>
    <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-600">
      Registered-Date:
    </label>

    <input
     type='date'
     required 
     onChange={(e)=>setRegistdate(e.target.value)} />
  </div> 
  

  <div>
    <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-600">
      Property Description:
    </label>
    <Textarea
       onChange={(e)=>setPropdesc(e.target.value)}
       placeholder="Enter your description"
       className="max-w-xs"
       
    />
</div>

<div>
    <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-600">
      Remark:
    </label>

    <Input
      type="text" 
      required 
      readOnly
      label="Remark" onChange={((e)=>(setRemark(e.target.value)))} />
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

export default PropertyMaster;
