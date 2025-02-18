import { useEffect, useState } from "react";
import { getLocation } from "../../services/geolocationApi";
import { useNavigate } from "react-router-dom";

function SearchCarForm() {
  const [city, setCity] = useState("bangalore");
  const [tripStartDate, setTripStartDate] = useState("");
  const [tripEndDate, setTripEndDate] = useState("");
  const [delivery, setDelivery] = useState(false);
  const [position, setPosition] = useState({});

  const navigate = useNavigate();

  useEffect(
    function () {
      if (!city) return;
      if (city == "bangalore") {
        setPosition({
          lat: "12.970486",
          lng: "77.594309",
        });
      } else if (city == "mumbai") {
        setPosition({
          lat: "19.066259",
          lng: "72.876868",
        });
      }
    },
    [city]
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !city ||
      !position.lat ||
      !position.lng ||
      !tripStartDate ||
      !tripEndDate
    ) {
      return;
    }
    // Navigate to search results page
    navigate(
      `/car-rental-react/${city}/search?lat=${position.lat}&lng=${position.lng}&delivery=${delivery}&tripStartDate=${tripStartDate}&tripEndDate=${tripEndDate}`
    );
  }

  async function handleGeoLocation() {
    const result = await getLocation();
    if (result.lat) {
      setPosition(result);
    } else {
      // Error occured
      console.error(result);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Self-drive car rentals in </h3>
      <select name="city" id="city" onChange={(e) => setCity(e.target.value)}>
        <option value="bangalore">Bangalore</option>
        <option value="mumbai">Mumbai</option>
      </select>
      <input
        type="text"
        placeholder="lat"
        value={position.lat ?? ""}
        disabled
      />
      <input
        type="text"
        placeholder="lng"
        value={position.lng ?? ""}
        disabled
      />
      {/* <button type="button" onClick={handleGeoLocation}>
        Get location
      </button> */}
      <input
        type="date"
        name="start"
        required
        id="trip-starts"
        value={tripStartDate}
        onChange={(e) => setTripStartDate(e.target.value)}
      />
      <input
        type="date"
        name="end"
        required
        id="trip-ends"
        value={tripEndDate}
        onChange={(e) => setTripEndDate(e.target.value)}
      />
      <input
        type="checkbox"
        name="delivery"
        id="delivery"
        checked={delivery}
        onChange={() => setDelivery((delivery) => !delivery)}
      />
      <label htmlFor="delivery">Delivery & Pick-up, from anywhere</label>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchCarForm;
