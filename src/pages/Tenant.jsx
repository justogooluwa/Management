
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Input,Textarea} from "@nextui-org/react";

const Tenant = () => {
    const [Propid,setPropid] = useState(" ")
    const [Flatid,setFlatid] = useState(" ")
    const [Flatdesc,setFlatdesc] = useState(" ")
    const [Annualrent,setAnnualrent] = useState (" ")
  


// const Getstaff = ()=>{
//     axios.get("https://localhost:44326/api/legal/getallclient")
//     .then(response=>setClientdata(response.data))
// }


useEffect(()=>{
   // Getstaff;
},[])

       
     const AddTenant =(e)=>{ 
        e.preventDefault()
        axios.post("https://localhost:44326/api/Legal/AddTenant",{
         Propid,
         Flatid,
         Flatdesc,
         Annualrent
        })
    }

  return (
    <>
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
         <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-700">TENANT-ENTRY</h2>
        
       
          <div className="space-y-4">

<form onSubmit={AddTenant}  method="post">
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
  Flat-Description
    </label>

    <Textarea
       onChange={(e)=>setFlatdesc(e.target.value)}
       placeholder="Flat-description"
       className="max-w-xs"
       
    />
  </div>
   


  <div>
    <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-600">
      Annual-Rent:
    </label>

    <Input
     type="number" 
     required 
     label="Maintenance-Type" onChange={(e)=>setAnnualrent(e.target.value)} />
    
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

export default Tenant;
