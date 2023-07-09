import { useParams } from "react-router";
import { useData } from "../../context/DataContext";
import { NavLink } from "react-router-dom";
import styles from "./Country.module.css";

const Country = () => {
  const { country } = useParams();

  const {
    data: { continents },
  } = useData();

  const selectedContinent = continents.find(
    (continent) => continent.id == country
  );

  console.log(country);

  return (
    <div className={styles.continentCont}>
      {selectedContinent?.countries?.map((country) => (
        <NavLink to={`/country/${country.id}`}>
          <div
            className={styles.continentCard}
            key={country.id}
            style={{ backgroundImage: `url(${country.image})` }}
          >
            <div>{country.name}</div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Country;
