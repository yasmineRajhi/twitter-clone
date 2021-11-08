import React from 'react'
import { Button } from 'react-bootstrap'
import {CgProfile} from 'react-icons/cg'
import {MdVerified} from 'react-icons/md'
function FollowContent() {
    return (
        <div>
            <div style={{cursor:'pointer',marginTop:'3px', display:'flex',marginLeft:'20px'}}>
                <CgProfile style={{fontSize:'30px'}}/> 
                <div style={{marginLeft:'20px'}}>
                <h1 style={{fontSize:'20px'}}>Profile <MdVerified style={{color:'#00caee'}}/></h1>
                <p>@nom_utilisateur</p>
                </div>
                <Button variant="dark" style={{width:'100px',height:'40px',borderRadius:'25px',marginLeft:'37px'}}>Follow</Button>
            </div>
            <div style={{cursor:'pointer',marginTop:'3px', display:'flex',marginLeft:'20px'}}>
                <CgProfile style={{fontSize:'30px'}}/> 
                <div style={{marginLeft:'20px'}}>
                <h1 style={{fontSize:'20px'}}>Profile <MdVerified style={{color:'#00caee'}}/></h1>
                <p>@nom_utilisateur</p>
                </div>
                <Button variant="dark" style={{width:'100px',height:'40px',borderRadius:'25px',marginLeft:'37px'}}>Follow</Button>
            </div>
            <div style={{cursor:'pointer',marginTop:'3px', display:'flex',marginLeft:'20px'}}>
                <CgProfile style={{fontSize:'30px'}}/> 
                <div style={{marginLeft:'20px'}}>
                <h1 style={{fontSize:'20px'}}>Profile <MdVerified style={{color:'#00caee'}}/></h1>
                <p>@nom_utilisateur</p>
                </div>
                <Button variant="dark" style={{width:'100px',height:'40px',borderRadius:'25px',marginLeft:'37px'}}>Follow</Button>
            </div>
            <div style={{cursor:'pointer',marginTop:'3px', display:'flex',marginLeft:'20px'}}>
                <CgProfile style={{fontSize:'30px'}}/> 
                <div style={{marginLeft:'20px'}}>
                <h1 style={{fontSize:'20px'}}>Profile <MdVerified style={{color:'#00caee'}}/></h1>
                <p>@nom_utilisateur</p>
                </div>
                <Button variant="dark" style={{width:'100px',height:'40px',borderRadius:'25px',marginLeft:'37px'}}>Follow</Button>
            </div>
            <small style={{color:'#00caee',marginLeft:'20px',fontWeight:'bold'}}>Show more</small>
        </div>
    )
}

export default FollowContent
