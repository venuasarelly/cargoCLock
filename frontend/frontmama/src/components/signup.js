import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {
    const history=useNavigate();
    
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [usertype,setuserType]=useState('')
    const [address,setAddress]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:3001/register",{
                username,email,password,usertype,address
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                }
                else if(res.data==="notexist"){
                    history("/home",{state:{id:username}})
                    console.log(email)
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">

            <h1>Signup</h1>

            <form action="POST">

                <input type="text" onChange={(e) => { setUsername(e.target.value) }} placeholder="userName"  />
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <input type="text" onChange={(e) => { setuserType(e.target.value) }} placeholder="userType"  />
                <input type="text" onChange={(e) => { setAddress(e.target.value) }} placeholder="Address"  />

                <input type="submit" onClick={submit} />

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/">Login Page</Link>

        </div>
    )
}

export default Login