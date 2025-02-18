import { useParams, useSearchParams } from "react-router-dom";
import CarList from "../features/car/CarList";
import { useEffect, useState } from "react";
import { getCarList } from "../services/carsApi";
import Filters from "../features/filters/Filters";

function SearchResults() {
  const [carList, setCarList] = useState([]);
  const { city } = useParams();
  const capCity = city.charAt(0).toUpperCase() + city.slice(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  useEffect(
    function () {
      // Fetch cars based on data above
      const results = getCarList({ city: capCity });
      setCarList(results);
    },
    [capCity]
  );
  function handleFilters(filters) {
    // console.log(filters);
    // Fetch cars with filters
    const results = getCarList({ city: capCity, filters });
    // Change state / Display new results
    setCarList(results);
  }
  return (
    <div>
      {/* Filters */}
      <div>
        <Filters onChange={handleFilters} />
      </div>
      {/* Car List */}
      <div>
        <h1>Search Results</h1>
        <CarList list={carList} lat={lat} lng={lng} />
      </div>
    </div>
  );
}

export default SearchResults;
