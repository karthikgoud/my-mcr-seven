import { useParams } from "react-router";
import styles from "./Destination.module.css";
import { useData } from "../../context/DataContext";

const Destination = () => {
  const { destinationId } = useParams();

  const {
    data: { continents },
  } = useData();

  console.log(destinationId);

  // const selectedContinent = continents.find(
  //   (continent) => continent.id == countryId
  // );
  return <div>Destination</div>;
};

export default Destination;
