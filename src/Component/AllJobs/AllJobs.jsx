import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';

function AllJobs() {

    const navigate = useNavigate();

    const handleNewJob = () => {
        navigate("/createnewjob");
    };
  return (
    <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Subheading</div>
          Cras justo odio
        </div>
        <Button variant="warning" onClick={handleNewJob} >Edit</Button>
        <Button variant="danger">Delete</Button>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default AllJobs;