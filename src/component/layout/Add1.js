import React,{useState} from "react";
import {nanoid} from "nanoid";
import { useNavigate } from "react-router-dom";
const Add1 = (users,setUsers) => {
    let back = useNavigate();
    const [user, setAddUser] = useState({
        name:"",
        email:"",
        phone:"",
    });
      

  const handleChange = (e) => {
      e.preventDefault();
      const filedName = e.target.getAttribute('name');
      const filedValue = e.target.value;

      const newFormData = {...user};
      newFormData[filedName] = filedValue;
    
      setAddUser(newFormData);

  };

  const handleSubmit = (e) =>{
             e.preventDefault();
             const newData = {
                id: nanoid(),
                name:user.name,
                email:user.email,
                phone:user.phone,
             } ;
             const newDatas = [...users,newData ];
             setUsers(newDatas);
           back("/");
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
export default Add1;