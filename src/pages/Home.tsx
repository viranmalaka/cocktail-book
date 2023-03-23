import React from 'react';
import FlexBox from '../app/components/FlexBox';
import RandomCocktailDetailsCard from '../app/components/CocktailCards/RandomCocktailDetailsCard';
import { useDispatch } from 'react-redux';
import { clearAllRandomCocktailIds } from '../app/store/cocktail.store';
import Button from '../app/components/Button/Button';
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
