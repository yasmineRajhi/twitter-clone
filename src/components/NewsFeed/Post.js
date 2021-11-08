import React from 'react'
import {CgProfile} from 'react-icons/cg'
import {Button} from 'react-bootstrap'
import {IoImageOutline} from 'react-icons/io5';
import {AiOutlineGif} from 'react-icons/ai';
import {BiPoll,BiWorld} from 'react-icons/bi';
import {GrEmoji} from 'react-icons/gr';
import {MdOutlineEditCalendar} from 'react-icons/md'
function Post() {
    return (
        <div style={{borderBottom:'1px solid #EFF3F4'}}>
            <div style={{display:'flex', flexDirection:"row",marginLeft:'20px',marginTop:'20px'}}>
            <div className="icon">
                <CgProfile style={{fontSize:'30px',cursor:'pointer'}}/>
            </div>
            <div>
                <textarea placeholder="what's happening" style={{width:'400px', borderColor:'transparent',marginLeft:'5px',height:'70px',fontSize:'25px'}}></textarea>
            </div> 
            </div>
            <div style={{display:'flex', marginLeft:'50px', color:'#00acee',borderBottom:'1px solid #EFF3F4',marginRight:'30px'}}>
            <BiWorld style={{fontSize:"25px"}}/>
            <p style={{marginLeft:'5px'}}>Everyone can reply</p>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px',cursor:'pointer'}}>
            <div style={{marginLeft:'50px', color:'#00acee'}}>
                <IoImageOutline style={{marginRight:'10px', fontSize:'25px'}}/>
                <AiOutlineGif style={{marginRight:'10px', fontSize:'25px'}}/>
                <BiPoll style={{marginRight:'10px', fontSize:'25px'}}/>
                <GrEmoji style={{marginRight:'10px',fontSize:'25px'}}/>
                <MdOutlineEditCalendar style={{marginRight:'10px',fontSize:'25px'}}/>
            </div>
            <div>
                <Button variant="primary" style={{marginRight:'20px',borderRadius:'25px', width:'80px', marginBottom:'10px'}}>POST</Button>
            </div>
            </div>
        </div>
    )
}

export default Post
