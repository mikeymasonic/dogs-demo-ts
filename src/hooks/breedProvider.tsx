import React, { createContext, useState, useContext, useEffect } from 'react';
import { fetchList, fetchDetail } from '../services/dogsAPI';

export interface BreedContextInterface {
  breeds: Array<string>,
  filteredBreeds: Array<string>,
  searchText: string,
  breedDetail: Array<string>,
  loading: boolean
}

const BreedContext = createContext<BreedContextInterface | null>(null);

export const BreedProvider = ({ children }: { children: React.ReactNode }) => {
  const [breeds, setBreeds] = useState([]);
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [breedDetail, setBreedDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchList()
      .then(apiBreeds => setBreeds(apiBreeds))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setFilteredBreeds(breeds.slice(0, 12));
  }, [breeds]);

  useEffect(() => {
    const searchResults = breeds.filter(breed => breed.includes(searchText));
    setLoading(true);
    setFilteredBreeds(searchResults.slice(0, 12));
    setLoading(false);
  }, [breeds, searchText]);

  const handleChange = ({ target }) => {
    setSearchText(target.value);
  };

  const handleDetail = (breeds) => {
    setLoading(true);
    fetchDetail(breeds)
      .then(apiBreeds => setBreedDetail(apiBreeds))
      .finally(() => setLoading(false));
  };

  


  
  





}



