import React from 'react'
import { Container,Row } from 'react-bootstrap'
import {FaTwitter} from 'react-icons/fa'
function HeaderLog() {
    return (
        <Container>
            <Row className='justify-content-md-center'>
                <FaTwitter style={{fontSize:'70px'}}/>
                <h1>Log in Twitter</h1>
            </Row>
        </Container>
    )
}

export default HeaderLog
