import { useEffect, useState } from "react";
import InputRange from "../../ui/InputRange";

function Filters({ onChange }) {
  const [price, setPrice] = useState("1800");
  const [model, setModel] = useState(() => new Date().getFullYear());
  // fuel type
  const [fuelType, setFuelType] = useState([]);
  // transmission
  const [transmission, setTransmission] = useState([]);
  const currYear = new Date().getFullYear();

  useEffect(
    function () {
      const filters = {
        price,
        model,
        fuelType,
        transmission,
      };
      onChange(filters);
    },
    [price, model, fuelType, transmission]
  );
  function handleFuelType(type) {
    if (fuelType.includes(type)) {
      // remove
      setFuelType((fuel) => fuel.filter((f) => f !== type));
    } else {
      // add
      setFuelType((fuel) => [...fuel, type]);
    }
  }
  function handleTransmission(type) {
    if (transmission.includes(type)) {
      // remove
      setTransmission((trans) => trans.filter((t) => t !== type));
    } else {
      // add
      setTransmission((trans) => [...trans, type]);
    }
  }
  return (
    <div>
      {/* Price */}
      <span>Price: {price}</span>
      <InputRange
        name="price"
        id="price"
        min="0"
        max="1800"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      {/* Model Year */}
      <span>Model Year: {model}</span>
      <InputRange
        name="model"
        id="model"
        min="2000"
        max={currYear}
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />

      {/* Car Details */}
      <strong>Car Details</strong>
      {/* - Type */}
      <div>
        <span>Filter By Car Type</span>
      </div>
      {/* - Transmission */}
      <div>
        <span>Filter By Transmission</span>
        <br />
        <input
          type="checkbox"
          name="manual"
          id="manual"
          checked={transmission.includes("manual")}
          onChange={() => handleTransmission("manual")}
        />
        <label htmlFor="manual">Manual</label>
        <input
          type="checkbox"
          name="automatic"
          id="automatic"
          checked={transmission.includes("automatic")}
          onChange={() => handleTransmission("automatic")}
        />
        <label htmlFor="automatic">Automatic</label>
      </div>
      {/* - Fuel Type */}
      <div>
        <span>Filter By Fuel Type</span>
        <br />
        <input
          type="checkbox"
          name="Diesel"
          id="Diesel"
          checked={fuelType.includes("diesel")}
          onChange={() => handleFuelType("diesel")}
        />
        <label htmlFor="Diesel">Diesel</label>
        <input
          type="checkbox"
          name="Petrol"
          id="Petrol"
          checked={fuelType.includes("petrol")}
          onChange={() => handleFuelType("petrol")}
        />
        <label htmlFor="Petrol">Petrol</label>
        <input
          type="checkbox"
          name="Electric"
          id="Electric"
          checked={fuelType.includes("electric")}
          onChange={() => handleFuelType("electric")}
        />
        <label htmlFor="Electric">Electric</label>
      </div>
    </div>
  );
}

export default Filters;
