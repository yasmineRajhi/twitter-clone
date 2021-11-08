import React from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import {FaTwitter} from 'react-icons/fa';
import {RiHome7Fill, RiFileList2Line} from 'react-icons/ri';
import {HiHashtag} from 'react-icons/hi';
import {IoIosNotificationsOutline} from 'react-icons/io';
import {FiMail} from 'react-icons/fi';
import {BsBookmark} from 'react-icons/bs';
import {CgProfile,CgMoreO} from 'react-icons/cg';
function LeftSideBar() {
    return (
        <Col>
            <Container fluid>
                <Row>
                    <Col style={{cursor:'pointer',marginTop:'20px'}}><FaTwitter  style={{fontSize:'40px',color:'#00acee',cursor:'pointer'}}/></Col>
                </Row>
                <Row style={{marginTop:'20px'}}>
                    <Col style={{cursor:'pointer'}}><RiHome7Fill style={{fontSize:'30px'}}/>   Home</Col>
                </Row>
                <Row style={{marginTop:'20px'}}>
                    <Col style={{cursor:'pointer'}}><HiHashtag  style={{fontSize:'30px'}}/>   explore</Col>
                </Row>
                <Row style={{marginTop:'20px'}}>
                    <Col style={{cursor:'pointer'}}><IoIosNotificationsOutline style={{fontSize:'30px'}}/>   Notifications</Col>
                </Row>
                <Row style={{marginTop:'20px'}}>
                    <Col style={{cursor:'pointer'}}><FiMail style={{fontSize:'30px'}}/>   Messages</Col>
                </Row>
                <Row style={{marginTop:'20px'}}>
                    <Col style={{cursor:'pointer'}}><BsBookmark style={{fontSize:'30px'}}/>   Bookmarks</Col>
                </Row>
                <Row style={{marginTop:'20px'}}>
                    <Col style={{cursor:'pointer'}}><RiFileList2Line style={{fontSize:'30px'}}/>   Lists</Col>
                </Row>
                <Row style={{marginTop:'20px'}}>
                    <Col style={{cursor:'pointer'}}><CgProfile style={{fontSize:'30px'}}/>   Profile</Col>
                </Row>
                <Row style={{marginTop:'20px'}}>
                    <Col style={{cursor:'pointer'}}><CgMoreO style={{fontSize:'30px'}}/>   More</Col>
                </Row>
                <Row style={{marginTop:'20px'}}>
                    <Col ><Button variant="primary" style={{cursor:'pointer', width:'270px', borderRadius:'25px'}}>tweet</Button></Col>
                </Row>
                <Row>
                    <Col style={{cursor:'pointer',marginTop:'25px', display:'flex'}}>
                        <CgProfile style={{fontSize:'30px'}}/> 
                        <div style={{marginLeft:'20px'}}>
                        <h1 style={{fontSize:'20px'}}>Profile</h1>
                        <p>@nom_utilisateur</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Col>
    )
}

export default LeftSideBar