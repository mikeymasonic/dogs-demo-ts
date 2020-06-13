import React from 'react';
import { useBreedDetail, useLoading } from '../../hooks/breedProvider';
import Details from '../../components/Details/Details';

const BreedDetail = () => {
  const breed = useBreedDetail();
  const loading = useLoading();
  const breedDetailNodes = breed?.map((breeds) => {
    return <Details key={breeds} breed={breeds} />;
  });

  if (loading)
    return (
      <section>
        <h2>loading...</h2>
      </section>
    );

  return <section>{breedDetailNodes}</section>;
};

export default BreedDetail;
