import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { reserveRocket } from '../redux/Rockets/rocketSlice';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  const { id } = rocket;
  const name = rocket.rocket_name;
  const { description } = rocket;
  const flickrImages = rocket.flickr_images[0];

  const reserveRocketHandler = () => {
    dispatch(reserveRocket(id));
  };

  return (
    <Card className="my-3  bg-dark text-white ">
      <Card.Img src={flickrImages} className="w-25" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {rocket.reserved && (
            <span className=" bg-success me-3 px-2">Reserved</span>
          )}
          {description}
        </Card.Text>
        {!rocket.reserved && (
          <Button
            variant="warning"
            type="button"
            onClick={reserveRocketHandler}
          >
            Reserve Rocket
          </Button>
        )}
        {rocket.reserved && (
          <Button
            variant="secondary"
            type="button"
            onClick={reserveRocketHandler}
          >
            Cancel Reservation
          </Button>
        )}
      </Card.Body>
    </Card>
    // <div className="rocket-container">
    //   <div className="rocket-details-container">
    //     <div className="img-container">
    //       <img src={flickrImages} alt="rocket-img" />
    //     </div>
    //     <div className="rocket-details">
    //       <span className="rocket-name">{name}</span>
    //       <p className="rocket-description">
    //         {rocket.reserved && (
    //           <span className="rocket-reserved">Reserved</span>
    //         )}
    //         {description}
    //       </p>
    //       {!rocket.reserved && (
    //         <Button
    //           variant="primary"
    //           type="button"
    //           onClick={reserveRocketHandler}
    //         >
    //           Reserve Rocket
    //         </Button>
    //       )}
    //       {rocket.reserved && (
    //         <Button
    //           variant="outline-secondary"
    //           type="button"
    //           onClick={reserveRocketHandler}
    //         >
    //           Cancel Reservation
    //         </Button>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Rocket;

Rocket.propTypes = {
  rocket: PropTypes.string.isRequired,
};
