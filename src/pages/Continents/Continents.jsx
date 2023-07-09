import { NavLink } from "react-router-dom";
import { useData } from "../../context/DataContext";
import styles from "./Continents.module.css";

const Continents = () => {
  const {
    data: { continents },
  } = useData();

  console.log(continents);
  return (
    <div className={styles.continentCont}>
      {continents.map((continent) => (
        <NavLink to={`/continent/${continent.id}`}>
          <div
            className={styles.continentCard}
            key={continent.id}
            style={{ backgroundImage: `url(${continent.image})` }}
          >
            <div>{continent.name}</div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Continents;
