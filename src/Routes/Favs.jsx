import styles from '../Styles/Favs.module.css';
import { useDentStates } from '../Context/Context';
import Card from '../Components/Card';

const Favs = () => {
  const { state, dispatch } = useDentStates();

  const removeFav = (id) => {
    dispatch({ type: "REMOVE_FAV", payload: id });
  };

  return (
    <div className={styles.container}>
      <h1>Favourite Dentists</h1>
      <div className="card-grid">
        {state.favs.length > 0 ? (
          state.favs.map(fav => (
            <Card
              key={fav.id}
              id={fav.id}
              name={fav.name}
              username={fav.username}
              onRemove={() => removeFav(fav.id)}
            />
          ))
        ) : (
          <p>There are no dentists in favourites.</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
