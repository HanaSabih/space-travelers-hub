import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

const MyProfile = () => {
  const rocketsList = useSelector((state) => state.rockets);
  const myReserveRockets = rocketsList.filter((rockets) => rockets.reserved);

  return (
    <Container className="mt-3 d-flex gap-5">
      <Table
        striped
        bordered
        hover
        variant="dark"
        className=" border border-warning"
      >
        <thead>
          <tr>
            <th className="fs-3 text-warning">My Rockets</th>
          </tr>
        </thead>
        <tbody>
          {myReserveRockets.map((rocket) => (
            <tr key={rocket.id}>
              <td className="my-profile-rocket-td fs-5">
                {rocket.rocket_name}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MyProfile;
