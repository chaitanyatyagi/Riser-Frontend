import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function BasicExample(props) {
    return (
        <Card style={{ width: '18rem', marginTop: "5px", height: "400px", width: "250px", overflowY: "scroll" }}>
            <Card.Img variant="top" src={props.elem.image} style={{ height: "62.5%", width: "100%" }} />
            <Card.Body>
                <Card.Title>{props.elem.title}</Card.Title>
            </Card.Body>
            <Card.Body>
                <Link to={`/product/${props.elem._id}`}><Button style={{ backgroundColor: "white", color: "green", border: "2px solid green", fontWeight: "700" }}>View Product</Button></Link>
            </Card.Body>
        </Card>
    );
}

export default BasicExample;