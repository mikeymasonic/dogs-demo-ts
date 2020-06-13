import React, { useState } from 'react';
import styles from './Details.css';

const Details = ({ breed }: { breed: string }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className={styles.imageGrid}>
      <img src={breed} alt={breed} onLoad={() => setImageLoaded(true)} />
      {!imageLoaded && <h2>loading image...</h2>}
    </section>
  );
};

export default Details;
