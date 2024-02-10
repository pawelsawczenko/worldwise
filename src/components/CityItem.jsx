import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { formatDate, flagemojiToPNG } from "../helpers";
import { useCities } from "../contexts/CitiesContext";

function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, id, position } = city;

  const handleDeleteButton = (e) => {
    e.preventDefault();
    deleteCity(id);
  };

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{flagemojiToPNG(emoji)}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn} onClick={handleDeleteButton}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
