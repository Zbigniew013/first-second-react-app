import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';
import styles from './Favorite.module.scss';

const Favorite = () => {

  const cards = useSelector((state) => getFavoriteCards(state));

  return (
    <div>
      <PageTitle >
        <h3>Favorite</h3>
      </PageTitle>
      <section className={styles.favorite}>
        <ul className={styles.cards}>
          {cards.map((card) => (
            <Card
              key={card.id}
              cardName={card.title}
              cardId={card.id}
              isFavorite={card.isFavorite}
            />
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Favorite;