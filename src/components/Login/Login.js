import {Container,Row,Button,Alert} from 'react-bootstrap'
import React, { useState } from 'react'
import {FaTwitter} from 'react-icons/fa'
import {useNavigate, Link} from "react-router-dom"
import './Login.css'
function Login({setIsAuth}) {
    let navigate = useNavigate()
	let [email,setEmail]  = useState("")
	let [password,setPassword]  = useState("")
	
	//error messages
	let [emailError,setEmailError] = useState("")
	let [passError,setPassError] = useState("")
	let [errorLogin,setErrorLogin] = useState("")
	function handleLogin(e){
		e.preventDefault();
		// validation 
		if ( !email ){
			setEmailError("Email est vide")
			
		}else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
			setEmailError("Salah el email rahou ghalet")
			
		}
		else{
			
			setEmailError("")
		}
		if(!password){
			setPassError("Password est vide !")
			return
		}else{
			setPassError("")
		}
		setErrorLogin("")
		//Envoyer 
		
		if (email =="hmed@gmail.com" && password=="1234hmed") 
		{
			//logi el user
			setErrorLogin("")
			setIsAuth(true)
			console.log("you are logged in")
		}else{
			setErrorLogin("Error in email or password")
		}
		console.log(`email : ${email} | password : ${password}`)
		navigate("/home")
	}
    return (
        <div className='Login'>
            <Container>
                <Row className='justify-content-md-center'>
                    <FaTwitter style={{fontSize:'70px',color:'#1DA1F2'}}/>
                    <h1 style={{textAlign:'center',marginTop:'20px',marginBottom:'20px'}}>Login to Twitter</h1>
                    {(errorLogin) && <Alert variant="danger">{errorLogin}</Alert>}
                    {(emailError) && <Alert variant='danger'>{emailError}</Alert>}
					{(passError) && <Alert variant='danger'>{passError}</Alert>}
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <input onChange={e=>setEmail(e.target.value)} type='text' placeholder='Phone, email or username' style={{height:'50px',width:'500px',marginTop:'10px',marginBottom:'10px'}}/>
                        <input  onChange={e=>setPassword(e.target.value)} type='password' placeholder='Password' style={{height:'50px',width:'500px',marginBottom:'10px'}}/>
                    </div>
                    <Button type='submit' onClick={handleLogin} style={{width:'500px',marginTop:'20px'}}>Login</Button>
                    <small style={{textAlign:'center',color:'#1DA1F2'}}><a href='#'> forgotten password?</a> . <a href='#'> <Link to="/signup"> sign up for Twitter</Link></a></small>
                </Row>
            </Container>
        </div>
    )
}

export default Login
