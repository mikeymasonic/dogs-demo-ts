import React from 'react';
import { useHandleChange, useSearchText } from '../../hooks/breedProvider';
import styles from './Header.css';

const Header = () => {
  const searchText = useSearchText();
  const handleChange = useHandleChange();
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <section className={styles.Header}>
      <h1 onClick={refreshPage}>Dogs!</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={handleChange}
      />
    </section>
  );
};

export default Header;
