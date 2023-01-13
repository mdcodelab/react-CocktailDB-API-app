import React from 'react'
import Loading from '../components/Loading'
import {useGlobalContest, useGlobalContext} from "../context"

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const {setSearchTerm}=useGlobalContext();


  return (
    <div>single cocktail</div>
  )
}

export default SingleCocktail
