import React from 'react'
import {IoIosMore} from 'react-icons/io'
function RightSideFooter() {
    return (
        <div style={{marginRight:'200px', fontSize:'15px'}}>
            <div style={{display:"flex"}}>
                <div>
                    <a href="#" style={{color:'#5c6c78'}}><small style={{marginRight:'5px'}}>Terms of Service</small></a>
                </div>
                <div>
                    <a href="#" style={{color:'#5c6c78'}}><small style={{marginRight:'5px'}}>Privacy Policy</small></a>
                </div>
                <div>
                    <a href="#" style={{color:'#5c6c78'}}><small style={{marginRight:'5px'}}>Cookie Policy</small></a>
                </div>
            </div>
            <div style={{display:'flex'}}>
                <div>
                    <a href="#" style={{color:'#5c6c78'}}><small style={{marginRight:'10px'}}>Ads info</small></a>
                </div>
                <div>
                    <a href="#" style={{color:'#5c6c78'}}>
                        <small style={{marginRight:'10px'}}>
                                    More
                                    <IoIosMore style={{marginLeft:'3px'}}/>
                        </small>
                    </a>
                </div>
                <div>
                    <small style={{marginRight:'10px',color:'#5c6c78'}}>© 2021 Twitter, Inc.</small>
                </div>
            </div>
            
            
            
        </div>
    )
}

export default RightSideFooter
