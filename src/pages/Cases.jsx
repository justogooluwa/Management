// eslint-disable-next-line no-unused-vars
import React,{useEffect, useState} from 'react';
import axios from 'axios'
import Select from  'react-select'
import {Input,Calendar,Textarea} from "@nextui-org/react";

const Cases = () =>{
const [Fileid,setFileid] = useState(" ")
const [Casetitle,setCasetitle] = useState(" ")
const [Clientid,setClientid] = useState(" ")
const [Lastcourtdate,setLastcourtdate] = useState(" ")
const [Casedirection,setCasedirection] = useState(" ")
const [Nextadjourndate,setNextadjourndate] = useState(" ")
const [Status,setStatus] = useState(" ")
const [data,setData] = useState([])

const Getdata = ()=>{
   axios.get('https://localhost:44326/api/Legal/getallclient')
   .then(response=>setData(response.data))
}
   useEffect(()=>{
    Getdata()
   },[])
 
  
 
   const Handleclick = () => {
        
    const  selectElement =
          document.querySelector('#cmbprd');
     const output =
          selectElement.options
          [selectElement.selectedIndex].value;
      setClientid(output)
  console.log(Clientid)
  
  };
  
 


const AddClient =(e)=>{ 
  e.preventDefault()
  axios.post("https://localhost:44326/api/Legal/AddCase",{
         Fileid : Fileid,
         Casetitle : Casetitle,
         Clientid : Clientid,
         Lastcourtdate : Lastcourtdate,
         Casedirection : Casedirection,
         Nextadjourndate : Nextadjourndate,
         Status : Status

}) .then(response=>alert(response.data))
}
console.log(data)
return(
    <>
    


     <div className="container">
      <div className="title">CASE REGISTRATION</div>
      <form onSubmit={AddClient} method="post">
        <div className="user-details">
          <div className="input-box">
            <span className="details">File-ID</span>
            <input type="text"   placeholder='Enter File-ID' required  onChange={(e)=>setFileid(e.target.value)} />
          </div>
          <div className="input-box">
            <span className="details">Case-Title</span>
            <input type="text"    placeholder='Enter Case-Title' required  onChange={(e)=>setCasetitle(e.target.value)}/>
          </div>
          <div className="input-box">
            <span className="details">Client-ID</span>
           <select  name="" key={data.clientid} onChange={Handleclick} id="cmbprd" className='select'>
            <option>Select...</option>
            {data && data.map((item)=>(<option value={item.clientid}>{item.clientname}</option>))}
           </select>
          </div>
          <div className="input-box">
            <span className="details"> Last-Court-Date</span>
            <input type="date" placeholder='Enter your last court date' required onChange={(e)=>setLastcourtdate(e.target.value)}/>
          </div>
          <div className="input-box">
            <span className="details">Case Description</span>
            <input type="text"  placeholder='Enter Case Description' required  onChange={(e)=>setCasedirection(e.target.value)}/>
          </div>
          <div className="input-box">
            <span className="details"> Next Adjourn Date</span>
            <input type="date" placeholder='Enter Next Adjourn Date' required onChange={(e)=>setNextadjourndate(e.target.value)}/>
          </div>
          </div>
        <div className="button">
          <input type="submit" value='Submit'  />
        </div>
      </form>
     </div>
     {/* <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">CASE-REG</h2>
        
       
        <div className="space-y-4">

        <form onSubmit={AddClient} method="post">
          <div>
            <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-600">
             File-ID:
            </label>
            <Input
            type="text" 
            required 
            label="File-ID" onChange={(e)=>setFileid(e.target.value)} />

          </div>


          <div>
            <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-600">
             Case-Title:
            </label>

            <Input
            type="text" 
            required 
            label="file-no" onChange={(e)=>setCasetitle(e.target.value)} />
          </div>

          <div>
            <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-600">
             Client-ID:
            </label>

           <select
            name=""
            key={data.clientid}
            onChange={Handleclick}
            id="cmbprd"
            className="w-full px-3 py-2 bg-white border rounded-md focus:outline-none focus:ring focus:border-blue-300"
>
              <option>Select...</option>
             {data && data.map((item)=>(<option value={item.clientid}>{item.clientname}</option>))}
           </select>
          </div>
           

          <div>
            <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-600">
              Last-Court-Date:
            </label>

            <input
             type='date'
             className='w-full text-white rounded px-2'
             required 
             onChange={(e)=>setLastcourtdate(e.target.value)} />
          </div> 
          
         
          <div>
            <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-600">
              Case Desc:
            </label>
            <Textarea
            label="Case Description"
            placeholder="Enter your description"
            className="max-w-xs"
            onChange={(e)=>setCasedirection(e.target.value)}
    />

    </div>

      <div>
            <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-600">
             Next Adjourn Date:
            </label>

            <input
             type='date'
             className='w-full text-white rounded px-2'
             required 
             onChange={(e)=>setNextadjourndate(e.target.value)} />
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
export default Cases;