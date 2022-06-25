import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './CardForm.module.scss';

const CardForm = (props) => {

  const [enteredCard, setEnteredCard] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.action({ title: enteredCard }, props.columnId);
    setEnteredCard('');
  }

  const cardChangeHandler = (event) => {
    setEnteredCard(event.target.value);
    console.log(event.target.value);
  }

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput type='text' value={enteredCard} onChange={cardChangeHandler} />
      <Button>Add card</Button>
    </form>
  )

};

export default CardForm;