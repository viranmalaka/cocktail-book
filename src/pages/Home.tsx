import React from 'react';
import { useDispatch } from 'react-redux';

import FlexBox from '../app/components/UI/FlexBox';
import RandomCocktailDetailsCard from '../app/components/Features/Cards/RandomCocktailDetailsCard';
import { clearAllRandomCocktailIds } from '../app/store/cocktail.store';
import Button from '../app/components/UI/Button/Button';
import { HOME_PAGE_RANDOM_ITEMS } from '../app/utils/consts';

const Home = () => {
  const dispatch = useDispatch();

  const handleRefresh = () => {
    dispatch(clearAllRandomCocktailIds());
  };

  return (
    <FlexBox direction="column">
      <FlexBox justifyContent="flex-end">
        <Button onClick={handleRefresh}>Refresh</Button>
      </FlexBox>
      <FlexBox justifyContent="center" direction="row" wrap>
        {Array(HOME_PAGE_RANDOM_ITEMS)
          .fill({})
          .map((a, index) => (
            <RandomCocktailDetailsCard key={index} index={`key-${index}`} />
          ))}
      </FlexBox>
    </FlexBox>
  );
};

export default Home;
