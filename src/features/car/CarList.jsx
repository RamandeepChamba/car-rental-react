import CarListItem from "./CarListItem";

function CarList({ list, lat, lng }) {
  return (
    <div>
      {list.length === 0 && "No cars found :("}
      {list.length > 0 && (
        <ul>
          {list.map((car, i) => (
            <CarListItem key={`${car.id}-${i}`} car={car} lat={lat} lng={lng} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default CarList;
