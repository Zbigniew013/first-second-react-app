import styles from './ColumnForm.module.scss';
import { useState } from 'react';

const ColumnForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit({ title: enteredTitle });
    setEnteredTitle('');
  }

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
      <button>Add column</button>
    </form>
  )
};

export default ColumnForm;