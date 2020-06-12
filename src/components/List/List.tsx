import React from 'react';

const List = ({ breed }: { breed: string }) => (
  <section>
    <input
      type="radio"
      value={breed}
      name="dogs"
      id={breed}
      />
    <label htmlFor={breed}>{breed}</label>
  </section>
);

export default List;