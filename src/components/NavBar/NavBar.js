import styles from './NavBar.module.scss';
import Container from '../Container/Container';

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <span className={styles.icon + ' fa fa-tasks'}></span>
      <nav>
        <Container>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/favorite">Favorite</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </Container>
      </nav>
    </div>
  );
};

export default NavBar;