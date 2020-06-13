import React from 'react';
import {
  useFilteredBreeds,
  useLoading,
  useSearchText,
} from '../../hooks/breedProvider';
import List from '../../components/List/List';
import styles from './BreedList.css';

const BreedList = () => {
  const filteredBreeds = useFilteredBreeds();
  const breedNodes = filteredBreeds?.map((breed) => {
    return <List key={breed} breed={breed} />;
  });

  const loading = useLoading();
  const searchText = useSearchText();

  if (loading && filteredBreeds!.length < 1)
    return (
      <section>
        <h2>loading...</h2>
      </section>
    );

  if (filteredBreeds!.length < 1 && !loading && searchText!.length > 1)
    return (
      <section>
        <h2>No breed matches found.</h2>
      </section>
    );

  return <section className={styles.BreedList}>{breedNodes}</section>;
};

export default BreedList;
