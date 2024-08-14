// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react';
import axios from 'axios'
import {Input} from "@nextui-org/react"

const Location = ()=>{
        const [Locid,setLocid] = useState(" ")
        const [Locname,setLocname] = useState(" ")


// const funcDelete = ()=>{
//    axios.delete(`https://localhost:44326/api/Legal/DeleteLocation/${Locid}`)
//        .then(response=>Alert('Location Successfully Deleted'))
      
           
//      }
         




        const AddLocation =(e)=>{ 
            e.preventDefault()
            axios.post("https://localhost:44326/api/Legal/AddLocation",{
             Locid : Locid,
             Locname : Locname,
            })
        }
    return (

        <>
             <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">PROPERTY LOCATIONS SETUP</h2>
        
       
        <div className="space-y-4">

        <form onSubmit={AddLocation} method="post">
          <div>
            <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-600">
             Location-ID:
            </label>
            <Input
            type="text" 
            required 
            onChange={(e)=>setLocid(e.target.value)} />

          </div>

          <div>
            <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-600">
             Location-Name:
            </label>
            <Input
            type="text" 
            required 
            onChange={(e)=>setLocname(e.target.value)} />

          </div>
          <br />
          <div>
          <input type='submit'  className='px-4 mx-auto bg-black text-white rounded-lg py-2' value='Submit'/>
          <input type="button"  className='px-4 mx-auto bg-red text-white rounded-lg py-2' onClick={funcDelete} value='Delete'/>
          </div>
          </form>
     </div>
   </div>
</div>
        </>
    )
}
export default Location;