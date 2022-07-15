import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';

const ColumnForm = () => {

  const dispatch = useDispatch();

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredIcon, setEnteredIcon] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addColumn ({ id: Math.random().toString(), 
        title: enteredTitle, 
        icon: enteredIcon } ));
    setEnteredTitle('');
    setEnteredIcon('');
  }

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(event.target.value);
  };

  const iconChangeHandler = (event) => {
    setEnteredIcon(event.target.value);
  };

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <label>
        <span className={styles.column}>Title:</span>
        <TextInput type="text" value={enteredTitle} onChange={titleChangeHandler} />
      </label>
      <label>
        <span className={styles.column}>Icon:</span>
        <TextInput type="text" value={enteredIcon} onChange={iconChangeHandler} />
        <Button>Add column</Button>
      </label>
    </form>
  )
};

export default ColumnForm;