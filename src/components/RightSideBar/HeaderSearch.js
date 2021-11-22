import React from 'react'
import {FiSearch} from "react-icons/fi"
function HeaderSearch() {
    
    return (
        <div>
            <nav style={{width:'350px',height:"70px",borderRadius:'25px'}}>
                <form class="form-inline">
                    <div class="input-group" style={{borderRadius:"25px",borderColor:"black",position:"relative" ,marginTop:"5px",backgroundColor:"#EFEFEF"}}>
                        <FiSearch style={{fontSize:"20px",marginTop:"19px",marginLeft:"10px"}} />
                        <input type="text" class="form-control" placeholder="Search twitter" style={{borderColor:"transparent",backgroundColor:"#EFEFEF",height:"50px",borderRadius:"25px",fontSize:"25px"}}  />
                    </div>
                </form>
            </nav>
        </div>
    )
}

export default HeaderSearch