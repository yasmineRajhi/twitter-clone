import {Container, Row, Col} from 'react-bootstrap';
import RightSideBar from './components/RightSideBar';
import LeftSideBar from './components/LeftSideBar';
import NewsFeed from './components/NewsFeed';
function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col><LeftSideBar/></Col>
          <Col><NewsFeed/></Col>
          <Col><RightSideBar/></Col>
        </Row>
      </Container>
        
    </div>
  );
}

export default App;
