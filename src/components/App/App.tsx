import React from 'react';
import { BreedProvider } from '../../hooks/breedProvider';
import Header from '../Header/Header';
import BreedList from '../../container/BreedList/BreedList';
import BreedDetail from '../../container/BreedDetail/BreedDetail';

const App = () => (
  <BreedProvider>
    <Header />
    <BreedList />
    <BreedDetail />
  </BreedProvider>
);

export default App;
