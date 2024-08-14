// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react'
import axios from 'axios'
import {Input} from "@nextui-org/react"


const PropertyType = () => {
     const [Typeid,setTypeid] = useState(" ")
     const [Typename,setTypename] = useState(" ")

     const AddProp =(e)=>{ 
        e.preventDefault()
        axios.post("https://localhost:44326/api/Legal/AddPropType",{
         Typeid : Typeid,
         Typename : Typename,
        })
    }
  return (
    <>
       <div className="flex items-center justify-center min-h-screen bg-gray-100">
         <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-700">PROPERTY SETUP</h2>
        
       
            <div className="space-y-4">

        <form onSubmit={AddProp} method="post">
          <div>
            <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-600">
             Property-ID:
            </label>
            <Input 
             type="text" 
             required 
             onChange={(e)=>setTypeid(e.target.value)} />

          </div>

          <div>
            <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-600">
            Type Name:
            </label>
            <Input
             type="text" 
             required 
             onChange={(e)=>setTypename(e.target.value)} />

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

export default PropertyType;
