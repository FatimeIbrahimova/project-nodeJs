
import React, { useEffect, useState } from 'react'
import axios from "axios"
import "../styles.css"
import { Link } from '@mui/material'
import Swal from 'sweetalert2'


const Home = () => {
     const [users,setUsers]=useState([])

      const getData=async()=>{
    const res=await axios.get("http://localhost:8080/users")
    setUsers(res.data.data)
  }
  useEffect(()=>{
    getData()
  },[])
  console.log(users);

  const deleteData = (id) => {
    console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8080/users/${id}`);
        getData();
        Swal.fire(
          'Deleted!',
          'Your product has been deleted.',
          'success'
        )
      }
    })
  };
  return (
    <>
       <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {users?.map((user)=>(
                        <div className="col mb-5" key={user.id}>
                        <div className="card h-100">
                            <img className="card-img-top" src={user.image} alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{user.name}</h5>
                                    ${user.price}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center" onClick={()=>deleteData(user.id)}><Link style={{textDecoration:"none"}} className="btn btn-outline-dark mt-auto" >Delete</Link></div>
                            </div>
                        </div>
                    </div>
                ))}
                    
                    
                    
                    
                   
                   
                   
                </div>
            </div>
        </section>
                         
    </>
  )
}

export default Home
