import React, { createContext, useState, useContext, useEffect } from 'react';
import { fetchList, fetchDetail } from '../services/dogsAPI';

export type BreedContext = {
  breeds: Array<string>;
  filteredBreeds: Array<string>;
  searchText: string;
  breedDetail: Array<string>;
  loading: boolean;
  handleChange: (a: { target: any }) => void;
  handleDetail: (breed: string) => void;
};

const BreedContext = createContext<BreedContext | null>(null);

export const BreedProvider = ({ children }: { children: React.ReactNode }) => {
  const [breeds, setBreeds] = useState<string[]>([]);
  const [filteredBreeds, setFilteredBreeds] = useState<string[]>([]);
  const [searchText, setSearchText] = useState('');
  const [breedDetail, setBreedDetail] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchList()
      .then((apiBreeds) => setBreeds(apiBreeds))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setFilteredBreeds(breeds.slice(0, 12));
  }, [breeds]);

  useEffect(() => {
    const searchResults = breeds.filter((breed) => breed.includes(searchText));
    setLoading(true);
    setFilteredBreeds(searchResults.slice(0, 12));
    setLoading(false);
  }, [breeds, searchText]);

  const handleChange = ({ target }: { target: any }) => {
    setSearchText(target.value);
  };

  const handleDetail = (breed: string) => {
    setLoading(true);
    fetchDetail(breed)
      .then((apiBreeds) => setBreedDetail(apiBreeds))
      .finally(() => setLoading(false));
  };

  return (
    <BreedContext.Provider
      value={{
        breeds,
        filteredBreeds,
        searchText,
        breedDetail,
        handleChange,
        handleDetail,
        loading,
      }}
    >
      {children}
    </BreedContext.Provider>
  );
};

export const useBreeds = () => {
  return useContext(BreedContext)?.breeds;
};

export const useFilteredBreeds = () => {
  return useContext(BreedContext)?.filteredBreeds;
};

export const useSearchText = () => {
  return useContext(BreedContext)?.searchText;
};

export const useBreedDetail = () => {
  return useContext(BreedContext)?.breedDetail;
};

export const useHandleChange = () => {
  return useContext(BreedContext)?.handleChange;
};

export const useHandleDetail = () => {
  return useContext(BreedContext)?.handleDetail;
};

export const useLoading = () => {
  return useContext(BreedContext)?.loading;
};

export default BreedContext;
