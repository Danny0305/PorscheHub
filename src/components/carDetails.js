import carImage1 from '../images/wp13838518-gt4-rs-718-iphone-wallpapers.jpg';
import carImage2 from '../images/porsche-911.jpeg';
import carImage3 from '../images/2024_porsche_taycan_sedan.jpg';
import carImage4 from '../images/2024_porsche_panamera.jpg';
import carImage5 from '../images/2023_porsche_macan.jpeg';
import carImage6 from '../images/2024_porsche_cayenne.jpeg';

const cars = [
  {
    id: 1,
    name: "718",
    types: ["Gasoline"],
    image: carImage1,
    description: "The mid-engine sports car for two made for pure driving pleasure.",
    price: "72,000",
  },
  {
    id: 2,
    name: "911",
    types: ["Gasoline"],
    image: carImage2,
    description: "The iconic, rear-engine sports car with exceptional performance.",
    price: "120,100",
  },
  {
    id: 3,
    name: "Taycan",
    types: ["Electric"],
    image: carImage3,
    description: "The pure expression of an electric sports car.",
    price: "99,400",
  },
  {
    id: 4,
    name: "Panamera",
    types: ["Gasoline", "Hybrid"],
    image: carImage4,
    description: "The sports car sedan for an active lifestyle with highest comfort.",
    price:"102,800",
  },
  {
    id: 5,
    name: "Macan",
    types: ["Electric", "Gasoline"],
    image: carImage5,
    description: "All-electric SUV with impressive performance.",
    price: "75,300",
  },
  {
    id: 6,
    name: "Cayenne",
    types: ["Hybrid", "Gasoline"],
    image: carImage6,
    description: "The versatile SUV with sports car performance and up to five seats.",
    price: "84,700",
  },
];

export default cars;