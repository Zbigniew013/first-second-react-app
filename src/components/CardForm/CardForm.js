import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './CardForm.module.scss';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store';


const CardForm = (props) => {

  const [enteredCard, setEnteredCard] = useState('');

  const dispatch = useDispatch();
  const columnId = props.columnId;

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCard ({ id: Math.random().toString(), 
        title: enteredCard, 
        columnId } ));
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