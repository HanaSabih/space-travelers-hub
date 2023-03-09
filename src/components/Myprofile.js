import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

const MyProfile = () => {
  const missionsList = useSelector((state) => state.missions.list);
  const reservedMissions = missionsList.filter((mission) => mission.reserved);
  return (
    <Container className="mt-3 d-flex gap-5">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr className="fs-3 text-warning">
            <th>My Missions</th>
          </tr>
        </thead>
        <tbody>
          {reservedMissions.map((mission) => (
            <tr key={mission.id}>
              <td className="my-profile-td fs-5">{mission.mission_name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MyProfile;
