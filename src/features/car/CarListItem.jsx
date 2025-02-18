import { calculateDistance } from "../../utils/helpers";

function CarListItem({ car, lat, lng }) {
  return (
    <div>
      <h3>{car.name}</h3>
      <p>Rs. {car.pricePerHour} / hr</p>
      <div>
        <span>{car.transmission}</span>
        <span>{car.fuelType}</span>
      </div>
      <p>
        {calculateDistance(
          lat,
          lng,
          car.location.lat,
          car.location.lng
        ).toFixed(2)}{" "}
        km away
      </p>
    </div>
  );
}

export default CarListItem;
