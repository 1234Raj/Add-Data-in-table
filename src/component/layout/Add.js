import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Add = () => {
    let history =useNavigate();
    const [user, setUser] = useState({
        name:"",
        email:"",
        phone:""
    });
      

  const handleChange = (e) => {
     setUser({...user, [e.target.name]: e.target.value})
  };

  const handleSubmit= async e =>{
             e.preventDefault();
             await axios
             .post("https://jsonplaceholder.typicode.com/users", {
                name:user.name,
                email:user.email,
                phone:user.phone
             } );
           history("/");
  } ;
  // const handleSubmit= (e) =>{
  //   e.preventDefault();
  //   let book={
  //     name:"",
  //       email:"",
  //       phone:""
  //   }
  //   history("/");
  // }


    return (
        <section className="AddUser">
          
        <div className="Container Add d-flex justify-content-center align-items-center ">
        <h1>Uesr Data</h1>
        <hr />
        <form onSubmit={()=>handleSubmit} className="Form">
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
export default Add;