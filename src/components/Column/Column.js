import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/cardsRedux';

const Column = props => {

  const cards = useSelector(state => 
    getFilteredCards(state, props.id));
      
  // const cards = useSelector(state => 
  //   state.cards.filter(card => 
  //     card.columnId === props.id && card.title.toString().toLowerCase().includes(searchString.toString().toLowerCase())));

  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon} />
        {props.title}
      </h2>
      <ul className={styles.cards}>
        {cards.map(card => 
        <Card 
        key={card.id}
        cardName={card.title}
        cardId={card.id}
        isFavorite={card.isFavorite}
        />)}
      </ul>
      <CardForm columnId={props.id} action={props.action} />
    </article>
  )
};

export default Column;