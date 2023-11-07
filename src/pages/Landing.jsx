import axios from 'axios';
import React, { Fragment } from 'react';
import { useLoaderData } from 'react-router-dom';
import { CocktailList, SearchForm } from '../components';
import { useQuery } from '@tanstack/react-query';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const res = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return res.data.drinks;
    },
  };
};

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search') || '';

  return { searchTerm };
};

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks, isLoading } = useQuery(
    searchCocktailsQuery(searchTerm)
  );

  if (isLoading) return <h4>Loading...</h4>;

  return (
    <Fragment>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </Fragment>
  );
};

export default Landing;
