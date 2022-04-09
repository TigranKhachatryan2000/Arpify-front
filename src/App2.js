import React from "react";
import { useState } from "react";

function App2() {
    const [state, setState] = useState([]);

    return <>
        <form action="/" method="post" autoComplete="off">
           <label for="fname"> FirstName </label>
           <input id="fname" type="text" name="name"/>
           <label for="lname"> LastName </label>
           <input id="lname" type="text" name="name"/>
           <label for="bday"> BirthDay </label>
           <input id="bday" type="text" name="name"/>
           <label for="gender"> Gender </label>
           <input id="gender" type="text" name="name"/>
           <div>
               <label for="png"> Կցել լուսանկար </label>
               <input type="file" name="img" id="png"/>
           </div>
           <div> 
               <label for="file"> Կցել ֆայլ </label>
               <input type="file" name="cv" id="file"/>
           </div>
           <button type="submit" onClick={() => {
               fetch("http://intern-2022.arpify.com/form", {
                   method: "POST",
                   headers: {
                   'Content-Type': 'multipart/form-data',
                 },
               })
               .then(res => {
                   if(res.ok) {
                       return JSON.stringify({
                           "message": "User created successfuly",
                           "userFullName": "Tigran Khachatryan",
                       })
                   }
                       return JSON.stringify({
                           "message": "Error",
                       })
               })
               .then(ans => setState(ans));
           }}> Ուղարկել տվյալները </button>
        </form>
    </>
}

export default App2;