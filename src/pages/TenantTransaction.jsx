// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react';
import axios from 'axios'
import {Input} from "@nextui-org/react";

const TenantTransaction = () =>{
const [Tenantname,setTenantname] = useState(" ")
const [Tenantphone,setTenantphone] = useState(" ")
const [Tenantemail,setTenantemail] = useState(" ")
const [Rentdue,setRentdue] = useState(" ")
const [LastPayment,setLastPayment] = useState(" ")
const [LastPaydate,setLastPaydate] = useState(" ")
const [Paycycle,setPaycycle] = useState(" ")
const [Tenantrating,setTenantrating] = useState(" ")
const [Propid,setPropid] = useState(" ")
const [Flatid,setFlatid] = useState(" ")
  
const AddTenantTrans =(e)=>{ 
  e.preventDefault()
  axios.post("https://localhost:44326/api/Legal/AddTenantTrans",{

    Tenantname : Tenantname,
    Tenantphone : Tenantphone,
    Tenantemail : Tenantemail,
    Rentdue : Rentdue,
    LastPayment : LastPayment,
    LastPaydate : LastPaydate,
    Paycyle : Paycycle,
    Tenantrating : Tenantrating,
    Propid : Propid,
    Flatid : Flatid

}) .then(response=>alert(response.data))

}
return(
    <>
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">TENANT-TRANSACTION</h2>
        
       
        <div className="space-y-4">

        <form onSubmit={AddTenantTrans} method="post">
       
          <div>
            <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-600">
              Tenant-Name:
            </label>

            <Input
            type="text" 
            required 
            onChange={(e)=>setTenantname(e.target.value)} />
          </div>

      

          <div>
            <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-600">
              Tenant-Phone:
            </label>

            <Input
            type="text" 
            required 
            onChange={(e)=>setTenantphone(e.target.value)} />
          </div>
     
     <div>
        <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-600">Tenant-Email</label>
        <Input
         type="email"  
         placeholder="Enter your email" 
         required
         onChange={(e)=>setTenantemail(e.target.value)} />
     </div>

     <div>
            <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-600">
             Rent-Due:
            </label>
            <Input
            type="text" 
            required 
            onChange={(e)=>setRentdue(e.target.value)} />

          </div>

          <div>
            <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-600">
             Last-Payment:
            </label>
            <Input
            type="text" 
            required 
            onChange={(e)=>setLastPayment(e.target.value)} />

          </div>

          <div>
            <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-600">
             Last-Pay-date:
            </label>
            <Input
            type="text" 
            required 
            onChange={(e)=>setLastPaydate(e.target.value)} />

          </div>

          <div>
            <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-600">
             Paycycle:
            </label>
            <Input
            type="text" 
            required 
            onChange={(e)=>setPaycycle(e.target.value)} />

          </div>

          <div>
            <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-600">
            Tenant-Rating:
            </label>
            <Input
            type="text" 
            required 
            onChange={(e)=>setTenantrating(e.target.value)} />

          </div>

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


          <br />
          <input type='submit'  className='px-4 mx-auto bg-black text-white rounded-lg py-2' value='Submit'/>
          </form>
</div>
</div>
</div>
    
    </>
)
}
export default TenantTransaction;