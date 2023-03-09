import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

const MyProfile = () => (
  <Container className="mt-3 d-flex gap-5">
    <Table striped bordered hover variant="dark">
      <thead>
        <tr className="fs-3 text-warning">
          <th>My Missions</th>
        </tr>
      </thead>
    </Table>
  </Container>
);

export default MyProfile;
