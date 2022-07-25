import styles from './Card.module.scss';
import clsx from 'clsx';
import { removeCard, toggleCardFavorite } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';

const Card = ({ cardName, cardId, isFavorite }) => {

  const dispatch = useDispatch();

  const toggleFavorite = (event) => {
    event.preventDefault();
    dispatch(toggleCardFavorite(cardId));
  };

  const trash = (event) => {
    event.preventDefault();
    dispatch(removeCard(cardId));
  };

  return (
    <li className={styles.card}>
      {cardName}
      <button onClick={toggleFavorite} className={clsx(isFavorite && styles.isFavorite)}>
        <span className='fa fa-star-o' />
      </button>
      <button onClick={trash} className={styles.trash} >
        <span className='fa fa-trash' />
      </button>
    </li>
  );
};
export default Card;