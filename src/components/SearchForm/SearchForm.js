import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {

  const [enteredSearch, setEnteredSearch] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateSearchString(enteredSearch));
    setEnteredSearch('');
  }

  const searchChangeHandler = (event) => {
    setEnteredSearch(event.target.value);
    console.log(event.target.value);
  };

  return (
      <form className={styles.searchForm} onSubmit={handleSubmit} >
          <TextInput 
            placeholder='Search..' 
            type='text' 
            value={enteredSearch} 
            onChange={searchChangeHandler} />
          <Button> 
            <span className="fa fa-search" /> 
          </Button>
      </form>
  );
};

export default SearchForm;