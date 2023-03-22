import React from 'react';
import FlexBox from '../app/components/FlexBox';
import RandomCocktailDetailsCard from '../app/components/CocktailCards/RandomCocktailDetailsCard';
import { useDispatch } from 'react-redux';
import { clearAllRandomCocktailIds } from '../app/store/cocktail.store';
import Button from '../app/components/Button/Button';

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
        {Array(5)
          .fill({})
          .map((a, index) => (
            <RandomCocktailDetailsCard key={index} index={`key-${index}`} />
          ))}
      </FlexBox>
    </FlexBox>
  );
};

export default Home;
