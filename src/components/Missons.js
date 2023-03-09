import React from 'react-redux';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

const Missions = () => (
  <Container className="mt-3">
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th className="fs-4 text-warning">Mission</th>
          <th className="fs-4 text-warning">Description</th>
          <th className="fs-4 text-warning">Status</th>
          <th className=" text-dark">.</th>
        </tr>
      </thead>
    </Table>
  </Container>
);

export default Missions;
