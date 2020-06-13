import React from 'react';
import { useHandleDetail } from '../../hooks/breedProvider';
import './List.css';

const List = ({ breed }: { breed: string }) => {
  const handleDetail = useHandleDetail();

  return (
    <section className={'List'}>
      <input
        type="radio"
        value={breed}
        name="dogs"
        id={breed}
        onClick={() => handleDetail!(breed)}
      />
      <label htmlFor={breed}>{breed}</label>
    </section>
  );
};

export default List;
