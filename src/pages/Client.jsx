// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react';
import axios from 'axios'
import {Input} from "@nextui-org/react";

const Client = () =>{
const [Clientid,setClientid] = useState(" ")
const [Clientname,setClientname] = useState(" ")
const [Clientaddress,setClientaddress] = useState(" ")
const [Clientphone,setClientphone] = useState(" ")
const [Clientemail,setClientemail] = useState(" ")

//https://localhost:44326/api/Legal/AddClient
const AddClient =(e)=>{ 
  e.preventDefault()
  axios.post("https://localhost:44326/api/Legal/AddClient",{
    
   Clientid : Clientid,
   Clientname : Clientname,
   Clientaddress : Clientaddress,
   Clientphone : Clientphone,
   Clientemail : Clientemail
}) .then(response=>alert(response.data))

}
return(
    <>
  
<div className="container">
      <div className="title">CLIENT</div>
      <form onSubmit={AddClient} method="post">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Client-ID</span>
            <input type="text" placeholder='Enter Task-ID' required   onChange={(e)=>setClientid(e.target.value)}/>
          </div>
          <div className="input-box">
            <span className="details">Name</span>
            <input type="text" placeholder='Enter Name' required   onChange={(e)=>setClientname(e.target.value)} />
          </div>
          <div className="input-box">
            <span className="details">Address</span>
            <input type="text" placeholder='Enter Address' required  onChange={(e)=>setClientaddress(e.target.value)}/>
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="text" placeholder='Enter your Phone number' required  onChange={(e)=>setClientphone(e.target.value)}/>
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="email" placeholder='Enter your email' required  onChange={(e)=>setClientemail(e.target.value)}/>
          </div>
          </div>
        <div className="button">
          <input type="submit" value='Submit'  />
        </div>
      </form>
     </div>

     {/* <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Client</h2>
        


       
        <div className="space-y-4">

        <form onSubmit={AddClient} method="post">
          <div>
            <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-600">
             Client-ID:
            </label>
            <Input
            type="text" 
            required 
            onChange={(e)=>setClientid(e.target.value)} />

          </div>

          <div>
            <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-600">
              Client-Name:
            </label>

            <Input
            type="text" 
            required 
            onChange={(e)=>setClientname(e.target.value)} />
          </div>

          <div>
            <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-600">
              Client-Address:
            </label>

            <Input
            type="text" 
            required 
            onChange={(e)=>setClientaddress(e.target.value)} />
          </div>

          <div>
            <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-600">
              Client-Phone:
            </label>

            <Input
            type="text" 
            required 
            onChange={(e)=>setClientphone(e.target.value)} />
          </div>
     
     <div>
        <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-600">Client-Email</label>
        <Input
         type="email"  
         placeholder="Enter your email" 
         required
         onChange={(e)=>setClientemail(e.target.value)} />
     </div>

          <br />
          <input type='submit'  className='px-4 mx-auto bg-black text-white rounded-lg py-2' value='Submit'/>
          </form>
</div>
</div>
</div> */}
    
    </>
)
}
export default Client;