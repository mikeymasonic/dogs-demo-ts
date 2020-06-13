import React, { useState } from 'react';
import './Details.css';

const Details = ({ breed }: { breed: string }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className={'imageGrid'}>
      <img src={breed} alt={breed} onLoad={() => setImageLoaded(true)} />
      {!imageLoaded && <h2>loading image...</h2>}
    </section>
  );
};

export default Details;
