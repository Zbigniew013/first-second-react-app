import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggleCardFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';

const Card = ({ cardName, cardId, isFavorite }) => {

  const dispatch = useDispatch();

  const toggleFavorite = (event) => {
    event.preventDefault();
    dispatch(toggleCardFavorite(cardId));
  };

  return (
    <li className={styles.card}>
      {cardName}
      <button onClick={toggleFavorite} className={clsx(isFavorite && styles.isFavorite)}>
        <span className='fa fa-star-o' />
      </button>
    </li>
  );
};
export default Card;