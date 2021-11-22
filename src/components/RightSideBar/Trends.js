import React from 'react'
import {IoSettingsOutline} from 'react-icons/io5'
import TrendsContent from './TrendsContent'
function Trends() {
    return (
        <div style={{width:'350px',height:'24em',borderRadius:'25px',backgroundColor:'#EFEFEF'}}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <p style={{fontSize:'20px',fontWeight:'bold', padding:'15px'}}>Trends for You</p>
                <IoSettingsOutline style={{fontSize:'20px',fontWeight:'bold',marginTop:'25px',marginRight:'25px'}}/>
            </div>
            <div>
                <TrendsContent/>
            </div>
            <div>
                <small style={{color:'#00caee',marginLeft:'20px',fontWeight:'bold'}}>Show more</small>
            </div>
        </div>
    )
}

export default Trends
