// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react';
import axios from 'axios'
import {Input} from "@nextui-org/react"

const Courts = ()=>{
        const [CourtId,setCourtId] = useState(" ")
        const [CourtName,setCourtName] = useState(" ")


// const funcDelete = ()=>{
//    axios.delete(`https://localhost:44326/api/Legal/DeleteLocation/${Locid}`)
//        .then(response=>Alert('Location Successfully Deleted'))
      
           
//      }
         




        const AddCourt =(e)=>{ 
            e.preventDefault()
            axios.post("https://localhost:44326/api/Legal/AddCourts",{
             CourtId : CourtId,
             CourtName : CourtName,
            })
        }
    return (

        <>
             <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">COURTS SET UP</h2>
        
       
        <div className="space-y-4">

        <form onSubmit={AddCourt} method="post">
          <div>
            <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-600">
             Court Code:
            </label>
            <Input
            type="text" 
            required 
            onChange={(e)=>setCourtId(e.target.value)} />

          </div>

          <div>
            <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-600">
             Court Name:
            </label>
            <Input
            type="text" 
            required 
            onChange={(e)=>setCourtName(e.target.value)} />

          </div>
          <br />
          <div>
          <input type='submit'  className='px-4 mx-auto bg-black text-white rounded-lg py-2' value='Submit'/>
         
          </div>
          </form>
     </div>
   </div>
</div>
        </>
    )
}
export default Courts;