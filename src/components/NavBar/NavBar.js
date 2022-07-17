import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <span className={styles.icon + ' fa fa-tasks'}></span>
      <nav>
        <Container>
          <ul>
            <li>
              <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink>
            </li>
          </ul>
        </Container>
      </nav>
    </div>
  );
};

export default NavBar;
