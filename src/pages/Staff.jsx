// eslint-disable-next-line no-unused-vars
import React,{ useState} from 'react'

import axios from 'axios'
import {Input} from "@nextui-org/react";

const Staff = () =>{
const [Staffid,setStaffid] = useState(" ")
const [Surname,setSurname] = useState(" ")
const [Othernames,setOthernames] = useState(" ")
const [Dob,setDob] = useState(" ")
const [Dateemployed,setDateemployed] = useState(" ")
const [Qualifications,setQualifications] = useState(" ")
const [Address,setAddress] = useState(" ")
const [Email,setEmail] = useState(" ")
const [Mobile,setMobile] = useState(" ")
const [error,setError] = useState(false)
const [data,setData] = useState([])
  
// window.onload = ()=>{
//   axios.get("https://localhost:44326/api/Legal/getallstaff")
//    .then(response=>setData(response.data))
//    console.log(data)
// }


// const Getapi = ()=>{
//   axios.get(`https://localhost:44326/api/Legal/GetStaffById/${Staffid}`)
//   .then(response=>setData(response.data))
//   .catch(response=>setData(" ",response))
 
// }
const AddStaff =(event)=>{ 
  event.preventDefault()

  axios.post("https://localhost:44326/api/Legal/AddStaff", {
      headers:{
      'Content-Type' : 'application/json',

      'Accept': 'application/json'
     },
     Staffid,
     Surname,
     Othernames,
     Dob,
     Dateemployed,
     Qualifications,
     Address,
     Email,
     Mobile
  }) 
     .then(response=>alert(response.data))
     .catch(err=>err + setError(true))
}
console.log(data)


return(
    <>
       <div className="container">
      <div className="title">STAFF-DATA-ENTRY</div>
      <form onSubmit={AddStaff} method="post">
        <div className="user-details">
          <div className="input-box">
            <span className="details">StaffID</span>
            <input type="text"  value={Staffid}  placeholder='Enter StaffID' required onChange={(e)=>setStaffid(e.target.value)}/>
          </div>
          <div className="input-box">
            <span className="details">SurName</span>
            <input type="text"   value={Surname} placeholder='Enter SurName' required  onChange={(e)=>setSurname(e.target.value)}/>
          </div>
          <div className="input-box">
            <span className="details">OtherNames</span>
            <input type="text"  value={Othernames} placeholder='Enter OtherNames' required  onChange={(e)=>setOthernames(e.target.value)} />
          </div>
          <div className="input-box">
            <span className="details">Date-of-Birth</span>
            <input type="date" value={ Dob } placeholder='Enter your date of birth' required onChange={(e)=>setDob(e.target.value)}/>
          </div>
          <div className="input-box">
            <span className="details">Date-Employed</span>
            <input type="date" value={Dateemployed} placeholder='Enter Date-Employed' required  onChange={(e)=>setDateemployed(e.target.value)}/>
          </div>
          <div className="input-box">
            <span className="details">Qualifications</span>
            <input type="text"value={Qualifications} placeholder='Enter Qualifications' required onChange={(e)=>setQualifications(e.target.value)}/>
          </div>
          <div className="input-box">
            <span className="details">Address</span>
            <input type="text"value={Address}placeholder='Enter Address' required  onChange={(e)=>setAddress(e.target.value)}/>
          </div>
          <div className="input-box">
            <span className="details">E-mail</span>
            <input type="email"value={Email} placeholder='Enter E-mail' required onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="input-box">
            <span className="details">Mobile-No</span>
            <input type="tel"value={Mobile} placeholder='Enter Telephone' required onChange={(e)=>setMobile(e.target.value)}/>
          </div>
        </div>
        <div className="button">
          <input type="submit" value='Submit'  />
        </div>
      </form>
     </div>



   
     {/* <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">STAFF-DATA-ENTRY</h2>
        
   
    
        <div className="space-y-4">

        <form onSubmit={AddStaff} method="post">
          {error && <p className='text-red-700 text-lg animate-pulse'>Unable to save data</p>}
          <div>
            <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-600">
             StaffID:
            </label>
        <Input
            type="text" 
            required
            value={Staffid} 
            onChange={(e)=>setStaffid(e.target.value)}
            label="Staff-ID"
            />

          </div>

    <div>
    <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-600">
      Surname:
    </label>

  <Input
    type="text" 
    required 
    value={Surname}
    label="Surname"
    onChange={(e)=>setSurname(e.target.value)} 
    
    />
  </div>

  <div>
    <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-600">
      Othernames:
    </label>

 <Input
    type="text" 
    required 
    value={Othernames}
    label="Othernames:"
    onChange={(e)=>setOthernames(e.target.value)} 
    />
  </div>

  <div>
    <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-600">
      Date-of-Birth:
    </label>

  <Input
   type='date' 
    required 
    label="Date"
    value={ Dob }
    onChange={(e)=>setDob(e.target.value)}
     />

  </div>

<div>
<label htmlFor="" className="block mb-2 text-sm font-medium text-gray-600">Date-Employed</label>
<Input
 type='date'
 label="Employed-date" 
 required 
 value={Dateemployed}
 onChange={(e)=>setDateemployed(e.target.value)}
 />
</div>

<div>
<label htmlFor="" className="block mb-2 text-sm font-medium text-gray-600">Qualifications</label>
<Input
 type="text" 
 label="Qualifications" 
 required
 value={Qualifications}
 onChange={(e)=>setQualifications(e.target.value)}
 />
</div>

<div>
<label htmlFor="" className="block mb-2 text-sm font-medium text-gray-600">Address</label>
<Input
 type="text" 
 label="Address" 
 required 
 value={Address }
 onChange={(e)=>setAddress(e.target.value)}
 />
</div>

<div>
<label htmlFor="" className="block mb-2 text-sm font-medium text-gray-600">E-mail</label>
<Input
 type="email" 
 label="Email" 
 value={Email}
 required 
 onChange={(e)=>setEmail(e.target.value)}
 />
</div>

<div>
<label htmlFor="" className="block mb-2 text-sm font-medium text-gray-600">Mobile-No</label>

  <Input
     type="tel" 
     label="Tel:no" 
     placeholder="Enter your digits" 
     required
     value={Mobile}
     onChange={(e)=>setMobile(e.target.value)}
 />

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
export default Staff;