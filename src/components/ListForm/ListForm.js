import styles from './ListForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { addNewList } from '../../redux/store';
import { useDispatch, } from 'react-redux';
import { useState } from 'react';

const ListForm = () => {

  const dispatch = useDispatch();

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addNewList ({ id: Math.random().toString(), 
        title: enteredTitle, 
        description: enteredDescription,
        } ));
    setEnteredTitle('');
    setEnteredDescription('');
  }

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <label>
        <span className={styles.list}>Title:</span>
        <TextInput type="text" value={enteredTitle} onChange={titleChangeHandler} />
      </label>
      <label>
        <span className={styles.list}>Description:</span>
        <TextInput type="text" value={enteredDescription} onChange={descriptionChangeHandler} />
        <Button>Add list</Button>
      </label>
    </form>
  )
};

export default ListForm;