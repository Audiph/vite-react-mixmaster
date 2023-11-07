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

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('search') || '';

    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));

    return { searchTerm };
  };

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));

  return (
    <Fragment>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </Fragment>
  );
};

export default Landing;
