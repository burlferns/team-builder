import React, {useState} from 'react';


export default function Form( {roleOptions, addTeamMember} ) {
   const [member, setMember] = useState({
      name: "",
      email: "",
      role:  ""
   });

   function changeHandler(event) {
      // console.log(`This is the field: ${event.target.name} and this is the value: ${event.target.value}`);
      setMember( { 
         ...member, 
         [event.target.name]: event.target.value, 
         role:"None"
      });
   }

   function submitForm(event) {
      event.preventDefault();
      // console.log("Member to add:", member);
      addTeamMember(member);
      setMember({ 
         name: "",
         email: "",
         role:  ""
      });
    };
    

   return (
      <form onSubmit={submitForm}> 
         <label htmlFor="name">Member Name</label>
         <input
            type="text"
            name="name"
            id="name"
            placeholder="Member Name"
            onChange={changeHandler}
            value={member.name}         
         />

         <label htmlFor="email">Member Email</label>
         <input
            type="text"
            name="email"
            id="email"
            placeholder="Member Email"
            onChange={changeHandler}
            value={member.email}           
         />

         <label htmlFor="memRole">Member Role</label>
         <select name="memRole" id="memRole" onChange={changeHandler}>
            {roleOptions.map((elem,index) => 
               <option key={index} value={index}>{elem}</option>
            )}
         </select>

         <button type="submit">Add Member</button>
      </form>
   );
}