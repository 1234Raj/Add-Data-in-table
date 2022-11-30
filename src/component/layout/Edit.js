import React,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
const Edit = () => {
    let history =useNavigate();
    const {id} = useParams({});
    
    const [user, setUser] = useState({
        name:"",
        email:"",
        phone:""
    });
      

  const handleChange = (e) => {
     setUser({...user,[e.target.name]: e.target.value})
  };

  const handleSubmit= async e =>{
             e.preventDefault();
             await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, {
                name:user.name,
                email:user.email,
                phone:user.phone
             } );
           history("/");
  } ;
useEffect(()=>{
    loadUser();
},[]);
const loadUser = async () =>{
 
 const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
 setUser(result.data);
}


    return (
        <section className="AddUser">
          
        <div className="Container Add d-flex justify-content-center align-items-center ">
        <h1>Uesr Data</h1>
        <hr />
        <form onSubmit={handleSubmit} className="Form">
      <label className="Detail">Enter your Fullname
      <input 
        type="text" 
        name="name" 
        value={user.name} 
        onChange={handleChange}
      />
      </label>
      <label className="Detail">Enter your Email
        <input 
          type="email" 
          name="email" 
          value={user.email} 
          onChange={handleChange}
        />
        </label>
        <label className="Detail">Enter your Phone Number
        <input 
          type="phone" 
          name="phone" 
          value={user.phone} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
    </div>
    </section>
    );
}
export default Edit;