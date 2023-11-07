import axios from 'axios';
import React, { Fragment } from 'react';
import { useLoaderData } from 'react-router-dom';
import { CocktailList, SearchForm } from '../components';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search') || '';
  const res = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: res.data.drinks, searchTerm };
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();
  return (
    <Fragment>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </Fragment>
  );
};

export default Landing;
