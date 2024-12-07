import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import style from '../Styles/Card.module.css';

const Card = ({ name, username, id, onAddFav, onRemove }) => {
  return (
    <div className={style.card}>
      <Link to={`/detail/${id}`}>
        <div>
          <img src="/images/doctor.jpg" alt="imagen doctor" />
        </div>
        <div className={style.info}>
          <h4>{name}</h4>
          <p>{username}</p>
        </div>
      </Link>
      {onRemove ? (
        <button onClick={onRemove} className={style.removeButton}>
          Remove
        </button>
      ) : (
        <button onClick={onAddFav} className={style.favButton}>
          <FaHeart/>
        </button>
      )}
    </div>
  );
};

export default Card;
