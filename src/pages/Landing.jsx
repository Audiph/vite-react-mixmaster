import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
  const searchTerm = '';
  const res = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: res.data.drinks, searchTerm };
};

const Landing = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>Landing</div>;
};

export default Landing;
