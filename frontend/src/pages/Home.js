import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import "./Home.css"
import axios from 'axios'

const Home = () => {
  const[data, setData] = useState([])
  useEffect(()=>{
    getUsers();
  },[])

  const getUsers = async() =>{
    const response = await axios.get("http://localhost:5000/users")
    if(response.status === 200){
        setData(response.data);
    }
}

const onDeleteUser = async(id) =>{
    if(window.confirm("Are you sure you want to delete this user record")){
        const response = await axios.delete(`http://localhost:5000/user/${id}`);
        if(response.status === 200){
            alert("Successfully deleted the user")
            getUsers()
        }
    }
}
console.log(data)
  return (
    <div style={{marginTop:"150px"}}>
        <table className="styled-table">
            <thead>
                <tr>
                    <th style={{textAlign: "center"}}>No.</th>
                    <th style={{textAlign: "center"}}>Name</th>
                    <th style={{textAlign: "center"}}>email</th>
                    <th style={{textAlign: "center"}}>contact</th>
                    <th style={{textAlign: "center"}}>Action</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((item,index) =>{
                    return (
                        <tr key={index}>
                            <th scope='row'>{index+1}</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.contact}</td>
                            <td>
                                <Link to={`edit/${item.id}`}>
                                <button className='btn btn-edit'>Edit</button>
                                </Link>
                                <button className='btn btn-delete' onClick={()=>onDeleteUser(item.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Home