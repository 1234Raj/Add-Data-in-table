import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    console.log("hii");
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUser(result.data);
  }

  // const loadUser = () =>{
    
  // }
  const deleteData = async id => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    loadUser();
  }
  return (
    <div className="container">
      <div className="py-4">
        <table className="table">
          <thead class="thead-dark">
            <tr className="bg-dark text-white">
              <th scope="col">ID</th>
              <th scope="col">FullName</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => {
               return( <tr key={index}>
                  <th scope="row"  >{index + 1}</th>
                  <td> {user.name} </td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                     
                    <Link className="btn btn-outline-primary m-2 " to= {`/Edit/${user.id}`}>Edit</Link>
                    <Link className="btn btn-outline-primary m-2" onClick={()=>deleteData}>Delete</Link>
                  </td>
                </tr>
               ) })
            }

          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Home;