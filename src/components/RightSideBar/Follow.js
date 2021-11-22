import React from 'react'
import FollowContent from './FollowContent'
function Follow() {
    return (
        <div style={{width:'350px',height:'26em',borderRadius:'25px',backgroundColor:'#EFEFEF', marginTop:'20px'}}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <p style={{fontSize:'20px',fontWeight:'bold', padding:'15px'}}>Who to Follow</p>
            </div>
           <FollowContent/>
        </div>
    )
}

export default Follow
