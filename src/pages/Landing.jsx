import axios from 'axios';
import React, { Fragment } from 'react';
import { useLoaderData } from 'react-router-dom';
import { CocktailList } from '../components';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
  const searchTerm = '';
  const res = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: res.data.drinks, searchTerm };
};

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();
  return (
    <Fragment>
      <CocktailList drinks={drinks} />
    </Fragment>
  );
};

export default Landing;
