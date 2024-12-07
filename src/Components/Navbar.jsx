import styles from '../Styles/Navbar.module.css';
import { Link } from 'react-router-dom';
import { useDentStates } from '../Context/Context';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const { state, dispatch } = useDentStates();

  return (
    <nav>
      <h2>DH Odonto</h2>
      <div className={styles.rightNav}>
        <Link to="/" className={styles.navLinks}>Home</Link>
        <Link to="/contact" className={styles.navLinks}>Contact</Link>
        <Link to="/favs" className={styles.navLinks}>Favs</Link>
        <button
          className={styles.changeIcon}
          onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
          aria-label="Toggle theme"
        >
          {state.theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
