import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { BsFillEyeFill, BsFillStarFill } from "react-icons/bs";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";



const ref = React.createRef();
function App() {
  return (
    <div>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);





const CourseDetails = () => {

  const course = useLoaderData();
  const {title, image_url, category_id, details, total_view, rating, author} = course;


  return (
    <div>
      <h1 className='fs-1 fw-semibold mb-5 text-info text-center'>Course Details</h1>
      <Alert className='shadow-lg' variant={'info'}>
      <Card>
      <Card.Header>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <div className='d-flex justify-content-center'><Button className='ms-5' onClick={toPdf}>Download PDF</Button></div>}
      </Pdf>
      </Card.Header>
      <Card.Body ref={ref}>
      <Card.Img variant="top" src={image_url} />
        <Card.Title className='fs-1 mt-3 text-center'>{title}</Card.Title>
        <Card.Text>
          <p className='text-start fw-semibold'><span className='fs-5 fw-semibold'>Course Details: </span>{details}</p>
        </Card.Text>
        <div className='d-flex mt-5 mb-3'>
        <Image style={{height: '70px'}} roundedCircle src={author.img}></Image>
        <div className='ms-2'>
        <h4  className='mb-0'><small>Creator:</small> {author.name}</h4>
        <p>Published On: {author.published_date}</p>
        </div>
        </div>
      </Card.Body>
      <div className='d-flex justify-content-center mb-5'>
        <Link to={`/checkout/${category_id}`}><Button className='fs-5' variant="primary">Get Premium Access</Button></Link>
        </div>
      <Card.Footer className="fs-5 d-flex justify-content-around">
      <div><BsFillEyeFill></BsFillEyeFill> {total_view}</div>
      <div><BsFillStarFill className='text-warning'></BsFillStarFill> {rating.number}</div>
      <div><small>Comment: </small>{rating.badge}</div>
        </Card.Footer>
    </Card>
      </Alert>
    </div>
  );
};

export default CourseDetails;