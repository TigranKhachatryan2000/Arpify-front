import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import App2 from "./App2";


export default function App() { 
    
    const [state, setState] = useState([]);

    useEffect(() => {
        fetch('https://intern-2022.arpify.com/init', 
        {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            "firstName": "Tigran",
            "lastName": "Khachatryan",
            "birthDay": "08/09/2000",
            "gender": "male",
        })
        })
        .then(res => res.json())
        .then(answer => console.log(setState(answer)));
    }, []);

    return (
        <div>
            <button> 
            New Page
            <Routes>
                <Route path="/App2" element={<App2/>} />
            </Routes>
            </button>  
        </div>
    )
}

