import React from 'react'
import {BsTwitter} from 'react-icons/bs'
import './SignUp.css'
import {FcGoogle} from 'react-icons/fc'
import {BsApple} from 'react-icons/bs'
import { Link } from 'react-router-dom'
function SignUp() {
    return (
        <div className='sign'>
            <div className='Sign'>
                <div className='left'>
                    <img src="https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png"/>
                    <BsTwitter className='Left__icon'/>
                </div>
                <div className='Right'>
                    <BsTwitter className='Right__icon'/>
                    <h1>It's happening now</h1>
                    <h3>Join Twitter today.</h3>
                    <div className='SignUp__buttons'>
                        <button className='Google__button'> <FcGoogle className='Google__icon'/>Sign up with Google </button>
                        <button className='Apple_button'> <BsApple className='Apple__icon'/> Sign up with Apple </button>
                        <button> Register with a phone number or e... </button>
                    </div>
                    <small>By registering, you agree to the <span>Terms of Use</span> and the <span>Privacy <br/>Policy</span> , including the <span>Use of Cookies</span> .</small>
                    <p>Already have an account ? <Link to='/login' className='Link'>Log in</Link> .</p>
                </div>
            </div>
            
            <div className='bottom'>
                <small>
                <a href='#'>In regards to</a>
                <a href='#'>Help Center</a>
                <a href='#'>Terms of use</a>
                <a href='#'>Privacy policy</a>
                <a href='#'>Cookie policy</a>
                <a href='#'>Advertising Information</a>
                <a href='#'>Blog</a>
                <a href='#'>Status</a>
                <a href='#'>Careers</a>
                <a href='#'>Brand resources</a>
                <a href='#'>Advertising</a>
                <a href='#'>Marketing</a>
                <a href='#'>Twitter for professionals</a>
                <a href='#'>Developers</a>
                <a href='#'>Directory</a>
                <a href='#'>Settings</a>
                <br/>
                <span className='credits'> © 2021 Twitter, Inc.</span>
                </small>
            </div>


        </div>
    )
}

export default SignUp
