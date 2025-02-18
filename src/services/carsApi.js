const carList = [
  {
    id: 1,
    name: "Maruti Suzuki Swift 2023",
    model: 2023,
    transmission: "manual",
    fuelType: "petrol",
    features: ["spare tyre", "toolkit"],
    location: {
      lat: "12.966670",
      lng: "77.589507",
    },
    pricePerHour: 216,
    userRatings: {
      count: 53,
      avgRating: 3.72,
    },
    city: "Bangalore",
    reviews: [
      {
        user: {
          name: "Shahid",
        },
        review: "car is in very good maintenance",
        rating: 5,
        reviewDate: null,
      },
    ],
  },
  {
    id: 2,
    name: "Maruti Suzuki Swift 2020",
    model: 2020,
    transmission: "automatic",
    fuelType: "diesel",
    features: ["spare tyre", "toolkit"],
    location: {
      lat: "12.965413",
      lng: "77.594490",
    },
    pricePerHour: 306,
    userRatings: {
      count: 33,
      avgRating: 4,
    },
    city: "Bangalore",
    reviews: [
      {
        user: {
          name: "Shahid",
        },
        review: "car is in very good maintenance",
        rating: 5,
        reviewDate: null,
      },
    ],
  },
  {
    id: 3,
    name: "Maruti Suzuki Swift 2023",
    model: 2023,
    transmission: "manual",
    fuelType: "petrol",
    features: ["spare tyre", "toolkit"],
    location: {
      lat: "12.971101",
      lng: "77.585237",
    },
    pricePerHour: 1200,
    userRatings: {
      count: 33,
      avgRating: 4,
    },
    city: "Bangalore",
    reviews: [
      {
        user: {
          name: "Shahid",
        },
        review: "car is in very good maintenance",
        rating: 5,
        reviewDate: null,
      },
    ],
  },
  {
    id: 4,
    name: "Maruti Suzuki Swift 2019",
    model: 2019,
    transmission: "manual",
    fuelType: "electric",
    features: ["spare tyre", "toolkit"],
    location: {
      lat: "19.120115",
      lng: "72.920470",
    },
    pricePerHour: 258,
    userRatings: {
      count: 20,
      avgRating: 3.72,
    },
    city: "Mumbai",
    reviews: [
      {
        user: {
          name: "Shahid",
        },
        review: "car is in very good maintenance",
        rating: 5,
        reviewDate: null,
      },
    ],
  },
];
export function getCarList({ city, filters }) {
  // Local for now, will fetch from DB later
  let results = carList.filter((car) => car.city === city);
  if (filters) {
    results = results
      .filter((car) => car.pricePerHour <= filters.price)
      .filter((car) => car.model <= filters.model);
    // If none of fuel type selected, fetch all i.e. don't filter further
    // If atleast one is selected, filter
    if (filters.fuelType.length) {
      results = results.filter((car) =>
        filters.fuelType.includes(car.fuelType)
      );
    }
    // Transmission
    if (filters.transmission.length) {
      results = results.filter((car) =>
        filters.transmission.includes(car.transmission)
      );
    }
  }
  return results;
}
