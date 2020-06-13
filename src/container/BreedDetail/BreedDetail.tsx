import React from 'react';
import { useBreedDetail, useLoading } from '../../hooks/breedProvider';
import Details from '../../components/Details/Details';
import styles from './BreedDetail.css';

const BreedDetail = () => {
  const breed = useBreedDetail();
  const loading = useLoading();
  const breedDetailNodes = breed?.map((breeds) => {
    return <Details key={breeds} breed={breeds} />;
  });

  if (loading)
    return (
      <section className={styles.BreedDetail}>
        <h2>loading...</h2>
      </section>
    );

  return <section>{breedDetailNodes}</section>;
};

export default BreedDetail;
