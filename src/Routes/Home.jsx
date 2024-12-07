import { useDentStates } from '../Context/Context';
import Card from '../Components/Card';

const Home = () => {
  const { state, dispatch } = useDentStates();

  const addFav = (user) => {
    const isAlreadyFav = state.favs.some((fav) => fav.id === user.id);
    if (isAlreadyFav) {
      alert(`${user.name} is already in Favs.`);
    } else {
      dispatch({ type: "ADD_FAV", payload: user });
      alert(`${user.name} has been successfully added to Favs!`);
    }
  };

  return (
    <main>
      <div className="card-grid">
        {state.users.map((user) => (
          <Card
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            onAddFav={() => addFav(user)}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
